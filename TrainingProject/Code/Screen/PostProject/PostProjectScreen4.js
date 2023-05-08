import React, { useEffect, useRef, useState } from 'react';
import {
  Button,
  View,
  Text,
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  TextInput,
} from 'react-native';
import { toggleCustomPicker } from '../../Redux/Picker/Action';
import { postProjectAction, getAllProjectsForConflictAction, assignAction, getConflictAction, setConflictAction, conflictAction, clearConflicts } from '../../Redux/PostProject/PostProjectAction';
import { Picker } from '@react-native-picker/picker';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CustomPickerComp from '../../Components/CustomPickerComp';
import { connect } from 'react-redux'


function PostProjectScene4({
  navigation,
  route,
  isFromMenu,
  postProjectAction,
  toggleCustomPicker,
  getAllProjectsForConflictAction,
  getConflictAction,
  setConflictAction,
  conflictAction,
  clearConflicts,
  assignAction,

  access_token,
  client,
  clientToken,
  userEmail,
  applicationPeriod,
  postProjectDetail,
  conflicts,
  getConflicts,
  getAllProjectsForConflicts,
  setConflicts,
  manageConflicts,
  showingCustomPicker

}) {
  let defaultRows = [{
    title: 'Use Prior Conflicts',
    index: 0,
    apiKey: '',
    apiValue: '',
    isDisabled: false,
    inputRef: null,
    placeholder: 'USE PRIOR CONFLICTS',
    dropdown: true,
    value: null
  }, {
    title: null,
    apiKey: '',
    apiValue: '',
    index: 1,
    isDisabled: false,
    inputRef: null,
    placeholder: 'ID:',
    dropdown: false,
    value: null,
  }, {
    title: 'Client',
    index: 2,
    apiKey: '',
    apiValue: '',
    isDisabled: false,
    inputRef: null,
    placeholder: '',
    dropdown: false,
    value: null,
    message: 'Name cannot be blank.'
  }];
  const { hasPayment } = route.params ?? false;
  const { forAssign } = route.params ?? false;
  const { paymentOnly } = route.params ?? false;
  const { projectID } = route.params ?? -1;
  const { projectAssignmentID } = route.params ?? -1;
  const { projectName } = route.params ?? ''
  const { projectPrice } = route.params ?? ''
  const [noConflict, setNoConflict] = useState(false)
  const [payment, setPayment] = useState(null);
  const [pickerOptions, setPickerOptions] = useState(null);
  const [selectedProjectForConflict, setselectedProjectForConflict] = useState(null);
  const [rowData, setRowData] = useState(defaultRows);
  const [refreshCount, setRefreshCount] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [inputText, setInputText] = useState(null);

  const defaultConflictOptions = [
    { title: 'Additional Client', value: 'Additional Client' },
    { title: 'Adverse / Interested Party', value: 'Adverse / Interested Party' },
    { title: 'Witness', value: 'Witness' },
    { title: 'Other', value: 'Other' },
  ]
  const conflictRowDefault = (index, prefilledData) => {
    return [
      {
        title: null,
        index: index,
        isDisabled: false,
        editable: true,
        inputRef: null,
        placeholder: '',
        dropdown: true,
        id: prefilledData?.id,
        apiKey: 'project[project_conflicts_attributes][{{index}}][conflict_type]',
        value: prefilledData?.type
      },
      {
        title: null,
        index: index + 1,
        isDisabled: false,
        editable: true,
        inputRef: null,
        placeholder: '',
        dropdown: false,
        id: prefilledData?.id,
        value: prefilledData?.value,
        apiKey: 'project[project_conflicts_attributes][{{index}}][name]'
      }]
  }

  useEffect(() => {
    toggleCustomPicker(false, true)
    navigation.setOptions({
      headerLeft: () => (
        <View style={styles.navigationContainer}>
          {renderLeftButton()}
          <Text style={styles.navigationTitle}>Conflict Checklist</Text>
        </View>
      ),
    });
  }, []);

  useEffect(() => {
    clearConflicts();
    resetData();
    getAllProjectsForConflictAction(userEmail, access_token, client)
  }, []);

  useEffect(() => {
    if (!!getConflicts) {
      const row = adaptData(getConflicts?.target_project_conflicts)
      const row2 = adaptSelectedProject(getConflicts?.target_project, row)
      !!row2 && setRowData(row2) && setRefreshCount(refreshCount++)
    }
    else if (!!conflicts?.project_conflicts && conflicts?.project_conflicts.length > 0) {
      const row = adaptData(conflicts?.project_conflicts)
      !!row && setRowData(row)
    }
  }, [getConflicts, conflicts])


  useEffect(() => {
    if (!!selectedProjectForConflict?.value) {
      getConflictAction(userEmail, access_token, client, postProjectDetail?.id ?? '', selectedProjectForConflict.value)
    }
  }, [selectedProjectForConflict])


  const adaptData = (prefilledConflicts) => {
    var row = rowData;
    if (!!prefilledConflicts && (rowData.length - 3) < (prefilledConflicts.length - 1) * 2) {
      prefilledConflicts.map(item => {
        if (item?.conflict_type == 'Client') {
          row = updateRowValueStrings(2, item?.name ?? '', [item?.name ?? ''], false, row)
        }
        else {
          const arr = [...row, ...conflictRowDefault(row.length, { type: item?.conflict_type, value: item?.name, id: item?.id })];
          row = arr
          // setRowData(arr)
        }
      })
      return row
    }
    return row
  }

  const adaptSelectedProject = (project, row) => {
    if (!!project) {
      let row1 = updateRowValueStrings(0, project?.name ?? '', [project?.name ?? ''], false, row)
      let row2 = updateRowValueStrings(1, 'ID: ' + (project?.id ?? '') + '', [(project?.id ?? '') + ''], false, row1)
      return row2
    }
    else {
      return row;
    }
  }

  const resetData = () => {
    setInputText('')
    setRowData(defaultRows)
  }

  const renderLeftButton = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          clearConflicts();
          !!showingCustomPicker && toggleCustomPicker(false, true)
          navigation.goBack();
        }}
        style={{ marginLeft: 20 }}>
        <Image
          source={
            !!isFromMenu == true
              ? require('../../Assests/Images/hamburger.png')
              : require('../../Assests/Images/back2.png')
          }
          style={styles.backIcon}></Image>
      </TouchableOpacity>
    );
  };

  const renderCheckboxRow = (isSelected, text, onPress) => {
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          marginHorizontal: 20,
          marginTop: 20,
          paddingBottom: 5
        }}
        onPress={() => {
          onPress();
        }}>
        <Image
          style={styles.checkBox}
          source={
            isSelected
              ? require('../../Assests/Images/CheckboxTrue.png')
              : require('../../Assests/Images/CheckboxFalse.png')
          }
        />
        <Text style={styles.checkboxText}>{text}</Text>
      </TouchableOpacity>
    );
  };

  const renderConflictContainer = () => {
    return (
      <View style={{ ...styles.card }}>
        {renderCheckboxRow(noConflict, ' Check here if there are no conflicts.', () => {
          setNoConflict(!noConflict)
        })}
        {rowData.slice(0, 3).map((item) => {
          return renderTextfieldRow(item)
        })}
        {rowData.slice(3).map(item => {
          return (<View style={{ marginTop: !!item.dropdown ? 10 : 0 }}>
            {renderTextfieldRow(item)}
          </View>);
        })}
        <TouchableOpacity style={{ alignSelf: 'center', backgroundColor: noConflict ? '#C4C4C4' : '#F7F7F7', borderColor: '#5E5E5E', borderWidth: 1, marginTop: 20 }} onPress={() => {

          if (rowData.length < 10 && noConflict == false) {
            const arr = [...rowData, ...conflictRowDefault(rowData.length)];
            setRowData(arr)
          }
        }} ><Text style={{ fontSize: 10, fontWeight: "600", color: '#5E5E5E', paddingHorizontal: 10, paddingVertical: 5 }}>Add Additional Conflict or Party</Text></TouchableOpacity>
        <TouchableOpacity
          style={{ ...styles.nextContainer, backgroundColor: '#E5E5E5', marginTop: 10 }} onPress={() => {
            noConflict == false && resetData()
          }}>
          <Text style={{ fontSize: 16, fontWeight: '400', color: '#5E5E5E', textAlign: 'center' }}>CLEAR</Text>
        </TouchableOpacity>
      </View>
    )
  }

  const updateRowValueStrings = (index, string, array, needRefresh, row) => {
    if (!!row && index >= 0 && index < row.length) {
      row[index].value = string;
      row[index].selected = array;
      const array2 = row;
      needRefresh && setRowData(array2);
      return array2
    }
    else if (rowData && index >= 0 && index < rowData.length) {
      rowData[index].value = string;
      rowData[index].selected = array;
      const array2 = rowData;
      needRefresh && setRowData(array2);
      return array2
    }
  };

  const getText = item => {
    if (!!inputText && inputText?.index == item.index) {
      return inputText?.value ?? item.value;
    } else {
      if (item.index >= 3 && !!item.dropdown && !!item.value) {
        return !!item.value ? item.value != 'undefined' ? item.value.toUpperCase() : 'ADDITIONAL CLIENT' : 'ADDITIONAL CLIENT'
      }
      else {
        return item.value;
      }
    }
  };
  const isDisabled = item => {
    if (item.index == 1) {
      return true;
    }
    else {
      return noConflict
    }
  }

  const renderTextfieldRow = (data) => {
    return (
      <View style={{ ...styles.rowContainer }}>
        {!!data?.title && <Text style={styles.rowTitle}>
          {data?.title ?? ''}
        </Text>}
        <TouchableOpacity style={{ ...styles.rowInputContainer, width: '100%', alignSelf: 'center', backgroundColor: isDisabled(data) ? '#C4C4C4' : '#F7F7F7' }}
          onPress={() => {
            handleTap(data);
          }}
          disabled={isDisabled(data)}
        >
          <View style={{ ...styles.rowInputContainer, backgroundColor: isDisabled(data) ? '#C4C4C4' : '#F7F7F7' }} pointerEvents="none">
            <TextInput
              style={{ ...styles.rowInputView, color: !!data.dropdown ? '#989898' : '#5E5E5E' }}
              placeholder={data.placeholder}
              keyboardType="default"
              // selection={{start:0}}
              // autoFocus={true} selection={{start:0}}
              // editable={!!data?.editable}
              ref={ref => {
                data.inputRef = ref;
              }}
              value={isDisabled(data) && !data.dropdown ? getText(data) : getText(data)}
              onChangeText={event => {
                setInputText({ index: data.index, value: event });
              }}
              onEndEditing={event => {
                const { text } = event.nativeEvent;
                updateRowValueStrings(data.index, text, [text], true);
              }}
            />
            {renderRowIcon(data)}
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const renderRowIcon = item => {
    if (!!item.dropdown) {
      return (<>
        <View style={styles.rowInputSeparator} />
        <Image source={require('../../Assests/Images/post_down_arrow.png')} resizeMode={'cover'} style={styles.inputRightIcon} />
      </>);
    }
    return null;
  };

  const showPayment = () => {

    const token = clientToken ?? BRAINTREE_TOKENISATION_KEY
    BraintreeDropIn.show({
      clientToken: token,
      countryCode: 'US',    //apple pay setting
      currencyCode: 'USD',   //apple pay setting
      orderTotal: postProjectDetail?.offer_price ?? 0.00,
      googlePay: false,
      applePay: false,
      vaultManager: true,
      payPal: false,
      cardDisabled: false,
      darkTheme: true,
    })
      .then(result => {
        setPayment(result)
        console.log(result)
      })
      .catch((error) => {
        if (error.code === 'USER_CANCELLATION') {
          // update your UI to handle cancellation
        } else {
          // update your UI to handle other errors
        }
      });
  }

  const handleTap = (data) => {
    setCurrentIndex(data.index)
    if (!!data.dropdown) {
      if (data.index == 0) {
        setPickerOptions(getAllProjectsForConflicts)
      }
      else if (!!data.isDisabled) {
        return
      }
      else {
        setPickerOptions(defaultConflictOptions)
      }
      toggleCustomPicker(!showingCustomPicker, true)

    }
    else {
      setInputText(null)
      data?.inputRef?.focus();
      // Textfield entry

    }
  }
  const renderSaveButton = () => {
    return (
      <TouchableOpacity
        style={!!hasPayment ? styles.saveContainer : styles.saveContainerForConflict}
        onPress={() => {
          if (hasPayment) {
            if (isValid(hasPayment, true)) {
              let data = getRequestBody(true);
              postProjectAction(userEmail, access_token, client, data, {}, (data, success) => {
                console.log('callback received ' + success + data);
                if (success) {
                  Alert.alert('Conflicts Saved Successfully !!', '', [{ text: 'OK' }]);
                } else if (!!data) {
                  Alert.alert(data, '', [{ text: 'OK' }]);
                }
              });
            }
          }
          else {
            if (isValid(hasPayment)) {
              let data = getRequestBody(true);
              setConflictAction(userEmail, access_token, client, data, (data, success) => {
                if (success) {
                  if (!!forAssign) {
                    navigation.push('PostProjectScene4', { projectAssignmentID: projectAssignmentID, projectName: projectName, projectPrice: projectPrice, paymentOnly: true, hasPayment: true })
                  }
                  else {
                    Alert.alert('Conflicts Saved Successfully !!', '', [{ text: 'OK' }]);
                  }
                } else if (!!data) {
                  Alert.alert(data, '', [{ text: 'OK' }]);
                }
              });
            }
          }
        }}>
        <Text style={{ ...styles.save, color: !!hasPayment ? '#C6B25D' : 'white' }}>{!!hasPayment ? 'SAVE AS DRAFT' : 'SAVE'}</Text>
      </TouchableOpacity>
    );
  };


  const renderNextButton = () => {
    return (
      <TouchableOpacity
        style={styles.nextContainer}
        onPress={() => {
          if (!!paymentOnly) {
            if (isValid(hasPayment)) {
              let data = getAssignRequestBody();
              assignAction(userEmail, access_token, client, data, (data, success) => {
                console.log('callback received ' + success + data);
                if (success) {
                  navigation.navigate('PostProjectSuccessScene', { title: 'You have assigned a lawclerk to your project!', subtitle: 'Subject to clearing conflicts, you have assigned the lawclerk to your Project.' + ' : ' + projectName, message: 'Your credit card has not been charged. It will be charged once the Lawclerk accepts the assignment' });
                } else if (!!data) {
                  Alert.alert(data, '', [{ text: 'OK' }]);
                }
              });
            }
          }
          else {
            if (isValid(hasPayment)) {
              let data = getRequestBody(false);
              postProjectAction(userEmail, access_token, client, data, {}, (data, success) => {
                console.log('callback received ' + success + data);
                if (success) {
                  navigation.navigate('PostProjectSuccessScene');
                } else if (!!data) {
                  Alert.alert(data, '', [{ text: 'OK' }]);
                }
              });
            }
          }
        }}>
        <Text style={styles.next}>{!!paymentOnly ? 'CONFIRM' : 'SEND INVITATION'}</Text>
      </TouchableOpacity>
    );
  };
  const getAssignRequestBody = () => {
    return { 'payment_method_nonce': payment?.nonce ?? '', 'id': projectAssignmentID }
  }

  const getRequestBody = isStore => {
    let dt = new FormData();
    var counter = 0;
    if (!!project || !!forAssign) {
      dt.append('id', project?.id ?? projectID);
      dt.append('project[conflict_selected]', noConflict ? 'true' : 'false');
    }
    else {
      dt.append('project[created_method]', !!isStore ? 'store' : 'publish');
      dt.append('project[target_step_cursor]', !!isStore ? 'save_as_draft' : 'post');
      dt.append('project[conflict_selected]', noConflict ? 'true' : 'false');
      dt.append('payment_method_nonce', payment?.nonce ?? '');
      dt.append('id', 'payment');
    }

    if (!!noConflict == false) {
      // if (!!rowData[2].value) {
      dt.append('project[project_conflicts_attributes][0][conflict_type]', 'Client');
      dt.append('project[project_conflicts_attributes][0][name]', rowData[2].value ?? '');
      // }
      for (var i = 4; i < rowData.length; i = i + 2) {
        counter++;
        const item = rowData[i - 1]
        const nextItem = rowData[i]
        const key = item.apiKey.replace("{{index}}", counter + '');
        const nextKey = nextItem.apiKey.replace("{{index}}", counter + '');
        const idKey = 'project[project_conflicts_attributes][{{index}}][id]'.replace("{{index}}", counter + '')
        if (!!nextItem.value) {
          dt.append(key, item.value)
          dt.append(nextKey, nextItem.value)
          // !!item.id && dt.append(idKey, item.id)
        }
      }
    }
    else {
      dt.append('project[project_conflicts_attributes][0][conflict_type]', 'Client');
      dt.append('project[project_conflicts_attributes][0][name]', '');
    }
    return dt;
  };

  const isValid = (hasPayment, isSave) => {
    if (!!paymentOnly) {
      if (payment == null || payment == undefined) {
        Alert.alert("Please add payment method.", '', [{ text: 'OK' }]);
        return false;
      }
      else {
        return true;
      }
    }
    const message = !!hasPayment ? getInviationValidationMessage(isSave) : getConflictValidationMessage();
    message.length > 0 && Alert.alert(message, '', [{ text: 'OK' }]);
    return !(message.length > 0)
  }

  const getInviationValidationMessage = (isSave) => {
    if (!!!isSave && (payment == null || payment == undefined)) {
      return "Please add payment method."
    }
    else if (noConflict == false && (!!rowData[2].value == false)) {
      return "Please add conflict."
    }
    else {
      return ""
    }
  }

  const getConflictValidationMessage = () => {
    if (noConflict == false && (!!rowData[2].value == false)) {
      return "Please add conflict."
    }
    else {
      return ""
    }
  }

  const renderAddButton = () => {
    const text = !!payment ? "Change Payment Method" : "Add Payment Method"
    return (
      <TouchableOpacity style={{ margin: 20, borderRadius: 6, backgroundColor: '#1091E1', padding: 10 }} onPress={() => {
        showPayment();
      }}
      >
        <Text style={{ color: 'white', fontSize: 14, fontWeight: "600", textAlign: "center" }}>{text}</Text>
      </TouchableOpacity>);
  }

  const renderCardButton = () => {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderTopColor: '#E6E6E6', borderTopWidth: 1, borderBottomColor: '#E6E6E6', borderBottomWidth: 1, paddingVertical: 10, marginHorizontal: 20 }}>
        <Text style={{ textAlign: 'left', fontSize: 14, fontWeight: "500", color: '#5E5E5E' }}>{payment.type ?? ""}</Text>
        <Text style={{ textAlign: 'right', fontSize: 14, fontWeight: "500", color: '#5E5E5E' }}>{payment.description ?? ""}</Text>
      </View>
    );
  }

  const renderProjectView = () => {
    const name = postProjectDetail?.name ?? projectName ?? ""
    const price = "$" + (postProjectDetail?.offer_price ?? projectPrice ?? 0.00)
    return (
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 16, fontWeight: "500", color: '#3B4C5C' }}>PROJECT</Text>
        <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
          <Text style={{ fontSize: 12, fontWeight: "600", color: '#5E5E5E', marginRight: 10 }}>Project Name :</Text>
          <Text style={{ fontSize: 12, fontWeight: "400", color: '#5E5E5E', marginRight: 100 }}>{name}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ fontSize: 12, fontWeight: "600", color: '#5E5E5E', marginVertical: 2.5, marginRight: 10 }}>Project Total Price :</Text>
          <Text style={{ fontSize: 12, fontWeight: "400", color: '#005FB9', marginVertical: 5 }}>{price}</Text>
        </View>
        <Text style={{ fontSize: 10, fontWeight: "400", color: '#5E5E5E', paddingVertical: 25 }}>Your card will not be charged until the Lawclerk accepts the invitation and clears conflicts. Remember, Braintree, operated by PayPal, will hold your funds until the project is successfully completed, at which point the money will be transferred to the Lawclerk.</Text>
      </View>
    )
  }

  const renderPaymentView = () => {
    return (
      <View style={{ ...styles.card }}>
        <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: "500", color: '#3B4C5C', margin: 20 }}>{"Select Payment Method and \n Confirm Invitation"}</Text>
        {!!payment && renderCardButton()}
        {renderAddButton()}
        {renderProjectView()}
        {renderNextButton()}
      </View>
    );
  }
  return (
    <SafeAreaView style={{ flex: 1 }} key={refreshCount}>
      <KeyboardAwareScrollView>
        {!!!paymentOnly && renderConflictContainer()}
        {(!!hasPayment || !!paymentOnly) && renderPaymentView()}
        {!!paymentOnly == false && renderSaveButton()}
      </KeyboardAwareScrollView>
      <CustomPickerComp
        pickerItems={pickerOptions}
        isMulti={false}
        onChange={selectedArray => {
          if (currentIndex == 0) {
            setselectedProjectForConflict(selectedArray.length > 0 ? selectedArray[0] : null);
          }
          else if (selectedArray.length > 0) {
            updateRowValueStrings(currentIndex, selectedArray[0].value, [selectedArray[0].value], true);
          }
        }}
        selectedArray={rowData[currentIndex]?.selected ?? []}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  next: {
    fontWeight: '500',
    fontSize: 16,
    alignSelf: 'center',
    color: 'white',
  },
  save: {
    fontWeight: '500',
    fontSize: 16,
    alignSelf: 'center',
    color: '#C5B15D',
  },
  saveContainer: {
    borderWidth: 1,
    height: 38,
    margin: 20,
    borderRadius: 8,
    flex: 1,
    borderColor: '#C5B15D',
    justifyContent: 'center',
  },
  saveContainerForConflict: {
    height: 60,
    marginTop: 20,
    flex: 1,
    backgroundColor: '#C6B25D',
    justifyContent: 'center',
  },
  nextContainer: {
    backgroundColor: '#C5B15D',
    flex: 1,
    height: 50,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    justifyContent: 'center',
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navigationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 14,
  },
  card: {
    shadowColor: '#29767676',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 16,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginTop: 20,
    marginLeft: 12,
    marginRight: 12,
  },
  backIcon: {
    height: 24,
    width: 24,
    marginTop: 10,
    marginBottom: 13,
    tintColor: 'white',
  },
  rowContainer: {
    marginHorizontal: 20,
    paddingBottom: 5,
    flex: 1
  },
  listCotainer: {
    marginVertical: 10,
  },
  rowTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#5E5E5E',
    paddingTop: 10,
  },
  rowSubtitle: {
    fontSize: 10,
    fontWeight: '300',
    color: '#5E5E5E',
    fontStyle: 'italic',
  },
  rowInputContainer: {
    marginTop: 5,
    height: 38,
    width: 100,
    borderRadius: 4,
    flex: 1,
    flexGrow: 1,
    borderColor: '#E6E6E6',
    backgroundColor: '#F7F7F7',
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowInputSeparator: {
    width: 1,
    height: 20,
    backgroundColor: '#DCD8D2',
    marginHorizontal: 10,
  },
  rowInputView: {

    fontSize: 12,
    color: '#989898',
    marginLeft: 4,
    height: '100%',
    flex: 1,
  },
  inputRightIcon: {
    height: 20,
    width: 20,
    marginRight: 10,
  },
  checkBox: {
    height: 15,
    width: 15,
  },
  checkboxText: {
    marginLeft: 8,
    fontSize: 12,
    fontWeight: "400",
    color: '#5E5E5E'
  }
});

const mapStateToProps = state => {
  return {
    showingCustomPicker: state.PickerReducer.showingCustomPicker,
    access_token: state.Login.access_token,
    client: state.Login.client,
    userEmail: state.Login.email,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    toggleCustomPicker: (show, Blur) =>
      dispatch(toggleCustomPicker(show, Blur)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PostProjectScene4);
