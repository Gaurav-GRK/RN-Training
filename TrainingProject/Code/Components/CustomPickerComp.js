import React, {useEffect, useRef, useState} from 'react';
import {
  Button,
  View,
  Text,
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  ImageBackground,
  BackHandler,
  RefreshControl,
  Alert,
} from 'react-native';
import { toggleCustomPicker } from '../Redux/Picker/Action';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import Animated from 'react-native-reanimated';
import {connect} from 'react-redux';

function CustomPickerComp({
  toggleCustomPicker,
  showingCustomPicker,
  isMulti,
  pickerItems,
  onChange,
  selectedArray,
  title,
}) {
  const [arraySelectedOptions, setarraySelectedOptions] = useState(
    selectedArray ?? [],
  );
  const [refreshCount, setRefreshCount] = useState(0);

  useEffect(() => {
    showingCustomPicker
      ? setarraySelectedOptions(selectedArray)
      : setarraySelectedOptions([]);
    setRefreshCount(refreshCount + 1);
  }, [showingCustomPicker]);

  useEffect(() => {
    if (showingCustomPicker) {
      onChange(arraySelectedOptions);
    }
  }, [arraySelectedOptions]);

  const toggleSelection = item => {
    if (isItemSelected(item)) {
      const arr = isMulti
        ? arraySelectedOptions.filter(itm => itm.title != item.title)
        : [];
      arr?.length > 0 && setarraySelectedOptions(arr);
    } else {
      const arr = isMulti ? [...arraySelectedOptions, item] : [item];
      arr?.length > 0 && setarraySelectedOptions(arr);
    }
    setRefreshCount(refreshCount + 1);
  };

  const isItemSelected = item => {
    return arraySelectedOptions?.some(itm => itm.title === item.title && itm.value === item.value );
  };

  const renderSelectedOptions = () => {
    return (
      <View key={refreshCount} style={styles.selectedOptionsContainer}>
        <Text style={{padding: 10}}>{getSelectedStrings()}</Text>
      </View>
    );
  };

  const renderRow = ({item}) => {
    return (
      <View>
        <TouchableOpacity
          style={styles.row}
          onPress={() => {
            toggleSelection(item);
          }}>
          <Text style={{width: '98%', paddingRight: 20,}}>{item.title}</Text>
          <Image
            source={
              isItemSelected(item)
                ? require('../Assests/Images/radio_active.png')
                : require('../Assests/Images/radio_inactive.png')
            }
            style={styles.selectorIcon}
          />
        </TouchableOpacity>
        <View style={styles.separator} />
      </View>
    );
  };

  
  const getSelectedStrings = () => {
    let string = '';
    arraySelectedOptions.map(item => {
      string = string + ' ' + item.title + ',';
    });
    return (string ?? '').length > 0 ? string.slice(0, -1) : string;
  };
  const renderTitle = () => {
   
    return (
      <View style={{marginHorizontal: 20, marginVertical: 10, alignItems: 'center'}}>
        <Text style={{fontSize: 14, fontWeight: '600'}}>{title}</Text>
      </View>
    )
    
  }

  return (
    <Animated.View
      style={{
        ...styles.container,
        transform: [{translateY: showingCustomPicker ? 0 : 500}],
      }}>
      <View style={styles.line} />
      {!!title && renderTitle()}
      {isMulti && !!arraySelectedOptions && arraySelectedOptions?.length > 0 && renderSelectedOptions()}
     

      <FlatList
        scrollEnabled={true}
        style={styles.listCotainer}
        data={pickerItems}
        renderItem={renderRow}
      />
    </Animated.View>
    );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    paddingBottom: 50,
    borderRadius: 8,
    maxHeight: 500
  },
  line: {
    width: 40,
    height: 3,
    marginTop: 20,
    alignSelf: 'center',
    backgroundColor: 'gray',
  },
  title: {
    fontWeight: '700',
    fontSize: 14,
    color: '#9B9B9B',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 25,
  },
  selectedOptionsContainer: {
    margin: 10,
    backgroundColor: '#f4f4f4',
    borderRadius: 4,
    maxHeight: 200

  },
  row: {
    // height: 65,
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 15,
    paddingBottom: 7,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowIcon: {
    marginLeft: -25,
    height: 50,
    width: 50,
  },
  rowTitle: {
    flexGrow: 1,
    width: '70%',
    fontWeight: '700',
    fontSize: 14,
    color: 'gray',
    marginLeft: 20,
    // alignSelf: 'center',
  },
  selectorIcon: {
    height: 20,
    width: 20,
  },
  downArrow: {
    height: 20,
    width: 20,
    alignSelf: 'center',
    marginRight: 28,
  },
  optionRow: {
    height: 35,
    marginLeft: 70,
    marginRight: 20,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#3B4C5C',
    flexDirection: 'row',
    alignItems: 'center',
  },
  subIcon: {
    height: 15,
    width: 15,
    alignSelf: 'center',
    marginLeft: 15,
  },
  subTitle: {
    fontSize: 12,
    fontWeight: '400',
    color: 'white',
    marginLeft: 15,
    marginRight: 15,
  },
  listCotainer: {
    marginVertical: 10,
    height: 5 * 30,
  },
  separator: {
    marginTop: 10,
    width: '100%',
    height: 1,
    alignSelf: 'center',
    backgroundColor: '#f4f4f4',
  },
});

const mapStateToProps = state => {
  return {
    showingCustomPicker: state.PickerReducer.showingCustomPicker,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    toggleCustomPicker: (show, Blur) =>
      dispatch(toggleCustomPicker(show, Blur)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CustomPickerComp);
