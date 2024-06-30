import { StyleSheet, Text, View } from 'react-native';

const GameOverScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>Game is over!</Text>
        </View>
    );
}

export default GameOverScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    }
});
