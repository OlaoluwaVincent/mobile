import { PEOPLE } from "@/constants/examSteps";
import { useThemeColors } from "@/hooks/useThemeColor";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Image,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { ThemedText } from "./ThemedText";

export default function Testimonials() {
  const [selectedPerson, setSelectedPerson] = useState<null | (typeof PEOPLE)[0]>(null);
  const color = useThemeColors();

  return (
    <View className="mt-8">
      <ThemedText className="text-5xl text-center" type="title">
        Hear From Our Achievers
      </ThemedText>

      <View className="py-5">
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-5">
          {PEOPLE.map((person, index) => (
            <TouchableOpacity
              activeOpacity={0.8}
              key={index}
              onPress={() => setSelectedPerson(person)}
              className="w-44 bg-white mr-4 rounded-lg p-3 py-10 items-center shadow"
            >
              <Image source={{ uri: person.url }} className="w-20 h-20 rounded-full mb-3" />
              <Text className="font-bold text-center mb-1">{person.name}</Text>
              <Text className="text-xs text-gray-500 text-center">{person.university}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <Modal
        visible={!!selectedPerson}
        transparent
        animationType="slide"
        onRequestClose={() => setSelectedPerson(null)}
      >
        <TouchableWithoutFeedback onPress={() => setSelectedPerson(null)}>
          <View className="flex-1 bg-black/50 justify-end relative">
            <TouchableWithoutFeedback>
              <View className="bg-white rounded-t-2xl p-6 w-full">
                {selectedPerson && (
                  <>
                    <Image
                      source={{ uri: selectedPerson.url }}
                      className="w-32 h-32 rounded-full mb-4 self-center"
                    />
                    <Text className="text-xl font-bold mb-2 text-center">
                      {selectedPerson.name}
                    </Text>
                    <Text className="text-sm text-gray-600 mb-2 text-center">
                      {selectedPerson.university}
                    </Text>
                    <Text className="text-sm italic text-gray-500 text-center">
                      {selectedPerson.comment}
                    </Text>
                    <TouchableOpacity
                      onPress={() => setSelectedPerson(null)}
                      className="mt-4 bg-gray-100 p-2 rounded-full self-center absolute top-0 right-3"
                    >
                      <Ionicons name="close" size={22} color={color.error} />
                    </TouchableOpacity>
                  </>
                )}
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}
