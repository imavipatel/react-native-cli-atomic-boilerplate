import React, { useRef } from 'react';
import { View } from 'react-native';

import { Button, PressableLabel } from '../../atoms';
import { Input, InputReference } from '../../molecules';
import { styles } from './LoginForm.style';

interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
  onClickLabel: () => void;
  title: string;
}

export const LoginForm: React.FC<LoginFormProps> = props => {
  const emailInputReference = useRef<InputReference>(null);
  const passwordInputReference = useRef<InputReference>(null);

  const onSubmit = () => {
    const emailValue = emailInputReference.current?.getValue() ?? '';
    const passwordValue = passwordInputReference.current?.getValue() ?? '';
    props.onSubmit(emailValue, passwordValue);
  };

  return (
    <View style={styles.container}>
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
      <Button onPress={onSubmit} text="Sign in" testID="submit-button" />
      <PressableLabel onPress={props.onClickLabel} testID="registration-label">
        Don't have an account? Sign up
      </PressableLabel>
    </View>
  );
};
