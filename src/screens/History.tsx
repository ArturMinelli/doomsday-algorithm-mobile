import { HStack, VStack, Text, Button, useTheme, FlatList } from "native-base";
import { Trash } from "phosphor-react-native";

export function History() {
  const { colors } = useTheme()
  const cycles = [
    {
      id: '1',
      date: 'January 14th, 2016',
      guess: 'Monday'
    },
    {
      id: 'w',
      date: 'January 14th, 2016',
      guess: 'Monday'
    },
    {
      id: 'e',
      date: 'January 14th, 2016',
      guess: 'Monday'
    },
    {
      id: '12',
      date: 'January 14th, 2016',
      guess: 'Monday'
    },
    {
      id: '4',
      date: 'January 14th, 2016',
      guess: 'Monday'
    },
    {
      id: '5',
      date: 'January 14th, 2016',
      guess: 'Monday'
    },
    {
      id: 'ds',
      date: 'January 14th, 2016',
      guess: 'Monday'
    },
    {
      id: 'asss',
      date: 'January 14th, 2016',
      guess: 'Monday'
    },
    {
      id: 'ddd',
      date: 'January 14th, 2016',
      guess: 'Monday'
    },
    {
      id: '21214',
      date: 'January 14th, 2016',
      guess: 'Monday'
    },
    {
      id: 'dasdassddas',
      date: 'January 14th, 2016',
      guess: 'Monday'
    },
    {
      id: '1ccccc',
      date: 'January 14th, 2016',
      guess: 'Monday'
    },
    {
      id: '1assdasd',
      date: 'January 14th, 2016',
      guess: 'Monday'
    },
    {
      id: '1dddddddd',
      date: 'January 14th, 2016',
      guess: 'Monday'
    },
    {
      id: '1pasdpapoidpoasd',
      date: 'January 14th, 2016',
      guess: 'Monday'
    },
  ]

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
            {item.date}
          </Text>
          <Text
            color="green.300"
            fontWeight="bold"
          >
            {item.guess}
          </Text>
        </HStack>
        )}
      />

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
      {/* <HStack
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
      </HStack> */}

    </VStack>
  )
}