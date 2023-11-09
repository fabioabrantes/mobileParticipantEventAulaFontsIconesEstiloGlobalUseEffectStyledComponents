import { TouchableOpacityProps} from 'react-native';


import {ButtonStyled,IconCheckOrUncheck,IconTrash} from './styles';

interface Props extends TouchableOpacityProps{
  iconName:'add-circle-outline' | 'trash-outline' |'check-circle' | 'circle-o';
  transparent?:boolean;
}
export function Button({iconName,transparent=false, ...rest}:Props){
  
  return (
      <ButtonStyled transparent={transparent} {...rest}>
          {
            (iconName !== 'circle-o' && iconName !== 'check-circle') ? 
              <IconCheckOrUncheck  name={iconName} size={32} iconName={iconName} />
            :
              <IconTrash name={iconName} size={32} />
          }
      </ButtonStyled>
  )
}