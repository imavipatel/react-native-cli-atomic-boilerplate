import { useFocusEffect } from '@react-navigation/native';
import React, { useRef } from 'react';
import { View } from 'react-native';

import { Button, PressableLabel } from '../../atoms';
import { Input, InputReference } from '../../molecules';
import { styles } from './RegisterForm.style';

interface RegisterFormProps {
  onSubmitForm: (name: string, email: string, password: string) => void;
  onPressLabel: () => void;
  title: string;
}

export const RegisterForm: React.FC<RegisterFormProps> = props => {
  const nameInputReference = useRef<InputReference>(null);
  const emailInputReference = useRef<InputReference>(null);
  const passwordInputReference = useRef<InputReference>(null);

  useFocusEffect(() => {
    resetForm();
    nameInputReference.current?.focus();
  });

  const resetForm = () => {
    nameInputReference.current?.setValue('');
    emailInputReference.current?.setValue('');
    passwordInputReference.current?.setValue('');
  };

  const onSubmit = () => {
    const nameValue = nameInputReference.current?.getValue() ?? '';
    const emailValue = emailInputReference.current?.getValue() ?? '';
    const passwordValue = passwordInputReference.current?.getValue() ?? '';
    props.onSubmitForm(nameValue, emailValue, passwordValue);
  };

  return (
    <View style={styles.container}>
      <Input ref={nameInputReference} label="Full Name" testID="name-input" />
      <Input
        ref={emailInputReference}
        label="Email"
        keyboardType="email-address"
        testID="email-input"
      />
      <Input
        ref={passwordInputReference}
        label="Password"
        secureTextEntry
        testID="password-input"
      />
      <Button onPress={onSubmit} text="Sign up" testID="submit-button" />
      <PressableLabel onPress={props.onPressLabel} testID="login-label">
        Have an account? Sign in
      </PressableLabel>
    </View>
  );
};
