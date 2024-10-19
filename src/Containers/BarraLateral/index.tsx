import FiltroCard from '../../components/FiltroCard'
import * as S from './BarraLateralStyles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar" />
      <S.Filtros>
        <FiltroCard ativo={false} contador={2} legenda={'pendentes'} />
        <FiltroCard ativo={false} contador={100} legenda={'concluídas'} />
        <FiltroCard ativo contador={5} legenda={'urgentes'} />
        <FiltroCard ativo contador={0} legenda={'importantes'} />
        <FiltroCard ativo={false} contador={7} legenda={'normal'} />
        <FiltroCard ativo contador={8} legenda={'todas'} />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default BarraLateral
