import React, { Fragment } from 'react';
import { ProspectsPessoaFisicaTable } from '../../components/tables';
import { useAppSelector } from '../../store';
import { selectProspectsPessoaFisica } from '../../store/selectors';

export const Home = () => {
  const prospectsPessoaFisica = useAppSelector(selectProspectsPessoaFisica);

  return (
    <Fragment>
      <ProspectsPessoaFisicaTable tableRows={prospectsPessoaFisica} />
    </Fragment>
  );
};
