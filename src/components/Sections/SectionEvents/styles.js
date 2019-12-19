import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    flex-direction: column;
`

export const TagContainer = styled.TouchableOpacity`
    width: 120px;
    height: 120px;
    background-color: #52110a;
    border-radius: 60px;
    margin-right: 10px;
    elevation: 1;
`

export const TagImage = styled.Image`
    width: 120px;
    height: 120px;
    border-radius: 60px;
`

export const TagTitle = styled.Text`
    flex: 1;
    font-family: 'Montserrat-Medium';
    font-size: 12px;
    color: #52110a;
    text-align: center;
`
