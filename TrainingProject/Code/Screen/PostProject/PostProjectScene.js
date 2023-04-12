import { Image, Keyboard, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import DatePicker from 'react-native-date-picker';
import { toggleCustomPicker } from '../../Redux/Picker/Action';
import CustomPickerComp from '../../Components/CustomPickerComp';
import { connect } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const PostProjectScene = ({ navigation,
    toggleCustomPicker,
    showingCustomPicker }) => {
    const dateFormat = 'MMM. DD, YYYY hh:mm A';
    const [inputText, setInputText] = useState(null);
    const [pickerIndex, setPickerIndex] = useState(-1);
    const [pickerValues, setPickerValues] = useState([]);
    const [datePickerOpen, setdatePickerOpen] = useState(false);
    const [date, setDate] = useState(null);
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
                    <View style={styles.rowInputContainer} >
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
    const renderNextButton = () => {
        return (
            <TouchableOpacity
                style={styles.nextContainer}
                onPress={() => { navigation.navigate('PostProjectScene2') }}
            >
                <Text style={styles.next}>NEXT</Text>
            </TouchableOpacity>
        );
    };
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
    };
};
const mapDispatchToProps = dispatch => {
    return {
        toggleCustomPicker: (show, Blur) => dispatch(toggleCustomPicker(show, Blur)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(PostProjectScene)