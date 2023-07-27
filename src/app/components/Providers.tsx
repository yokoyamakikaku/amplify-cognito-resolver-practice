"use client"

import { FC, PropsWithChildren } from "react"
import { Amplify, I18n } from 'aws-amplify'
import { Authenticator, translations } from "@aws-amplify/ui-react"

import '@aws-amplify/ui-react/styles.css'
import awsExports from '@/aws-exports'

Amplify.configure(awsExports)
I18n.putVocabularies(translations);
I18n.setLanguage('ja');

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Authenticator>
      {children}
    </Authenticator>
  )
}

export default Providers
