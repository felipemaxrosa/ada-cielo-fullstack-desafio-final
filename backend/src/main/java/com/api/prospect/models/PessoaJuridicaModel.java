package com.api.prospect.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Entity
@Table(name="TB_PROSPECT_PJ")
@Setter
@Getter
public class PessoaJuridicaModel implements Serializable {
  private static final long serialVersionUID = 1L;

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;
  private String cnpj;
  private String corporateName;
  private String mcc;
  private String contactCpf;
  private String contactName;
  private String contactEmail;
}
