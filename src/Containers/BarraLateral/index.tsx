import FiltroCard from '../../components/FiltroCard'
import * as S from './BarraLateralStyles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar" />
      <S.Filtros>
        <FiltroCard ativo={false} contador={2} legenda={'Pendentes'} />
        <FiltroCard ativo={false} contador={7} legenda={'Normal'} />
        <FiltroCard ativo contador={5} legenda={'Urgentes'} />
        <FiltroCard ativo contador={0} legenda={'Importantes'} />
        <FiltroCard ativo={false} contador={1} legenda={'Mega Importantes'} />
        <FiltroCard ativo={false} contador={100} legenda={'Concluídas'} />
        <FiltroCard ativo contador={8} legenda={'Todas'} />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default BarraLateral
