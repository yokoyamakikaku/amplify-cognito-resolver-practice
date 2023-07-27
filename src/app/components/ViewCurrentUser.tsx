"use client"

import { FC, useMemo, ReactNode } from "react";
import { useAuthenticator, Table, TableBody, TableRow, TableCell } from "@aws-amplify/ui-react";

const ViewCurrentUser: FC = () => {
  const { authStatus, user } = useAuthenticator()

  const attributes = useMemo(() => {
    const attributes: { name: ReactNode, value: ReactNode }[] = []

    attributes.push({ name: 'authStatus', value: authStatus})
    attributes.push({ name: 'username', value: user.username })

    if (user?.attributes) {
      for(const name in user.attributes) {
        const value = user.attributes[name]
        attributes.push({ name, value })
      }
    }

    const signInUserSession = user.getSignInUserSession()
    const accessToken = signInUserSession?.getAccessToken()
    if (accessToken && accessToken.payload["cognito:groups"]) {
      const groups = accessToken.payload["cognito:groups"]
      const groupNames:string[] = []
      if (Array.isArray(groups)) {
        for(const group of groups) {
          if (typeof group !== "string") continue
          groupNames.push(group)
        }
      }
      attributes.push({ name: "cognito:groups", value: groupNames.join(",") })
    }

    return attributes
  }, [authStatus, user])

  return (
    <Table>
      <TableBody>
        {attributes.map(({ name, value }, index) => (
          <TableRow key={index}>
            <TableCell as="th">{name}</TableCell>
            <TableCell as="td">{value}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default ViewCurrentUser
