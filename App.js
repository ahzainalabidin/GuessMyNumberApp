import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

export default function App() {

  const [userNumber, setUserNumber] = useState();

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen />
  }

  return (
    <LinearGradient style={styles.rootScreen} colors={['#4e0329', '#ddb52f']}>
      <ImageBackground
        style={styles.rootScreen}
        source={require('./assets/images/background.png')}
        resizeMode='cover'
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient >
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },
  backgroundImage: {
    opacity: 0.15
  }
});
