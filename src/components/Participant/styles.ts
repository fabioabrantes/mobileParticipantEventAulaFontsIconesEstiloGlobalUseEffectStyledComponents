import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction:row;
  align-items:center;
  border-radius:5px;
  margin-bottom:10px;
  width:100%;
`;

interface PropsContainerText {
  checkout:boolean;
}
export const ContainerText = styled.View<PropsContainerText>`
    background-color:${(props)=> props.checkout? props.theme.COLORS.gray900: props.theme.COLORS.gray700};
    flex:1;
    align-items:center;
    justify-content: center;
    height:56px;
    margin-left:5px;
    margin-right:5px;
`;

interface PropsNameParticipant {
  checkout:boolean;
}
export const NameParticipant = styled.Text<PropsNameParticipant>`
  font-size:${props=>props.theme.SIZE.sm};
  color: ${props=> props.checkout ? props.theme.COLORS.red500 : props.theme.COLORS.gray300};
  font-family:${props=>props.theme.FONTS.bold};
`;

