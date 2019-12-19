import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'

export const Container = styled.View`
    margin: 10px 10px 10px 0;
`
export const Content = styled.TouchableOpacity`
    width: 300px;
    height: 250px;
    border-radius: 10px;
`

export const ImageSerie = styled.Image`
    width: 300px;
    height: 250px;
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
    width: 300;
    height: 250;
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

export const TitleSerie = styled.Text`
    font-family: 'Montserrat-Medium';
    font-size: 16;
    color: #ffffff;
`
