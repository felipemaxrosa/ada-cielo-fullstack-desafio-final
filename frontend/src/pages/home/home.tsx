import React, { Fragment } from 'react';
import { FeedbacksTable } from '../../components/tables';
import { TableData } from '../../components/tables/prospects-pessoa-fisica-table/models';

export const Home = () => {
  function createData(type: string, message: string): TableData {
    return {
      type,
      message,
    };
  }

  const mockedTableRows = [
    createData('Elogio', 'Este eh um feedback de Elogio 1'),
    createData('Elogio', 'Este eh um feedback de Elogio 2'),
    createData('Elogio', 'Este eh um feedback de Elogio 3'),
    createData('Elogio', 'Este eh um feedback de Elogio 4'),
    createData('Elogio', 'Este eh um feedback de Elogio 5'),
    createData('Critica', 'Este eh um feedback de Critica 1'),
    createData('Critica', 'Este eh um feedback de Critica 2'),
    createData('Critica', 'Este eh um feedback de Critica 3'),
    createData('Critica', 'Este eh um feedback de Critica 4'),
    createData('Critica', 'Este eh um feedback de Critica 5'),
    createData('Sugestão', 'Este eh um feedback de Sugestão 1'),
    createData('Sugestão', 'Este eh um feedback de Sugestão 2'),
    createData('Sugestão', 'Este eh um feedback de Sugestão 3'),
    createData('Sugestão', 'Este eh um feedback de Sugestão 4'),
    createData('Sugestão', 'Este eh um feedback de Sugestão 5'),
  ];

  return (
    <Fragment>
      <FeedbacksTable tableRows={mockedTableRows} />
    </Fragment>
  );
};
