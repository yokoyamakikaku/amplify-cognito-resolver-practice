"use client"

import NextLink from 'next/link'
import { Divider, View, useTheme, Flex, Heading } from "@aws-amplify/ui-react"

const TopBar = () => {
  const theme = useTheme()
  return (
    <View marginBlockEnd={theme.tokens.space.large}>
      <View
        maxWidth={theme.breakpoints.values.large}
        marginInline="auto" paddingInline={theme.tokens.space.small}>
        <Flex>
          <NextLink href="/" style={{ textDecoration: "none" }}>
            <Heading padding={theme.tokens.space.xs}>ホーム</Heading>
          </NextLink>
        </Flex>
      </View>
      <Divider />
    </View>
  )
}

export default TopBar
