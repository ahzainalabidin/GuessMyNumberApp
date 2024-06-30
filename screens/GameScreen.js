import { Alert, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';

import NumberContainer from '../components/game/NumberContainer';
import Title from '../components/ui/Title';
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from '../components/ui/Card';

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

const GameScreen = ({ actualNumber, onGameOver }) => {

    const initialGuess = generateRandomBetween(
        1,
        100,
        actualNumber
    );

    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    useEffect(() => {
        if (currentGuess === actualNumber) {
            onGameOver();
        }
    }, [currentGuess, actualNumber, onGameOver]);

    function nextGuessHandler(direction) {

        if (
            (direction === 'lower' && currentGuess < actualNumber) ||
            (direction === 'greater' && currentGuess > actualNumber)
        ) {

            Alert.alert(
                "Don't lie!",
                'You know that this is wrong...',
                [{ text: 'Sorry!', style: 'cancel' }]
            );

            return;

        }

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

            <Card>

                <Text>Higher or Lower?</Text>

                <View>
                    <PrimaryButton onTouch={nextGuessHandler.bind(this, 'lower')}>
                        -
                    </PrimaryButton>
                    <PrimaryButton onTouch={nextGuessHandler.bind(this, 'greater')}>
                        +
                    </PrimaryButton>
                </View>

            </Card>

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
