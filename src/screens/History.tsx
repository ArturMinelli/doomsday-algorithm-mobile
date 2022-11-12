import { HStack, VStack, Text, Button, useTheme } from "native-base";
import { Trash } from "phosphor-react-native";

export function History() {
  const { colors } = useTheme()

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
          Januray 14th, 2017
        </Text>
        <Text
          color="green.300"
          fontWeight="bold"
        >
          Tuesday
        </Text>
      </HStack>
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
          Januray 14th, 2017
        </Text>
        <Text
          color="green.300"
          fontWeight="bold"
        >
          Tuesday
        </Text>
      </HStack>
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
          Januray 14th, 2017
        </Text>
        <Text
          color="red.500"
          fontWeight="bold"
        >
          Tuesday
        </Text>
      </HStack>

    </VStack>
  )
}