import { ScrollView, View } from "react-native";
import { Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function ProfileScreen() {
  const router = useRouter()
  return (
    <ScrollView>
      <SafeAreaView>
        <View style={{paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <MaterialIcons name="arrow-back-ios" size={24} color="black" onPress={()=>router.back()}/>
          <Text>Profile screen</Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
