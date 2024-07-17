import { View } from "react-native";
import { Text } from "react-native-paper";
// import { Image } from "expo-image";

interface IProps {
    name: string,
    image: string,
    likes: number
}
export default function ActivityCard (props: IProps){
    const { name, image, likes } = props
    return (
        <View>
            {/* <Image 
            source="https://picsum.photos/seed/696/3000/2000"
            // placeholder={{ blurhash }}
            contentFit="cover"
            transition={1000}
            /> */}
            <View>
                <Text>{name}</Text>
                
            </View>
        </View>
    )
}