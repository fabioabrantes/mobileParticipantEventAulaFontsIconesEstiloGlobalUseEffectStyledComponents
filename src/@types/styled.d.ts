import 'styled-components';

import {defaultTheme} from '../global/styles/themes';

declare module 'styled-components'{
  type ThemeType = typeof defaultTheme;
  export interface DefaultTheme extends ThemeType{}
}