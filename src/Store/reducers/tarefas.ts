import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'

import * as enums from '../../utils/enums/Tarefa'

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa(
      'Estudar JavaScript',
      enums.Prioridade.IMPORTANTE,
      enums.Status.PENDENTE,
      'Claramente estudar lógica',
      1
    ),
    new Tarefa(
      'Levar a minha Lari pra encher o buxin',
      enums.Prioridade.MEGAIMPORTANTE,
      enums.Status.PENDENTE,
      'Ela gosta de ir no gogo sushi',
      2
    ),
    new Tarefa(
      'Jogar Zeldinha Hoje',
      enums.Prioridade.URGENTE,
      enums.Status.CONCLUIDA,
      'Jogar no Switch',
      3
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefasSlice.actions

export default tarefasSlice.reducer
