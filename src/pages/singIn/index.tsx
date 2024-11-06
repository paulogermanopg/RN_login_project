import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import * as S from './styles';

export default function SingIn() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [secureEntry, setSecureEntry] = useState<boolean>(true);

    const toggleSecureEntry = () => {
        setSecureEntry(!secureEntry);
    };

    return (
        <S.Container>
            <S.HeaderContainer
                animation="fadeInLeft"
                delay={500}
            >
                <S.HeaderText>Bem-vindo</S.HeaderText>
            </S.HeaderContainer>

            <S.FormContainer
                animation="fadeInUp"
            >
                <S.FormTitle>
                    E-mail
                </S.FormTitle>

                <S.InputContainer>
                    <S.FormInput
                        placeholder="Digite o seu e-mail"
                        placeholderTextColor="#888"
                        onChangeText={setEmail}
                    />
                </S.InputContainer>

                <S.FormTitle>
                    Senha
                </S.FormTitle>

                <S.InputContainer>
                    <S.FormInput
                        placeholder="Digite a sua senha"
                        placeholderTextColor="#888"
                        secureTextEntry={secureEntry}
                        onChangeText={setPassword}
                    />

                <S.ToggleButton onPress={toggleSecureEntry}>
                    <Icon
                        name={secureEntry ? 'eye-off' : 'eye'}
                        size={24}
                        color="#ccc"
                    />
                </S.ToggleButton>
                </S.InputContainer>

                <S.AcessButton>
                    <S.ButtonText>
                        Acessar
                    </S.ButtonText>
                </S.AcessButton>

                <S.RegisterButton>
                    <S.RegisterButtonText>
                        Cadastrar nova conta
                    </S.RegisterButtonText>
                </S.RegisterButton>
            </S.FormContainer>
        </S.Container>
    );
}
