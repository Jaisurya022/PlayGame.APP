import React, {useState, useRef } from "react";
import Text  from "./Text";
import { styled } from "styled-components";
import categoryList from "../../categories"
import { StatusBar} from "react-native";
import games from "../../GameData";



export default HomeScreen = ({navigation}) => {


const [selectedCategory, setSelectedCategory] = useState ("All")

     const gamesRef =useRef();
          
     const changeCategory = (category) => {

          gamesRef.current.scrollToOffset({x: 0, y: 0});

          setSelectedCategory(category);



     };

     const GameItem =(game) => {

     return (
           
          <Game onPress={() => navigation.navigate("GameScreen", {game: game})}>
               <GameCover source={game.cover} />
               <GameInfo backgroundColor={game.backgroundColor}>
                    <GameImage source={game.cover} />
                <GameTitle>
                    
                    <Text medium bold>{game.title}</Text>
                    <Text small >{game.teaser}</Text>

                </GameTitle>

               </GameInfo>
          </Game>

     )

     }


  return (
  
      
    <Container>
        
        <StatusBar barStyle="light-content" />
        
        <Header>

             <Text large>
                    GameStore {" "} <Text large bold>
           
                         Create By

                    </Text>
 
                     {`\n`}

                     <Text large bold>
 
                         Jai Surya.....
                     </Text>

                </Text>

                </Header>   


                <Categories horizontal={true} showsHorizontalScrollIndicator={false}>

                    {categoryList.map ((category, index) => { 

               return(
               
                 <Category key={index} onPress={() => changeCategory(category)}> 
                 
                 <CategoryName selected={selectedCategory === category ? true : false }>
                               {category}
                    </CategoryName>
                         {selectedCategory === category && <CategoryDot /> }
                     </Category>

               );


                    })}

                </Categories>

         <Games data={games.filter((game) =>{
             
             return game.category.includes(selectedCategory) || selectedCategory === "All";


         })}  keyExtractor={item => String(item.id)} renderItem={({item}) => GameItem(item)}  
         
             ref={gamesRef}
          
         
         />
            
     </Container>


             
  );
};


const Container =styled.SafeAreaView`

flex: 1;
background-color: #343434;

`;

 const Header =styled.View`
         
 flex-direction: row;
 align-items: center;
 justify-content: space-between;
 margin: 16px 32px 0 32px;

 `;

const Categories = styled.ScrollView`

     margin-top: 32px;
     flex-grow: 0;   

`;

const Category = styled.TouchableOpacity`
    
     align-item: center ;
     margin: 0 16PX;
     height: 32px ;

`;


const CategoryName =styled(Text) `

   color: ${(props) => (props.selected ? "#819ee5" : "#9a9a9a")};
   font-weight: ${(props) => (props.selected ? "700" : "500")};

`;

const CategoryDot = styled.View `

  width: 6px;
  height: 6px;
  border-radius: 3px;
  background-color:#819ee5;

`;

const Games=styled.FlatList`

margin-top: 32px;
flex: 1;

`;

const Game =styled.TouchableOpacity`

margin-bottom: 32px;

`;

const GameCover=styled.Image`


width: 100%;
height: 275px;
border-radius: 30px;


`;

const GameInfo =styled.View`

margin: -50px 16px 0 16px;
padding: 16px;
border-radius: 12px;
flex-direction:row;
align-items: center;

`;



const GameImage =styled.Image`

 width:50px;
 height: 40px;
 border-radius: 8px;
    
`;


const GameTitle = styled.View`



`;

