import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { TextInput } from './TextInput';
import CenterView from '../../../../storybook/utils/CenterView/CenterView';

export const actions = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};
storiesOf('Atoms/TextInput', module)
  .addDecorator(story => <CenterView>{story()}</CenterView>)
  .add('default', () => (
    <TextInput placeholder="Primary TextInput" testID={'text-input-id'} />
  ));
