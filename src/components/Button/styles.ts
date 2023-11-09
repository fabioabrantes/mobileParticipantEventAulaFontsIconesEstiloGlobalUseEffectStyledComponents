import styled from 'styled-components/native';
import { Ionicons,FontAwesome } from '@expo/vector-icons';

interface PropsButton{
  transparent:boolean;
}
export const ButtonStyled = styled.TouchableOpacity<PropsButton>`
  border-radius:4px;
  width:56px;
  height:56px;
  align-items:center;
  justify-content: center;
  background-color: ${(props)=>!props.transparent? props.theme.COLORS.purple500
        : props.theme.COLORS.gray700};
`;

interface PropsIcone{
  iconName:'add-circle-outline' | 'trash-outline' |'check-circle' | 'circle-o';
}
export const IconCheckOrUncheck = styled(Ionicons)<PropsIcone>`
  color:${(props) => props.iconName==='add-circle-outline'? props.theme.COLORS.white:props.theme.COLORS.blue500};
`;
export const IconTrash = styled(FontAwesome)`
  color:${(props) =>props.theme.COLORS.blue500};
`;
