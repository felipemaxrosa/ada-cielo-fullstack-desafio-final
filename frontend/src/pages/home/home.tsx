import {
  PessoaFisicaProspectsTable,
  PessoaJuridicaProspectsTable,
} from '../../components/tables';
import { useAppSelector } from '../../store';
import {
  selectPessoaFisicaProspectList,
  selectPessoaJuridicaProspectList,
} from '../../store/selectors';
import { PageContainer } from '../../styles/container';

export const Home = () => {
  const pessoaFisicaProspects = useAppSelector(selectPessoaFisicaProspectList);
  const pessoaJuridicaProspects = useAppSelector(
    selectPessoaJuridicaProspectList
  );

  return (
    <PageContainer>
      <PessoaFisicaProspectsTable tableRows={pessoaFisicaProspects} />
      <PessoaJuridicaProspectsTable tableRows={pessoaJuridicaProspects} />
    </PageContainer>
  );
};
