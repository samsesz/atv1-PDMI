import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Dimensions, Image, Linking, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { UncontrolledExample } from "./carousel";

export default function HelloScreen() {
  return (
    <LinearGradient
      colors={["#1A0F0F", "#3B2F2F", "#5C0F0F"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.container}>
            <View style={styles.perfil}>
              <Image
                source={require("../assets/images/daemon.jpg")}
                style={styles.avatar}
              />
              <Text style={styles.textoAvatar}>Sam Brazzz</Text>

              <Text style={styles.textoBio}>
                Leader of The Blackfyre rebellion and, on free times, software
                developer
              </Text>

              <View style={styles.statsContainer}>
                <View style={styles.statBox}>
                  <Text style={styles.statNumber}>1.2k</Text>
                  <Text style={styles.statLabel}>Seguidores</Text>
                </View>

                <View style={styles.statBox}>
                  <Text style={styles.statNumber}>3</Text>
                  <Text style={styles.statLabel}>Seguindo</Text>
                </View>
              </View>
            </View>

            <View style={styles.dualRow}>
              <View style={styles.leftPanel}>
                <Text style={styles.cardTitulo}>Things i really like:</Text>
                <Text style={styles.cardTexto}>
                  Game of Thrones, The Raven of Three Eyes, Ser Duncan The Tall
                  and of course, DAEMON TARGARYEN.
                </Text>
              </View>

              <View style={styles.centerPanel}>
                <UncontrolledExample />
              </View>

              <View style={styles.rightPanel}>
                <Text style={styles.cardTitulo}>Affiliations:</Text>
                <Text style={styles.cardTexto}>
                  - THE BLACKFYRE REBELLION
                  🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉
                </Text>
              </View>
            </View>

            <View style={{ alignItems: "center", marginTop: 15 }}>
              <TouchableOpacity
                style={styles.githubButton}
                onPress={() => Linking.openURL("https://github.com/samsesz")}
              >
                <Text style={styles.githubButtonText}>Ver GitHub</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.linha} />

            <View style={styles.galeria}>
              <Text style={styles.galeriaTitulo}>Galeria</Text>

              <View style={styles.row}>
              <Image
                source={require("../assets/images/rebellion.jpg")}
                style={styles.galeriaPrincipal}
              />
              </View>

              <View style={styles.row}>
                <Image
                  source={require("../assets/images/duncanegg.jpg")}
                  style={styles.galeriaSecundaria}
                />
                <Image
                  source={require("../assets/images/blackfyre.jpg")}
                  style={styles.galeriaSecundaria}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 16,
  },

  scrollContent: {
    flexGrow: 1,
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 120,
  },

  perfil: {
    alignItems: "center",
    marginBottom: 20,
  },

  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
  },

  textoAvatar: {
    marginTop: 6,
    fontSize: 26,
    fontWeight: "bold",
    color: "#C9A34E",
  },

  textoBio: {
    marginTop: 2,
    fontSize: 14,
    textAlign: "center",
    width: 200,
    lineHeight: 18,
    color: "#EAE0C8",
  },

  statsContainer: {
    flexDirection: "row",
    marginTop: 10,
    gap: 20,
  },

  statBox: {
    alignItems: "center",
  },

  statNumber: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#C9A34E",
  },

  statLabel: {
    fontSize: 12,
    color: "#EAE0C8",
  },

  dualRow: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 20,
  },

  leftPanel: {
    width: "28%",
    backgroundColor: "#5A3E2B",
    padding: 10,
    borderRadius: 12,
  },

  rightPanel: {
    width: "28%",
    backgroundColor: "#5A3E2B",
    padding: 10,
    borderRadius: 12,
  },

  centerPanel: {
    width: "40%",
    alignItems: "center",
  },

  githubButton: {
    backgroundColor: "#C9A34E",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    marginTop: 10,
  },

  githubButtonText: {
    color: "#1A0F0F",
    fontWeight: "bold",
    fontSize: 12,
  },

  linha: { 
    width: "90%", 
    height: 2, 
    backgroundColor: "#C9A34E", 
    marginTop: 25, 
    marginBottom: 10, 
  },

  galeria: {
    width: "100%",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 40,
  },

  galeriaTitulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#C9A34E",
  },

  galeriaPrincipal: {
    width: "100%",
    height: width * 0.4,
    borderRadius: 12,
    marginBottom: 10,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
  },

  galeriaSecundaria: {
    width: "48%",
    height: width * 0.25,
    borderRadius: 12,
  },

  cardTitulo: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#C9A34E",
  },

  cardTexto: {
    fontSize: 12,
    color: "#EAE0C8",
  },
});
