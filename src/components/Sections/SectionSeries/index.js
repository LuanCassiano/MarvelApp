import React from 'react'
import {ActivityIndicator} from 'react-native'
import PropTypes from 'prop-types'
import {
    Gradient,
    Container,
    ImageSerie,
    TitleSerie,
    ViewTitle,
    Content,
} from './styles'

export default function SectionSeries({serie, loading}) {
    return (
        <Container>
            {loading ? (
                <ActivityIndicator size="large" color="#52110a" />
            ) : (
                <Content>
                    <ImageSerie
                        source={{
                            uri: `${serie.thumbnail.path}.${
                                serie.thumbnail.extension
                            }`,
                        }}
                    />
                    <Gradient />
                    <ViewTitle>
                        <TitleSerie>{serie.title}</TitleSerie>
                    </ViewTitle>
                </Content>
            )}
        </Container>
    )
}

SectionSeries.propTypes = {
    serie: PropTypes.object.isRequired,
    loading: PropTypes.bool,
}

SectionSeries.defaultProps = {
    loading: true,
}
