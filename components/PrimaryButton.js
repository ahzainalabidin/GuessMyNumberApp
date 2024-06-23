import { Pressable, StyleSheet, Text, View } from "react-native";

function pressHandler() {
    console.log('Pressed!');
};

const PrimaryButton = ({ children }) => {
    return (
        <Pressable onPress={pressHandler}>
            <View style={styles.container}>
                <Text>{children}</Text>
            </View>
        </Pressable>
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#72063c',
        borderRadius: 28,
        paddingVertical: 8,
        paddingHorizontal: 16,
        margin: 4,
        elevation: 2
    }
});
