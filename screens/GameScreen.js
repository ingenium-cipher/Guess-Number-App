import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNum = Math.floor(Math.random()*(max-min)) + min;
    if(randomNum === exclude){
        generateRandomBetween(min, max, exclude);
    } else {
        return randomNum;
    }
}

const GameScreen = (props) => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoice));
    return (
        <View>

        </View>
    )
}

const styles = StyleSheet.create({

})

export default GameScreen;