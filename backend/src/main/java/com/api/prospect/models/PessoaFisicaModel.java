package com.api.prospect.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="TB_PROSPECT_PF")
@Setter
@Getter
public class PessoaFisicaModel {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;
  private String cpf;
  private String mcc;
  private String contactName;
  private String contactEmail;
}
