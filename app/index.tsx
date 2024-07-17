import { Text } from "react-native-paper";
import {
  View,
  ScrollView,
  ImageBackground,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import { useEffect, useState } from "react";
import ActivityCard from "@/components/molecules/cards/activityCard";

export default function Index() {
  const { height, width } = useWindowDimensions();
  const [activities, setActivities] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:3000/sunnyActivities').then((res)=>setActivities(res.data))
  },[])

  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.container}>
          {/* <Text variant="headlineSmall" style={{fontWeight: 'bold'}}>Activity Recommender</Text> */}
          <ImageBackground
            source={{
              uri: "https://pics.craiyon.com/2023-11-16/wHGM0abcSOWVL1p6KEsCZw.webp",
            }}
            resizeMode="cover"
            style={[styles.imageBackground, {height: 0.3 * height}]}
          >
            <Text>Some thing</Text>
            <Link href={{ pathname: "(tabs)" }}>
              <FontAwesome6 name="user-large" size={24} color="black" />
            </Link>
            
          </ImageBackground>
        </View>
        <View>
            <ScrollView horizontal>
              {activities.map((activity) => <View style={{width: '40%'}} key={activity.id}>
                <ActivityCard name={activity.name} image={activity.image} likes={activity.likes}/>
              </View>)}
            </ScrollView>
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
    height: 400,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // paddingVertical: 10
  },
});
