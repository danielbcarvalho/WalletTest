import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { ParamsList } from '../../Routes';
import { Card as CardModel } from '../../models/CardModels';
import { useCardList } from '../../components/hooks/useCardList';

import {
  ButtonWrapper,
  CardFlatList,
  Container,
  ContentWrapper,
  DisabledCard,
  SelectedCard,
} from './styles';
import Card from '../../components/Card';
import { Button } from '../../components/Button';
import { isCardOnTheTop } from '../../utils/card';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

export type CardPaymentScreenProps = NativeStackNavigationProp<
  ParamsList,
  'CardPayment'
>;

function CardPayment() {
  const { cards, isLoading, setCardOnTop, onPayWithThisCard } = useCardList();

  const navigation = useNavigation<CardPaymentScreenProps>();

  const { t } = useTranslation();

  useFocusEffect(
    useCallback(() => {
      const unsubscribe = navigation.addListener('beforeRemove', _e => {
        onPayWithThisCard(false);
      });

      return unsubscribe;
    }, [navigation, onPayWithThisCard]),
  );

  if (isLoading) {
    return null;
  }

  function handlePayWithThisCard() {
    Alert.alert(
      t('Congratulations'),
      t('Payment Successful'),
      [
        {
          text: t('ok'),
          onPress: () => navigation.navigate('Home'),
        },
      ],
      { cancelable: false },
    );
    onPayWithThisCard(true);
  }

  function renderUseCardButton() {
    return (
      <ButtonWrapper>
        <Button
          onPress={handlePayWithThisCard}
          title={t('pay with this card')}
        />
      </ButtonWrapper>
    );
  }

  function renderCard({ item, index }: { item: CardModel; index: number }) {
    if (isCardOnTheTop(index, cards)) {
      return (
        <SelectedCard activeOpacity={0.7} onPress={() => setCardOnTop(item.id)}>
          <Card card={item} />
        </SelectedCard>
      );
    } else {
      return (
        <DisabledCard activeOpacity={0.7} onPress={() => setCardOnTop(item.id)}>
          <Card card={item} />
        </DisabledCard>
      );
    }
  }

  return (
    <Container>
      <ContentWrapper>
        {cards && (
          <CardFlatList
            data={cards}
            bounces={false}
            renderItem={renderCard}
            ListFooterComponent={renderUseCardButton}
            keyExtractor={item => item.id.toString()}
          />
        )}
      </ContentWrapper>
    </Container>
  );
}

export default CardPayment;
