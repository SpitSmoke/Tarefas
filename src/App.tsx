import BarraLateral from './Containers/BarraLateral'
import ListaDeTarefas from './Containers/ListaDeTarefa'
import { Container, GlobalStyle } from './Styles'

function App() {
  return (
    <div className="App">
      <>
        <GlobalStyle />
        <Container>
          <BarraLateral />
          <ListaDeTarefas />
        </Container>
      </>
    </div>
  )
}

export default App
