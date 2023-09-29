import api from './api';
import { SERVICES_URL } from './constants';
import { PessoaJuridicaProspect } from '../models/interfaces';

function getAllProspects() {
  return api.get<PessoaJuridicaProspect[]>(
    SERVICES_URL.PROSPECT_PESSOA_JURIDICA.BASE_URL
  );
}

function addProspect(prospect: PessoaJuridicaProspect) {
  return api.post(SERVICES_URL.PROSPECT_PESSOA_JURIDICA.BASE_URL, prospect);
}

function updateProspect(prospect: PessoaJuridicaProspect) {
  return api.put(
    `${SERVICES_URL.PROSPECT_PESSOA_JURIDICA.BASE_URL}/${prospect.id}`,
    prospect
  );
}

export { getAllProspects, addProspect, updateProspect };
