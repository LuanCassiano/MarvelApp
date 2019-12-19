import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Modal, FlatList, Image, View} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import PropTypes from 'prop-types'

import {Creators as CharacterActions} from '../../store/ducks/character'

import {
    ModalContainer,
    ModalContent,
    ImageCover,
    ViewInfo,
    Row,
    H1,
    H2,
    Paragraph,
    ModalActionButton,
    ActionButtonIcon,
} from './styles'

import SectionComics from '../../screens/CharInfo/SectionComics'
import SectionEvents from '../../components/Sections/SectionEvents'
import SectionSeries from '../../components/Sections/SectionSeries'
import SectionStories from '../../components/Sections/SectionStories'

export default function ModalComponent({visible, char, modalController}) {
    const dispatch = useDispatch()

    const loading = useSelector(state => state.character.loadingComics)
    const charComics = useSelector(state => state.character.charComics)
    const charEvents = useSelector(state => state.character.charEvents)
    const charSeries = useSelector(state => state.character.charSeries)
    const charStories = useSelector(state => state.character.charStories)

    useEffect(() => {
        dispatch(CharacterActions.getCharComicsRequest(char.id))
        dispatch(CharacterActions.getCharEventsRequest(char.id))
        dispatch(CharacterActions.getCharSeriesRequest(char.id))
        dispatch(CharacterActions.getCharStoriesRequest(char.id))
    }, [char.id])
    return (
        <Modal
            animationType="slide"
            transparent
            visible={visible}
            onRequestClose={() => {}}>
            <ModalContainer>
                <ModalContent showsVerticalScrollIndicator={false}>
                    <ImageCover
                        blurRadius={2}
                        source={{
                            uri: `${char.thumbnail.path}.${
                                char.thumbnail.extension
                            }`,
                        }}>
                        <LinearGradient
                            colors={[
                                'rgba(0, 0, 0, 0.3)',
                                'rgba(0, 0, 0, 0.2)',
                                'transparent',
                            ]}
                            start={{x: 0, y: 0}}
                            end={{x: 0, y: 1}}
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: 300,
                            }}
                        />
                        <View
                            style={{
                                width: 150,
                                height: 150,
                                borderRadius: 75,
                                elevation: 20,
                            }}>
                            <Image
                                style={{
                                    width: 150,
                                    height: 150,
                                    borderRadius: 75,
                                }}
                                source={{
                                    uri: `${char.thumbnail.path}.${
                                        char.thumbnail.extension
                                    }`,
                                }}
                            />
                        </View>
                    </ImageCover>
                    <ViewInfo>
                        <ModalActionButton onPress={modalController}>
                            <ActionButtonIcon
                                source={require('../../assets/icons/close.png')}
                            />
                        </ModalActionButton>
                        <Row>
                            <H1>{char.name}</H1>
                        </Row>
                        <Row>
                            <Paragraph>
                                {char.description !== ''
                                    ? char.description
                                    : 'A Marvel hero'}
                            </Paragraph>
                        </Row>
                        <Row>
                            <H2>Comics</H2>
                        </Row>
                        <FlatList
                            keyExtractor={item => String(item.id)}
                            data={charComics}
                            renderItem={({item}) => (
                                <SectionComics comic={item} loading={loading} />
                            )}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />

                        <Row>
                            <H2>Events</H2>
                        </Row>
                        <FlatList
                            keyExtractor={item => String(item.id)}
                            data={charEvents}
                            renderItem={({item}) => (
                                <SectionEvents event={item} />
                            )}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />

                        <Row>
                            <H2>Series</H2>
                        </Row>
                        <FlatList
                            keyExtractor={item => String(item.id)}
                            data={charSeries}
                            renderItem={({item}) => (
                                <SectionSeries serie={item} loading={loading} />
                            )}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />

                        <Row>
                            <H2>Stories</H2>
                        </Row>
                        <FlatList
                            keyExtractor={item => String(item.id)}
                            data={charStories}
                            renderItem={({item}) => (
                                <SectionStories storie={item} />
                            )}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                    </ViewInfo>
                </ModalContent>
            </ModalContainer>
        </Modal>
    )
}

ModalComponent.propTypes = {
    visible: PropTypes.bool,
    char: PropTypes.object.isRequired,
    modalController: PropTypes.func.isRequired,
}

ModalComponent.defaultProps = {
    visible: false,
}
