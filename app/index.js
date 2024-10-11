import { Text, View, Pressable } from "react-native";
import { Link } from 'expo-router'

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      
      <Link href="/firebase" asChild>
        <Pressable>
          <Text> Firebase </Text>
        </Pressable>
      </Link>
      
    </View>
  );
}