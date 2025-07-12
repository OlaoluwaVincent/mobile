import ApplicationSteps from "@/components/ApplicationSteps";
import { BouncingBars } from "@/components/BouncingBars";
import CardCount from "@/components/CardCount";
import DescriptionCard from "@/components/DescriptionCard";
import PricingList from "@/components/PricingList";
import { WaveSvg } from "@/components/svgs/WaveSvg";
import Testimonials from "@/components/Testimonials";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Button } from "@/components/ui/Button";
import { useThemeColors } from "@/hooks/useThemeColor";
import { LinearGradient } from "expo-linear-gradient";
import { Image, Text, View } from "react-native";

export default function HomeScreen() {
  const color = useThemeColors();
  return (
    <ThemedView scrollable page className="flex-1 px-5">
      <View className="gap-5 pt-5">
        <ThemedView className="mx-auto">
          <ThemedText type="title" className="text-5xl text-center font-bold">
            Your GateWay to{" "}
            <Text className="text-darkblue-tabDefault dark:text-blue-primary">University</Text>{" "}
            Success Starts{" "}
            <Text className="text-darkblue-tabDefault dark:text-blue-primary">Here</Text>
          </ThemedText>
        </ThemedView>
        <ThemedText className="text-gray-700 text-lg text-justify">
          Get the edge you need to stand out in your POST-UTME screening.
        </ThemedText>

        <Button href={"/login"} className="w-52 px-8 py-3">
          Start Learning Now
        </Button>

        <ThemedView className="flex-row gap-10 items-start mt-8">
          <CardCount title="Career Courses" count={"50+"} />
          <CardCount title="Students Empowered" count={"1M+"} />
        </ThemedView>

        <ThemedView>
          <Image
            alt="Student studying"
            source={require("@/assets/images/Student-studying.webp")}
            className="w-full h-64 object-cover rounded-md object-bottom mt-10"
          />
          <BouncingBars />
        </ThemedView>

        <ThemedView>
          <ThemedText type="title" className="mt-10 text-center text-5xl">
            Why Student Choose Us
          </ThemedText>

          <ThemedView className="items-center -mt-2 bg-transparent -z-1">
            <WaveSvg width="70%" />
          </ThemedView>

          <ThemedText type="default" className="text-lg mt-7">
            The Smarter way to prepare for University entrance exams
          </ThemedText>

          <ThemedView className="gap-8 mt-8">
            <DescriptionCard
              title="Tailored for Post-UTME Success"
              description="Our quizzes follow the exact format of top Post-UTME exams across Nigeria, ensuring you're fully prepared for the real test."
              iconName="person-sharp"
              iconColor={color.error}
              iconSize={24}
            />
            <DescriptionCard
              title="Simulate the Real Exam Environment"
              description="Practice with real-time CBT (Computer-Based Training) to build confidence, speed and accuracy"
              iconName="time"
              iconColor={color.warning}
              iconSize={24}
            />
            <DescriptionCard
              title="Access Thousands of Curated Questions"
              description="Get instant access to a wide range of subject-specific questions with detailed explanations."
              iconName="book"
              iconColor={color.success}
              iconSize={24}
            />
            <DescriptionCard
              title="Practice Anytime, Anywhere"
              description="Study on your phone, table or laptop - our platform is 100% response and easy to use."
              iconName="phone-portrait"
              iconColor={color.primary}
              iconSize={24}
            />
          </ThemedView>
        </ThemedView>

        <ThemedView className="flex-row flex-wrap gap-y-5 px-5 items-start mt-8 justify-center w-full">
          <CardCount title="Career Courses" count={"50+"} className="w-1/2" />
          <CardCount title="Students Empowered" count={"1M+"} className="w-1/2" />
          <CardCount title="Satisfaction Rate" count={"95%"} className="w-1/2" />
          <CardCount title="Accessibility" count={"24/7"} className="w-1/2" />
        </ThemedView>

        <ThemedView>
          <Image
            alt="Student studying"
            source={require("@/assets/images/student.png")}
            className="w-full h-64 object-cover rounded-md object-bottom mt-10"
          />
          <ThemedView className="relative">
            <ThemedText type="title" className="text-5xl my-5">
              How it works
            </ThemedText>
            <LinearGradient
              colors={[color.success, color.softGreen, color.success]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{ borderRadius: 20 }}
              className="h-2 w-32 absolute left-0 bottom-2"
            />
          </ThemedView>
        </ThemedView>

        <ApplicationSteps />
        <PricingList />
        <Testimonials />
      </View>
    </ThemedView>
  );
}
