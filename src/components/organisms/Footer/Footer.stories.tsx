import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Footer } from './Footer';
import CenterView from '../../../../storybook/utils/CenterView/CenterView';

storiesOf('Organisms/Footer', module)
  .addDecorator(story => <CenterView>{story()}</CenterView>)
  .add('default', () => <Footer />);
