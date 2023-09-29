import api from './api';
import { SERVICES_URL } from './constants';
import { PessoaFisicaProspect } from '../models/interfaces';

function getAllProspects() {
  return api.get<PessoaFisicaProspect[]>(
    SERVICES_URL.PROSPECT_PESSOA_FISICA.BASE_URL
  );
}

function addProspect(prospect: PessoaFisicaProspect) {
  return api.post<PessoaFisicaProspect>(
    SERVICES_URL.PROSPECT_PESSOA_FISICA.BASE_URL,
    prospect
  );
}

function updateProspect(prospect: PessoaFisicaProspect) {
  return api.put<PessoaFisicaProspect>(
    `${SERVICES_URL.PROSPECT_PESSOA_FISICA.BASE_URL}/${prospect.id}`,
    prospect
  );
}

function getNextProspect() {
  return api.get<PessoaFisicaProspect | string>(
    SERVICES_URL.PROSPECT_PESSOA_FISICA.NEXT_PROSPECT
  );
}

function deleteProspect(prospect: PessoaFisicaProspect) {
  return api.delete<PessoaFisicaProspect>(
    `${SERVICES_URL.PROSPECT_PESSOA_FISICA.BASE_URL}/${prospect.id}`
  );
}

export {
  getAllProspects,
  updateProspect,
  addProspect,
  getNextProspect,
  deleteProspect,
};
