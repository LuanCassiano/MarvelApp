import {all, takeLatest} from 'redux-saga/effects'

import {Types as CharacterTypes} from '../ducks/character'

import {
    getCharacters,
    getCharacter,
    getCharComics,
    getCharEvents,
    getCharSeries,
    getCharStories,
    getCharactersPagination,
} from './character'

export default function* rootSaga() {
    return yield all([
        takeLatest(CharacterTypes.GET_CHARS_REQUEST, getCharacters),
        takeLatest(CharacterTypes.GET_CHAR_REQUEST, getCharacter),
        takeLatest(CharacterTypes.GET_CHAR_COMICS_REQUEST, getCharComics),
        takeLatest(CharacterTypes.GET_CHAR_EVENTS_REQUEST, getCharEvents),
        takeLatest(CharacterTypes.GET_CHAR_SERIES_REQUEST, getCharSeries),
        takeLatest(CharacterTypes.GET_CHAR_STORIES_REQUEST, getCharStories),
        takeLatest(
            CharacterTypes.GET_CHARS_PAGINATION_REQUEST,
            getCharactersPagination
        ),
    ])
}
