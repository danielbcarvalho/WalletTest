import React from 'react';
import { useTranslation } from 'react-i18next';

import { Card as CardModel } from '../../models/CardModels';

import { Container, Text, Title, Name, TextWrapper } from './styles';

function Card({
  card,
  kind = 'black',
}: {
  card: CardModel;
  kind?: 'black' | 'green';
}) {
  const { t } = useTranslation();
  return (
    <Container kind={kind}>
      <Title kind={kind}>
        {kind === 'black' ? 'Black Card' : 'Green Card'}
      </Title>
      <TextWrapper>
        <Name kind={kind}>{card.name}</Name>
        <Text kind={kind}>{`**** **** **** ${card.number.slice(-4)}`}</Text>
        <Text kind={kind}>{`${t('validity')} ${card.expiry}`}</Text>
      </TextWrapper>
    </Container>
  );
}

export default Card;
