import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Index() {
     const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.replace('/hello');
        }, 2000);
        return () => clearTimeout(timer);
    }, []); 

    return (
  <View style={styles.container}>
    <View style={styles.logoContainer}>
      <Ionicons name="heart" size={80} color="#0c3619" />
      <Text style={styles.logoText}>Att 1</Text>
      <Text style={styles.tagline}>Carregando...</Text>
    </View>
  </View>
);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FA',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer: {
        alignItems: 'center',
    },
    logoText: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#2D3436',
        marginTop: 16,
    },
    tagline: {
        fontSize: 14,
        color: '#B2BEC3',
        marginTop: 8,
    },
});
