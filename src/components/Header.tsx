import { TextInput, View, Text, TouchableOpacity } from "react-native";

import Logo from "../assets/logo.svg";

export function Header() {
  return (
    <View className="w-full bg-gray700 items-center pt-7 ">
      <Logo />
    </View>
  );
}
