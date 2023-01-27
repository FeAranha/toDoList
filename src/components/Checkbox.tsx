import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "tailwindcss/colors";

interface Props extends TouchableOpacityProps {
  checked?: boolean;
}


export function Checkbox({ checked = false, ...rest }: Props) {  
    return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="flex-row mb-2 items-center"
      {...rest}
    >
      {checked ? (
        <View className="h-8 w-8 bg-purpleDark rounded-lg items-center justify-center">
          <MaterialCommunityIcons
            name="checkbox-marked-circle"
            size={24}
            color="#5E60CE"
          />
        </View>
      ) : (
        <MaterialCommunityIcons
          name="checkbox-blank-circle-outline"
          size={24}
          color="#4EA8DE"
          
        />
      )}
    </TouchableOpacity>
  );
}
function handleCheckbox() {
    throw new Error("Function not implemented.");
}

