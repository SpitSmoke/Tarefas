import { Provider } from 'react-redux'
import BarraLateral from './Containers/BarraLateral'
import ListaDeTarefas from './Containers/ListaDeTarefa'
import { Container, GlobalStyle } from './Styles'
import store from './Store/index'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <BarraLateral />
        <ListaDeTarefas />
      </Container>
    </Provider>
  )
}

export default App
