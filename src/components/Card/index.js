/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import {TouchableOpacity, View, Image, Text} from 'react-native'
import PropTypes from 'prop-types'

export default function Card({item, modalController}) {
    return (
        <View
            style={{
                backgroundColor: '#52110a',
                borderRadius: 20,
                margin: 10,
                flexDirection: 'row',
                elevation: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
                <Image
                    resizeMode="cover"
                    source={{
                        uri: `${item.thumbnail.path}.${
                            item.thumbnail.extension
                        }`,
                    }}
                    style={{
                        width: 130,
                        height: 200,
                        borderTopLeftRadius: 20,
                        borderBottomLeftRadius: 20,
                    }}
                />

                <View style={{padding: 15, marginLeft: 10}}>
                    <View style={{flexDirection: 'row'}}>
                        <Text
                            numberOfLines={4}
                            style={{
                                flex: 1,
                                fontFamily: 'Girassol-Regular',
                                fontSize: 20,
                                color: '#f5f5f5',
                                textTransform: 'uppercase',
                            }}>
                            {item.name}
                        </Text>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 10}}>
                        <Text
                            numberOfLines={4}
                            style={{
                                flex: 1,
                                color: '#f5f5f5',
                                fontFamily: 'Girassol-Regular',
                                fontSize: 10,
                            }}>
                            {item.description !== ''
                                ? item.description
                                : 'A Marvel hero'}
                        </Text>
                    </View>

                    <View style={{flex: 1, justifyContent: 'flex-end'}}>
                        <TouchableOpacity onPress={() => modalController(item)}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                }}>
                                <Text
                                    style={{
                                        fontFamily: 'Girassol-Regular',
                                        fontSize: 15,
                                        textTransform: 'uppercase',
                                        color: '#ffffff',
                                    }}>
                                    More info
                                </Text>
                                <Image
                                    source={require('../../assets/icons/arrow-rigth.png')}
                                    style={{
                                        width: 10,
                                        height: 10,
                                        marginTop: 5,
                                        marginLeft: 20,
                                    }}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

Card.propTypes = {
    item: PropTypes.object.isRequired,
    modalController: PropTypes.func.isRequired,
}
