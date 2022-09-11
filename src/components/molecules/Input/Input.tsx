import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
  useRef,
} from 'react';
import { KeyboardTypeOptions, View } from 'react-native';

import { TextInput, Label, TextInputReference } from '../../atoms';
import { styles } from './Input.style';

interface InputProps {
  label?: string;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  testID: string;
}

export interface InputReference {
  getValue: () => string;
  setValue: (value: string) => void;
  focus: () => void;
  blur: () => void;
}

const InputWithReference: ForwardRefRenderFunction<
  InputReference,
  InputProps
> = (props, ref) => {
  const inputReference = useRef<TextInputReference>(null);

  useImperativeHandle(ref, () => ({
    getValue: () => inputReference?.current?.getValue() ?? '',
    setValue: (value: string) => {
      inputReference?.current?.setValue(value);
    },
    focus: () => {
      inputReference?.current?.focus();
    },
    blur: () => {
      inputReference?.current?.blur();
    },
  }));

  return (
    <View style={styles.inputContainer}>
      <Label>{props.label}</Label>
      <TextInput
        ref={inputReference}
        placeholder={props.label}
        keyboardType={props.keyboardType}
        secureTextEntry={props.secureTextEntry}
        testID={props.testID}
      />
    </View>
  );
};

// InputWithReference.defaultProps = {
//   label: 'Input Title',
// };

export const Input = forwardRef(InputWithReference);
