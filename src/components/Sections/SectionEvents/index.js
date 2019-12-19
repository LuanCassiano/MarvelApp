import React from 'react'
import PropTypes from 'prop-types'

import {TagContainer, TagTitle, Container, TagImage} from './styles'

export default function SectionEvents({event}) {
    return (
        <Container>
            <TagContainer>
                <TagImage
                    source={{
                        uri: `${event.thumbnail.path}.${
                            event.thumbnail.extension
                        }`,
                    }}
                />
            </TagContainer>
        </Container>
    )
}

SectionEvents.propTypes = {
    event: PropTypes.object,
}
