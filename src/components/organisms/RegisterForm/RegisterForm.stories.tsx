import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { RegisterForm } from './RegisterForm';
import CenterView from '../../../../storybook/utils/CenterView/CenterView';

storiesOf('Organisms/RegisterForm', module)
  .addDecorator(story => <CenterView>{story()}</CenterView>)
  .add('default', () => (
    <RegisterForm
      onPressLabel={() => {}}
      onSubmitForm={() => {}}
      title={'Register Form title'}
    />
  ));
