import { Alert, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { applicationPeriodListAction, postTeamAction, postProjectAction } from '../../Redux/FilterApi/Action'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { connect } from 'react-redux'

const PostProjectScene3 = ({ navigation,
  isFromMenu,
  postProjectAction,
  postTeamAction,
  access_token,
  route,
  client,
  userEmail,
  applicationPeriod,
  firstName,
  lastName,
  id,
  showProject,
  postProjectDetail,
  showTeam }) => {
  const [initials, setInitials] = useState('')
  const [createClio, setCreateClio] = useState(false);
  const [isInvitation, setIsInvitation] = useState(false);
  const [tncSelected, setTncSelected] = useState(false);
  const params = route.params;
  const isTeam = !!params?.isForTeam;


  useEffect(() => {
    setIsInvitation(!!(postProjectDetail?.project_type == 'invitation'));
  }, [postProjectDetail]);
  useEffect(() => {
    setCreateClio(!!(postProjectDetail?.create_clio_task == '1'));
  }, [postProjectDetail])

  useEffect(() => {

  }, [showTeam])
  const renderHeaderTitle = () => {
    return (
      <View>
        <Text style={styles.cardHeaderTitle}>
          Please review and affirm the following rules governing the use of Lawclerks.
        </Text>
      </View>
    )
  }
  const getPoints = () => {
    return (
      <Text style={styles.cardHeaderTitle}>
        {
          "I am a duly licensed attorney in good-standing and I agree to fully comply with the following rules regarding the use of Lawclerk services. \n\n\n 1. I shall have sole professional responsibility for the work product of the Lawclerk.\n\n 2. I will supervise the Lawclerk's performance of services on the assigned project to ensure compliance with the applicable Rules of Professional Conduct.  \n\n  3. I will supervise the Lawclerk's performance of services on the assigned project to ensure compliance with the applicable Rules of Professional Conduct.  \n\n  4. The Lawclerk shall have no contact with the my client, including without limitation no email, telephone, skype, web, social media, or in-person contact.     \n\n  5. The Lawclerk shall not appear in court or any other judicial or administrative body on behalf of a my client.  \n\n  6. I will not ask or otherwise cause the Lawclerk to serve or otherwise disseminate the Lawclerk's work product or any other documents to anyone other than me.  \n\n  7. I will not ask or otherwise cause the Lawclerk to sign or file any documents with any court or administrative body.  \n\n  8. The Lawclerk shall have no contact with opposing counsel, witnesses, or other persons potentially involved in the project for which the Lawclerk has been engaged, including without limitation no email, telephone, skype, web, social media, or in-person contact.  \n\n  9. If required by my engagement agreement with my client or applicable law, I have obtained my client's consent to utilize the services of a Lawclerk.  \n\n  10. I have sole responsibility for determining the fee charged to my client for legal services. The Lawclerk shall not have any involvement in determining the fee I charge my client for the Lawclerk's services.  \n\n  11. All payment for Lawclerk services shall be completed through: https://www.lawclerk.legal ."
        }
      </Text>
    );
  };
  const renderTextBox = (title, value, placeholder, onChange, isDisabled) => {
    return (
      <>
        <Text style={styles.textTitle}>{title}</Text>
        <TextInput
          style={styles.textBox}
          editable={!isDisabled}
          onChangeText={text => {
            onChange(text);
          }}
          value={value}
          placeholder={placeholder}
        />
      </>
    );
  };
  const renderTnc = () => {
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          marginBottom: 30,
          marginHorizontal: 20
        }}
        onPress={() => {
          setTncSelected(!tncSelected);
        }}
      >
        <Image
          source={
            tncSelected
              ? require('../../Assests/Images/CheckboxTrue.png')
              : require('../../Assests/Images/CheckboxFalse.png')
          }
          style={{ height: 16, width: 16 }}
        />
        <Text
          style={{
            marginLeft: 10,
            fontSize: 10,
            fontWeight: '400',
            color: '#5E5E5E'
          }}
        >
          {' '}
          I have read and agree to the foregoing terms.
        </Text>
      </TouchableOpacity>
    );
  };

  const renderNextButton = (data) => {
    return (
      <TouchableOpacity
        style={styles.nextContainer}
        onPress={() => {
          if (isValid()) {
            let data = getRequestBody(false);
            if (isTeam) {
              postTeamAction(userEmail, access_token, client, data, {}, (data, success) => {
                if (success) {
                  navigation.navigate('PostProjectSuccessScene', { title: 'Your team has been posted to the marketplace allowing talented lawyers to apply to be on your Team!', subtitle: ".", });								// navigation.navigate('PostProjectSuccessScene');
                } else if (!!data) {
                  Alert.alert(data, '', [{ text: 'OK' }]);
                }
              });
            }
            else {
              postProjectAction(userEmail, access_token, client, data, {}, (data, success) => {
                console.log('callback received ' + success + data);
                if (success) {
                  if (isInvitation) {
                    navigation.navigate('PostProjectScene4', { hasPayment: true });
                  } else {
                    navigation.navigate('PostProjectSuccess');
                  }
                } else if (!!data) {
                  Alert.alert(data, '', [{ text: 'OK' }]);
                }
              });
            }
          } else {
            Alert.alert(
              'You have missing fields. Please review your form: \n1: You have to agree to the foregoing terms to proceed \n2: You have to enter your initials to continue. \n3: Min number of characters is two. \n4: Max number of characters is six. \n5: You have to enter only letters and no blank spaces are allowed.'
            );
          }
        }}
      >
        <Text style={styles.next}>NEXT</Text>
      </TouchableOpacity>
    );
  };
  const isValid = () => {
    return !!tncSelected && initials.length > 0;
  };
  const getRequestBody = isStore => {
    let data = new FormData();
    const type = isTeam ? 'team' : 'project';
    const targetStep = isTeam ? (!!isStore ? 'save_as_draft' : 'post') : (!!isStore ? 'save_as_draft' : (isInvitation ? 'next' : 'post'))
    data.append(type + '[created_method]', (isInvitation || isStore) ? 'store' : 'publish');
    data.append(type + '[target_step_cursor]', targetStep);
    data.append(type + '[rules_governing_compliance_attributes][user_id]', id);
    data.append(type + '[rules_governing_compliance_attributes][compliance_name]', firstName + ' ' + lastName);
    data.append(type + '[rules_governing_compliance_attributes][compliance_initials]', initials);
    data.append(type + '[rules_governing_compliance_attributes][compliance_acceptance]', 1);
    data.append(type + '[rules_governing_compliance_attributes][need_compliance]', 'true');
    data.append(type + '[rules_governing_compliance_attributes][compliance_type]', 'rules_governing_compliance');
    data.append('id', 'compliance');
    return data;
  };
  const renderSaveButton = () => {
    return (
      <TouchableOpacity
        style={styles.saveContainer}
        onPress={() => {
          if (isValid()) {
            let data = getRequestBody(true);
            if (isTeam) {
              postTeamAction(userEmail, access_token, client, data, {}, (data, success) => {
                if (success) {
                  Alert.alert('Draft is saved successfully!!', '', [{ text: 'OK' }]);

                } else if (!!data) {
                  Alert.alert(data, '', [{ text: 'OK' }]);
                }
              });
            }
            else {
              postProjectAction(userEmail, access_token, client, data, {}, (data, success) => {
                if (success) {
                  Alert.alert('Draft is saved successfully!!', '', [{ text: 'OK' }]);

                } else if (!!data) {
                  Alert.alert(data, '', [{ text: 'OK' }]);
                }
              });
            }
          }
          else {
            Alert.alert(
              'You have missing fields. Please review your form: \n1: You have to agree to the foregoing terms to proceed \n2: You have to enter your initials to continue. \n3: Min number of characters is two. \n4: Max number of characters is six. \n  5: You have to enter only letters and no blank spaces are allowed.'
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
          {getPoints()}
          {renderTextBox('First and Last Name:', firstName + ' ' + lastName, '', event => { }, true)}
          {renderTextBox(
            'Initials Here :',
            initials,
            '',
            event => {
              setInitials(event);
            },
            false
          )}
          {renderTnc()}
          {renderNextButton()}
        </View>
        {renderSaveButton()}
      </KeyboardAwareScrollView>
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
    overflow: 'hidden'
  },
  cardHeaderTitle: {
    fontSize: 10,
    fontWeight: '400',
    color: '#5E5E5E',
    margin: 20
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
    height: 38
  },
  textTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#5E5E5E',
    marginHorizontal: 20,
    marginTop: 5
  },
  nextContainer: {
    backgroundColor: '#C5B15D',
    flex: 1,
    height: 50,
    justifyContent: 'center'
  },
  next: {
    fontWeight: '500',
    fontSize: 16,
    alignSelf: 'center',
    color: 'white'
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
})
const mapStateToProps = state => {
  return {
    showingCustomPicker: state.PickerReducer.showingCustomPicker,
    access_token: state.Login.access_token,
    client: state.Login.client,
    firstName: state.Login.first_name,
    id: state.Login.id,
    lastName: state.Login.last_name,
    userEmail: state.Login.email,
    applicationPeriod: state.FilterReducer.applicationPeriod,
    postProjectDetail: state.FilterReducer.postProjectDetail,
    showTeam: state.FilterReducer.showTeam
  };
};
const mapDispatchToProps = dispatch => {
  return {
    toggleCustomPicker: (show, needBlur) => dispatch(toggleCustomPicker(show, needBlur)),
    applicationPeriodListAction: (userEmail, access_token, client) =>
      dispatch(applicationPeriodListAction(userEmail, access_token, client)),
    postTeamAction: (userEmail, access_token, client, formdata, params, callback) =>
      dispatch(postTeamAction(userEmail, access_token, client, formdata, params, callback)),
    postProjectAction: (userEmail, access_token, client, formdata, params, callback) =>
      dispatch(postProjectAction(userEmail, access_token, client, formdata, params, callback))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PostProjectScene3);
