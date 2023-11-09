import { StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {Roboto_400Regular, Roboto_700Bold, useFonts} from '@expo-google-fonts/roboto';

import {defaultTheme} from './src/global/styles/themes';

import { Home } from "./src/screens/Home";
import {Loading} from './src/components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold});

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent
        />
        
        {fontsLoaded? <Home/> : <Loading/>}
      </ThemeProvider>
    </>
  );
}

