import { Text } from "react-native-paper";
import { ThemedView } from "@/components/ThemedView";
import { View, ScrollView, ImageBackground, StyleSheet } from "react-native";

export default function Index() {
  return (
    <ScrollView>
      <View
        style={styles.container}
      >
        {/* <Text variant="headlineSmall" style={{fontWeight: 'bold'}}>Activity Recommender</Text> */}
        <ImageBackground source={{uri:'https://pics.craiyon.com/2023-11-16/wHGM0abcSOWVL1p6KEsCZw.webp'}} resizeMode="cover" style={styles.imageBackground}>
          <Text>Some thing</Text>
        </ImageBackground>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    width: '100%', height: 350, justifyContent: 'center', alignItems: 'center'
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // paddingVertical: 10
  }
})