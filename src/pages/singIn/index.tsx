import React from 'react';
import * as S from './styles';

export default function SingIn() {
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
                <S.FormInput
                    placeholder="Digite o seu e-mail"
                    placeholderTextColor="#888"
                />

                <S.FormTitle>
                    Senha
                </S.FormTitle>
                <S.FormInput
                    placeholder="Digite a sua senha"
                    placeholderTextColor="#888"
                    secureTextEntry={true}
                />

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
