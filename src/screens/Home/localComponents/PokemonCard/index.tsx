import React, {memo, useEffect, useState} from 'react';
import Separator from '~/components/Separator';
import {
  AnimatedView,
  BackgroundImg,
  Container,
  Img,
  TextDummy,
  TextName,
  TextType,
} from './styles';
import {Props} from './types';
import pokeBallImage from '~/assets/images/pokeball.png';
import usePokemonCardController from './usePokemonCardController';
import {Animated, Easing} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const PokemonCard = ({item, index, scrollY, numColumns}: Props) => {
  const {
    checkIfItemIsLeft,
    getBackgroundColorByType,
    handleNavigateToInternal,
  } = usePokemonCardController({item});

  const {navigate} = useNavigation();

  // const SPACING = 6.5;
  // const AVATAR_SIZE = 110;
  // const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;

  // const inputRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 2)];
  // const opacityInputRange = [
  //   -1,
  //   0,
  //   ITEM_SIZE * index,
  //   ITEM_SIZE * (index + 0.5),
  // ];

  const HIGHT_OF_ITEM = 110;
  const HIGHT_OF_CONTAINER = HIGHT_OF_ITEM + 20;

  const InputCalc = value => {
    return value + HIGHT_OF_CONTAINER * Math.floor(index / numColumns);
  };

  const opacityInputRange = [
    InputCalc(0),
    InputCalc(50),
    InputCalc(80),
    InputCalc(100),
  ];

  const scale = scrollY.interpolate({
    inputRange: opacityInputRange,
    outputRange: [1, 0.5, 0.3, 0],
    extrapolate: 'clamp',
  });

  const opacity = scrollY.interpolate({
    inputRange: opacityInputRange,
    outputRange: [1, 0.5, 0.3, 0],
    extrapolate: 'clamp',
  });

  const rotateX = scrollY.interpolate({
    inputRange: opacityInputRange,
    outputRange: ['0deg', '180deg', '300deg', '360deg'],
    extrapolate: 'clamp',
  });

  const translateX = scrollY.interpolate({
    inputRange: opacityInputRange,
    outputRange: [1, 0.5, 0.3, 500],
    extrapolate: 'clamp',
  });

  const spinValue = new Animated.Value(0);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const startAnimation = () => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  };

  const stopAnimation = () => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).stop();
  };

  const handleNavigateToInternal2 = async () => {
    startAnimation();

    setTimeout(() => {
      navigate('Internal', {item});
      stopAnimation();
      return () => spinValue.setValue(0);
    }, 1500);
  };

  return (
    <AnimatedView
      style={[
        {
          opacity: opacity,
          transform: [{scale}],
        },
      ]}>
      <Container
        onPress={handleNavigateToInternal2}
        isLeft={checkIfItemIsLeft}
        backgroundColor={getBackgroundColorByType}>
        <BackgroundImg
          source={pokeBallImage}
          style={{transform: [{rotate: spin}]}}
        />
        <Img source={{uri: item?.img}} />
        <TextName>{item?.name}</TextName>
        <Separator height={10} />
        <TextType>{item?.type?.[0]}</TextType>
        <Separator height={5} />
        {item?.type?.[1] ? (
          <TextType>{item?.type?.[1]}</TextType>
        ) : (
          <TextDummy />
        )}
      </Container>
    </AnimatedView>
  );
};

export default memo(PokemonCard);
