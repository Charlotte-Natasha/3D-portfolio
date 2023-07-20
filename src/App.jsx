import { styled } from 'styled-components'
import Hero from './components/Hero'
import Pay from './components/Pay'
import Who from './components/Who'
import Works from './components/Works'

const Container = styled.div `
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar{
    display: none;
  }
`

function App() {

  return (
    <Container>
      <Hero/>
      <Who/>
      <Works/>
      <Pay/>
    </Container>
  )
}

export default App
