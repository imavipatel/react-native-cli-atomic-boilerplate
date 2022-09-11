import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { LoginForm } from './LoginForm';
import CenterView from '../../../../storybook/utils/CenterView/CenterView';

storiesOf('Organisms/LoginForm', module)
  .addDecorator(story => <CenterView>{story()}</CenterView>)
  .add('default', () => (
    <LoginForm
      onClickLabel={() => {}}
      onSubmit={() => {}}
      title={'Login Form title'}
    />
  ));
