import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";
import { Checkbox } from "./Checkbox";

type Props = {
  name: string;
  onRemove: () => void;
};

export function Task({ name, onRemove }: Props) {
  return (
    <View className="w-full bg-gray500 flex-row items-center mb-2 border-0.5 border-gray400 rounded-md">
      <Checkbox/>
      <Text className="ml-2 flex-1 text-gray100 font-regular">{name}</Text>

      <TouchableOpacity onPress={onRemove}>
        <Feather name="trash-2" size={20} color={colors.white} />
      </TouchableOpacity>
    </View>
  );
}
