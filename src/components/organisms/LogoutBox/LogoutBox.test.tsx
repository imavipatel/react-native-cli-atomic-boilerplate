import React from 'react';
import { render } from '@testing-library/react-native';
import { LogoutBox } from './LogoutBox';

describe('LogoutBox', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    const tree = render(
      <LogoutBox onPressLogout={() => {}}>Logout Box title</LogoutBox>,
    );

    expect(tree).toMatchSnapshot();
  });
});
