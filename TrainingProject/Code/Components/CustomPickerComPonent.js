import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
const CustomPickerComPonent = ({ navigation }) => {
  const [selectedArray, setSelectedArray] = useState('');
  const [isSelected, setIsSelected] = useState('')
  const [isClicked, setIsClicked] = useState(false)
  const innerList = () => {
    return (
      <View style={styles.dropDownArea1}>
        <TouchableOpacity onPress={() => {
          setIsSelected(!isSelected)
        }}>
          <View style={styles.container4}>
            <Image source={require('../Assests/Images/Team.png')} style={styles.imgfile} />
            <Text style={styles.newProjectText}>
              Build a new Team
            </Text>
            {isSelected ? (
              <Image source={require('../Assests/Images/dropArrow2.png')} style={styles.imgbtn} />
            ) : (
              <Image source={require('../Assests/Images/dropArrow.png')} style={styles.imgbtn1} />
            )}
          </View>
        </TouchableOpacity>
        {
          isSelected ? (
            <View style={styles.dropDownArea}>
              <View style={styles.container4}>
                <Image source={require('../Assests/Images/filemanager.png')} style={styles.imgfile} />
                <Text style={styles.newProjectText}>
                  New Project
                </Text>
              </View>
            </View>
          ) : null
        }
      </View>
    )
  }
  const innerItems = () => {
    return (
      <>
        <View style={styles.barIcon} />
        <View style={styles.innerTitle}>
          <Text style={styles.innerTextTitle}>
            What you Like to do?
          </Text>
          {innerList()}
        </View>
      </>
    )
  }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        CustomPickerComPonent
      </Text>
      <TouchableOpacity style={styles.dropdownSelector}
        onPress={() => {
          setIsClicked(!isClicked)
        }}>
        <Text style={{ color: 'black' }}>
          {selectedArray == '' ? 'Select' : selectedArray}
        </Text>
        {isClicked ? (
          <Image source={require('../Assests/Images/dropArrow2.png')} />
        ) : (
          <Image source={require('../Assests/Images/dropArrow.png')} />
        )}
      </TouchableOpacity>
      {isClicked ? (
        <View style={styles.dropDownArea}>
          {innerItems()}
        </View>
      ) : null}
    </View>
  )
}

export default CustomPickerComPonent

const styles = StyleSheet.create({
  dropDownArea1: {
  },
  imgbtn: {
    marginLeft: 150,
    alignSelf: 'center'
  },
  imgbtn1: {
    marginLeft: 150,
    alignSelf: 'center'
  },
  imgfile: {
    height: 50,
    width: 50,
    backgroundColor: 'white'
  },
  newProjectText: {
    color: 'brown',
    marginLeft: 40,
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 15
  },
  container4: {
    flexDirection: 'row',
    marginTop: 15,
    backgroundColor: 'lightgrey',
  },
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 100,
    alignSelf: 'center',
    color: 'black'
  },
  dropdownSelector: {
    width: '90%',
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#8e8e8e',
    alignSelf: 'center',
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  },
  dropDownArea: {
    width: '100%',
    height: 350,
    borderRadius: 20,
    marginTop: 270,
    backgroundColor: 'white',
    elevation: 5,
    alignSelf: 'center',
  },
  innerTitle: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 16
  },
  innerTextTitle: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600',

  },
  barIcon: {
    width: 70,
    height: 5,
    borderRadius: 3,
    backgroundColor: '#bbb',
    alignSelf: "center",
    marginTop: 12
  },
  innerLisText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '400'
  },
  innerList: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 15,
    paddingLeft: 15
  },
  radioicon: {
    height: 20,
    width: 20
  }
})