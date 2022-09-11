import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { Header } from './Header';
import CenterView from '../../../../storybook/utils/CenterView/CenterView';

export const actions = {
  onClick: action('onClick'),
};

storiesOf('Molecules/Header', module)
  .addDecorator(story => <CenterView>{story()}</CenterView>)
  .add('default', () => <Header>Header Text</Header>);
