import react from 'react';
import {View,Text,StyleSheet, ScrollView} from "react-native";
import globalStyles from "./global-styles";

export default function TabUser({navigation}) {
    
  return (
    //<View style={globalStyles.container}>
    <View style={styles.container}>
    <Text style={{fontSize:18}}>User</Text>
      <ScrollView contentContainerStyle={styles.scrollViewContent} 
      style={{alignItems: 'center'}} horizontal={false}>
        <Text style={styles.text}>
          นายณัฐธัญ ทรงไทย    
          ISM26441N
          อายุ 20
          สถานศึกษา มหาวิทยาลัยเทคโนโลยีราชมงคลสุวรรณภูมิ ศูนย์ วาสุกรี
        </Text>
      </ScrollView>
    </View>
  
      
  );
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 50,
    alignItems:'center'
  },
  scrollViewContent:{
    margin: 5,
    padding:20,
    backgroundColor:'gray',
    width: 200,
},
  text:{
    fontSize: 16,
    color: 'white'
}

})