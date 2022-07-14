import React from 'react';
import { KeyboardTypeOptions, View } from 'react-native';

import { TextInput, Label } from '../../atoms';
import { styles } from './Input.style';

interface InputProps {
  label: string;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  testID: string;
}

export const Input: React.FC<InputProps> = props => {
  return (
    <View style={styles.inputContainer}>
      <Label>{props.label}</Label>
      <TextInput
        placeholder={props.label}
        keyboardType={props.keyboardType}
        secureTextEntry={props.secureTextEntry}
        testID={props.testID}
      />
    </View>
  );
};

Input.defaultProps = {
  label: 'Input Title',
};
