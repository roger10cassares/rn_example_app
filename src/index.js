import React, { useEffect, useRef, useState } from "react";
import { Animated, Dimensions, StyleSheet, Text, View } from "react-native";
import BootSplash from "react-native-bootsplash";

import HomeScreen from './screens/HomeScreen';

import bootSplashLogo from "./assets/bootsplash/logo_bootsplash_1024x1024.png";



let fakeApiCallWithoutBadNetwork = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));

let App = () => {
  let [bootSplashIsVisible, setBootSplashIsVisible] = useState(true);
  let [bootSplashLogoIsLoaded, setBootSplashLogoIsLoaded] = useState(false);
  let opacity = useRef(new Animated.Value(1));
  let translateY = useRef(new Animated.Value(0));

  let init = async () => {
    // You can uncomment this line to add a delay on app startup
    // await fakeApiCallWithoutBadNetwork(3000);

    await BootSplash.hide();

    Animated.stagger(250, [
      Animated.spring(translateY.current, {
        useNativeDriver: true,
        toValue: -150,
      }),
      Animated.spring(translateY.current, {
        useNativeDriver: true,
        toValue: Dimensions.get("window").height,
      }),
    ]).start();

    Animated.timing(opacity.current, {
      useNativeDriver: true,
      toValue: 0,
      duration: 130,
      delay: 750,
    }).start(() => {
      setBootSplashIsVisible(false);
    });
  };

  useEffect(() => {
    bootSplashLogoIsLoaded && init();
  }, [bootSplashLogoIsLoaded]);

  return (
    <View style={styles.container}>
      <View>
        <HomeScreen />
      </View>

      {bootSplashIsVisible && (

        <Animated.View
          style={[
            StyleSheet.absoluteFill,
            styles.bootsplash,
            { opacity: opacity.current },
          ]}
        >

          <Animated.Image
            source={bootSplashLogo}
            fadeDuration={0}
            onLoadEnd={() => setBootSplashLogoIsLoaded(true)}
            style={[
              styles.logo,
              { transform: [{ translateY: translateY.current }] },
            ]}
          />

        </Animated.View>
      )}
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    
  },
  bootsplash: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },
  logo: {
    height: 300,
    width: 300,
  },
});

export default App;