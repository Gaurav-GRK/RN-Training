import { StyleSheet, Text, View, TouchableWithoutFeedback, Dimensions } from 'react-native'
import React from 'react'
import { connect } from 'react-redux'
const { width, height } = Dimensions.get('window');

const BackgroundBlur = ({ isBlurViewShown, onTapOutside }) => {
    if (isBlurViewShown == true) {
        return (
            <TouchableWithoutFeedback
                onPress={() => {
                    onTapOutside();
                }}>
                <View style={styles.container} />
            </TouchableWithoutFeedback>
        );
    } else {
        return <></>;
    }

}
const styles = StyleSheet.create({
    container: {
        height: height + 200,
        width: width,
        backgroundColor: 'black',
        opacity: 0.5,
        position: 'absolute',
        bottom: 0,
      },
})
const mapStateToProps = state => {
    return {
        isBlurViewShown: state.PickerReducer.isBlurViewShown,
    };
};

export default connect(mapStateToProps)(BackgroundBlur);