import React from 'react'
import createNavigator from './routes'
import NavigationService from './services/navigation'

export default function App() {

    const registerService = (ref) => {
        NavigationService.setTopLevelNavigator(ref)
    }

    const Routes = createNavigator()

    return (
        <Routes ref={registerService}/>
    )
}
