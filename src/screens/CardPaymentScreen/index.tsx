import React from 'react';
import { Alert } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
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

export type CardPaymentScreenProps = NativeStackNavigationProp<
  ParamsList,
  'CardPayment'
>;

function CardPayment() {
  const { cards, isLoading, setCardOnTop } = useCardList();

  const navigation = useNavigation<CardPaymentScreenProps>();

  const { t } = useTranslation();

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
        <DisabledCard
          activeOpacity={0.7}
          onPress={() => setCardOnTop(item.id)}
          accessibilityLabel="disabled-card">
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
            renderItem={renderCard}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={renderUseCardButton}
            keyExtractor={item => item.id.toString()}
          />
        )}
      </ContentWrapper>
    </Container>
  );
}

export default CardPayment;
