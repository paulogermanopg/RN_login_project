import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

export const Container = styled.View`
    flex: 1;
    background-color: #489cbd;
`;

export const LogoContainer = styled.View`
    flex: 2;
    background-color: #489cbd;
    justify-content: center;
    align-items: center;
`;

export const LogoImage = styled(Animatable.Image)`
    width: 100%;
    resize-mode: contain;
`;

export const FormContainer = styled(Animatable.View)`
    flex: 1;
    background-color: #FFF;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    paddingStart: 5%;
    paddingEnd: 5%;
`;

export const TitleText = styled.Text`
    font-size: 24px;
    font-weight: bold;
    margin-top: 28px;
    margin-bottom: 12px;
`;

export const BodyText = styled.Text`
    color: #a1a1a1;
`;

export const AcessButton = styled.TouchableOpacity`
    position: absolute;
    background-color: #489cbd;
    border-radius: 50px;
    padding-top: 8px;
    padding-bottom: 8px;
    width: 60%;
    align-self: center;
    bottom: 15%;
    align-items: center;
    justify-content: center;
`;

export const ButtonText = styled.Text`
    font-size: 18px;
    color: #FFF;
    font-weight: bold;
`;
