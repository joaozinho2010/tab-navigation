import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import GalleryScreen from '../screens/GalleryScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const {Navigator,Screen} = createBottomTabNavigator();

export function BottomTabsRoutes(){

    return(
        <Navigator>
            <Screen name="Home" component={HomeScreen} options={{title:"Principal",
                tabBarIcon:({color,size}) => (<MaterialCommunityIcons name="home" color="red" size={size} />)
            }}/>
            <Screen name="Gallery" component={GalleryScreen} options={{title:"Galeria",
                tabBarIcon:({color,size}) => (<MaterialCommunityIcons name="image" color="red" size={size} />)
            }}/>
        </Navigator>
    )
}