import React from 'react';

import {
    View,
    StatusBar,
    Image,
    TextInput,
    TouchableOpacity,
    Text,
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback,
    Platform
} from 'react-native'

import { FontAwesome5 } from '@expo/vector-icons'

import { styles } from './styles';
import Logo from '../../assets/logo.png'

export function Login() {
    return (
        <TouchableWithoutFeedback
            onPress={() => Keyboard.dismiss()}
        >

            <View style={styles.container}>
                <StatusBar
                    backgroundColor="#FFFFFF"
                    translucent
                />

                <Image
                    source={Logo}
                    style={styles.image}
                />

                <TextInput
                    placeholder="Celular, nome de usuário ou email"
                    style={styles.input}
                />
                <TextInput
                    placeholder="Sua senha"
                    style={styles.input}
                />

                <View style={styles.forgotContainer}>
                    <TouchableOpacity>
                        <Text style={styles.forgotPassword}>
                            Esqueceu sua senha?
                        </Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.loginText}>
                        Acessar
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.fbContainer}>
                    <FontAwesome5
                        name="facebook"
                        size={25}
                        color="#399FFF"
                    />
                    <Text style={styles.fbText}>
                        Continue como Matteus
                    </Text>
                </TouchableOpacity>

                <View style={styles.divisor}>
                    <View style={styles.divisorLine}>
                    </View>
                </View>

                <View style={styles.signUpContainer}>
                    <Text style={styles.signUpText}>
                        Não possui uma conta?
                    </Text>
                    <TouchableOpacity>
                        <Text style={styles.signUpButton}>
                            Cadastre-se
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

        </TouchableWithoutFeedback>
    );
}