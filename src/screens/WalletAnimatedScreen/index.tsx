import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Image, Alert } from 'react-native';
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
  const { t } = useTranslation();
  const { isLoading, isError, error } = useCardList();
  const navigation = useNavigation<WalletAnimatedScreenProps>();

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
    if (isError) {
      Alert.alert(t('Ops, something went wrong'), error?.message, [
        {
          text: 'Voltar',
          onPress: () => navigation.replace('Home'),
        },
      ]);
    }
    if (!isLoading && !isError) {
      navigation.replace('CardList');
    }
  }, [isLoading, isError, navigation, error, t]);

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
