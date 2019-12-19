import React, { useState } from 'react'
import { FlatList } from 'react-native'

import Container from '../../components/Container'

import iconCaptainAmerica from '../../assets/icons/ca.png'
import iconAvengers from '../../assets/icons/avengers.png'
import iconSpiderman from '../../assets/icons/spiderman.png'
import iconDeadpool from '../../assets/icons/deadpool.png'
import iconThor from '../../assets/icons/thor.png'
import iconIronman from '../../assets/icons/ironman.png'

import { 
    ButtonOptions,
    Content,
    ButtonText,
    ButtonIcon,
    Title
} from './styles'

export default function Home({ navigation }) {

    const navigate = (route) => {
        navigation.navigate(route)
    }

    const options = [
        {
            id: 1,
            title: 'Characters',
            icon: iconCaptainAmerica,
            route: 'Character'
        },
        {
            id: 2,
            title: 'Comics',
            icon: iconAvengers
        },
        {
            id: 3,
            title: 'Creators',
            icon: iconSpiderman
        },
        {
            id: 4,
            title: 'Events',
            icon: iconDeadpool
        },
        {
            id: 5,
            title: 'Series',
            icon: iconThor
        },
        {
            id: 6,
            title: 'Stories',
            icon: iconIronman
        }
    ]

    const _renderOptions = (item) => {
        return (
            <ButtonOptions onPress={() => navigate(item.route)}>
                <ButtonIcon source={item.icon}/>
                <ButtonText>{item.title}</ButtonText>
            </ButtonOptions>
        )
    }

    return (
        <Container>
            <Content>
                <Title>MarvelApp</Title>

                <FlatList 
                    keyExtractor={(item) => String(item.id)}
                    data={options}
                    renderItem={({ item }) => _renderOptions(item)}
                    numColumns={2}
                />
            </Content>
        </Container>
    )
}
