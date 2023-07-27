"use client"

import { FC, PropsWithChildren } from "react";
import { useTheme, View, Flex } from "@aws-amplify/ui-react";

const Container: FC<PropsWithChildren> = ({children}) => {
  const theme = useTheme()
  return (
    <View
      maxWidth={theme.breakpoints.values.large}
      marginInline="auto"
      paddingBlock={theme.tokens.space.xl}>
      <Flex direction="column" gap={theme.tokens.space.large}>
        {children}
      </Flex>
    </View>
  )
}

export default Container
