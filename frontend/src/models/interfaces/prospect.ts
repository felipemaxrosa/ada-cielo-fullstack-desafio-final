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
