export type ProspectType = 'FISICA' | 'JURIDICA';

export type PessoaFisicaProspect = {
  id: number;
  cpf: string;
  mcc: string;
  contactName: string;
  contactEmail: string;
};

type PessoaFisicaProspectKeys = keyof PessoaFisicaProspect;
export type PessoaFisicaProspectErrors = Partial<
  Record<PessoaFisicaProspectKeys, string>
>;

export type PessoaJuridicaProspect = {
  id: number;
  cnpj: string;
  corporateName: string;
  mcc: string;
  contactCpf: string;
  contactName: string;
  contactEmail: string;
};
type PessoaJuridicaProspectKeys = keyof PessoaJuridicaProspect;
export type PessoaJuridicaProspectErrors = Partial<
  Record<PessoaJuridicaProspectKeys, string>
>;
