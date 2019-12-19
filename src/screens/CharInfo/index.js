import React, {useEffect} from 'react'
import {View, Image, Text, FlatList, ScrollView} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {useDispatch, useSelector} from 'react-redux'

import {Creators as CharacterActions} from '../../store/ducks/character'

// import { Container } from './styles';

import Header from '../../components/Header'
import Container from '../../components/Container'
import Loading from '../../components/Loading'
import SectionComics from './SectionComics'

// eslint-disable-next-line react/prop-types
export default function CharInfo({navigation}) {
    const loading = useSelector(state => state.character.loadingChar)
    const charComics = useSelector(state => state.character.charComics)
    const char = useSelector(state => state.character.charInfo)

    const dispatch = useDispatch()

    const goBack = () => {
        navigation.goBack()
    }

    const _renderContent = loading => {
        if (loading) return <Loading />

        return (
            <ScrollView>
                <Image
                    source={{
                        uri: `${char.thumbnail.path}.${
                            char.thumbnail.extension
                        }`,
                    }}
                    style={{width: '100%', height: 250}}
                />
                <LinearGradient
                    colors={[
                        'rgba(0, 0, 0, 0.1)',
                        'transparent',
                        'rgba(0, 0, 0, 0.9)',
                    ]}
                    start={{x: 0, y: 0}}
                    end={{x: 0, y: 1}}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: 250,
                    }}
                />
                <View
                    style={{
                        position: 'absolute',
                        top: 190,
                        left: 20,
                        bottom: 0,
                        right: 10,
                        flex: 1,
                    }}>
                    <Text
                        style={{
                            fontFamily: 'Girassol-Regular',
                            fontSize: 20,
                            color: '#FFFFFF',
                        }}>
                        {char.name}
                    </Text>
                </View>

                <View style={{padding: 20}}>
                    <Text
                        style={{
                            fontFamily: 'Girassol-Regular',
                            fontSize: 20,
                            color: '#FFFFFF',
                        }}>
                        Comics
                    </Text>

                    <FlatList
                        keyExtractor={item => String(item.id)}
                        data={charComics}
                        renderItem={({item}) => <SectionComics comic={item} />}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />

                    <Text
                        style={{
                            fontFamily: 'Girassol-Regular',
                            fontSize: 20,
                            color: '#FFFFFF',
                        }}>
                        Series
                    </Text>
                </View>
            </ScrollView>
        )
    }

    useEffect(() => {
        const id = navigation.getParam('id')
        dispatch(CharacterActions.getCharacterRequest(id))
        dispatch(CharacterActions.getCharComicsRequest(id))
    }, [])

    return (
        <Container>
            <Header title="Character Info" goBack={goBack} />

            {_renderContent(loading)}
        </Container>
    )
}
