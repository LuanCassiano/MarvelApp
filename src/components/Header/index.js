import React from 'react';
import { View } from 'react-native';

import {
    Container,
    Content,
    HeaderActionButton,
    HeaderActionButtonIcon,
    Title
} from './styles'

import backIcon from '../../assets/icons/back.png'

export default function Header({ title, goBack }) {
    return (
        <Container>
            <Content>
                <HeaderActionButton onPress={goBack}>
                    <HeaderActionButtonIcon source={backIcon} />
                </HeaderActionButton>
                <Title>{title}</Title>
                <View>

                </View>
            </Content>
        </Container>
    );
}