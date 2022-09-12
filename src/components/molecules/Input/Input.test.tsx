import React, { createRef } from 'react';
import { act, fireEvent, render, waitFor } from '@testing-library/react-native';
import { Input, InputReference } from './Input';

describe('TextInput', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    const tree = render(<Input testID="input" label="Primary Input" />);
    expect(tree).toMatchSnapshot();
  });

  it('should render input', () => {
    const component = <Input testID="input" label="Primary Input" />;
    const { getByTestId } = render(component);
    const input = getByTestId('input');
    expect(input).toBeDefined();
  });

  it('should render correctly input', () => {
    const testID = 'input';
    const placeHolder = 'input placeholder';
    const keyboardType = 'email-address';

    const { getByTestId } = render(
      <Input testID="input" label={placeHolder} keyboardType={keyboardType} />,
    );

    const textInput = getByTestId(testID);
    expect(textInput.props.placeholder).toEqual(placeHolder);
    expect(textInput.props.keyboardType).toEqual(keyboardType);
  });

  it('should render input label', () => {
    const label = 'Primary Input';
    const component = <Input testID="input" label={label} />;
    const { getByText } = render(component);
    const input = getByText(label);
    expect(input).toBeDefined();
  });

  it('should contain correct props', async () => {
    const inputRef = createRef<InputReference>();
    const testID = 'input';
    const label = 'input placeholder';
    const keyboardType = 'email-address';
    const secureTextEntry = true;

    const { getByTestId } = render(
      <Input
        ref={inputRef}
        testID={testID}
        label={label}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      />,
    );
    const textInput = getByTestId(testID);
    expect(textInput.props.keyboardType).toEqual(keyboardType);
    expect(textInput.props.secureTextEntry).toEqual(secureTextEntry);
    expect(textInput.props.testID).toEqual(testID);
  });

  it('should be able to setValue by reference', async () => {
    const inputRef = createRef<InputReference>();

    const testID = 'input';
    render(<Input ref={inputRef} testID={testID} />);

    expect(inputRef.current).not.toBeNull();
    const testValue = 'Test value';
    act(() => {
      inputRef.current?.setValue(testValue);
    });
    expect(inputRef.current?.getValue()).toBe(testValue);
  });

  it('should be able to getValue by reference', async () => {
    const inputRef = createRef<InputReference>();
    const testID = 'input';
    const { getByTestId } = render(<Input ref={inputRef} testID={testID} />);
    const textInput = getByTestId(testID);
    const testValue = 'Test value';
    fireEvent.changeText(textInput, testValue);
    await waitFor(() => expect(inputRef.current?.getValue()).toBe(testValue));
  });

  it('should be able to focus by reference', async () => {
    const inputRef = createRef<InputReference>();
    const testID = 'input';

    render(<Input ref={inputRef} testID={testID} />);
    inputRef.current?.focus();
    expect(inputRef.current?.isFocused).toBeDefined();
    expect(inputRef.current?.isFocused()).toEqual(undefined);
  });

  it('should be able to blur by reference', async () => {
    const inputRef = createRef<InputReference>();
    const testID = 'input';

    render(<Input ref={inputRef} testID={testID} />);
    inputRef.current?.blur();
    expect(inputRef.current?.isBlured).toBeDefined();
    expect(inputRef.current?.isBlured()).toBeTruthy();
  });
});
