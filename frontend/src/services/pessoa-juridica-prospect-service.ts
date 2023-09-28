import api from './api';
import { SERVICES_URL } from './constants';
import { PessoaJuridicaProspect } from '../models/interfaces';

function getAllProspects() {
  return api.get<PessoaJuridicaProspect[]>(
    SERVICES_URL.PROSPECT_PESSOA_JURIDICA.BASE_URL
  );
}

export { getAllProspects };
