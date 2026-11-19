import {createDrawerNavigator} from '@react-navigation/drawer';
import GalleryScreen from '../screens/GalleryScreen';
import HomeScreen from '../screens/HomeScreen';
const {Navigator,Screen} = createDrawerNavigator();

export function DrawerRoutes(){
    return(
        <Navigator>
            <Screen name="Home" component={HomeScreen} options={{title:"Principal"}}/>
            <Screen name="Gallery" component={GalleryScreen} options={{title:"Galeria"}} />
        </Navigator>
    )
}