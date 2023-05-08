import { Alert, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { applicationPeriodListAction ,
postProjectAction,
projectDetailAction} from '../../Redux/FilterApi/Action';
import CustomPickerComp from '../../Components/CustomPickerComp';
import { toggleCustomPicker } from '../../Redux/Picker/Action';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const PostProjectScene2 = ({
  navigation,
  isFromMenu,
  toggleCustomPicker,
  showingCustomPicker,
  applicationPeriodListAction,
  postProjectAction,
  access_token,
  client,
  userEmail,
  applicationPeriod,
  postProjectDetail,
  clioMatters,
  showProject,
  clioMember
}) => {
  const [selection, setSelection] = useState();
  const [description, setDescription] = useState('');
  const [editingTitle, setEditingTitle] = useState(null)
  const [detail, setDetail] = useState('');
  const [exportDocumentClio, setexportDocumentClio] = useState(true);
  const [createClio, setCreateClio] = useState(true);
  const [exportTimeClio, setexportTimeClio] = useState(true);
  const [selectedRelatedClio, setSelectedRelatedClio] = useState(false);
  const [applicableLaw, setApplicableLaw] = useState('');
  let FormData = require('form-data');
  useEffect(() => {
    applicationPeriodListAction(userEmail, access_token, client);
    !!showProject && adaptData();
  }, []);
  useEffect(() => {
		adaptData();
	}, [showProject])
  useEffect(() => {
    postProjectDetail && refreshData()
  }, [])
  
  const refreshData = (step) => {
    projectDetailAction(userEmail, access_token, client, postProjectDetail?.id ?? null, false, step ?? 'details', (data, success) => {
			console.log('Project refreshed');
		})
  }
  const adaptData = () => {
   // !!showProject.narrative && setDescription(showProject.narrative);
   //!!showProject.details && setDetail(showProject.details);
   // !!showProject.state && setApplicableLaw(showProject.state);
   // !!showProject.create_clio_task &&
    //  setCreateClio(showProject.create_clio_task);
    //!!showProject.clio_sync_time_entries &&
   //  setexportTimeClio(showProject.clio_sync_time_entries);
  // !!showProject.clio_sync_documents &&
     //setexportDocumentClio(showProject.clio_sync_documents);
    !!showProject?.clio_matter_id &&  preselectClioMatter(showProject.clio_matter_id)
  };

  const preselectClioMatter = (id) => {
    const pickerOption = getPreselectPickerOption(clioMatters, id);
    if (!!pickerOption && pickerOption?.length > 0) {
          setSelectedRelatedClio(pickerOption[0])
    }
  }

  const getPreselectPickerOption = (array, value) => {
		return array.filter(data => {
			return data.value + '' === value;
		});
	};
  const renderLawsContainer = (title, value, placeholder, onChange) => {
    
    return (
      <>
        <Text style={styles.textTitle}>{title}</Text>
        <TextInput
          style={{ ...styles.textBox, height: 38 }}
          multiline={true}
          onChangeText={text => {
            onChange(text);
          }}
          selection={selection}
          value={value}
          placeholder={placeholder}
        />
      </>
    );
  };
  const renderHeaderTitle = () => {
    return (
      <>
        <Text style={styles.cardHeaderTitle}>
          Provide a detailed description of the work you need completed. A
          well-crafted description will ensure you find the best candidates.
        </Text>
      </>
    );
  };
  const renderTextBox = (title, value, placeholder, onChange) => {

    return (
      <>
        <Text style={styles.textTitle}>{title}</Text>

        <TextInput
          style={styles.textBox}
          multiline={true}

          onChangeText={text => {
            if (editingTitle != title) {
              setEditingTitle(title)
            }
            onChange(text);
          }}
          onEndEditing={event => {
            if (editingTitle == title) {
              setEditingTitle(title)
            }
          }}
          selection={selection}
          value={value}
          placeholder={placeholder}
        />
      </>
    );
  };
  const renderCheckboxRow = (isSelected, text, onPress) => {
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginRight: 10,
          paddingVertical: 5
        }}
        onPress={() => {
          onPress();
        }}>
        <Image
          style={styles.clioLogo}
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
  const renderRowIcon = () => {
    return (
      <>
        <View style={styles.rowInputSeparator} />
        <Image
          source={require('../../Assests/Images/post_down_arrow.png')}
          resizeMode={'cover'}
          style={styles.inputRightIcon}
        />
      </>
    );
  };
  const renderRelatedClioMatter = () => {
    return <View style={{ paddingVertical: 10, flex: 1, width: '100%' }}>
      <Text style={styles.checkboxText}>
        Related Clio Matter
      </Text>
      <TouchableOpacity
        onPress={() => {
          toggleCustomPicker(!showingCustomPicker, true);
        }}
      >
        <View style={styles.rowInputContainer} >
          <TextInput
            style={styles.rowInputView}
            selection={{ start: 0 }}
            placeholder="SELECT THE RELATED CLIO MATTER"
            keyboardType="default"
            value={selectedRelatedClio?.title}
          />
          {renderRowIcon()}
        </View>
      </TouchableOpacity>
    </View>
  }
  const renderClioContainer = () => {
    return (
      <View style={{ padding: 10 }}>
        <View style={styles.clioSeparator} />
        <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
          <Image
            style={styles.clioLogo}
            source={require('../../Assests/Images/clio_logo.png')}
          />
          <Text style={{ ...styles.clioText, marginLeft: 10 }}>CLIO SETTINGS</Text>
        </View>
        <View style={{ alignItems: 'flex-start', marginVertical: 10 }}>
          {renderCheckboxRow(
            createClio,
            'Create a Task in Clio for this project',
            () => {
              setCreateClio(!createClio);
            },
          )}
          {renderRelatedClioMatter()}
          {renderCheckboxRow(
            exportTimeClio,
            'Export to Clio all time entries related to this project',
            () => {
              setexportTimeClio(!exportTimeClio);
            },
          )}
          {renderCheckboxRow(
            exportDocumentClio,
            'Export to Clio all documents and submissions related to this project',
            () => {
              setexportDocumentClio(!exportDocumentClio);
            },
          )}
        </View>
      </View>
    );
  };
  const renderNextButton = () => {
    return (
      <TouchableOpacity
        style={styles.nextContainer}
        onPress={() => {
          if (isValid()) {
            let data = getRequestBody(false);
            postProjectAction(
              userEmail,
              access_token,
              client,
              data,
              {},
              (data,success) => {
                console.log('callback received ' + success + data);
                if (success) {
                  navigation.navigate('PostProjectScene3', {showProject: showProject});
                } else if (!!data) {
                  Alert.alert(data, '', [{text: 'OK'}]);
                }
              },
            );
          }
        }}>
        <Text style={styles.next}>NEXT</Text>
      </TouchableOpacity>
    );
  };
  const isValid = () => {
		const message = getValidationMessage();
		message.length > 0 && Alert.alert(message, '', [{ text: 'OK' }]);
		return !(message.length > 0)
	};

	const getValidationMessage = () => {
    if (description.length == 0) {
      return 'Description cannot be blank.'
    }
    else if (detail.length == 0) {
      return 'Detail cannot be blank.';
    }
    else if (applicableLaw.length == 0) {
      return 'Applicable states cannot be blank.';
    }
    else {
      return '';
    }
	}
  const getRequestBody = isSave => {
    let data = new FormData();
    data.append('project[created_method]', 'store');
    data.append('project[target_step_cursor]', isSave ? 'save_as_draft' : 'next');
    data.append('project[narrative]', description);
    data.append('project[details]', detail);
    data.append('project[state]', applicableLaw);
    data.append('id', 'details');
    if (!!clioMatters) {
      data.append('project[create_clio_task]', !!createClio ? '1' : '0')
      data.append('project[clio_sync_time_entries]', !!exportTimeClio ? '1' : '0')
      data.append('project[clio_sync_documents]', !!exportDocumentClio ? '1' : '0')
      data.append('project[clio_matter_id]', !!selectedRelatedClio?.value ? selectedRelatedClio?.value : '')
    }
    return data;
  };
  const renderSaveButton = () => {
    return (
      <TouchableOpacity
        style={styles.saveContainer}
        onPress={() => {
          if (isValid()) {
            let data = getRequestBody(true);
            postProjectAction(
              userEmail,
              access_token,
              client,
              data,
              {},
              ( data,success) => {
                if (success) {
                  Alert.alert('Draft is saved successfully!!', '', [
                    {text: 'OK'},
                  ]);
                  // navigation.navigate('PostProjectScene3');
                } else if (!!data) {
                  Alert.alert(data, '', [{text: 'OK'}]);
                }
              },
            );
          }
        }}>
        <Text style={styles.save}>
          SAVE AS DRAFT
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView>
      <KeyboardAwareScrollView>
        <View style={styles.card}>
          {renderHeaderTitle()}
          {renderTextBox(
            'Project Description*',
            description,
            'Type Here....',
            event => {
              setDescription(event);
            },
          )}
          {renderTextBox('Project Details*', detail, 'Type Here....', event => {
            setDetail(event);
          })}
          {renderLawsContainer(
            'Applicable state, federal or other law *',
            applicableLaw,
            '',
            event => {
              setApplicableLaw(event);
            },
          )}
          {!!clioMember &&renderClioContainer()}
          {renderNextButton()}
        </View>
        {renderSaveButton()}
      </KeyboardAwareScrollView>
      <CustomPickerComp
        pickerItems={clioMatters}
        isMulti={false}
        onChange={selectedArray => {
          console.log(selectedArray.length > 0 ? selectedArray[0] : null);
          setSelectedRelatedClio(selectedArray.length > 0 ? selectedArray[0] : null);
        }}
        selectedArray={selectedRelatedClio ? [selectedRelatedClio] : []}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
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
    justifyContent: 'center',
  },
  inputRightIcon: {
    height: 20,
    width: 20,
    marginRight: 10,
  },
  checkboxText: {
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'left',
    marginVertical: 5,
    marginHorizontal: 5,
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
    overflow: 'hidden',
  },
  rowInputContainer: {
    marginTop: 20,
    height: 38,
    borderRadius: 4,
    borderColor: '#E6E6E6',
    backgroundColor: '#F7F7F7',
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowInputView: {
    fontSize: 12,
    color: '#989898',
    paddingLeft: 16,
    flexGrow: 1,
    maxWidth: '80%'
  },
  cardHeaderTitle: {
    fontSize: 10,
    fontWeight: "400",
    color: '#5E5E5E',
    margin: 20,
  },
  textTitle: {
    fontSize: 12,

    fontWeight: '600',
    color: '#5E5E5E',
    marginHorizontal: 20,
    marginTop: 5,
  },
  textBox: {
    flexGrow: 1,
    borderRadius: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    marginTop: 8,
    marginBottom: 20,
    marginHorizontal: 20,
    textAlignVertical: 'top',
    height: 140,
  },
  clioSeparator: {
    height: 1,
    marginHorizontal: 10,
    marginVertical: 20,
    backgroundColor: '#C5B15D',
  },
  clioText: {
    fontSize: 14,
    fontWeight: "400",
  },
  clioLogo: {
    height: 20,
    width: 20,
  },
  checkboxText: {
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'left',
    marginVertical: 5,
    marginHorizontal: 5,
  },
  clioText: {
    fontSize: 14,
    fontWeight: "400",
  },
  clioLogo: {
    height: 20,
    width: 20,
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
    clioMatters: state.FilterReducer.clioMatters,
    clioMember: state.Login.clioMember,
    showProject: state.FilterReducer.showProject
  };
};
const mapDispatchToProps = dispatch => {
  return {
    toggleCustomPicker: (show, Blur) =>
      dispatch(toggleCustomPicker(show, Blur)),
      applicationPeriodListAction: (userEmail, access_token, client) =>
      dispatch(applicationPeriodListAction(userEmail, access_token, client)),
      postProjectAction: (userEmail, access_token, client, formdata, params, callback) =>
      dispatch(
        postProjectAction(userEmail, access_token, client, formdata, params, callback),
      ),
    projectDetailAction: (userEmail, access_token, client, id, isNew, step, callback) =>
			dispatch(projectDetailAction(userEmail, access_token, client, id, isNew, step, callback)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(PostProjectScene2);
