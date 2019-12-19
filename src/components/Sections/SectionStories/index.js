import React from 'react'
import PropTypes from 'prop-types'

import {TagContainer, TagTitle} from './styles'

export default function SectionStories({storie}) {
    return (
        <TagContainer>
            <TagTitle>{storie.title}</TagTitle>
        </TagContainer>
    )
}

SectionStories.propTypes = {
    storie: PropTypes.object,
}
