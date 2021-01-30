import React, {FC, version} from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import {Fruit} from './Data'

const width = Dimensions.get('window').width

const Item: FC<Fruit> = (props) => {
    return (
        <View style={styles.container} >
            <View style={{...styles.listitem, alignItems:'flex-start'}} >
                <Text>{props.name}</Text>
            </View>
            <View style={{...styles.listietem, alignItems:'flex-end'}} >
                <Text>{props.price}</Text>
            </View>
        </View>
    )
}

export default Item

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        width:width/1.05,
        borderBottomWidth:1,
        borderBottomColor:'#aaa',
        marginVertical:10
    },
    listitem:{
        flex:0.5,
        justifyContent:'center',
    },
    item:{
        padding:5,
        fontWeight:"600",
        fontSize:16
    }
})