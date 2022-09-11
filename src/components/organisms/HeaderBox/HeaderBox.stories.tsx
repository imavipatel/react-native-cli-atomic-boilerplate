import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { HeaderBox } from './HeaderBox';
import CenterView from '../../../../storybook/utils/CenterView/CenterView';

storiesOf('Organisms/HeaderBox', module)
  .addDecorator(story => <CenterView>{story()}</CenterView>)
  .add('default', () => <HeaderBox>Header Box Title</HeaderBox>);
