import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
    const navigtion = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Animatable.Image
                    animation="flipInY"
                    source={require('../../assets/logo.png')}
                    style={{ width: '100%', resizeMode:'contain' }}
                />
            </View>

            <Animatable.View
                style={styles.containerForm}
                animation="fadeInUp"
                delay={700}
            >
                <Text style={styles.title}>
                    Tenha um Login mais agradável!
                </Text>

                <Text style={styles.text}>
                    Faça login para começar.
                </Text>

                <TouchableOpacity
                    onPress={() => navigtion.navigate('SingIn')}
                    style={styles.button}
                >
                    <Text style={styles.textButton}>
                        Acessar
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
    containerLogo:{
        flex: 2,
        backgroundColor: '#176b8c',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerForm:{
        flex: 1,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
    },
    text:{
        color: '#a1a1a1',
    },
    button:{
        position: 'absolute',
        backgroundColor: '#176b8c',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButton:{
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold',
    },
});
