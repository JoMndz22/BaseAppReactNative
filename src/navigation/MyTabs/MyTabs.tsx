import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//screens
import { ProfileScreen } from '../../screens'
import { HomeStacks } from '../myStacks';
const Tab = createBottomTabNavigator();

const MyTabs = () => {
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'red'
            }}
        >
            <Tab.Screen 
                name="Home"
                component={HomeStacks} 
                options={{
                    //https://reactnavigation.org/docs/bottom-tab-navigator#options
                    tabBarLabel:'Home Screen',
                    tabBarBadge: 2,
                    headerShown:false
                }}
            />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    )
}

export default MyTabs