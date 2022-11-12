import { Text, VStack, useTheme, HStack } from "native-base";
import { StartButton } from "../components/StartButton";
import { WeekdayButton } from "../components/WeekdayButton";

export function Trainer() {
  const { colors, sizes } = useTheme()

  return (
    <VStack flex={1} alignItems="center" bgColor="gray.600">
      <StartButton />

      <Text
        paddingTop={6}
        fontSize={sizes[5]}
        fontWeight='bold'
        color={colors.green[500]}
      >
        January 14th, 2017
      </Text>

      <HStack
        width="100%"
        padding={4}
        justifyContent="space-between"
        marginTop={4}
      >
        <WeekdayButton weekday="Sunday"/>
        <WeekdayButton weekday="Monday"/>
      </HStack>

      <HStack
        width="100%"
        padding={4}
        justifyContent="space-between"
        marginTop="0.5"
      >
        <WeekdayButton weekday="Sunday"/>
        <WeekdayButton weekday="Monday"/>
      </HStack>

      <HStack
        width="100%"
        padding={4}
        justifyContent="space-between"
        marginTop="0.5"
      >
        <WeekdayButton weekday="Sunday"/>
        <WeekdayButton weekday="Monday"/>
      </HStack>

      <HStack
        width="100%"
        padding={4}
        justifyContent="space-between"
        marginTop="0.5"
      >
        <WeekdayButton weekday="Monday"/>
      </HStack>

    </VStack>
  )
}