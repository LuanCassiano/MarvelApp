import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'

export const Container = styled.TouchableOpacity`
    margin: 10px 10px 10px 0;
`

export const ImageComic = styled.Image`
    width: 180px;
    height: 280px;
    border-radius: 10px;
`

export const Gradient = styled(LinearGradient).attrs({
    colors: ['rgba(0, 0, 0, 0.1)', 'transparent', 'rgba(0, 0, 0, 0.9)'],
    start: {x: 0, y: 0},
    end: {x: 0, y: 1},
})`
    position: absolute;
    top: 0;
    left: 0;
    width: 180;
    height: 280;
    border-radius: 10px;
`

export const ViewTitle = styled.View`
    position: absolute;
    top: 200;
    left: 20;
    bottom: 0;
    right: 10;
    flex: 1;
`

export const TitleComic = styled.Text`
    font-family: 'Girassol-Regular';
    font-size: 16;
    color: #ffffff;
`
