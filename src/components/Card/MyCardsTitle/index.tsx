import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components/native';

import { H4 } from '../../Typografy/H4';

import { Container } from './styles';

function MyCardExtendedHeader() {
  const theme = useTheme();
  const { t } = useTranslation();
  return (
    <Container>
      <H4 color={theme.pallete.info.main}>{t('My cards')}</H4>
    </Container>
  );
}

export default MyCardExtendedHeader;
