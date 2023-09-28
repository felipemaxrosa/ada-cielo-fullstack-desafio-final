import React, { Fragment } from 'react';
import { ProspectsPessoaFisicaTable } from '../../components/tables';
import { useAppSelector } from '../../store';
import { selectPessoaFisicaProspectList } from '../../store/selectors';

export const Home = () => {
  const prospectsPessoaFisica = useAppSelector(selectPessoaFisicaProspectList);

  return (
    <Fragment>
      <ProspectsPessoaFisicaTable tableRows={prospectsPessoaFisica} />
    </Fragment>
  );
};
