import * as React from 'react'
import {Text,View,Button,StyleSheet,Image, TouchableOpacity} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


const Tab = createMaterialTopTabNavigator();
const BTab = createBottomTabNavigator();

function Income(){
    return(
            <BottomTab/>
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
            />

            <Tab.Screen 
            name="Expense"
            component={Expense} 
            options={{tabBarLabel:'Expense'}}/>

            
        </Tab.Navigator>
    )
}

const Add=({children,onPress})=>{
    <TouchableOpacity 
    style={{
        top:-30,
        justifyContent:'center',
        alignItems: 'center',
        ...styles.shadow
    }}
    onPress={onPress}>
        <View
        style={{
            width: 70,
            height: 70,
            borderRadius:35,
            backgroundColor:'red'   //'#e32f45'
        }}>
            {children}
        </View>
    </TouchableOpacity>
}

function BottomTab(){
    return(
        <BTab.Navigator
        tabBarOptions={{
            showLabel:false,
            style: {
                position: 'absolute',
                bottom: 25,
                left:20,
                right:20,
                elevation: 0,
                backgroundColor:'skyblue',
                borderRadius: 15,
                height:90,
                ...styles.shadow
            }
        }}>
            <BTab.Screen name="Add" component={Add}
            options={{
                tabBarIcon: ({focused})=>(
                    <Image
                    source={require('../assets/plus.png')}
                    resizeMode="contain"
                    style={{
                        width:30,
                        height:30,
                        tintColor:'#fff'
                    }}
                    />
                ),
                tabBarButton:(props)=>(
                    <Add {...props} />
                )
            }}
                />
        </BTab.Navigator>
    )
}

export default function Login(){
    return(
        <NavigationContainer independent={true}>
            <MyTabs/>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({

    shadow:{
        shadowColor:'#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity:0.25,
        shadowRadius: 3.5,
        elevation:5


    }
})