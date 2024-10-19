import FiltroCard from '../../components/FiltroCard'
import * as S from './BarraLateralStyles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar" />
      <S.Filtros>
        <FiltroCard ativo={false} />
        <FiltroCard ativo={false} />
        <FiltroCard ativo />
        <FiltroCard ativo />
        <FiltroCard ativo={false} />
        <FiltroCard ativo />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default BarraLateral
