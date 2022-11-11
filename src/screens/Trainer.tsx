import { Text, VStack, Button, useTheme } from "native-base";

export function Trainer() {
  const { colors, sizes } = useTheme()

  return (
    <VStack flex={1} alignItems="center" bgColor="gray.600">
      <Button
        width='75%'
        marginTop={sizes[6]}
        padding={sizes['1.5']}
        borderRadius={99999}
        borderWidth={sizes[1]}
        borderColor={colors.green[500]}
        bgColor={colors.gray[500]}
        _pressed={{
          opacity: 0.7,
        }}
      >
        <Text
          color={colors.gray[100]}
          fontSize={sizes[9]}
          fontWeight="extrabold"
        >
          Start
        </Text>
      </Button>

      <VStack>

      </VStack>

    </VStack>
  )
}