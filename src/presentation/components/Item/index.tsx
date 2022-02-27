import {
  faCartShopping,
  faRotateLeft,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { Dimensions } from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { useTheme } from 'styled-components';

import { ItemComponentProps } from '../../../types/item';
import * as S from './styles';

const { width: screenWidth } = Dimensions.get('screen');

const Item = ({
  name,
  quantity,
  itemColor,
  priorityLevel,
  price,
  onDelete,
  id,
  onTake,
  onGoBack,
  simultaneousHandlers,
}: ItemComponentProps) => {
  const theme = useTheme();
  const translateX = useSharedValue(0);
  const TRANSLATED_X_DELETE_TRESHOLD = -screenWidth * 0.2;
  const TRANSLATED_X_ADD_TRESHOLD = screenWidth * 0.2;

  const itemHeight = useSharedValue(heightPercentageToDP(10));
  const itemOpacity = useSharedValue(1);
  const itemMargin = useSharedValue(heightPercentageToDP(1));

  const panGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
    onActive: event => {
      translateX.value = event.translationX;
    },
    onEnd: () => {
      if (translateX.value < TRANSLATED_X_DELETE_TRESHOLD) {
        translateX.value = withTiming(-screenWidth);
        itemHeight.value = withTiming(0);
        itemOpacity.value = withTiming(0);
        itemMargin.value = withTiming(0, undefined, isFinished => {
          if (isFinished) {
            runOnJS(onDelete)(id);
          }
        });
      } else if (translateX.value > TRANSLATED_X_ADD_TRESHOLD) {
        translateX.value = withTiming(screenWidth);
        itemHeight.value = withTiming(0);
        itemOpacity.value = withTiming(0);
        itemMargin.value = withTiming(0, undefined, isFinished => {
          if (isFinished && onTake) {
            return runOnJS(onTake)(id);
          }
          if (isFinished && onGoBack) {
            return runOnJS(onGoBack)(id);
          }
        });
      } else {
        translateX.value = withTiming(0);
      }
    },
  });

  const reanimatedDeleteIconStyle = useAnimatedStyle(() => ({
    opacity: withTiming(
      translateX.value < TRANSLATED_X_DELETE_TRESHOLD ? 1 : 0,
    ),
  }));

  const reanimatedAddIconStyle = useAnimatedStyle(() => ({
    opacity: withTiming(translateX.value > TRANSLATED_X_ADD_TRESHOLD ? 1 : 0),
  }));

  const reanimatedStyle = useAnimatedStyle(() => ({
    translateX: translateX.value,
  }));

  const reanimatedViewStyle = useAnimatedStyle(() => ({
    height: itemHeight.value,
    opacity: itemOpacity.value,
    marginVertical: itemMargin.value,
  }));

  return (
    <S.Wrapper style={reanimatedViewStyle}>
      {onTake && (
        <S.IconContainer style={reanimatedAddIconStyle} left>
          <FontAwesomeIcon
            icon={faCartShopping}
            color={theme.color.blue}
            size={RFValue(20)}
          />
        </S.IconContainer>
      )}
      {onGoBack && (
        <S.IconContainer style={reanimatedAddIconStyle} left>
          <FontAwesomeIcon
            icon={faRotateLeft}
            color={theme.color.blue}
            size={RFValue(20)}
          />
        </S.IconContainer>
      )}
      <PanGestureHandler
        simultaneousHandlers={simultaneousHandlers}
        onGestureEvent={panGesture}
      >
        <Animated.View style={reanimatedStyle}>
          <S.Container itemColor={itemColor}>
            <S.PriorityLevelContainer>
              <S.PriorityLevelText itemColor={itemColor}>
                {priorityLevel}
              </S.PriorityLevelText>
            </S.PriorityLevelContainer>
            <S.NameContaiener>
              <S.Name>{name.substring(0, 15)}</S.Name>
              <S.Quantity>{quantity}x</S.Quantity>
            </S.NameContaiener>

            <S.PriceContainer>
              <S.Price>R${price.toFixed(2)}</S.Price>
            </S.PriceContainer>
          </S.Container>
        </Animated.View>
      </PanGestureHandler>
      <S.IconContainer style={reanimatedDeleteIconStyle}>
        <FontAwesomeIcon
          icon={faTrash}
          color={theme.color.orange}
          size={RFValue(20)}
        />
      </S.IconContainer>
    </S.Wrapper>
  );
};

export default Item;
