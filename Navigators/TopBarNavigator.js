import * as React from 'react'
import {Text,View,Button} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import {useSafeAreaInsets} from 'react-native-safe-area-context';


const Tab = createMaterialTopTabNavigator();

function Income(){
    return(
        <View>
            <Text>Income page</Text>
        </View>
    )
}

function Expense(){
    return(
        <View>
            <Text>Expense page</Text>
        </View>
    )
}

function MyTabs() {

    const insets = useSafeAreaInsets();

    return(
        <Tab.Navigator
        initialRouteName="Income"
        tabBarOptions={{
            activeTintColor:'#e91e63',
            labelStyle:{fontSize:12},
            style:{backgroundColor:'white',marginTop:insets.top}
        }}>
            <Tab.Screen 
            name="Income"
            component={Income} 
            options={{tabBarLabel:'Income'}}/>

            <Tab.Screen 
            name="Expense"
            component={Expense} 
            options={{tabBarLabel:'Expense'}}/>

            
        </Tab.Navigator>
    )
}

export default function Login(){
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )
}