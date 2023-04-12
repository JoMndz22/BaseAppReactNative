import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, InternalScreen } from '../../../screens';

export type RootStackParamList = {
  InternalScreen: undefined;
  HomeScreenStack: undefined;
};

const HomeStack = createNativeStackNavigator();

const HomeStacks = (): JSX.Element => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name={'HomeScreenStack'}
      component={HomeScreen}
      options={{
        headerShown: false,
      }}
    />
    <HomeStack.Screen name={'InternalScreen'} component={InternalScreen} />
  </HomeStack.Navigator>
);
export default HomeStacks;
