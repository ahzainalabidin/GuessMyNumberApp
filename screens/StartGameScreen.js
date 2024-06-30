import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";

import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";

const StartGameScreen = ({ onPickNumber }) => {

    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    }

    function resetInputHandler() {
        setEnteredNumber('');
    }

    function confirmInputHandler() {

        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid number!',
                'Number has to be a number between 1 and 99.',
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
            )
            return;
        }

        onPickNumber(chosenNumber);

    }

    return (
        <View style={styles.rootContainer}>

            <Title>Guess My Number</Title>

            <View style={styles.inputContainer}>

                <Text style={styles.instructionText}>
                    Enter a Number
                </Text>

                <TextInput
                    style={styles.numberInput}
                    maxLength={2}
                    keyboardType="number-pad"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={numberInputHandler}
                    value={enteredNumber}
                />

                <View style={styles.buttonsContainer}>

                    <View style={styles.buttonContainer}>
                        <PrimaryButton onTouch={resetInputHandler}>Reset</PrimaryButton>
                    </View>

                    <View style={styles.buttonContainer}>
                        <PrimaryButton onTouch={confirmInputHandler}>Confirm</PrimaryButton>
                    </View>

                </View>

            </View>

        </View>
    );

}

export default StartGameScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center'
    },
    inputContainer: {
        alignItems: 'center',
        marginTop: 36,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
    instructionText: {
        color: Colors.accent500,
        fontSize: 24
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomWidth: 2,
        borderBottomColor: Colors.accent500,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    }
});
