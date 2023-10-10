import react from 'react';
import {View,Text,StyleSheet, ScrollView,Image} from "react-native";
//import globalStyles from "./global-styles";

export default function TabMenu({navigation}) {
    
  return (
    //<View style={globalStyles.container}>
      <View style={styles.container}>
      <Text style={{fontSize:18}}>User</Text>
      <ScrollView contentContainerStyle={styles.scrollViewContent} 
      style={{alignItems: 'center'}} horizontal={false}>
        <Text style={styles.text}>
          
        </Text>
      </ScrollView>
    </View>
  
      
  );
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 50,
  },
  scrollViewContent:{
    margin: 5,
    padding:20,
    backgroundColor:'gray'
},
  text:{
    fontSize: 16
}

})