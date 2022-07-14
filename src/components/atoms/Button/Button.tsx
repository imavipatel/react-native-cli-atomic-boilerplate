import React from 'react';
import { Pressable, Text } from 'react-native';
import { styles } from './Button.style';

export interface ButtonProps {
  onPress?: () => void;
  text: string;
  testID: string;
}

export const Button: React.FC<ButtonProps> = props => {
  return (
    <Pressable
      onPress={props.onPress}
      style={styles.buttonContainer}
      testID={props.testID}>
      <Text style={styles.buttonText} testID="button-text">
        {props.text}
      </Text>
    </Pressable>
  );
};
