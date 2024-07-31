import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { A } from "@expo/html-elements";

const blurhash = "LEHV6nWB2yk8pyo0adR*.7kCMdnj";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Flowbite App!</Text>
      <Image
        style={styles.image}
        source="https://flowbite-react.com/favicon.svg"
        placeholder={{ blurhash }}
        contentFit="cover"
        transition={1000}
      />
      <A style={styles.link} href="https://docs.expo.dev/guides/linking/">
        Go to Native
      </A>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  image: {
    marginTop: 100,
    width: 300,
    height: 200,
  },
  text: {
    color: "#fff",
    fontSize: 70,
  },
  link: {
    fontSize: 20,
    marginTop: 10,
    color: "#fff",
  },
});
