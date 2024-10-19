import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

type TarefaState = {
  itens: Tarefa[]
}

const initialState: TarefaState = {
  itens: [
    {
      id: 1,
      titulo: 'Estudar JavaScript',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.PENDENTE,
      descricao: 'Claramente estudar lógica'
    },
    {
      id: 2,
      titulo: 'Levar a minha Lari pra encher o buxin',
      prioridade: enums.Prioridade.MEGAIMPORTANTE,
      status: enums.Status.PENDENTE,
      descricao: 'Ela gosta de ir no gogo sushi'
    },
    {
      id: 3,
      titulo: 'Jogar Zeldinha Hoje',
      prioridade: enums.Prioridade.URGENTE,
      status: enums.Status.CONCLUIDA,
      descricao: 'Assitir As aulas e ler o livro de Lógica'
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefasSlice.actions

export default tarefasSlice.reducer
