import { createStackNavigator } from 'react-navigation';
import Home from '../Home';
import TestComponentB from '../TestComponentB';

const Navigator = createStackNavigator(
    {
        Home: {screen: Home},
        TestComponentB: {screen: TestComponentB},
    },
    {
        initialRouteName: "Home",
        headerMode: 'none',
    }
);

export default Navigator;