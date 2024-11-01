import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

export const Container = styled.View`
    flex: 1;
    background-color: #489cbd;
`;

export const HeaderContainer = styled(Animatable.View)`
    margin-top: 14%;
    margin-bottom: 8%;
    padding-left: 5%;
`;

export const HeaderText = styled.Text`
    font-size: 28px;
    font-weight: bold;
    color: #FFF;
`;

export const FormContainer = styled(Animatable.View)`
    background-color: #FFF;
    flex: 1;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    padding-left: 5%;
    padding-right: 5%;
`;

export const FormTitle = styled.Text`
    font-size: 20px;
    margin-top: 28px
`;

export const FormInput = styled.TextInput`
    border-bottom-width: 1px;
    height: 40px;
    margin-bottom: 12px;
    font-size: 16px;
    color: #000;
`;

export const AcessButton = styled.TouchableOpacity`
    background-color: #489cbd;
    width: 100%;
    borderadius: 4px;
    padding-top: 8px;
    padding-bottom: 8px;
    margin-top: 14px;
    justify-content: center;
    align-items: center;
`;

export const ButtonText = styled.Text`
    font-size: 18px;
    color: #FFF;
    font-weight: bold;
`;

export const RegisterButton = styled.TouchableOpacity`
    margin-top: 14px;
    align-self: center;
`;

export const RegisterButtonText = styled.Text`
    font-size: 14px;
    color: #a1a1a1;
    font-weight: bold;
`;
