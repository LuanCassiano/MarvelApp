import { createAppContainer, createStackNavigator } from 'react-navigation'

import HomeScreen from './screens/Home'
import CharacterScreen from './screens/Character'
import CharInfoScreen from './screens/CharInfo'

export default function Routes() {
    return createAppContainer(createStackNavigator({
        Home: HomeScreen,
        Character: CharacterScreen,
        CharInfo: CharInfoScreen
    }, {
        headerMode: 'none',
        defaultNavigationOptions: {
            gesturesEnabled: false
        }
    }))
}