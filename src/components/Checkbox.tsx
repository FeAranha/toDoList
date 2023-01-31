import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Animated, { ZoomIn, ZoomOut } from "react-native-reanimated";
export interface Props extends TouchableOpacityProps {
  checked?: boolean;
}

export function Checkbox({ checked = false, ...rest }: Props) {
  return (
    <View className="m-2">
      <TouchableOpacity
        activeOpacity={0.7}
        className="flex-row mb-2 items-center"
        {...rest}
      >
        {checked ? (
          <Animated.View
            className="rounded-lg items-center justify-center"
            entering={ZoomIn}
            exiting={ZoomOut}
          >
            <MaterialCommunityIcons
              name="check-circle-outline"
              color="#5E60CE"
              size={30}
            />
          </Animated.View>
        ) : (
          <MaterialCommunityIcons
            name="checkbox-blank-circle-outline"
            color="#4EA8DE"
            size={30}
          />
        )}
      </TouchableOpacity>
    </View>
  );
}
