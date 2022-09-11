import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';

import { Footer, HeaderBox } from '../../organisms';
import { RegisterForm } from '../../organisms/RegisterForm/RegisterForm';
import { styles } from './RegisterTemplate.style';

interface RegisterTemplateProps {
  onSubmitForm: (name: string, email: string, password: string) => void;
  onPressLabel: () => void;
  title: string;
}

export const RegisterTemplate: React.FC<RegisterTemplateProps> = props => (
  <SafeAreaView>
    <View style={styles.container}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <HeaderBox>{props.title}</HeaderBox>
      <RegisterForm
        title={props.title}
        onSubmitForm={props.onSubmitForm}
        onPressLabel={props.onPressLabel}
      />
      <Footer />
    </View>
  </SafeAreaView>
);
