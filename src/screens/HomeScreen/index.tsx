import * as React from 'react';

import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { ParamsList } from '../../Routes';
import { Button } from '../../components/Button';
import BrandTitle from '../../components/BrandTitle';
import StyledBackgroundContainer from '../../components/Containers/StyledBackgoundContainer';

type HomeNav = NativeStackNavigationProp<ParamsList, 'Home'>;

function Home() {
  const { navigate } = useNavigation<HomeNav>();

  const { t } = useTranslation();
  return (
    <StyledBackgroundContainer>
      <BrandTitle />
      <Button
        title={t('my cards')}
        onPress={() => navigate('WalletAnimatedScreen')}
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
