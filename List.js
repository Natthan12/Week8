import React from 'react'
import {View, StyleSheet, Text, FlatList, TouchableOpacity, Alert, Image} from 'react-native'

export default function List({navigation}){
   const listData = [
        {name: 'iphone15', price:48900, img:'https://cdn-icons-png.flaticon.com/128/604/604609.png'},
        {name: 'ipad', price:25900, img:'https://cdn-icons-png.flaticon.com/128/644/644425.png'},
        {name: 'iwatch', price:35900, img:'https://cdn-icons-png.flaticon.com/128/644/644427.png'},
        {name: 'ipad air', price:39900, img:'https://cdn-icons-png.flaticon.com/128/1753/1753805.png'}
   ]
   const onPressItem = (item)  => { navigation.navigate("Subject", {
     name: item.name
   }
   )

}
   const renderFlatListItem = (listData) =>{
        return (
          <TouchableOpacity onPress={() => onPressItem(listData.item)}>
          <View key={listData.item.name} style={styles.flatListItem}>
          <Image source={{uri: listData.item.img}} style={styles.img} />
          <Text style={styles.itemName}>{listData.item.name}</Text>
          <Text style={styles.itemPrice}>{listData.item.price}฿</Text>
            </View>
            </TouchableOpacity>
        )
       
   }
    return(
        <View style={styles.container}>
           <Text style={{alignSelf:'center', fontSize:20}}>รายการสินค้า</Text>
           <FlatList data={listData} 
           renderItem={renderFlatListItem}
           keyExtractor={(item, index) => item+index}
           style={styles.flatList}
           contentContainerStyle={styles.flatListContent}
           numColumns={2}
           />
        </View>      
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop:50,

    },
    flatList:{
      marginTop: 10


    },
    flatListContent:{
      margin: 10,
      paddingBottom: 50,
      alignItems:'center'

    },
    flatListItem:{
      width: 150,
      flexDirection:'column',
      justifyContent:'space-between',
      backgroundColor:'pink',
      marginBottom: 8,
      padding: 10,
      margin: 10,
      alignItems:'center',
      borderRadius: 10

    },
    itemName:{
      fontSize: 18,
      fontWeight:'bold'


    },
    itemPrice:{
      fontSize: 16,
      color: 'purple'


    },
    img:{
      width:100,
      height:100,
      marginRight:10
  
    }
    
})
