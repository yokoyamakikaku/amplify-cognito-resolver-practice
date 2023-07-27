import type { Metadata } from 'next'

import './global.css'
import Providers from './components/Providers'
import TopBar from './components/TopBar'

export const metadata: Metadata = {
  title: 'Amplify Cognito Resolver Practice',
  description: '技術検証',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <TopBar />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
