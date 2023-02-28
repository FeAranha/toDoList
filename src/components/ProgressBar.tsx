import { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Animated, {
  BounceIn,
  FadeIn,
  FadeOut,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { Feather } from "@expo/vector-icons";

const TouchableOpacityAnimated = Animated.createAnimatedComponent(TouchableOpacity)

type Props = {
  value: number;
  onMoveTop: () => void;
}

export function ProgressBar({ value, onMoveTop }: Props) {
  const widthContainer = useSharedValue(200);
  const endReached = value >= 95;
  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: widthContainer.value,
    };
  });

  useEffect(() => {
    widthContainer.value = withSpring(endReached ? 56 : 200, { mass: 0.7});
  }, [value]);

  return (
    <Animated.View
      style={animatedStyle}
      className="opacity-75 bg-gray400 mt-96 h-14 rounded-3xl absolute self-center justify-center items-center flex-row"
    >
      {
        endReached ?
          <TouchableOpacityAnimated
          entering={BounceIn}
          exiting={FadeOut}
          onPress={onMoveTop}
          >
            <Feather name="arrow-up" size={24} color="#808080"/>
          </TouchableOpacityAnimated>
          :
        <Animated.View 
          className="flex-row mt-2"
          entering={FadeIn}
          exiting={FadeOut}
        >
          <Text className="-mt-2 pl-2 text-gray300">{value.toFixed(0)}%</Text>
          <View className={"flex-1 h-1 rounded mx-2 bg-gray300"}>
            <View
              style={{ width: `${value}%` }}
              className="h-1 bg-gray400 "
            ></View>
          </View>
        </Animated.View>
      }
    </Animated.View>
  );
}
