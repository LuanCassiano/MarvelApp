import styled from 'styled-components/native'

export const CardContainer = styled.View`
    background-color: #52110a;
    border-radius: 20px;
    margin: 10px;
    flex-direction: row;
    elevation: 10;
`

export const CardContent = styled.View`
    flex-direction: row;
`

export const CardMedia = styled.Image`
    width: 130px;
    height: 200px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
`
export const ViewInfo = styled.View`
    padding: 15px;
    margin-left: 10px;
`

export const Row = styled.View`
    flex-direction: row;
`

export const Title = styled.Text`
    flex: 1;
    font-family: 'Girassol-Regular';
    font-size: 20px;
    color: #f5f5f5;
    text-transform: uppercase;
`
export const Paragraph = styled.Text`
    flex: 1;
    color: #f5f5f5;
    font-family: 'Girassol-Regular';
    font-size: 10px;
`
export const CardFooter = styled.View`
    flex: 1;
    justify-content: flex-end;
`

export const ActionButton = styled.TouchableOpacity``

export const ButtonTitle = styled.Text`
    font-family: 'Girassol-Regular';
    font-size: 15px;
    text-transform: uppercase;
    color: #ffffff;
`

export const ButtonIcon = styled.Image`
    width: 10px;
    height: 10px;
    margin-top: 5px;
    margin-left: 20px;
`
