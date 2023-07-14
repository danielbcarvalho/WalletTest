import React from 'react';
import { useTranslation } from 'react-i18next';

import { Title } from './styles';

function BrandTitle() {
  const { t } = useTranslation();
  return <Title>{t('Wallet Test')}</Title>;
}

export default BrandTitle;
