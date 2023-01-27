import { View } from "react-native";
import { Header } from "../components/Header";
import { Tasks } from "../components/Tasks";

export function Home() {
    return (
        <View className="flex-1 bg-gray700 pt-16">
            <Header/>
            <Tasks/>
        </View>
    )
}