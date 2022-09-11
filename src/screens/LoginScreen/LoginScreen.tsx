import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import { LoginTemplate } from '../../components/templates';
import { RootStackParamList } from 'App';
import { ScreenName } from 'screens/ScreenName';

export type LoginScreenProps = {};

const LoginScreen: React.FC<LoginScreenProps> = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const onSubmitLoginForm = (email: string, password: string) => {
    console.log('Email: ', email);
    console.log('Password: ', password);

    navigation.navigate(ScreenName.ProfileScreen, {
      id: 0,
      firstName: 'Jon',
      lastName: 'Doe',
    });
  };

  const onClickLabel = () => {
    navigation.navigate(ScreenName.RegisterScreen);
  };

  return (
    <LoginTemplate
      title="Sign in to your account"
      onSubmitForm={onSubmitLoginForm}
      onClickLabel={onClickLabel}
    />
  );
};

export default LoginScreen;
