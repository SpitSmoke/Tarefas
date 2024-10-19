import Tarefa from '../../components/Tarefa'
import { Container } from './listaDeTarefaStyles'

const tarefas = [
  {
    titulo: 'Estudar Typescript',
    descricao: 'Ler os livros separados',
    prioridade: 'importante',
    status: 'pendente'
  },
  {
    titulo: 'Lembrar de pedir a minha Larissa em Casamento',
    descricao: 'Chamar ela pra almoçar e comprar um docinho pra ela',
    prioridade: 'Mega Importante',
    status: 'pendente'
  },
  {
    titulo: 'Jogar o Lixo Fora',
    descricao: 'Separar e por os lixos recicláveis pra fora',
    prioridade: 'importante',
    status: 'concluída'
  }
]

const ListaDeTarefas = () => (
  <Container>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            descricao={t.descricao}
            titulo={t.titulo}
            prioridade={t.prioridade}
            status={t.status}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas
