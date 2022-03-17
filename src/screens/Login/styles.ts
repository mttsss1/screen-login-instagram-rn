import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        marginTop: Platform.OS === 'android' ? '13%' : '20%',
        marginBottom: Platform.OS === 'android' ? '13%' : '15%',
        width: 212,
        height: 89
    },
    input: {
        width: '90%',
        height: 42,
        backgroundColor: '#F4F3F3',
        marginBottom: 20,
        padding: 8,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#E0E0E0'
    },
    forgotContainer: {
        width: '90%',
        alignItems: 'flex-end'
    },
    forgotPassword: {
        color: '#399FFF'
    },
    loginButton: {
        marginTop: '5%',
        backgroundColor: '#399FFF',
        width: '90%',
        height: 42,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    loginText: {
        color: '#FFFFFF',
        fontSize: 17
    },
    fbContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '15%'
    },
    fbText: {
        color: '#399FFF',
        paddingLeft: 8,
        fontSize: 15,
    },
    divisor: {
        marginTop: '10%',
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    divisorLine: {
        width: '70%',
        height: 3,
        backgroundColor: '#EFEDED',
        borderRadius: 5
    },
    signUpContainer: {
        flexDirection: 'row',
        marginTop: '10%'
    },
    signUpText: {
        color: '#C4C4C4',
        paddingRight: 5
    },
    signUpButton: {
        color: '#399FFF',
        fontWeight: 'bold'
    }
}) 