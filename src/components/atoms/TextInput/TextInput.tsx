import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useEffect,
  useImperativeHandle,
  useRef,
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
  setValue: (value: string) => void;
  focus: () => void;
  blur: () => void;
  isFocused: () => boolean | undefined;
  isBlured: () => boolean | undefined;
}

const TextInputWithReference: ForwardRefRenderFunction<
  TextInputReference,
  TextInputProps
> = (props, ref) => {
  const [value, setValue] = useState('');
  const inputReference = useRef<ReactNativeTextInput>(null);

  const onChangeText = (_value: string) => {
    setValue(_value);
  };

  useImperativeHandle(ref, () => ({
    getValue: () => value,
    setValue: (value: string) => {
      setValue(value);
    },
    focus: () => {
      inputReference?.current?.focus();
    },
    blur: () => {
      inputReference?.current?.blur();
    },
    isFocused: () => inputReference?.current?.isFocused(),
    isBlured: () => !inputReference?.current?.isFocused(),
  }));

  return (
    <ReactNativeTextInput
      ref={inputReference}
      style={styles.input}
      onChangeText={onChangeText}
      placeholder={props.placeholder}
      keyboardType={props.keyboardType}
      secureTextEntry={props.secureTextEntry}
      testID={props.testID}
      value={value}
    />
  );
};

export const TextInput = forwardRef(TextInputWithReference);
