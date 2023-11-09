import { useState } from 'react';
import {Text, View} from 'react-native';

import { Button } from '../Button';

import {Container,ContainerText,NameParticipant} from './styles';


interface Props{
  name:string;
  remove:(name:string)=>void;
}

export function Participant({name,remove}:Props){
  const [checkout, setCheckout] = useState(false);

  function handleCeckout(){
    setCheckout(!checkout)
  }

  return (
    <Container>
      <Button 
        iconName={!checkout ?'circle-o':'check-circle'} 
        transparent  
        onPress={handleCeckout}
      />

      <ContainerText checkout={checkout}>
        <NameParticipant checkout={checkout}>
          {name}
        </NameParticipant>
      </ContainerText>

      <Button iconName='trash-outline' transparent onPress={()=>remove(name)}/>
    </Container>
  )
}