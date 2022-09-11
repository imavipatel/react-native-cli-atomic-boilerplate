import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { RegisterTemplate } from './RegisterTemplate';
import CenterView from '../../../../storybook/utils/CenterView/CenterView';

storiesOf('Templates/RegisterTemplate', module)
  .addDecorator(story => <CenterView>{story()}</CenterView>)
  .add('default', () => (
    <RegisterTemplate
      title={'Register Form title'}
      onSubmitForm={() => {}}
      onPressLabel={() => {}}
    />
  ));
