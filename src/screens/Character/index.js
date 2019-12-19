import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {FlatList} from 'react-native'
import PropTypes from 'prop-types'

import ModalComponent from '../../components/ModalComponent'
import Loading from '../../components/Loading'
import Card from '../../components/Card'
import Header from '../../components/Header'

import {Creators as CharacterActions} from '../../store/ducks/character'

import {Content, Container} from './styles'

export default function Character({navigation}) {
    const refresh = useSelector(state => state.character.refresh)
    const loading = useSelector(state => state.character.loading)
    const listChar = useSelector(state => state.character)
    const dispatch = useDispatch()

    const [modalVisible, setModalVisible] = useState(false)
    const [character, setCharacter] = useState({})
    const [page, setPage] = useState(1)

    const modalController = char => {
        setCharacter(char)
        setModalVisible(!modalVisible)
        dispatch(CharacterActions.resetState())
    }

    const goBack = () => {
        navigation.goBack()
    }

    const refreshControl = () => {
        dispatch(CharacterActions.getCharactersRequest())
    }

    const loadCharacters = () => {
        setPage(page + 1)

        const currentPage = page + 1
        const offset = (currentPage - 1) * 20 + 1
        dispatch(CharacterActions.getCharsPaginationRequest(offset))
    }

    useEffect(() => {
        dispatch(CharacterActions.getCharactersRequest())
    }, [])

    return (
        <Container>
            <Header title="Characters" goBack={goBack} />
            {loading ? (
                <Loading />
            ) : (
                <Content>
                    <FlatList
                        keyExtractor={item => String(item.id)}
                        data={listChar.data}
                        renderItem={({item}) => (
                            <Card
                                item={item}
                                modalController={modalController}
                            />
                        )}
                        onRefresh={refreshControl}
                        onEndReached={loadCharacters}
                        onEndReachedThreshold={1}
                        refreshing={refresh}
                        showsVerticalScrollIndicator={false}
                    />
                </Content>
            )}
            {modalVisible && (
                <ModalComponent
                    visible={modalVisible}
                    char={character}
                    modalController={modalController}
                />
            )}
        </Container>
    )
}

Character.propTypes = {
    navigation: PropTypes.func,
}
