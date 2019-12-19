import produce from 'immer'

export const Types = {
    GET_CHARS_REQUEST: 'character/GET_CHARS_REQUEST',
    GET_CHARS_RESPONSE: 'character/GET_CHARS_RESPONSE',
    GET_CHAR_REQUEST: 'character/GET_CHAR_REQUEST',
    GET_CHAR_RESPONSE: 'character/GET_CHAR_RESPONSE',
    GET_CHAR_COMICS_REQUEST: 'character/GET_CHAR_COMICS_REQUEST',
    GET_CHAR_COMICS_RESPONSE: 'character/GET_CHAR_COMICS_RESPONSE',
    GET_CHAR_EVENTS_REQUEST: 'character/GET_CHAR_EVENTS_REQUEST',
    GET_CHAR_EVENTS_RESPONSE: 'character/GET_CHAR_EVENTS_RESPONSE',
    GET_CHAR_SERIES_REQUEST: 'character/GET_CHAR_SERIES_REQUEST',
    GET_CHAR_SERIES_RESPONSE: 'character/GET_CHAR_SERIES_RESPONSE',
    GET_CHAR_STORIES_REQUEST: 'character/GET_CHAR_STORIES_REQUEST',
    GET_CHAR_STORIES_RESPONSE: 'character/GET_CHAR_STORIES_RESPONSE',
    GET_CHARS_PAGINATION_REQUEST: 'character/GET_CHARS_PAGINATION_REQUEST',
    GET_CHARS_PAGINATION_RESPONSE: 'character/GET_CHARS_PAGINATION_RESPONSE',
    RESET_STATE: 'character/RESET_STATE',
}

const INITIAL_STATE = {
    loading: true,
    loadingChar: true,
    loadingComics: false,
    loadingEvents: false,
    loadingSeries: false,
    loadingStories: false,
    loadingPaginate: false,
    refresh: false,
    data: [],
    charComics: [],
    charSeries: [],
    charStories: [],
    charEvents: [],
    charInfo: {},
    offset: 1,
    limit: 10,
}

export default function character(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case Types.GET_CHARS_REQUEST: {
                draft.loading = true
                draft.refresh = true
                break
            }

            case Types.GET_CHARS_RESPONSE: {
                draft.data = action.payload.data.results
                draft.loading = false
                draft.refresh = false
                break
            }

            case Types.GET_CHAR_REQUEST: {
                draft.loadingChar = true
                break
            }

            case Types.GET_CHAR_RESPONSE: {
                draft.charInfo = action.payload.data
                draft.loadingChar = false
                break
            }

            case Types.GET_CHAR_COMICS_REQUEST: {
                draft.loadingComics = true
                break
            }

            case Types.GET_CHAR_COMICS_RESPONSE: {
                draft.charComics = action.payload.data.results
                draft.loadingComics = false
                break
            }

            case Types.GET_CHAR_EVENTS_REQUEST: {
                draft.loadingEvents = true
                break
            }

            case Types.GET_CHAR_EVENTS_RESPONSE: {
                draft.charEvents = action.payload.data.results
                draft.loadingEvents = false
                break
            }

            case Types.GET_CHAR_SERIES_REQUEST: {
                draft.loadingSeries = true
                break
            }

            case Types.GET_CHAR_SERIES_RESPONSE: {
                draft.charSeries = action.payload.data.results
                draft.loadingSeries = false
                break
            }

            case Types.GET_CHAR_STORIES_REQUEST: {
                draft.loadingStories = true
                break
            }

            case Types.GET_CHAR_STORIES_RESPONSE: {
                draft.charStories = action.payload.data.results
                draft.loadingStories = false
                break
            }

            case Types.GET_CHARS_PAGINATION_REQUEST: {
                draft.loadingPaginate = true
                break
            }

            case Types.GET_CHARS_PAGINATION_RESPONSE: {
                draft.data = [...draft.data, ...action.payload.data.results]
                draft.loadingPaginate = false
                break
            }

            case Types.RESET_STATE: {
                draft.loadingComics = true
                break
            }
            default:
                break
        }
    })
}

export const Creators = {
    getCharactersRequest: offset => ({
        type: Types.GET_CHARS_REQUEST,
        payload: {offset},
    }),

    getCharactersSuccess: data => ({
        type: Types.GET_CHARS_RESPONSE,
        payload: {data},
    }),

    getCharacterRequest: id => ({
        type: Types.GET_CHAR_REQUEST,
        payload: {id},
    }),

    getCharacterResponse: data => ({
        type: Types.GET_CHAR_RESPONSE,
        payload: {data},
    }),

    getCharComicsRequest: charId => ({
        type: Types.GET_CHAR_COMICS_REQUEST,
        payload: {charId},
    }),

    getCharComicsResponse: data => ({
        type: Types.GET_CHAR_COMICS_RESPONSE,
        payload: {data},
    }),

    getCharEventsRequest: charId => ({
        type: Types.GET_CHAR_EVENTS_REQUEST,
        payload: {charId},
    }),

    getCharEventsResponse: data => ({
        type: Types.GET_CHAR_EVENTS_RESPONSE,
        payload: {data},
    }),

    getCharSeriesRequest: charId => ({
        type: Types.GET_CHAR_SERIES_REQUEST,
        payload: {charId},
    }),

    getCharSeriesResponse: data => ({
        type: Types.GET_CHAR_SERIES_RESPONSE,
        payload: {data},
    }),

    getCharStoriesRequest: charId => ({
        type: Types.GET_CHAR_STORIES_REQUEST,
        payload: {charId},
    }),

    getCharStoriesResponse: data => ({
        type: Types.GET_CHAR_STORIES_RESPONSE,
        payload: {data},
    }),

    getCharsPaginationRequest: offset => ({
        type: Types.GET_CHARS_PAGINATION_REQUEST,
        payload: {offset},
    }),

    getCharsPaginationResponse: data => ({
        type: Types.GET_CHARS_PAGINATION_RESPONSE,
        payload: {data},
    }),

    resetState: () => ({
        type: Types.RESET_STATE,
    }),
}
