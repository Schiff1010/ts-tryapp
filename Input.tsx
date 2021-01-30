import React, {FC} from 'react'
import {View, Text, TextInput, StyleSheet, Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const {width} = Dimensions.get("screen")

interface Props {
    icon: string,
    placeholder:string,
    onChangeText:(text:string) => void;
}

const Input : FC<Props>  = (props) => {
    return (
        <View style={styles.container} >
            <View style={{flex:0.1, justifyContent:'center', alignItems:'flex-start'}} >
                <Icon name={props.icon} size={22} style={{padding: 5}} />
            </View>
            <View style={{flex:1,justifyContent: 'center',}} >
                <TextInput  style={{padding:5}} placeholderTextColor="#555" placeholder={props.placeholder} onChangeText ={props.onChangeText} />
            </View>
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    container:{
        flexDirection:'row'
    //    width:width/1.05,
    //    borderBottomColor:'#aaa',
    // //    flex:1
    }
})