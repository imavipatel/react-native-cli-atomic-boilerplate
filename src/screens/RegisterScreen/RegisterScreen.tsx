import { RootStackParamList } from 'App';
import React from 'react';

import { RegisterTemplate } from '../../components/templates';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { ScreenName } from 'screens/ScreenName';

type RegisterScreenProps = {};

const RegisterScreen: React.FC<RegisterScreenProps> = ({}) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const onSubmitForm = (name: string, email: string, password: string) => {
    console.log('Name: ', name);
    console.log('Email: ', email);
    console.log('Password: ', password);

    navigation.navigate(ScreenName.ProfileScreen, {
      id: 0,
      firstName: 'Jon',
      lastName: 'Doe',
    });
  };

  const onPressLabel = () => {
    navigation.navigate(ScreenName.LoginScreen);
  };

  return (
    <RegisterTemplate
      title="Register your account"
      onSubmitForm={onSubmitForm}
      onPressLabel={onPressLabel}
    />
  );
};

export default RegisterScreen;
