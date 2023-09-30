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

function getNextProspect() {
  return api.get<PessoaJuridicaProspect | string>(
    SERVICES_URL.PROSPECT_PESSOA_JURIDICA.NEXT_PROSPECT
  );
}

function deleteProspect(prospectId: number) {
  return api.delete<PessoaJuridicaProspect>(
    `${SERVICES_URL.PROSPECT_PESSOA_JURIDICA.BASE_URL}/${prospectId}`
  );
}

export {
  getAllProspects,
  addProspect,
  updateProspect,
  getNextProspect,
  deleteProspect,
};
