import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'

export const ModalContainer = styled.View`
    flex: 1;
    background-color: rgba(0, 0, 0, 0.5);
`
export const ModalContent = styled.ScrollView`
    background-color: #ffffff;
    height: 100%;
    margin-top: 60px;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
`
export const ModalActionButton = styled.TouchableOpacity`
    align-items: flex-end;
    position: relative;
`

export const ActionButtonIcon = styled.Image`
    width: 20px;
    height: 20px;
`

export const Gradient = styled(LinearGradient).attrs({
    colors: ['rgba(0, 0, 0, 0.3)', 'rgba(0, 0, 0, 0.2)', 'trasparent'],
    start: {x: 0, y: 0},
    end: {x: 0, y: 1},
})`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 300px;
`

export const ImageCover = styled.ImageBackground.attrs({
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
})`
    flex: 1;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 300px;
`
export const ViewInfo = styled.View`
    flex: 1;
    padding: 20px;
`

export const Row = styled.View`
    flex-direction: row;
    margin-top: 10px;
    margin-bottom: 10px;
`
export const H1 = styled.Text`
    font-size: 20px;
    font-family: 'Montserrat-ExtraBold';
`
export const H2 = styled.Text`
    font-size: 16px;
    font-family: 'Montserrat-SemiBold';
`

export const Paragraph = styled.Text`
    font-size: 14px;
    font-family: 'Montserrat-Medium';
`
