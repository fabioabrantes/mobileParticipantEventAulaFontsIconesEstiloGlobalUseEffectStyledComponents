import {useEffect, useState} from 'react';
import {View, Text, TextInput, Alert, FlatList} from 'react-native';
import {useTheme} from 'styled-components';

import { Participant } from '../../components/Participant';
import { Button } from '../../components/Button';

import {lisParticipants} from '../../../data';

import {
  Calendar,
  Container,
  ContainerListParticipant,
  ContainerRegisterParticipant,
  Input,
  SubTitleListParticipant,
  ListEmpty,
  Title
} from './styles';


export function Home(){
 const [nameParticipant,setNameParticipant] = useState('');
 const [names,setNames] = useState([] as string []);
 
 const theme = useTheme();
  function addParticipant(){
    if(names.includes(nameParticipant) || nameParticipant === ''){
      Alert.alert('Error','Participate ja existe ou não foi digitado');
    } else{
      setNames([...names,nameParticipant]);
    }
    setNameParticipant('');
  }
  
  function removeParticipant(name:string){
    Alert.alert('Remove', `Deseja realmente remover ${name}`,[
      {
        text:'sim',
        onPress:()=>{
          setNames(names.filter(participant => participant !==name))
        }
      },{
        text:'não'
      } 
    ])
  }

  useEffect(()=>{
    setNames(lisParticipants);
  },[]);

  return (
    <Container>
      <Title>Nome do evento</Title>

      <Calendar>Sexta, 4 de Novembro de 2022.</Calendar>

      <ContainerRegisterParticipant>
        <Input 
          placeholder='Nome do participante'
          placeholderTextColor={theme.COLORS.gray300}
          onChangeText={text =>setNameParticipant(text)}
          value={nameParticipant}
        />
        <Button 
          iconName="add-circle-outline"
          onPress={addParticipant}
        />
      </ContainerRegisterParticipant>

      <SubTitleListParticipant>Participantes</SubTitleListParticipant>
    
      <ContainerListParticipant>
        <FlatList
          data={names}
          keyExtractor={name =>name}
          renderItem={({item})=>(<Participant name={item} remove={()=>removeParticipant(item)}/>)}
          ListEmptyComponent={()=>(
            <ListEmpty>
                Ninguém chegou no evento ainda? 
                Adicione participantes a sua lista de presença.
            </ListEmpty>
          )}
        />
      </ContainerListParticipant>
    </Container>
  )
}