import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { StackNativeScreenProps } from '../../App';
import { LoginTemplate } from '../../components/templates';

type LoginScreenProps = StackNativeScreenProps<'LoginScreen'>;

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const onSubmitLoginForm = () => {
    navigation.navigate('ProfileScreen', {
      id: 0,
      firstName: 'Jon',
      lastName: 'Doe',
    });
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={{ height: '100%' }}>
        <StatusBar backgroundColor="transparent" translucent={true} />
        <LoginTemplate
          title="Sign in to your account"
          onSubmitForm={onSubmitLoginForm}
        />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
