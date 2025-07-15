/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { MotiImage, MotiView } from 'moti';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

        <MotiView
          transition={{ type: 'timing', duration: 500, delay: 200 }}
          from={{ scale: 0, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <MotiImage
            transition={{
              type: 'timing',
              duration: 400,
              loop: true,
              delay: 100,
            }}
            animate={{
              scale: [1, 1.02, 1, 0.98],
              opacity: [1, 0.8],
              transform: [
                {
                  rotateZ: ['0deg', '10deg', '0deg', '10deg', '0deg', '-10deg'],
                },
              ],
            }}
            source={{ uri: 'https://picsum.photos/200/300' }}
            resizeMode="contain"
            style={{ height: 180, width: 180 }}
          />
        </MotiView>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
