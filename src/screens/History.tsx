import { HStack, VStack, Text, Button, useTheme, FlatList } from "native-base";
import { Trash } from "phosphor-react-native";
import { useCycles } from "../hooks/useCycles";
import { formatDate, weekdaysInfo } from "../utils/dateGenrator";

export function History() {
  const { colors } = useTheme()
  const { cycles, language } = useCycles()

  return (
    <VStack flex={1} bgColor="gray.600">
      <HStack
        width="100%"
        marginTop={84}
        padding={8}
        justifyContent='space-between'
      >
        <Text
          fontSize={28}
          fontWeight="bold"
          color="green.500"
        >
          History
        </Text>
        <Button
          bgColor="transparent"
        >
          <Text>
            <Trash
              color={colors.red[500]}
            />
          </Text>
        </Button>
      </HStack>

      <FlatList
        data={cycles}
        keyExtractor={(cycle) => cycle.id}
        contentContainerStyle={{ paddingBottom: 32 }}
        renderItem={({ item }) => (
          <HStack
          alignSelf="center"
          width="90%"
          borderRadius={8}
          padding={4}
          justifyContent="space-between"
          bgColor="gray.700"
          marginTop={4}
        >
          <Text
            color="gray.200"
            fontWeight="bold"
          >
            {formatDate(item.randomDate, language.locale)}
          </Text>
          <Text
            color="green.300"
            fontWeight="bold"
          >
            {language.t(`weekdays.${weekdaysInfo[item.userGuess]}`)}
          </Text>
        </HStack>
        )}
      />
    </VStack>
  )
}