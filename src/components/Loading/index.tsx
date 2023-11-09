import {ActivityIndicator} from 'react-native';
import {useTheme} from 'styled-components';



export function Loading(){
  const THEMES = useTheme();

  return (
    <ActivityIndicator
      color={THEMES.COLORS.blue500}
      size={THEMES.SIZE.xl}
    />
  )
}