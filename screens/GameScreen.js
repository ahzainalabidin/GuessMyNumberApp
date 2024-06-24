import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';

function generateRandomBetween(min, max, exclude) {

    const randomNum = Math.floor(Math.random() * (max - min)) + min;

    if (randomNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return randomNum;
    }

}

const GameScreen = ({ userNumber }) => {

    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    return (
        <View style={styles.screen}>

            <Title>Opponent's Guess</Title>

            <NumberContainer>{currentGuess}</NumberContainer>

            <View>
                <Text>Higher or Lower?</Text>
                <Text>+ -</Text>
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
