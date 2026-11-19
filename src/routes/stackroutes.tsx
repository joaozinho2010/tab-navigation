import {createStackNavigator} from "@react-navigation/stack";
const {Navigator, Screen} = createStackNavigator();
import HomeScreen from "../screens/HomeScreen";
import GalleryScreen from "../screens/GalleryScreen";

export default function StackRoutes() {
    return (
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name="Home" component={HomeScreen} options={{headerShown:true,title:"Main Menu"}}/>
            <Screen name="Gallery" component={GalleryScreen}/>
        </Navigator>
    )
}
