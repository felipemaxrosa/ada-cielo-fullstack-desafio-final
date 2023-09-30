package com.api.prospect.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PessoaFisicaDto {
  @Size(max = 11, message = "O CPF deve ter no máximo 11 caracteres")
  @NotBlank(message = "CPF é obrigatório")
  @NotNull(message = "CPF é obrigatório")
  private String cpf;

  @Size(max = 4, message = "MCC deve ter no máximo quatro caracteres")
  @NotBlank(message = "MCC (código de categoria do comerciante) é obrigatório")
  @NotNull(message = "MCC (código de categoria do comerciante) é obrigatório")
  private String mcc;

  @Size(max = 50, message = "O nome do contato deve ter no máximo 50 caracteres")
  @NotBlank(message = "O nome do contato é obrigatório")
  @NotNull(message = "O nome do contato é obrigatório")
  private String contactName;

  @NotBlank(message = "O email é obrigatório")
  @NotNull(message = "O email é obrigatório")
  @Pattern(regexp = "^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$", message = "Formato de email inválido")
  private String contactEmail;
}
