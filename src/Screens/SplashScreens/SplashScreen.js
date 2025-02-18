import React, {useState, useEffect, useRef} from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import {ICONS} from '../../Constants/icons';
import {useNavigation} from '@react-navigation/native';

const AnimationManager = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigation = useNavigation();

  // Navigate to Welcome screen after showing LogoIcon
  if (activeIndex === 3) {
    setTimeout(() => {
      navigation.replace('WelcomeScreen'); // Navigate after the last animation
    }, 2000); // Adjust timing based on animation duration
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex(prev => (prev < 3 ? prev + 1 : 0)); // Looping animation
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Splash2 isActive={activeIndex === 0} />
      <Splash3 isActive={activeIndex === 1} />
      <Splash4 isActive={activeIndex === 2} />
      <ChemiCure isActive={activeIndex === 3} />
    </View>
  );
};

const Splash2 = ({isActive}) => {
  const scale = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(scale, {
      toValue: isActive ? 1 : 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [isActive]);

  return (
    <Animated.View style={[styles.absolute, {transform: [{scale}]}]}>
      <ICONS.smallIcon />
    </Animated.View>
  );
};

const Splash3 = ({isActive}) => {
  const scale = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(scale, {
      toValue: isActive ? 1 : 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [isActive]);

  return (
    <Animated.View style={[styles.absolute, {transform: [{scale}]}]}>
      <ICONS.largeIcon />
    </Animated.View>
  );
};

const Splash4 = ({isActive}) => {
  const animValue = useRef(new Animated.Value(0)).current;
  const [showIcon, setShowIcon] = useState(false);

  useEffect(() => {
    if (isActive) {
      setShowIcon(true);
      Animated.timing(animValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    } else {
      setShowIcon(false);
      animValue.setValue(0);
    }
  }, [isActive]);

  const leafTranslateX = animValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -50], // Adjust movement left
  });

  const textOpacity = animValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  return (
    <Animated.View
      style={[
        styles.absolute,
        {flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}, // Aligning items properly
      ]}>
      {showIcon && (
        <Animated.View
          style={[
            styles.smallLeaf,
            {transform: [{translateX: leafTranslateX}]},
          ]}>
          <ICONS.mediamIcon />
        </Animated.View>
      )}
      <Animated.View style={{opacity: textOpacity}}>
        <ICONS.splashText />
      </Animated.View>
    </Animated.View>
  );
};

const ChemiCure = ({isActive}) => {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: isActive ? 1 : 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [isActive]);

  return (
    <Animated.View style={[styles.absolute, {opacity}]}>
      <ICONS.logoIcon />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  absolute: {
    position: 'absolute',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
});

export default AnimationManager;
