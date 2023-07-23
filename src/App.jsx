import { styled } from 'styled-components'
import Hero from './components/Hero'
import Who from './components/Who'
import Presents from './components/Presents'
import ContactMe from './components/ContactMe'

const Container = styled.div `
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/b-g.jpg");
  &::-webkit-scrollbar{
    display: none;
  }
`

function App() {

  return (
    <Container>
      <Hero/>
      <Who/>
      <Presents/>
      <ContactMe/>
    </Container>
  )
}

export default App
