/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {FC, useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,FlatList, SafeAreaView, TouchableOpacity
} from 'react-native';
import Input from './Input'
import {Fruit, Fruits} from './Data'
import Item from './listitem'


const App: FC = () => {
  const [fruits, setFruits] = useState<Fruit[] | null>(null)
  const [inputShown, setInputShown] = useState<boolean>(false)


  useEffect(() => {
    (() => {
      setFruits(Fruits.sort((a: Fruit, b: Fruit) =>  {
        return a.price > b.price ? 1: b.price > a.price ? -1 : 0
      })
      );
    })()
  }, [])

  const handleSearch = (text) => {
    const fruits: Fruit[] = Fruits.filter(fruit => fruit.name.includes(text))
    setFruits(fruits)
  }

  return (
    <SafeAreaView style={styles.container}  >
      <View style={styles.container} >
        <Input icon="search-outline" placeholder="Search" onChangeText={(text) => handleSearch(text)} />
        <FlatList style={{marginVertical:10}} data={fruits} renderItem={({item}) => (
          <Item id={item.id} name={item.name} price={item.price} />
        )
      } />
       <View>
         <TouchableOpacity onPress={() => setInputShown(true)} style={{alignSelf:'center', backgroundColor:'rgba(81,135,200,1)', padding:10, paddingHorizontal:20, borderRadius:6, marginVertical:10, display:inputShown==false ? 'flex' : 'none',}} >
           <Text style={{color:'white', fontWeight:'600'}} >Add</Text>
         </TouchableOpacity>
       </View>

      <View style={{display:inputShown===true ? 'flex' : 'none' }} >
        <Input icon="add-circle-outline" placeholder="Fruit Name" />
         <Input icon="add-circle-outline" placeholder="Fruit Price" />
        
      </View>
      </View>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingVertical:10,
    alignItems:'center'
  }
});

export default App;
