import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';

import { LoginForm, Footer, HeaderBox } from '../../organisms';
import { styles } from './LoginTemplate.style';

interface LoginTemplateProps {
  onSubmitForm: (email: string, password: string) => void;
  onClickLabel: () => void;
  title: string;
}

export const LoginTemplate: React.FC<LoginTemplateProps> = props => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <StatusBar backgroundColor="transparent" translucent={true} />
        <HeaderBox>{props.title}</HeaderBox>
        <LoginForm
          title={props.title}
          onSubmit={props.onSubmitForm}
          onClickLabel={props.onClickLabel}
        />
        <Footer />
      </View>
    </SafeAreaView>
  );
};
