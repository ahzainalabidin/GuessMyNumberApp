import { StyleSheet, Text, View } from 'react-native';

const GameScreen = () => {
    return (
        <View style={styles.screen}>

            <Text style={styles.title}>Opponent's Guess</Text>

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
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ddb52f',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#ddb52f',
        padding: 12
    }
});
