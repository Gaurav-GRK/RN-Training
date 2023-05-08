import { Alert, Image, Keyboard, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import DatePicker from 'react-native-date-picker';
import { toggleCustomPicker } from '../../Redux/Picker/Action';
import CustomPickerComp from '../../Components/CustomPickerComp';
import { connect } from 'react-redux';
import {
    applicationPeriodListAction,
    industriesListAction,
    projectTypeAction,
    skillLevelListAction,
    projectTypeListAction,
    teamMemberListAction,
    postProjectAction,
    projectDetailAction
} from '../../Redux/FilterApi/Action';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import moment from 'moment';
const PostProjectScene = ({	navigation,
	isFromMenu,
	route,
	toggleCustomPicker,
	showingCustomPicker,
	applicationPeriodListAction,
	attorneyProjectListAction,
	teamMemberListAction,
	projectDetailAction,
	projectTypeListAction,
	skillLevelListAction,
	industriesListAction,
	postProjectAction,
	projectTypeAction,

	access_token,
	client,
	userEmail,
	applicationPeriod,
	attorneyProjectList,
	teamMembersList,
	projectDetail,
	projectTypeList,
	industries,
	skillLevel,
	showProject,
	postProjectDetail,
	projectType
}) => {
    const dateFormat = 'MMM. DD, YYYY hh:mm A';
    const [inputText, setInputText] = useState(null);
    const [pickerIndex, setPickerIndex] = useState(-1);
    const [pickerValues, setPickerValues] = useState([]);
    const [datePickerOpen, setdatePickerOpen] = useState(false);
    const [date, setDate] = useState(null);
    const {isFresh} = route.params ?? false
    let FormData = require('form-data');
    let savePressed = false;
    const [refreshCount, setRefreshCount] = useState(0);
    const [selectedPickerValues, setSelectedPickerValues] = useState([])
    const currentDate = new Date();
    const getDate = inc => {
        return new Date(new Date().setDate(currentDate.getDate() + inc));
    };
    const [minDate, setMinDate] = useState(getDate(1));

    const arrayInitialDraft = [
        {
            title: 'YES',
            value: 'true'
        },
        {
            title: 'NO',
            value: 'false'
        }
    ];
    const [arrayRows, setArrayRows] = useState([
        {
            title: 'Project Name',
            index: 0,
            subtitle: null,
            placeholder: '',
            isRequired: true,
            inputType: 'keyboard',
            value: null,
            apiValue: null,
            isDisabled: false,
            apiKey: 'name',
            inputRef: null,
            options: null,
            selected: null,
            keyboardType: null,
            message: 'Name cannot be blank or contains icons/emojis.'
        },
        {
            title: 'Application Period',
            index: 1,
            subtitle: '(Note you can select an applicant at any time.)',
            placeholder: 'SELECT',
            isRequired: true,
            inputType: 'picker',
            value: null,
            apiValue: null,
            isDisabled: false,
            apiKey: 'application_period',
            inputRef: null,
            options: null,
            selected: null,
            keyboardType: null,
            message: 'Application Period cannot be blank.'
        },
        {
            title: 'Project Deadline',
            index: 2,
            subtitle: '(Pacific Time)',
            placeholder: 'MM-DD-YYYY HH:SS AA',
            isRequired: true,
            inputType: 'datePicker',
            value: null,
            apiValue: null,
            isDisabled: false,
            apiKey: 'project_deadline',
            inputRef: null,
            options: null,
            selected: null,
            keyboardType: null,
            message: 'Deadline cannot be blank.'
        },
        {
            title: 'Do you want an initial draft?',
            index: 3,
            subtitle: null,
            placeholder: 'SELECT',
            isRequired: true,
            inputType: 'picker',
            value: null,
            apiValue: null,
            isDisabled: false,
            apiKey: 'initial_draft_deadline',
            inputRef: null,
            options: arrayInitialDraft,
            selected: null,
            keyboardType: null,
        },
        {
            title: 'Initial Draft Deadline',
            index: 4,
            subtitle: '(Pacific Time)',
            placeholder: 'MM-DD-YYYY HH:SS AA',
            isRequired: true,
            inputType: 'datePicker',
            value: null,
            apiValue: null,
            isDisabled: false,
            apiKey: 'draft_deadline',
            inputRef: null,
            options: null,
            selected: null,
            keyboardType: null,
            message: 'Initial Draft Deadline cannot be blank.'
        },
        {
            title: 'Project Price',
            index: 5,
            subtitle: null,
            placeholder: '$450',
            isRequired: true,
            inputType: 'keyboard',
            value: null,
            apiValue: null,
            isDisabled: false,
            apiKey: 'offer_price',
            inputRef: null,
            options: null,
            selected: null,
            keyboardType: 'numeric',
            message: "Price  be less than 75.00 and greater than 100,000.00."
        },
        {
            title: 'Rebate Code',
            index: 6,
            subtitle: '(Rebates will be issued upon completion of this project.)',
            placeholder: 'Code',
            isRequired: false,
            inputType: 'keyboard',
            value: null,
            apiValue: null,
            isDisabled: false,
            apiKey: 'rebate_code',
            inputRef: null,
            options: null,
            selected: null,
            keyboardType: null
        },
        {
            title: 'Areas of Law',
            index: 7,
            subtitle: null,
            placeholder: 'SELECT ALL THAT APPLY',
            isRequired: true,
            inputType: 'pickerMultiSelect',
            value: null,
            apiValue: null,
            isDisabled: false,
            apiKey: 'industry_ids',
            inputRef: null,
            options: null,
            selected: null,
            keyboardType: null,
            message: 'Area of Law cannot be blank.'
        },
        {
            title: 'Project Type',
            index: 8,
            subtitle: null,
            placeholder: 'SELECT ALL THAT APPLY',
            isRequired: true,
            inputType: 'pickerMultiSelect',
            value: null,
            apiValue: null,
            isDisabled: false,
            apiKey: 'project_type_ids',
            inputRef: null,
            options: null,
            selected: null,
            keyboardType: null,
            message: 'Project Type cannot be blank.'
        },
        {
            title: 'Project Complexity',
            index: 9,
            subtitle: null,
            placeholder: 'SELECT',
            isRequired: true,
            inputType: 'picker',
            value: null,
            apiValue: null,
            isDisabled: false,
            apiKey: 'required_skill',
            inputRef: null,
            options: null,
            selected: null,
            keyboardType: null,
            message: 'Project Complexity cannot be blank.'

        },
        {
            title: 'Post Project to',
            index: 10,
            subtitle: null,
            placeholder: 'SELECT ',
            isRequired: true,
            inputType: 'picker',
            value: null,
            apiValue: null,
            isDisabled: false,
            apiKey: 'project_type',
            inputRef: null,
            options: null,
            selected: null,
            keyboardType: null,
            message: 'Please mention where you want to post project.'
        },
        {
            title: 'Select Lawclerk from Team',
            index: 11,
            subtitle: null,
            placeholder: 'SELECT',
            isRequired: true,
            inputType: 'picker',
            value: null,
            apiValue: null,
            isDisabled: false,
            apiKey: 'team_member_id',
            inputRef: null,
            options: null,
            selected: null,
            keyboardType: null,
            message: 'Please select Lawclerk from Team.'
        }
    ]);
    const [inviteRowOption, setInviteRowOption] = useState({
        title: 'Select Lawclerk from Team',
        index: 11,
        subtitle: null,
        placeholder: 'SELECT',
        isRequired: true,
        inputType: 'picker',
        value: null,
        apiValue: null,
        isDisabled: false,
        apiKey: 'team_member_id',
        inputRef: null,
        options: null,
        selected: null,
        keyboardType: null,
        message: 'Please select Lawclerk from Team.'
    });
    useEffect(() => {
        updateRowsOptions(8, projectType);
    }, [projectType]);
    useEffect(() => {
        updateRowsOptions(1, applicationPeriod);
    }, [applicationPeriod]);
    useEffect(() => {
        updateRowsOptions(7, industries);
    }, [industries]);
    useEffect(() => {
        updateRowsOptions(9, skillLevel);
    }, [skillLevel]);
    useEffect(() => {
        updateRowsOptions(10, projectTypeList);
    }, [projectTypeList]);
    useEffect(() => {
        updateRowsOptions(11, teamMembersList)
    }, [teamMembersList]);
    useEffect(() => {
        !!postProjectDetail && projectDetailAction(userEmail, access_token, client, postProjectDetail?.id ?? null, false, postProjectDetail?.wizard_step ?? 'about', (data, success) => {
            console.log('Project refreshed');
        })
    }, [])
    useEffect(() => {
        if (arrayRows[0].title == projectDetail?.name && savePressed == true) {
            savePressed = false;
            console.log('Changed project ' + projectDetail);
        }
    }, [projectDetail]);
    useEffect(() => {
		//adaptData()
	}, [showProject])



    const updateRowsOptions = (index, options) => {
        if (options && (options?.length ?? 0) > 0 && index < arrayRows.length) {
            let arr = arrayRows;
            arr[index].options = options;
            setArrayRows(arr);
        }
    };
    const manageAttorneyRow = (index, selectedValue, array) => {
        return array
        if (index == 10 && selectedValue.length > 0) {
            if (selectedValue[0].value != 'invitation' && array.length > 11) {
                let arr = array;
                arr.pop();
                return arr;

            } else if (selectedValue[0].value == 'invitation' && array.length <= 11) {
                let arr = [...array, inviteRowOption];
                return arr;

            }
            else {
                return array;
            }
        }
        else {
            return array;
        }
    }
    const onChangePickerValue = () => {
        if (arrayRows && pickerIndex >= 0) {
            let arr = arrayRows;
            arr[pickerIndex].value = getValues(selectedPickerValues);
            arr[pickerIndex].selected = selectedPickerValues;
            if (pickerIndex + 1 < arrayRows.length) {
                arr[pickerIndex + 1].isDisabled = checkForDisable();
            }
            const arr2 = manageAttorneyRow(pickerIndex, selectedPickerValues, arr)
            setArrayRows(arr2);
        }
    };
    const checkForDisable = () => {
        if (pickerIndex == 3 && selectedPickerValues[0]?.title != 'YES') {
            return true;

        } else {

        }
    };
    useEffect(() => {
        onChangePickerValue();
    }, [selectedPickerValues]);
    const getValues = arraySelectedOptions => {
        let string = '';
        arraySelectedOptions.map(item => {
            string = string + ' ' + item.title + ',';
        });
        return string.length > 0 ? string.slice(0, -1) : string;
    };



    useEffect(() => {
        applicationPeriodListAction(userEmail, access_token, client);
        skillLevelListAction(userEmail, access_token, client);
        industriesListAction(userEmail, access_token, client);
        projectTypeListAction(userEmail, access_token, client);
        teamMemberListAction(userEmail, access_token, client);
        projectTypeAction(userEmail, access_token, client);
       // adaptData()
    }, [])


   {/*const adaptData = () => {
		!!showProject?.name && updateRowValueStrings(0, showProject?.name, [showProject?.name], arrayRows);
		!!isFresh == false && !!showProject?.project_deadline &&
			updateRowValueStrings(2, moment(showProject?.project_deadline).format(dateFormat), [
				showProject?.project_deadline
			], arrayRows);
		!!isFresh == false && !!showProject?.draft_deadline &&
			updateRowValueStrings(4, moment(showProject?.draft_deadline).format(dateFormat), [
				showProject?.draft_deadline
			], arrayRows);
		!!showProject?.offer_price &&
			updateRowValueStrings(5, showProject?.offer_price, [showProject?.offer_price], arrayRows);
		!!isFresh == false && !!showProject?.rebate_code &&
			updateRowValueStrings(6, showProject?.rebate_code, [showProject?.rebate_code], arrayRows);
		!!isFresh == false && !!showProject?.application_period &&
			adaptPickerPreselection(showProject?.application_period, 1, applicationPeriod);

		!!showProject?.required_skill && adaptPickerPreselection(showProject?.required_skill, 9, skillLevel);

		adaptPickerPreselection(showProject?.initial_draft_deadline, 3, arrayInitialDraft);
		!!isFresh == false && !!showProject?.project_type && adaptPickerPreselection(showProject?.project_type, 10, projectTypeList);
		!!showProject?.team_member_id && adaptPickerPreselection(showProject?.team_member_id, 11, teamMembersList);

		!!showProject?.industry_ids && adaptPickerPreselection(showProject?.industry_ids, 7, industries)
		!!showProject?.project_type_ids && adaptPickerPreselection(showProject?.project_type_ids, 8, projectType)
	};

	const adaptPickerPreselection = (value, index, options) => {
		if (index == 3) {
			let newValue = value ?? true ? 'true' : 'false';
			let selected = getPreselectPickerOption(options, newValue);
			updateRowValueStrings(index, getValues(selected), selected, arrayRows);
		}
		else if (index == 7 || index == 8) {
			let selected = getPreselectPickerOptions(options, value);
			updateRowValueStrings(index, getValues(selected), selected, arrayRows);
		}
		else {
			
			let selected = getPreselectPickerOption(options, value);
			if (index == 10 && arrayRows.length <= 11 && !!selected) {
				let array = manageAttorneyRow(index, selected, arrayRows)
				updateRowValueStrings(index, getValues(selected), selected, array);
				setRefreshCount(refreshCount + 1);
			}
			else {
				updateRowValueStrings(index, getValues(selected), selected, arrayRows);
			}
		}
	};

	const getPreselectPickerOption = (array, value) => {
		return array.filter(data => {
			return data.value === value;
		});
	};

	const getPreselectPickerOptions = (array, values) => {
		var arr = array.filter(data => {
			return values.includes(data.value);
		});
		return arr
	};*/}


    useEffect(() => {
        let formatted = moment(date).format(dateFormat);
        updateRowValueStrings(pickerIndex, formatted, [date], arrayRows);
    }, [date]);
    const renderRowIcon = item => {
        if (!item || !item.inputType) {
            return null;
        }
        return (
            <>
                {needSeparator(item?.inputType) && <View style={styles.rowInputSeparator} />}
                {item?.inputType != 'keyboard' && (
                    <Image source={getIcon(item?.inputType)} resizeMode={'cover'} style={styles.inputRightIcon} />
                )}
            </>
        );
    };
    const needSeparator = type => {
        if (type) {
            return type == 'picker' || type == 'pickerMultiSelect';
        } else {
            return false;
        }
    };
    const getIcon = type => {
        if (type) {
            if (type == 'datePicker') {
                return require('../../Assests/Images/post_calender.png');
            } else {
                return require('../../Assests/Images/post_down_arrow.png');
            }
        } else {
            return null;
        }
    };
    const setDateRange = () => {
        if (!!arrayRows[1]?.selected) {
            if (arrayRows[1]?.selected === undefined || arrayRows[1]?.selected?.length == 0) {
                return
            }
            let value = arrayRows[1]?.selected[0]?.value;
            switch (value) {
                case 'P2D':
                    setMinDate(getDate(2));
                    break;
                case 'P1D':
                    setMinDate(getDate(1));
                    break;
                case 'P3D':
                    setMinDate(getDate(3));
                    break;
                default:
                    setMinDate(getDate(7));
            }
            setRefreshCount(refreshCount + 1);
        }

    };

    const getText = item => {
        if (!!inputText && inputText?.index == item.index) {
            return inputText?.value ?? item.value;
        } else {
            return item.value;
        }
    };
    const setPickerDataset = index => {
        setPickerIndex(index);
        setPickerValues(arrayRows[index]?.options ?? []);
        setDateRange()
    };
    const handleTap = (item, index) => {
        if (item.inputType == 'keyboard') {
            setPickerIndex(index);
            lastRef = item?.inputRef?.focus();
        } else if (item.inputType == 'datePicker') {
            if (index == 4 && (arrayRows[3].value == ' NO' || arrayRows[3].value == 'NO')) {
                return
            }
            Keyboard.dismiss();
            if (!!date == false) {
                setDate(minDate)
            }
            setdatePickerOpen(true);
            setPickerDataset(index);
        }
        else {
            Keyboard.dismiss();
            setPickerDataset(index);
            toggleCustomPicker(!showingCustomPicker, true);
        }
    };
    const updateRowValueStrings = (index, string, array, parentArray) => {
        if (parentArray && index >= 0 && index < parentArray.length) {
            parentArray[index].value = string;
            parentArray[index].selected = array;
            let array2 = parentArray;
            setArrayRows(array2);

        }
    };
    const renderTextfieldRow = (item, index) => {
        return (
            <View style={styles.rowContainer}>
                <Text style={styles.rowTitle}>{item.isRequired ? (item.title ?? '') + '*' : item.title ?? ''}</Text>
                {!!item.subtitle && <Text style={styles.rowSubtitle}>{item.subtitle}</Text>}
                <TouchableOpacity
                    onPress={() => {
                        !item.isDisabled && handleTap(item, index);
                    }}
                    dilsabled={item.isDisabled}
                >
                    <View style={styles.rowInputContainer}>
                        <TextInput
                            style={styles.rowInputView}
                            placeholder={item.placeholder}
                            keyboardType={item.keyboardType ?? 'default'}
                            ref={ref => {
                                item.inputRef = ref;
                            }}
                            value={item.isDisabled ? null : getText(item)}
                            onChangeText={event => {

                                if (pickerIndex == 6) {
                                    event.length <= 15 && setInputText({ index: item.index, value: event });
                                }

                                else if (pickerIndex == 5) {
                                    if (isPriceValid(event)) {
                                        setInputText({ index: item.index, value: event });
                                    }
                                } else {
                                    setInputText({ index: item.index, value: event });
                                }
                            }}
                            onEndEditing={event => {
                                const { text } = event.nativeEvent;
                                updateRowValueStrings(item.index, text, [text], arrayRows);
                            }}
                        />
                        {renderRowIcon(item)}
                    </View>
                </TouchableOpacity>
            </View>
        );
    };

    const isPriceValid = (event) => {
        let containHyphen = /[,\-]/.test(event)
        let nonDecimal = event.split(".")[0].length <= 7
        let decimal = event.split(".").length > 1 ? event.split(".")[1].length <= 2 : true
        return nonDecimal && decimal && !containHyphen && event.split(".").length <= 2
    }
    const showRow = (index) => {
        if (index == 11) {
            return arrayRows[10].value == " INVITE A LAWCLERK ON MY TEAM";
        }
        else {
            return true;
        }
    }
    const renderRowList = () => {
        return (
            <View style={styles.listCotainer}>
                {arrayRows.map((item, index) => {
                    if (showRow(index)) {
                        return renderTextfieldRow(item, index);
                    }
                })}
            </View>
        );
    };
    const isValid = () => {
        const message = getValidationMessage();
        message.length > 0 && Alert.alert(message, '', [{ text: 'OK' }]);
        return !(message.length > 0)
    };
    const getValidationMessage = () => {
        const invalid = arrayRows.filter(item => {
            if (item.apiKey == 'draft_deadline') {
                if (arrayRows[3].value != ' NO') {
                    return item.isRequired == true && ((item.value ?? "").length == 0)
                }
                else {
                    return false;
                }
            }
            else if (item.apiKey == 'team_member_id') {
                if (arrayRows[10].value != ' MARKETPLACE') {
                    return item.isRequired == true && ((item.value ?? "").length == 0)
                }
                else {
                    return false;
                }
            }
            else {
                return item.isRequired == true && (((item.value ?? "").length == 0) || containsEmogi(item?.value ?? ""))
            }
        })
        return invalid.length > 0 ? invalid[0].message ?? "" : ""
    }
    const containsEmogi = (value) => {
        let regex = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g
        return regex.test(value)
    }
    const getRequestBody = isSave => {
        var data = new FormData();
        var validationMessage = arrayRows.filter(item => {
            item.value == null && item.message != null;
        })[0];
        arrayRows.map(item => {
            if (item.value) {
                if (item.inputType == 'keyboard' || item.inputType == 'datePicker') {
                    if (item.index == 4 && arrayRows[3].value == ' NO') {
                        data.append('project[' + item.apiKey + ']', null);
                    } else {
                        data.append('project[' + item.apiKey + ']', item.value);
                    }
                } else if (item.inputType == 'picker') {
                    !!item.selected &&
                        item.selected[0].value &&
                        data.append('project[' + item.apiKey + ']', item.selected[0].value);
                } else if (item.inputType == 'pickerMultiSelect') {
                    item.selected.map(subItem => {
                        subItem.value && data.append('project[' + item.apiKey + '][]', subItem.value);
                    });
                }
            } else {
                validationMessage = 'Please enter the required field.';
            }
        });

        data.append('project[target_step_cursor]', isSave ? 'save_as_draft' : 'next');
        data.append('project[created_method]', 'store');
        data.append('id', 'about');
        return data;
    };
    const renderSaveButton = () => {
        return (
            <TouchableOpacity
                style={styles.saveContainer}
                onPress={() => {
					if (isValid()) {
						let data = getRequestBody(true);
						savePressed = true;
						const params = {}
						postProjectAction(userEmail, access_token, client, data, params, (data, success) => {
							console.log('callback received ' + success + data);
							if (success) {
								Alert.alert('Draft is saved successfully!!', '', [{ text: 'OK' }]);
							} else if (!!data) {
								Alert.alert(data, '', [{ text: 'OK' }]);
							}
						});
					}
				}}>
                <Text style={styles.save}>
                    SAVE AS DRAFT
                </Text>
            </TouchableOpacity>
        );
    };
    const renderNextButton = () => {
        return (
            <TouchableOpacity
                style={styles.nextContainer} 
                onPress={() => {
					if (isValid()) {
						let data = getRequestBody(false);
						savePressed = true;
						const params = {}
						postProjectAction(userEmail, access_token, client, data, params, ( data,success) => {
							console.log('callback received ' + success + data);
							if (success) {
								navigation.navigate('PostProjectScene2',{showProject:showProject});
							} else if (!!data) {
								Alert.alert(data, '', [{ text: 'OK' }]);
							}
						});
					}
				}}
            >
                <Text style={styles.next}>NEXT</Text>
            </TouchableOpacity>
        );
    };
   
    return (
        <SafeAreaView>
            <KeyboardAwareScrollView>
                <View style={styles.card}>
                    {renderRowList()}
                    {renderNextButton()}
                </View>
                {renderSaveButton()}
            </KeyboardAwareScrollView>
            <CustomPickerComp
                pickerItems={pickerValues}
                isMulti={arrayRows ? arrayRows[pickerIndex]?.inputType == 'pickerMultiSelect' : false}
                onChange={selectedArray => {
                    setSelectedPickerValues(selectedArray);
                }}
                selectedArray={arrayRows[pickerIndex]?.selected ?? []}
            />
            <DatePicker
                modal
                mode="datetime"
                minimumDate={pickerIndex != 4 ? minDate : new Date()}
                open={datePickerOpen}
                date={!!date ? date : (pickerIndex != 4 ? minDate : currentDate)}
                onConfirm={date => {
                    setdatePickerOpen(false);
                    setDate(date);
                }}
                onCancel={() => {
                    setdatePickerOpen(false);
                }}
            />
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    save: {
        fontWeight: '500',
        fontSize: 16,
        alignSelf: 'center',
        color: '#C5B15D'
    },
    saveContainer: {
        borderWidth: 1,
        height: 38,
        margin: 20,
        borderRadius: 8,
        flex: 1,
        borderColor: '#C5B15D',
        justifyContent: 'center'
    },
    nextContainer: {
        backgroundColor: '#C5B15D',
        flex: 1,
        height: 50,
        justifyContent: 'center',
    },
    next: {
        fontWeight: '500',
        fontSize: 16,
        alignSelf: 'center',
        color: 'white'
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
        overflow: 'hidden'
    },
    rowContainer: {
        marginHorizontal: 20,
        marginVertical: 10
    },
    rowTitle: {
        fontSize: 12,
        fontWeight: '600',
        color: '#5E5E5E'
    },
    listCotainer: {
        marginVertical: 10
    },
    rowSubtitle: {
        fontSize: 10,
        fontWeight: '300',
        color: '#5E5E5E',
        fontStyle: 'italic'
    },
    rowInputContainer: {
        marginTop: 5,
        height: 38,
        borderRadius: 4,
        flex: 1,
        borderColor: '#E6E6E6',
        backgroundColor: '#F7F7F7',
        flexDirection: 'row',
        alignItems: 'center'
    },
    rowInputView: {
        fontSize: 12,
        color: '#989898',
        marginLeft: 16,
        height: '100%',
        flex: 1
    },
    rowInputSeparator: {
        width: 1,
        height: 20,
        backgroundColor: '#DCD8D2',
        marginHorizontal: 10
    },
    rowInputView: {
        fontSize: 12,
        color: '#989898',
        marginLeft: 16,
        height: '100%',
        flex: 1
    },
    inputRightIcon: {
        height: 20,
        width: 20,
        marginRight: 10
    }
})
const mapStateToProps = state => {
    return {
        showingCustomPicker: state.PickerReducer.showingCustomPicker,
        access_token: state.Login.access_token,
        client: state.Login.client,
        userEmail: state.Login.email,
        applicationPeriod: state.FilterReducer.applicationPeriod,
        industries: state.FilterReducer.industries,
        skillLevel: state.FilterReducer.skillLevel,
        projectTypeList: state.FilterReducer.projectTypeList,
        teamMembersList: state.FilterReducer.teamMembersList,
        postProjectDetail: state.FilterReducer.postProjectDetail,
        showProject: state.FilterReducer.showProject,
        projectType: state.FilterReducer.projectType,
        projectDetail: state.FilterReducer.projectDetail,
    };
};
const mapDispatchToProps = dispatch => {
    return {
        toggleCustomPicker: (show, Blur) => dispatch(toggleCustomPicker(show, Blur)),
        applicationPeriodListAction: (userEmail, access_token, client) =>
            dispatch(applicationPeriodListAction(userEmail, access_token, client)),
        industriesListAction: (userEmail, access_token, client) =>
            dispatch(industriesListAction(userEmail, access_token, client)),
        projectTypeAction: (userEmail, access_token, client) => dispatch(projectTypeAction(userEmail, access_token, client)),
        skillLevelListAction: (userEmail, access_token, client) =>
            dispatch(skillLevelListAction(userEmail, access_token, client)),
        projectTypeListAction: (userEmail, access_token, client) =>
            dispatch(projectTypeListAction(userEmail, access_token, client)),
        teamMemberListAction: (userEmail, access_token, client) =>
            dispatch(teamMemberListAction(userEmail, access_token, client)),
        postProjectAction: (userEmail, access_token, client, formdata, params, callback) =>
            dispatch(postProjectAction(userEmail, access_token, client, formdata, params, callback)),
        projectTypeAction: (userEmail, access_token, client) => dispatch(projectTypeAction(userEmail, access_token, client)),
        projectDetailAction: (userEmail, access_token, client, id, isNew, step, callback) =>
            dispatch(projectDetailAction(userEmail, access_token, client, id, isNew, step, callback)),
    };

};
export default connect(mapStateToProps, mapDispatchToProps)(PostProjectScene)