import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Input } from './Input';
import CenterView from '../../../../storybook/utils/CenterView/CenterView';

storiesOf('Input', module)
  .addDecorator(story => <CenterView>{story()}</CenterView>)
  .add('default', () => (
    <Input label="Primary Input" testID={'input-test-id'} />
  ));
