package com.api.prospect.dtos;

import jakarta.validation.constraints.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PessoaJuridicaDto {
  @Size(max = 14, message = "CNPJ must have at maximum, 14 characters")
  @NotBlank(message = "CNPJ is required")
  @NotNull(message = "CNPJ is required")
  private String cnpj;

  @Size(max = 50, message = "Corporate name must have at maximum, 50 characters")
  @NotBlank(message = "Corporate name is required")
  @NotNull(message = "Corporate name is required")
  private String corporateName;

  @Size(max = 4, message = "MCC must have at maximum, 4 characters")
  @NotBlank(message = "MCC (Merchant Category Code) is required")
  @NotNull(message = "MCC (Merchant Category Code) is required")
  private String mcc;

  @Size(max = 11, message = "Contact CPF must have at maximum, 11 characters")
  @NotBlank(message = "Contact CPF is required")
  @NotNull(message = "Contact CPF is required")
  private String contactCpf;

  @Size(max = 50, message = "Contact name must have at maximum, 50 characters")
  @NotBlank(message = "Contact name is required")
  @NotNull(message = "Contact name is required")
  private String contactName;

  @NotBlank(message = "Email is required")
  @NotNull(message = "Email is required")
  @Pattern(regexp = "^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$", message = "Invalid email format")
  private String contactEmail;
}
