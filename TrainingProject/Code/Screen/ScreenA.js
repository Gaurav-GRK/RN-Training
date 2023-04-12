import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Animated from 'react-native-reanimated';
const ScreenA = () => {
	const data = [
		{ title: 'Yes', value: 'true' },
		{ title: 'No', value: 'false' }]
	const [selectedArray, setSelectedArray] = useState('');
	const [isClicked, setIsClicked] = useState(false)
	const [pickerItem, setPickerItem] = useState(data)
	const [isSelected, setIsSelected] = useState(-1)
	const renderList = ({ item,index }) => {
		return (
			<View>
				<TouchableOpacity style={styles.innerList}
					onPress={() => {
						setSelectedArray(item.title)
						setIsSelected(index)
					}}>
					<Text style={styles.innerLisText}>
						{item.title}
					</Text>{
						isSelected == index ? (
							<Image source={require('../Assests/Images/radio_active.png')} style={styles.radioicon} />
						) : (
							<Image source={require('../Assests/Images/radio_inactive.png')} style={styles.radioicon} />
						)}
				</TouchableOpacity>
			</View>
		)
	}
	const innerItems = () => {
		return (
			<>
				<View style={styles.barIcon} />
				<View style={styles.innerTitle}>
					<Text style={styles.innerTextTitle}>
						Select
					</Text>
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
					<FlatList
						data={pickerItem}
						renderItem={renderList}
					/>
				</View>
			) : null}
		</View>
	)
}

export default ScreenA

const styles = StyleSheet.create({
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
		alignSelf: 'center',
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