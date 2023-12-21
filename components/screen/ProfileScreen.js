import { Text } from 'react-native'
import React from 'react'
import { StatusBar } from 'react-native'
import {Entypo} from "@expo/vector-icons"
import games from '../../GameData';
import { styled } from 'styled-components';





export default  ProfileScreen = () => {

  return (
    
      <Container>
             
             <StatusBar barStyle="light-content" />

             <AvatarContainer>
                   
                   <Text large bold>
                       You Are The 
                   </Text>
             </AvatarContainer>

             <Badge>
                  <Text small heavy>
                      Pro Player
                  </Text>
             </Badge>

             <Stats>
               
                <Stat>
                  <Text large heavy>
                         250 <Text color="#9a9a9a">Game</Text>
                  </Text>
                </Stat>

                <Stat>
                     <Text large heavy>
                        3 <Text color="#9a9a9a">Purchases</Text>
                     </Text>
                </Stat>

             </Stats>

             <Text center large>

              Purchased Games

             </Text>

             <Games 
             data={games} 
             keyExtractor={(item) => String(item.id)}
             renderItem={({item}) => (

              <Game>
                <GameImage source={item.cover} />
               
              <Info>
                   <Text bold>{item.title}</Text>
                   <Text small color="#9a9a9a">

                    {Math.floor(Math.random() * 1000) + 1} Sales
                   </Text>
              </Info>

                <Text heavy color="#819ee5">
                  ${Math.floor(Math.random() * 50) +1 }

                </Text>

              </Game>
             )}
             
             
             > </Games>

             <Account>
                 <Settings>
                         <Entypo name='cog' size={24} color="white" /> 
                  </Settings>

                  <Logout>
                    <Text heavy >Logout</Text>
                  </Logout>
             </Account>

            

      </Container> 
     
  );
};

const Container =styled.View`

flex: 1;
background-color: #B08991;
  
`;

const AvatarContainer = styled.View`

margin: 64px 0 16px 0;
align-items: center;

  
`;


const Badge =styled.View`
     
background-color: #819ee5;
align-self: center;
padding: 4px 12px;
border-radius: 8px;


`;

const Stats= styled.View`
    
     flex-direction: row;
     align-items: center;
     align-self: center;
     margin: 32px 0;

`;

const Stat =styled.View`

margin: 0 16px;
          
`;

const Games =styled.FlatList`

margin: 32px 16px 0 16px;

`;

const Game =styled.View`
flex-direction: row;
align-items: center;
margin-bottom: 16px;

`;

const GameImage=styled.Image`

width: 64px;
height: 64px;
border-radius: 12px;   

`;

const Info = styled.View`
flex: 1;
margin: 0 16px;
  
`;

const Account =styled.View`
      

margin: 32px 16px;
flex-direction: row;


`;

const Settings = styled.TouchableOpacity`

background-color: #FE88A0;
padding: 12px;
border-radius: 8px;


`;

const Logout=styled.TouchableOpacity`

      flex: 1;
      background-color: #2CEF33;
      border-radius: 8px;
      align-items: center;
      justify-content: center;
      margin-left: 16px;
      
`;









