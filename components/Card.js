import React from 'react';
import {View, StyleSheet} from 'react-native';

const Card = (props) => {
    return (
        <View style={{...styles.card, ...props.style}}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        // only works for IOS !!
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26, 

        // only works for Android !!
        elevation: 10,
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10
    }
})

export default Card;