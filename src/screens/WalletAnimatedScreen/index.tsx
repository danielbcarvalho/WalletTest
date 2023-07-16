import React, { useEffect } from 'react';
import { StyleSheet, Image } from 'react-native';
import Animated, {
  Easing,
  withTiming,
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Container } from './styles';
import { ParamsList } from '../../Routes';
import { useNavigation } from '@react-navigation/native';
import { useCardList } from '../../components/hooks/useCardList';

export type WalletAnimatedScreenProps = NativeStackNavigationProp<
  ParamsList,
  'CardList'
>;
const config = {
  duration: 1000,
  easing: Easing.bezier(0.2, 0.2, 0.2, 0.2),
};

function WalletAnimatedScreen() {
  const { isLoading, isError } = useCardList();
  const { navigate } = useNavigation<WalletAnimatedScreenProps>();

  const width = useSharedValue(400);
  const height = useSharedValue(235);

  const animatedSize = useAnimatedStyle(() => {
    return {
      width: withTiming(width.value, config),
      height: withTiming(height.value, config),
      position: 'absolute',
    };
  });

  useEffect(() => {
    const interval = setInterval(() => {
      width.value = width.value === 460 ? 400 : 460;
      height.value = height.value === 500 ? 235 : 500;
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, [height, width]);

  useEffect(() => {
    if (!isLoading && !isError) {
      navigate('CardList');
    }
  }, [isLoading, isError, navigate]);

  return (
    <Container>
      <Animated.View
        style={[styles.background, styles.backgroundRotateTop, animatedSize]}
      />
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require('../../../assets/images/animationwallet.png')}
      />
      <Animated.View
        style={[styles.background, styles.backgroundRotateBottom, animatedSize]}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    opacity: 0.2,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  backgroundRotateTop: {
    transform: [
      { rotate: '148deg' },
      { translateY: -380 },
      { translateX: 140 },
    ],
  },
  backgroundRotateBottom: {
    transform: [
      { rotate: '-30deg' },
      { translateY: -380 },
      { translateX: 140 },
    ],
  },
  image: {
    width: 115,
    height: 115,
  },
});

export default WalletAnimatedScreen;
