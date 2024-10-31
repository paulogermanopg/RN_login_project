import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function SingIn() {
    return (
        <View style={styles.container}>
            <Animatable.View
                style={styles.containerHeader}
                animation="fadeInLeft"
                delay={500}
            >
                <Text style={styles.message}>Bem-vindo</Text>
            </Animatable.View>

            <Animatable.View 
                animation="fadeInUp"
                style={styles.containerForm}
            >
                <Text style={styles.title}>
                    E-mail
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite o seu e-mail"
                    placeholderTextColor="#888"
                />

                <Text style={styles.title}>
                    Senha
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite a sua senha"
                    placeholderTextColor="#888"
                />

                <TouchableOpacity
                    style={styles.button}
                >
                    <Text style={styles.textButton}>
                        Acessar
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonRegister}
                >
                    <Text style={styles.textButtonRegister}>
                        Cadastrar nova conta
                    </Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#176b8c',
    },
    containerHeader:{
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',
    },
    message:{
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF',
    },
    containerForm:{
        backgroundColor: '#FFF',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingEnd: '5%',
        paddingStart: '5%',
    },
    title:{
        fontSize: 20,
        marginTop: 28,
    },
    input:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
        color: '#000',
    },
    button:{
        backgroundColor: '#176b8c',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton:{
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold',
    },
    buttonRegister:{
        marginTop: 14,
        alignSelf: 'center',
    },
    textButtonRegister:{
        fontSize: 14,
        color: '#a1a1a1',
        fontWeight: 'bold',
    },
});
