import React from "react";
import { StyleSheet, View, Text, Button  } from "react-native";
import globalStyles from "./global-styles";

export default function Home({navigation}){
    return(
        <View style={globalStyles.container}>
            <Text>Home Screen</Text>
            <Button title="go to About"
                onPress={() => navigation.navigate("About")}
            />
            <Button title="ข้อมูลนักศึกษาคนที่ 1"
                onPress={() => navigation.navigate("Contact",{
                  id: 123456789,                                //number  
                  name:'Natthan songthai',                      //string ตัวอักษร
                  married: false,                               //boolean true false  
                  phone:['0824458256','0005568945'],            //array
                  education:{                                   //object
                    bachelorDegree: 'Information System',
                    mastersDegree: 'IT'
                  }
                }
                )}        
            />
        </View>
    )
}