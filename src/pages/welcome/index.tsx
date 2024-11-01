import React from 'react';
import { useNavigation } from '@react-navigation/native';
import * as S from './styles';

export default function Welcome() {
    const navigtion = useNavigation();

    return (
        <S.Container>
            <S.LogoContainer>
                <S.LogoImage
                    animation="flipInY"
                    source={require('../../assets/logo.png')}
                />
            </S.LogoContainer>

            <S.FormContainer
                animation="fadeInUp"
                delay={700}
            >
                <S.TitleText>
                    Tenha um Login mais agradável!
                </S.TitleText>

                <S.BodyText>
                    Faça login para começar.
                </S.BodyText>

                <S.AcessButton
                    onPress={() => navigtion.navigate('SingIn')}
                >
                    <S.ButtonText>
                        Acessar
                    </S.ButtonText>
                </S.AcessButton>
            </S.FormContainer>
        </S.Container>
    );
}
