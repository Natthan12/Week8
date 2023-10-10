import react from 'react';
import {View,Text,StyleSheet, ScrollView, Image} from "react-native";
//import globalStyles from "./global-styles";

export default function TabHome({navigation}) {
    
  return (
    //<View style={globalStyles.container}>
    <View style={styles.container}>
      <Text style={{fontSize:18}}>นกโดโดที่สูญพันธุ์ไปแล้ว อาจกลับมามีชีวิตอีกครั้ง</Text>
      <ScrollView contentContainerStyle={styles.scrollViewContent} 
      style={{alignItems: 'center'}} horizontal={false}>
        <Text style={styles.text}>
        <Image source={require('./Dodo1.jpg')} style={styles.img}/>
        <Image source={require('./Dodo2.jpg')} style={styles.img}/>
         
         </Text>
      </ScrollView>
    </View>
  
      
  );
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 50,
    backgroundColor:'green'
  },
  scrollViewContent:{
    margin: 5,
    padding:20,
    backgroundColor:'gray'
},
  text:{
    fontSize: 16
},
  img:{
      width:300,
      height:300,
      marginRight:10
  
    }

})