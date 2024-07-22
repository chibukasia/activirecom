import { View } from "react-native";
import { Text } from "react-native-paper";
// import { Image } from "expo-image";
import { Image } from "react-native";

interface IProps {
    name: string,
    image: string,
    likes: number
}
export default function ActivityCard (props: IProps){
    const { name, image, likes } = props
    return (
        <View style={{padding:10, borderRadius: 10, }}>
            {/* <Image 
            source="https://picsum.photos/seed/696/3000/2000"
            // placeholder={{ blurhash }}
            contentFit="cover"
            transition={1000}
            /> */}
            {/* <Image source={{uri: image}} /> */}
            <View>
                <Text>{name}</Text>
                <Text>{likes} Likes</Text>
            </View>
        </View>
    )
}