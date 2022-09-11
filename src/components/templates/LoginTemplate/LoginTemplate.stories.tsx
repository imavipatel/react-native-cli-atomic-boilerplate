import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { LoginTemplate } from './LoginTemplate';
import CenterView from '../../../../storybook/utils/CenterView/CenterView';

storiesOf('Templates/LoginTemplate', module)
  .addDecorator(story => <CenterView>{story()}</CenterView>)
  .add('default', () => (
    <LoginTemplate
      title={'Login Form title'}
      onSubmitForm={() => {}}
      onClickLabel={() => {}}
    />
  ));
