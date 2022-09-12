import React, { createRef } from 'react';
import { act, fireEvent, render, waitFor } from '@testing-library/react-native';
import { TextInput, TextInputReference } from './TextInput';

describe('TextInput', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    const tree = render(
      <TextInput testID="input" placeholder="Primary Input" />,
    );

    expect(tree).toMatchSnapshot();
  });

  it('should render input', () => {
    const component = <TextInput testID="input" placeholder="Primary Input" />;
    const { getByTestId } = render(component);
    const input = getByTestId('input');
    expect(input).toBeDefined();
  });

  it('sets props', () => {
    const testID = 'input';
    const placeHolder = 'input placeholder';
    const keyboardType = 'email-address';
    const secureTextEntry = true;

    const { getByTestId } = render(
      <TextInput
        testID={testID}
        placeholder={placeHolder}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      />,
    );

    const textInput = getByTestId(testID);
    expect(textInput.props.placeholder).toEqual(placeHolder);
    expect(textInput.props.keyboardType).toEqual(keyboardType);
    expect(textInput.props.secureTextEntry).toEqual(secureTextEntry);
    expect(textInput.props.testID).toEqual(testID);
  });

  it('should be able to setValue by reference', async () => {
    const inputRef = createRef<TextInputReference>();

    const testID = 'input';
    const { getByTestId } = render(
      <TextInput ref={inputRef} testID={testID} />,
    );

    expect(inputRef.current).not.toBeNull();
    const testValue = 'Test value';
    act(() => {
      inputRef.current?.setValue(testValue);
    });
    expect(inputRef.current?.getValue()).toBe(testValue);
  });

  it('should be able to getValue by reference', async () => {
    const inputRef = createRef<TextInputReference>();
    const testID = 'input';
    const { getByTestId } = render(
      <TextInput ref={inputRef} testID={testID} />,
    );
    const textInput = getByTestId(testID);
    const testValue = 'Test value';
    fireEvent.changeText(textInput, testValue);
    await waitFor(() => expect(inputRef.current?.getValue()).toBe(testValue));
  });

  it('should be able to focus by reference', async () => {
    const inputRef = createRef<TextInputReference>();
    const testID = 'input';

    render(<TextInput ref={inputRef} testID={testID} />);
    inputRef.current?.focus();
    expect(inputRef.current?.isFocused).toBeDefined();
    expect(inputRef.current?.isFocused()).toEqual(undefined);
  });

  it('should be able to blur by reference', async () => {
    const inputRef = createRef<TextInputReference>();
    const testID = 'input';

    render(<TextInput ref={inputRef} testID={testID} />);
    inputRef.current?.blur();
    expect(inputRef.current?.isBlured).toBeDefined();
    expect(inputRef.current?.isBlured()).toBeTruthy();
  });
});
