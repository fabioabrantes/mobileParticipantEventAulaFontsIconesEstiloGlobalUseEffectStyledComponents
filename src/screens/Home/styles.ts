import styled from 'styled-components/native';

export const Container = styled.View`
  flex:1;
  padding-left:24px;
  padding-right:24px;
  padding-top:75px;
  background-color: ${props => props.theme.COLORS.gray900};
`;

export const Title = styled.Text`
  color:${props => props.theme.COLORS.gray300};
  font-size:${props => props.theme.SIZE.xl};
  font-family:${props => props.theme.FONTS.bold};
`;

export const Calendar = styled.Text`
  color:${props => props.theme.COLORS.gray500};
  font-size:${props => props.theme.SIZE.xm};
  font-family:${props => props.theme.FONTS.regular};
  line-height:16px;
`;

export const ContainerRegisterParticipant = styled.View`
  flex-direction:row;
  align-items:center;
  margin-top:44px;
  margin-bottom:34px;
`;

export const Input = styled.TextInput`
  flex:1;
  height:56px;
  background-color:${props => props.theme.COLORS.gray800};
  font-size:${props => props.theme.SIZE.xm};
  color:${props => props.theme.COLORS.gray300};
  font-family:${props => props.theme.FONTS.regular};
  padding:12px;
  border-radius:4px;
`;

 export const SubTitleListParticipant = styled.Text`
  color:${props => props.theme.COLORS.gray300};
  font-size:${props => props.theme.SIZE.xl};
  font-family:${props => props.theme.FONTS.bold};
 `;

  export const ContainerListParticipant = styled.View`
    margin-top:24px;
  `;
    
  export const ListEmpty = styled.Text`
    color:${props => props.theme.COLORS.gray300};
    font-size:${props => props.theme.SIZE.sm};
    font-family:${props => props.theme.FONTS.regular};
    text-align:center;
  `;