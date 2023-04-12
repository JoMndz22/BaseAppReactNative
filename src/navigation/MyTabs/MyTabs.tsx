import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ProfileScreen } from '../../screens';
import { HomeStacks } from '../MyStacks';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'red',
      }}
    >
      <Tab.Screen
        name='Home'
        component={HomeStacks}
        options={{
          tabBarLabel: 'Home Screen',
          tabBarBadge: 2,
          headerShown: false,
        }}
      />
      <Tab.Screen name='Profile' component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default MyTabs;
