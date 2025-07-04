import { Image } from "expo-image";
import { Button, Platform, StyleSheet, Share } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { View } from "react-native";
import * as Sharing from "expo-sharing";

export default function HomeScreen() {
  const handleShare = async () => {
    try {
      await Share.share({
        message: "Check this out: https://reactnative.dev",
      });
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };
  return (
    <View style={styles.button}>
      <Button title="Shares" onPress={handleShare} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  text: {
    fontSize: 20,
    color: "#333",
    marginTop: 20,
  },
  button: {
    marginTop: 200,
    padding: 10,
    backgroundColor: "#007BFF",
    borderRadius: 5,
  },
});
