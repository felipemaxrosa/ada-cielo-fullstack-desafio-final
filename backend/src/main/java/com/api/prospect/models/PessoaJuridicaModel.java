package com.api.prospect.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="TB_PROSPECT_PJ")
@Setter
@Getter
public class PessoaJuridicaModel {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;
  private String cnpj;
  private String corporateName;
  private String mcc;
  private String contactCPF;
  private String contactName;
  private String contactEmail;
}
