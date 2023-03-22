import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen,InternalScreen } from "../../../screens";

const HomeStack = createNativeStackNavigator();

const HomeStacks = () => (
    <HomeStack.Navigator>
        <HomeStack.Screen 
            name="Home Screen Stack" 
            component={HomeScreen} 
            options={{
                headerShown:false
            }}
        />
        <HomeStack.Screen name="Internal Screen" component={InternalScreen} />
    </HomeStack.Navigator>
)
export default HomeStacks;