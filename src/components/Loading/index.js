import React from 'react'
import { View } from 'react-native'
import LottieView from 'lottie-react-native'

import spider from '../../animations/deadpool.json'

export default function Loading() {
    return (
        <View style={{width: '100%', height: '100%', backgroundColor: '#52110A'}}>
            <LottieView 
                source={spider}
                autoPlay
                loop
            />
        </View>
    )
}
