import { Text } from "react-native-paper";
import { ThemedView } from "@/components/ThemedView";
import {
  View,
  ScrollView,
  ImageBackground,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import { FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { height, width } = useWindowDimensions();
  return (
    <ScrollView>
      <SafeAreaView>
      {/* <View>
        <MaterialIcons name="menu" size={24} color="black" onPress={()=>{}}/>
        </View> */}
        <View style={styles.container}>
          {/* <Text variant="headlineSmall" style={{fontWeight: 'bold'}}>Activity Recommender</Text> */}
          <ImageBackground
            source={{
              uri: "https://pics.craiyon.com/2023-11-16/wHGM0abcSOWVL1p6KEsCZw.webp",
            }}
            resizeMode="cover"
            style={[styles.imageBackground, { height }]}
          >
            <Text>Some thing</Text>
            <Link href={{ pathname: "(tabs)" }}>
              <FontAwesome6 name="user-large" size={24} color="black" />
            </Link>
            
          </ImageBackground>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // paddingVertical: 10
  },
});
