package com.api.prospect.dtos;

import jakarta.validation.constraints.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PessoaJuridicaDto {
  @Size(max = 14, message = "O CNPJ deve ter no máximo 14 caracteres")
  @NotBlank(message = "CNPJ é obrigatório")
  @NotNull(message = "CNPJ é obrigatório")
  private String cnpj;

  @Size(max = 50, message = "A razão social deve ter no máximo 50 caracteres")
  @NotBlank(message = "O nome corporativo é obrigatório")
  @NotNull(message = "O nome corporativo é obrigatório")
  private String corporateName;

  @Size(max = 4, message = "MCC deve ter no máximo quatro caracteres")
  @NotBlank(message = "MCC (código de categoria do comerciante) é obrigatório")
  @NotNull(message = "MCC (código de categoria do comerciante) é obrigatório")
  private String mcc;

  @Size(max = 11, message = "O CPF do contato deve ter no máximo 11 caracteres")
  @NotBlank(message = "CPF de contato é obrigatório")
  @NotNull(message = "CPF de contato é obrigatório")
  private String contactCpf;

  @Size(max = 50, message = "O nome do contato deve ter no máximo 50 caracteres")
  @NotBlank(message = "O nome do contato é obrigatório")
  @NotNull(message = "O nome do contato é obrigatório")
  private String contactName;

  @NotBlank(message = "O e-mail é obrigatório")
  @NotNull(message = "O e-mail é obrigatório")
  @Pattern(regexp = "^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$", message = "Formato de email inválido")
  private String contactEmail;
}
