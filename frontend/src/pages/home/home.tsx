import React, { Fragment } from 'react';
import { ProspectsPessoaFisicaTable } from '../../components/tables';
import { useAppSelector } from '../../store';
import { selectProspectPessoaFisicaList } from '../../store/selectors';

export const Home = () => {
  const prospectsPessoaFisica = useAppSelector(selectProspectPessoaFisicaList);

  return (
    <Fragment>
      <ProspectsPessoaFisicaTable tableRows={prospectsPessoaFisica} />
    </Fragment>
  );
};
