import react from 'react';
//import ColumnItem from './column-item';//
//import LayOut from './layout';
//import LayOut2 from './layout2';
//import Question from './Question';
//import TouchableDemo from './touchable-demo2';
//import {NavigationContainer} from '@react-navigation/native';
//import {createStackNavigator} from '@react-navigation/stack';
//import Home from './home'
//import About from './about'
//import Contact from './contact';
//import {NavigationContainer} from '@react-navigation/native';
//import {createStackNavigator} from '@react-navigation/stack';
//import List from './List';
//import Subject from './Subject';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {Ionicons} from 'react-native-vector-icons'
import TabHome from "./tab-home";
import TabProduct from "./tab-product";
import TabMenu from "./tab-menu";
import TabUser from "./tab-user";
import TabAbout from "./tab-about";

export default function App() {
    //const Stack = createStackNavigator()
    const Tab = createBottomTabNavigator()
  return (
        //<ColumnItem/>//
      //<RowItem/>//
     //<Question/>
     //<TouchableDemo/>
     /*const Stack = createStackNavigator()

     return (
       <NavigationContainer>
          <Stack.Navigator initialRoutName='Home'>
            <Stack.Screen name="Home" component={Home}
              options={{headerTitle: 'หน้าแรก', hederbackTitle:''}}
            />
            <Stack.Screen name="About" component={About}
              options={{headerTitle: 'เกี่ยวกับฉัน', hederbackTitle:''}}
            />
            <Stack.Screen name="Contact" component={Contact}
              options={{headerTitle: 'ข้อมูลส่วนตัว', hederbackTitle:''}}
            />

          </Stack.Navigator>
       </NavigationContainer>
     )*/
    /*<NavigationContainer>
        <Stack.Navigator initialRouteName='List'>
          <Stack.Screen name="List" component={List}
          options={{headerTitle: 'หน้าแรก', headerBackTitle:''}}
          />
          <Stack.Screen name="Subject" component={Subject}
          options={{headerTitle: 'รายละเอียดสินค้า', headerBackTitle:''}}
          />

        </Stack.Navigator>
      </NavigationContainer>*/
  
      <NavigationContainer>
        <Tab.Navigator tabBarOptions={{
          labelStyle: {fontSize: 14}, //ขนาดตัวอักษร บนปุ่ม 
          showLabel: true, //โชว์ทุกปุ่ม
            inactiveTinColor: 'blue', //ปรับทั้งสีไอค่อนและข้อความ ขณะยังไม่ได้กด สถานะปกติ
            activeTinColor: 'red', //สีข้อความในสถานะกด
        }}>
          <Tab.Screen name="TabHome" component={TabHome} options={{
            tabBarLabel:'หน้าแรก', //ข้อความบนปุ่มนี้
            tabBarIcon: ({color, size}) => {
              return <Ionicons name="md-home" size={18} color={color}/>
              }
            }}/>
            <Tab.Screen name="TabProduct" component={TabProduct} options={{
            tabBarLabel:'สินค้า', //ข้อความบนปุ่มนี้
            tabBarIcon: ({color, size}) => {
              return <Ionicons name="cart" size={20} color={color}/>
              }
            }}/>
            <Tab.Screen name="TabMenu" component={TabMenu} options={{
            tabBarLabel:'เมนู', //ข้อความบนปุ่มนี้
            tabBarIcon: ({color, size}) => {
              return <Ionicons name="menu" size={18} color={color}/>
              }
            }}/>
            <Tab.Screen name="TabUser" component={TabUser} options={{
            tabBarLabel:'ฉัน', //ข้อความบนปุ่มนี้
            tabBarIcon: ({color, size}) => {
              return <Ionicons name="people" size={18} color={color}/>
              }
            }}/>
            <Tab.Screen name="TabAbout" component={TabAbout} options={{
            tabBarLabel:'เกียวกับ', //ข้อความบนปุ่มนี้
            tabBarIcon: ({color, size}) => {
              return <Ionicons name="information" size={18} color={color}/>
              }
            }}/>
        </Tab.Navigator>
      </NavigationContainer>
  
      
  );
}