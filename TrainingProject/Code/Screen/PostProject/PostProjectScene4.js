import { Alert, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { postProjectAction, getAllProjectsForConflictAction, assignAction, getConflictAction, setConflictAction, conflictAction, clearConflicts } from '../../Redux/FilterApi/Action'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { toggleCustomPicker } from '../../Redux/Picker/Action'
import CustomPickerComp from '../../Components/CustomPickerComp'
import { connect } from 'react-redux'
const PostProjectScene4 = ({
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
}) => {
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
  const [noConflict, setNoConflict] = useState(false)
  const [payment, setPayment] = useState(null);
  const [rowData, setRowData] = useState(defaultRows)
  const [inputText, setInputText] = useState(null);
  const { projectID } = route.params ?? -1;
  const [project, setProject] = useState()
  const { hasPayment } = route.params ?? false;
  const { paymentOnly } = route.params ?? false;
  const { projectName } = route.params ?? ''
  const { projectPrice } = route.params ?? ''
  const [refreshCount, setRefreshCount] = useState(0)
  const [selectedProjectForConflict, setselectedProjectForConflict] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [pickerOptions, setPickerOptions] = useState(null);
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
    clearConflicts();
    resetData();
    getAllProjectsForConflictAction(userEmail, access_token, client)
  }, []);
  useEffect(() => {
    if (!!project?.id) {
      conflictAction(userEmail, access_token, client, project.id)
    }
  }, [project])
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

    }
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
  const renderTextfieldRow = (data) => {
    return (
      <View style={{ ...styles.rowContainer }}>
        {!!data?.title && <Text style={styles.rowTitle}>
          {data?.title ?? ''}
        </Text>}
        <TouchableOpacity style={{ ...styles.rowInputContainer, width: '100%', alignSelf: 'center', backgroundColor: isDisabled(data) ? '#C4C4C4' : '#F7F7F7' }}
          onPress={() => {
            handleTap(data)
          }}
          disabled={isDisabled(data)}
        >
          <View style={{ ...styles.rowInputContainer, backgroundColor: isDisabled(data) ? '#C4C4C4' : '#F7F7F7' }} >
            <TextInput
              style={{ ...styles.rowInputView, color: !!data.dropdown ? '#989898' : '#5E5E5E' }}
              placeholder={data.placeholder}
              keyboardType="default"
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
  const resetData = () => {
    setInputText('')
    setRowData(defaultRows)
  }
  const renderConflictContainer = () => {
    return (
      <View style={{ ...styles.card }}>
        {renderCheckboxRow(noConflict, ' Check here if there are no conflicts.', () => {
          setNoConflict(!noConflict)
        })}
        {rowData.slice(0, 3).map(item => {
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
  const renderCardButton = () => {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderTopColor: '#E6E6E6', borderTopWidth: 1, borderBottomColor: '#E6E6E6', borderBottomWidth: 1, paddingVertical: 10, marginHorizontal: 20 }}>
        <Text style={{ textAlign: 'left', fontSize: 14, fontWeight: "500", color: '#5E5E5E' }}>
          {payment.type ?? ""}
        </Text>
        <Text style={{ textAlign: 'right', fontSize: 14, fontWeight: "500", color: '#5E5E5E' }}>
          {payment.description ?? ""}
        </Text>
      </View>
    );
  }
  const renderAddButton = () => {
    const text = !!payment ? "Change Payment Method" : "Add Payment Method"
    return (
      <TouchableOpacity style={{ margin: 20, borderRadius: 6, backgroundColor: '#1091E1', padding: 10 }}>
        <Text style={{ color: 'white', fontSize: 14, fontWeight: "600", textAlign: "center" }}>
          {text}
        </Text>
      </TouchableOpacity>);
  }
  const renderProjectView = () => {
    const name = projectName ?? ""
    const price = "$" + (projectPrice ?? 0.00)
    return (
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 16, fontWeight: "500", color: '#3B4C5C' }}>
          PROJECT
        </Text>
        <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
          <Text style={{ fontSize: 12, fontWeight: "600", color: '#5E5E5E', marginRight: 10 }}>
            Project Name :
          </Text>
          <Text style={{ fontSize: 12, fontWeight: "600", color: '#5E5E5E', marginRight: 10 }}>
            {name}
          </Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ fontSize: 12, fontWeight: "600", color: '#5E5E5E', marginVertical: 2.5, marginRight: 10 }}>
            Project Total Price :
          </Text>
          <Text style={{ fontSize: 12, fontWeight: "600", color: '#5E5E5E', marginVertical: 2.5, marginRight: 10 }}>
            {price}
          </Text>
        </View>
        <Text style={{ fontSize: 10, fontWeight: "400", color: '#5E5E5E', paddingVertical: 25 }}>
          Your card will not be charged until the Lawclerk
          accepts the invitation and clears conflicts.
          Remember, Braintree, operated by PayPal,
          will hold your funds until the project is successfully completed,
          at which point the money will be transferred to the Lawclerk.
        </Text>
      </View>
    )
  }
  const getRequestBody = isStore => {
    let dt = new FormData();
    var counter = 0;
    if (!!project) {
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
  const renderNextButton = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          if (isValid(hasPayment)) {
            let data = getRequestBody(false);
            postProjectAction(userEmail, access_token, client, data, {}, ( data,success) => {
              console.log('callback received ' + success + data);
              if (success) {
                navigation.navigate('PostProjectSuccess');
              } else if (!!data) {
                Alert.alert(data, '', [{ text: 'OK' }]);
              }
            });
          }
        }
        }
        style={styles.nextContainer}>
        <Text style={styles.next}>
          {'SEND INVITATION'}
        </Text>
      </TouchableOpacity>
    );
  };
  const renderPaymentView = () => {
    return (
      <View style={styles.card}>
        <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: "500", color: '#3B4C5C', margin: 20 }}>
          {"Select Payment Method and \n Confirm Invitation"}
        </Text>
        {!!payment && renderCardButton()}
        {renderAddButton()}
        {renderProjectView()}
        {renderNextButton()}
      </View>
    );
  }
  const renderSaveButton = () => {
    return (
      <TouchableOpacity
        style={styles.saveContainer}>
        <Text style={styles.save}>
          SAVE AS DRAFT
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1 }} >
      <KeyboardAwareScrollView>
        {!!!paymentOnly && renderConflictContainer()}
        {renderPaymentView()}
        {renderSaveButton()}
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
  )
}


