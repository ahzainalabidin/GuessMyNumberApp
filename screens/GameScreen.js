import { StyleSheet, Text, View } from 'react-native';

const GameScreen = () => {
    return (
        <View style={styles.screen}>

            <Text>Opponent's Guess</Text>

            <Text>Guess</Text>

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
