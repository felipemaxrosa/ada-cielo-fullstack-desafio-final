package com.api.prospect.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Entity
@Table(name="TB_PROSPECT_PF")
@Setter
@Getter
public class PessoaFisicaModel implements Serializable {
  private static final long serialVersionUID = 1L;

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;
  private String cpf;
  private String mcc;
  private String contactName;
  private String contactEmail;
}
