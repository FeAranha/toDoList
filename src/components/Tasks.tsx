import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  FlatList,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import colors from "tailwindcss/colors";
import { Feather } from "@expo/vector-icons";

import Clipboard from "../assets/clibboard.svg";
import React, { useState, useRef } from "react";
import { Task } from "./Task";
import { ProgressBar } from "./ProgressBar";

type ScrollProps = {
  layoutMeasurement: {
    height: number;
  };
  contentOffset: {
    y: number;
  };
  contentSize: {
    height: number;
  };
};

export function Tasks() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [taskName, setTaskName] = useState("");

  const [percentage, setPercentege] = useState(0);
  const dimensions = useWindowDimensions();
  const scrollRef = useRef<ScrollView>(null);

  function scrollPercentage({
    contentSize,
    contentOffset,
    layoutMeasurement,
  }: ScrollProps) {
    const visibleContent = Math.ceil(
      (dimensions.height / contentSize.height) * 100
    );
    const value =
      ((layoutMeasurement.height + contentOffset.y) / contentSize.height) * 100; //%
    setPercentege(value < visibleContent ? 0 : value);
  }

  function handleScrollMoveTop() {
    scrollRef.current?.scrollTo({
      x: 0,
      y: 0,
      animated: true,
    });
  }

  function handleCreateTask() {
    if (taskName === "") {
      return Alert.alert("Vazio:", "Preencher com nome da tarefa.");
    }
    setTasks((prevState) => [...prevState, taskName]);
    setTaskName("");
  }

  function handleTaskRemove(name: string) {
    Alert.alert("Remover", `Remover a task ${name} ?`, [
      {
        text: "Sim",
        onPress: () =>
          setTasks((prevState) => prevState.filter((task) => task !== name)),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  return (
    <View className="w-full h-full bg-gray600 mt-20">
      <View className="flex-row px-4 justify-center -mt-7">
        <TextInput
          className="w-72 h-14 pl-4 mr-2 rounded-lg bg-gray500 text-gray100 border-2 border-gray700 focus:border-purpleDark"
          placeholder="Adicionar nova tarefa"
          placeholderTextColor="#808080"
          onChangeText={setTaskName}
          value={taskName}
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
          <Text className="text-blue font-bold">Criadas {tasks.length}</Text>
          <Text className="text-purple font-bold">Concluídas </Text>
        </View>
        <ScrollView
          ref={scrollRef}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 220 }}
          onScroll={(event) => scrollPercentage(event.nativeEvent)}
        >
          <FlatList
            data={tasks}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <Task
                key={item}
                name={item}
                onRemove={() => handleTaskRemove(item)}
              />
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
              <View className="mt-8 items-center">
                <Clipboard />
                <Text className="text-gray300 font-bold mt-6">
                  Você ainda não tem tarefas cadastradas
                </Text>
                <Text className=" text-gray300 font-regular">
                  Crie tarefas e organize seus itens a fazer
                </Text>
              </View>
            )}
          />
        </ScrollView>
        <ProgressBar value={percentage} onMoveTop={handleScrollMoveTop} />
      </View>
    </View>
  );
}
