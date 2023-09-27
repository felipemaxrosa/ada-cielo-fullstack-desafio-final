import api from './api';
import { SERVICES_URL } from './constants';
import { PessoaFisicaProspect } from '../models/interfaces';

function getAllProspects() {
  return api.get<PessoaFisicaProspect[]>(
    SERVICES_URL.PROSPECT_PESSOA_FISICA.BASE_URL
  );
}

export { getAllProspects };
