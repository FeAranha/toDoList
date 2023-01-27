import { View, Text, TextInput, TouchableOpacity } from "react-native";
import colors from "tailwindcss/colors";

import { Feather } from "@expo/vector-icons";

import Clipboard from "../assets/clibboard.svg";

export function Tasks() {
  function handleCreateTask() {
    console.log("click on add(+)");
  }

  return (
    <View className="w-full h-full bg-gray600 mt-20">
      <View className="flex-row px-4 justify-center -mt-7">
        <TextInput
          className="w-72 h-14 pl-4 mr-2 rounded-lg bg-gray500 text-gray100 border-2 border-gray700 focus:border-purpleDark"
          placeholder="Add new task"
          placeholderTextColor="#808080"
          //onChangeText={setTitle}
          //value={title}
        />
        <TouchableOpacity
          className="w-12 h-12 bg-blueDark rounded-md items-center justify-center"
          onPress={handleCreateTask}
        >
          <Feather name="plus-circle" size={20} color={colors.white} />
        </TouchableOpacity>
      </View>

      <View className="mt-6 w-full px-5">
        <View className="flex-row justify-between border-0.5 border-gray600 border-b-gray300 pb-4">
          <Text className="text-blue font-bold">Criadas  0</Text>
          <Text className="text-purple font-bold">Concluídas  0</Text>
        </View>
        <View className="mt-8 items-center">
          <Clipboard />
          <Text className="text-gray300 font-bold mt-6">
            Você ainda não tem tarefas cadastradas
          </Text>
          <Text className=" text-gray300 font-regular">
            Crie tarefas e organize seus itens a fazer
          </Text>
        </View>
      </View>
    </View>
  );
}