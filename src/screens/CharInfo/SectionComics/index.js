import React from 'react'
import {ActivityIndicator} from 'react-native'
import PropTypes from 'prop-types'
import {Container, Gradient, ImageComic, TitleComic, ViewTitle} from './styles'

export default function SectionComics({comic, loading}) {
    return (
        <Container>
            {loading ? (
                <ActivityIndicator size="large" color="#52110a" />
            ) : (
                <>
                    <ImageComic
                        source={{
                            uri: `${comic.thumbnail.path}.${
                                comic.thumbnail.extension
                            }`,
                        }}
                    />
                    <Gradient />
                    <ViewTitle>
                        <TitleComic>{comic.title}</TitleComic>
                    </ViewTitle>
                </>
            )}
        </Container>
    )
}

SectionComics.propTypes = {
    comic: PropTypes.object.isRequired,
    loading: PropTypes.bool,
}

SectionComics.defaultProps = {
    loading: true,
}
