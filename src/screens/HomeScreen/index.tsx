import * as React from 'react';

import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { ParamsList } from '../../Routes';
import BrandTitle from '../../components/Title';
import { Button } from '../../components/Button';
import StyledBackgroundContainer from '../../components/StyledBackgoundContainer';

type HomeNav = NativeStackNavigationProp<ParamsList, 'Home'>;

function Home() {
  const { navigate } = useNavigation<HomeNav>();

  const { t } = useTranslation();
  return (
    <StyledBackgroundContainer>
      <BrandTitle />
      <Button
        title={t('my cards')}
        onPress={() => navigate('CardList')}
        type="primary"
      />
      <Button
        title={t('register card')}
        onPress={() => navigate('CardRegistration')}
        type="secondary"
      />
    </StyledBackgroundContainer>
  );
}

export default Home;
