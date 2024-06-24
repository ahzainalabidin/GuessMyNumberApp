import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from "../components/ui/PrimaryButton";

function generateRandomBetween(min, max, exclude) {

    const randomNum = Math.floor(Math.random() * (max - min)) + min;

    if (randomNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return randomNum;
    }

}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber }) => {

    const initialGuess = generateRandomBetween(
        minBoundary,
        maxBoundary,
        userNumber
    );

    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    function nextGuessHandler(direction) {

        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }

        const newRandomNum = generateRandomBetween(
            minBoundary,
            maxBoundary,
            currentGuess
        );

        setCurrentGuess(newRandomNum);

    }

    return (
        <View style={styles.screen}>

            <Title>Opponent's Guess</Title>

            <NumberContainer>{currentGuess}</NumberContainer>

            <View>

                <Text>Higher or Lower?</Text>

                <View>
                    <PrimaryButton onTouch={nextGuessHandler.bind(this, 'lower')}>
                        -
                    </PrimaryButton>
                    <PrimaryButton onTouch={nextGuessHandler.bind(this, 'greater')}>
                        +
                    </PrimaryButton>
                </View>

            </View>

            <View>
                <Text>Log Rounds</Text>
            </View>

        </View>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    }
});
