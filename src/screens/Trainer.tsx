import { Text, VStack, useTheme, HStack } from "native-base";
import { StartButton } from "../components/StartButton";
import { Timer } from "../components/Timer";
import { WeekdayButton } from "../components/WeekdayButton";
import { useCycles } from "../hooks/useCycles";

export function Trainer() {
  const { activeCycle, passedMilliseconds, createNewCycle, stopTimer, finishCurrentCycle } = useCycles()

  function handleUserGuess(guess: number) {
    const userGuessedCorrectly = guess === activeCycle?.weekday.day

    stopTimer(guess)
    setTimeout(() => {
      finishCurrentCycle()
    }, 1000)
  }

  return (
    <VStack flex={1} alignItems="center" bgColor="gray.600">
      {!!activeCycle ? (
        <Timer />
      ) : (
        <StartButton
          onPress={createNewCycle}
        />
      )}

      <Text>
        {passedMilliseconds}
      </Text>

      <Text
        paddingTop={6}
        fontSize={20}
        fontWeight='bold'
        color="green.500"
      >
        January 14th, 2017
      </Text>

      <HStack
        width="100%"
        padding={4}
        justifyContent="space-between"
        marginTop={4}
      >
        <WeekdayButton
          weekday="Sunday"
          onPress={() => handleUserGuess(0)}
        />
        <WeekdayButton
          weekday="Monday"
          onPress={() => handleUserGuess(1)}
        />
      </HStack>

      <HStack
        width="100%"
        padding={4}
        justifyContent="space-between"
        marginTop="0.5"
      >
        <WeekdayButton
          weekday="Tuesday"
          onPress={() => handleUserGuess(2)}
        />
        <WeekdayButton
          weekday="Wednesday"
          onPress={() => handleUserGuess(3)}
        />
      </HStack>

      <HStack
        width="100%"
        padding={4}
        justifyContent="space-between"
        marginTop="0.5"
      >
        <WeekdayButton
          weekday="Thursday"
          onPress={() => handleUserGuess(4)}
        />
        <WeekdayButton
          weekday="Friday"
          onPress={() => handleUserGuess(5)}
        />
      </HStack>

      <HStack
        width="100%"
        padding={4}
        justifyContent="space-between"
        marginTop="0.5"
      >
        <WeekdayButton
          weekday="Saturday"
          onPress={() => handleUserGuess(6)}
        />
      </HStack>

    </VStack>
  )
}