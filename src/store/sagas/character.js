import {call, put} from 'redux-saga/effects'
import api from '../../services/api'
import md5 from 'js-md5'

const PUBLIC_KEY = '7d1e32fa896c45120f81b8a2d82b9d07'
const PRIVATE_KEY = 'fe7a85d66c94a1ca232ef91ae09127b104853e09'

const timestamp = Number(new Date())
const hash = md5.create()
hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY)

import {Creators as CharacterActions} from '../ducks/character'

export function* getCharacters({payload: {offset}}) {
    try {
        const response = yield call(
            api.get,
            `/characters?ts=${timestamp}&orderBy=name&limit=20&offset=${offset}&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`
        )

        console.tron.log('chama nenem', response)

        yield put(CharacterActions.getCharactersSuccess(response.data.data))
    } catch (error) {
        console.tron.log('error', error)
    }
}

export function* getCharacter({payload: {id}}) {
    try {
        const response = yield call(
            api.get,
            `/characters/${id}?ts=${timestamp}&orderBy=name&limit=10&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`
        )

        yield put(
            CharacterActions.getCharacterResponse(response.data.data.results[0])
        )
        yield put(CharacterActions.resetState())
    } catch (error) {
        console.tron.log('error', error)
    }
}

export function* getCharComics({payload: {charId}}) {
    try {
        const response = yield call(
            api.get,
            `/characters/${charId}/comics?ts=${timestamp}&limit=10&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`
        )

        yield put(CharacterActions.getCharComicsResponse(response.data.data))
    } catch (error) {
        console.tron.log('error', error)
    }
}

export function* getCharEvents({payload: {charId}}) {
    try {
        const response = yield call(
            api.get,
            `/characters/${charId}/events?ts=${timestamp}&limit=10&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`
        )

        yield put(CharacterActions.getCharEventsResponse(response.data.data))
    } catch (error) {
        console.tron.log('error', error)
    }
}

export function* getCharSeries({payload: {charId}}) {
    try {
        const response = yield call(
            api.get,
            `/characters/${charId}/series?ts=${timestamp}&limit=10&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`
        )

        yield put(CharacterActions.getCharSeriesResponse(response.data.data))
    } catch (error) {
        console.tron.log('error', error)
    }
}

export function* getCharStories({payload: {charId}}) {
    try {
        const response = yield call(
            api.get,
            `/characters/${charId}/stories?ts=${timestamp}&limit=10&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`
        )

        yield put(CharacterActions.getCharStoriesResponse(response.data.data))
    } catch (error) {
        console.tron.log('error', error)
    }
}

export function* getCharactersPagination({payload: {offset}}) {
    console.tron.log('offset loko', offset)
    try {
        const response = yield call(
            api.get,
            `/characters?ts=${timestamp}&orderBy=name&limit=20&offset=${offset}&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`
        )

        yield put(CharacterActions.getCharsPaginationResponse(response.data.data))
    } catch (error) {
        console.tron.log('eita', error)
    }
}
