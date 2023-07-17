import React from 'react';
import { useTranslation } from 'react-i18next';

import { Card as CardModel } from '../../models/CardModels';

import { Container, Text, Title, Name, TextWrapper } from './styles';

function Card({ card }: { card: CardModel }) {
  const { t } = useTranslation();
  return (
    <Container kind={card.kind}>
      <Title kind={card.kind}>
        {card.kind === 'black' ? 'Black Card' : 'Green Card'}
      </Title>
      <TextWrapper>
        <Name kind={card.kind}>{card.name}</Name>
        <Text kind={card.kind}>{`**** **** **** ${card.number.slice(
          -4,
        )}`}</Text>
        <Text kind={card.kind}>{`${t('validity')} ${card.expiry}`}</Text>
      </TextWrapper>
    </Container>
  );
}

export default Card;