const styles = StyleSheet.create({
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
  checkBox: {
    height: 15,
    width: 15,
  },
  rowTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#5E5E5E',
    paddingTop: 10,
  },
  checkboxText: {
    marginLeft: 8,
    fontSize: 12,
    fontWeight: "400",
    color: '#5E5E5E'
  },
  rowInputView: {

    fontSize: 12,
    color: '#989898',
    marginLeft: 4,
    height: '100%',
    flex: 1,
  },
  next: {
    fontWeight: '500',
    fontSize: 16,
    alignSelf: 'center',
    color: 'white',
  },
  nextContainer: {
    backgroundColor: '#C5B15D',
    flex: 1,
    height: 50,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    justifyContent: 'center',
  },
  rowContainer: {
    marginHorizontal: 20,
    paddingBottom: 5,
    flex: 1
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
  rowInputSeparator: {
    width: 1,
    height: 20,
    backgroundColor: '#DCD8D2',
    marginHorizontal: 10,
  },
  inputRightIcon: {
    height: 20,
    width: 20,
    marginRight: 10,
  },
})
const mapStateToProps = state => {
  return {
    showingCustomPicker: state.PickerReducer.showingCustomPicker,
    access_token: state.Login.access_token,
    client: state.Login.client,
    userEmail: state.Login.email,
    applicationPeriod: state.FilterReducer.applicationPeriod,
    postProjectDetail: state.FilterReducer.postProjectDetail,
    conflicts: state.FilterReducer.conflicts,
    getConflicts: state.FilterReducer.getConflicts,
    getAllProjectsForConflicts: state.FilterReducer.getAllProjectsForConflicts,
    setConflicts: state.FilterReducer.setConflicts,
    manageConflicts: state.FilterReducer.manageConflicts,
    clientToken: state.FilterReducer.clientToken
  };
};
const mapDispatchToProps = dispatch => {
  return {
    toggleCustomPicker: (show, needBlur) =>
      dispatch(toggleCustomPicker(show, needBlur)),
    applicationPeriodListAction: (userEmail, access_token, client) =>
      dispatch(applicationPeriodListAction(userEmail, access_token, client)),
    getAllProjectsForConflictAction: (userEmail, access_token, client) =>
      dispatch(getAllProjectsForConflictAction(userEmail, access_token, client)),
    getConflictAction: (userEmail, access_token, client, id, targetID) =>
      dispatch(getConflictAction(userEmail, access_token, client, id, targetID)),
    setConflictAction: (userEmail, access_token, client, formdata, callback) =>
      dispatch(setConflictAction(userEmail, access_token, client, formdata, callback)),
    conflictAction: (userEmail, access_token, client, id) =>
      dispatch(conflictAction(userEmail, access_token, client, id)),
    postProjectAction: (userEmail, access_token, client, formdata, params, callback) =>
      dispatch(postProjectAction(userEmail, access_token, client, formdata, params, callback)),
    assignAction: (userEmail, access_token, client, formdata, callback) =>
      dispatch(assignAction(userEmail, access_token, client, formdata, callback)),
    clearConflicts: () => dispatch(clearConflicts())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PostProjectScene4);
