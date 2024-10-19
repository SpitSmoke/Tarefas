import Tarefa from '../../components/Tarefa'
import { Container } from './listaDeTarefaStyles'

import * as enums from '../../utils/enums/Tarefa'

const tarefas = [
  {
    titulo: 'Estudar Typescript',
    descricao: 'Ler os livros separados',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE
  },
  {
    titulo: 'Lembrar de pedir a minha Larissa em Casamento',
    descricao: 'Chamar ela pra almoçar e comprar um docinho pra ela',
    prioridade: enums.Prioridade.MEGAIMPORTANTE,
    status: enums.Status.PENDENTE
  },
  {
    titulo: 'Jogar o Lixo Fora',
    descricao: 'Separar e por os lixos recicláveis pra fora',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE
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
