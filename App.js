import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

import Colors from './constants/colors';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [isGameOver, setIsGameOver] = useState(true);

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setIsGameOver(false);
  }

  function gameOverHandler() {
    setIsGameOver(true);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen actualNumber={userNumber} onGameOver={gameOverHandler} />
  }

  if (isGameOver && userNumber) {
    screen = <GameOverScreen />
  }

  return (
    <LinearGradient
      style={styles.rootScreen}
      colors={[Colors.primary700, Colors.accent500]}
    >
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
