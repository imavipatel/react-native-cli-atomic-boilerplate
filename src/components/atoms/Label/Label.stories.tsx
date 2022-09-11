import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Label } from './Label';
import CenterView from '../../../../storybook/utils/CenterView/CenterView';

storiesOf('Atoms/Label', module)
  .addDecorator(story => <CenterView>{story()}</CenterView>)
  .add('default', () => <Label>Label Text</Label>);
