
import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function HelloScreen() {
    return (
        <LinearGradient
            colors={["#4b644f", "#4f5e51", "#3a443b"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{ flex: 1 }}
        >
	
            <View style={styles.container}>

            <View style={styles.perfil}>
            <Image
                source={require('../assets/images/sam-porter-bridges.png')}
                style={styles.avatar}
            />
                <Text style={styles.textoAvatar}>Sam</Text>
            </View>

            {/* linha separadora */}
            <View style={styles.linha} />

            <Text style={styles.titulo}>Olá, React Native! 👋</Text>
            <Text style={styles.subtitulo}>Meu primeiro componente</Text>

            <View style={styles.row}>
                <View style={[styles.box, { backgroundColor: '#FF6B6B' }]}>
                    <Text style={styles.boxText}>1</Text>
                </View>
                <View style={[styles.box, { backgroundColor: '#4ECDC4' }]}>
                    <Text style={styles.boxText}>2</Text>
                </View>
                <View style={[styles.box, { backgroundColor: '#45B7D1' }]}>
                    <Text style={styles.boxText}>3</Text>
                </View>
            </View>

            <View style={[styles.card, styles.cardDestaque]}>
                <Text style={styles.cardTitulo}>Card com Sombra</Text>
                <Text style={styles.cardTexto}>
                    Aqui usamos borderRadius, elevation (Android)
                    e shadowColor (iOS) para criar profundidade.
                </Text>
                </View>
            </View>
        </LinearGradient>
    );
}


const { width } = Dimensions.get('window'); // Largura da tela para responsividade

const styles = StyleSheet.create({
    // ── Layout Principal (Flexbox) ──
    container: {
        flex: 1,                    // Ocupa 100% do espaço disponível 
        alignItems: 'center',       // Centraliza filhos horizontalmente
        justifyContent: 'center',   // Centraliza filhos verticalmente
        padding: 24,                // Espaçamento interno
    },
    header: {
        position: 'absolute',
        top: 50,
        left: 20,
        flexDirection: 'row',  
        alignItems: 'center',   
    },
    perfil: {
        position: 'absolute',
        top: 30,            
        alignSelf: 'center', 
        alignItems: 'center', 
    },

    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
    },

    textoAvatar: {
        marginTop: 8, 
        fontSize: 32,
        fontWeight: 'bold',
        fontFamily: 'Comic Sans MS',
        color: '#004153',
    },
   
    linha: {
        width: '400%',
        height: 3,
        backgroundColor: '#3D1C33',
        marginTop: -130,
    },

    // ── Tipografia ──
    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#2D3436',
        marginBottom: 8,
    },
    subtitulo: {
        fontSize: 16,
        color: '#636E72',
        marginBottom: 32,
    },
    // ── Flexbox Row (horizontal) ──
    row: {
        flexDirection: 'row',       // Itens lado a lado
        gap: 12,                    // Espaço entre itens
        marginBottom: 32,
    },

    // ── Boxes coloridos ──
    box: {
        width: 80,
        height: 80,
        borderRadius: 16,           // Bordas arredondadas
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },

    // ── Card com Sombra ──
    card: {
        width: width - 48,          // Responsivo: tela menos padding
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 12,
    },
    cardDestaque: {
        // Sombra iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        // Sombra Android
        elevation: 4,
    },
    cardTitulo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2D3436',
        marginBottom: 8,
    },
    cardTexto: {
        fontSize: 14,
        color: '#636E72',
        lineHeight: 20,
    },
});