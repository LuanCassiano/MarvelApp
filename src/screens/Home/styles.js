import styled from 'styled-components/native';

export const Content = styled.View`
    flex: 1;
    margin-top: 50px;
`;

export const Title = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #FFFFFF;
    text-align: center;
`;

export const ButtonOptions = styled.TouchableOpacity`
    width: 38%;
    padding: 15px;
    background-color: #FFFFFF;
    border-radius: 5px;
    margin: 20px 20px 20px 20px;
    justify-content: center;
    align-items: center;
    elevation: 10;
`;

export const ButtonIcon = styled.Image`
    width: 60;
    height: 60px;
`;

export const ButtonText = styled.Text`
    font-size: 16px;
    color: #52110A;
    text-align: center;
`;