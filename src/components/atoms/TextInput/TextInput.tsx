import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
  useState,
} from 'react';
import {
  KeyboardTypeOptions,
  TextInput as ReactNativeTextInput,
} from 'react-native';
import { styles } from './TextInput.style';

interface TextInputProps {
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  testID: string;
}

interface TextInputProps {
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  testID: string;
}

export interface TextInputReference {
  getValue: () => string;
}

const TextInputWithReference: ForwardRefRenderFunction<
  TextInputReference,
  TextInputProps
> = (props, ref) => {
  const [value, setValue] = useState('');

  const onChangeText = (_value: string) => {
    setValue(_value);
  };

  useImperativeHandle(ref, () => ({
    getValue: () => value,
  }));

  return (
    <ReactNativeTextInput
      style={styles.input}
      onChangeText={onChangeText}
      placeholder={props.placeholder}
      keyboardType={props.keyboardType}
      secureTextEntry={props.secureTextEntry}
      testID={props.testID}
    />
  );
};

export const TextInput = forwardRef(TextInputWithReference);
