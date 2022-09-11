import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { PressableLabel } from './PressableLabel';
import CenterView from '../../../../storybook/utils/CenterView/CenterView';

storiesOf('Atoms/PressableLabel', module)
  .addDecorator(story => <CenterView>{story()}</CenterView>)
  .add('default', () => (
    <PressableLabel testID="perssable-label" onPress={() => {}}>
      Label Text
    </PressableLabel>
  ));
