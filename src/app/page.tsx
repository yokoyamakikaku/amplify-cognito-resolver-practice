import Container from "./components/Container"
import ViewCurrentUser from "./components/ViewCurrentUser"
import ViewWelcomeMessage from "./components/ViewWelcomeMessage"

export default function Home() {
  return (
    <Container>
      <ViewWelcomeMessage />
      <ViewCurrentUser />
    </Container>
  )
}
