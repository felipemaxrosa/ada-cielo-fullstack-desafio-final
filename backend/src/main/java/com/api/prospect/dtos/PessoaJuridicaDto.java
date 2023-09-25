package com.api.prospect.dtos;

import jakarta.validation.constraints.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PessoaJuridicaDto {
  private Long id;

  @Size(max = 14, message = "CNPJ must have at maximum, 14 characters")
  @NotBlank(message = "CNPJ is required")
  @NotNull(message = "CNPJ can not be null")
  private Long cnpj;

  @Size(max = 50, message = "Corporate name must have at maximum, 50 characters")
  @NotBlank(message = "Corporate name is required")
  @NotNull(message = "Corporate name can not be null")
  private String corporateName;

  @Size(max = 4, message = "MCC must have at maximum, 4 characters")
  @NotBlank(message = "MCC (Merchant Category Code) is required")
  @NotNull(message = "MCC (Merchant Category Code) can not be null")
  private String mcc;

  @Size(max = 11, message = "Contact CPF must have at maximum, 11 characters")
  @NotBlank(message = "Contact CPF is required")
  @NotNull(message = "Contact CPF can not be null")
  private String contactCPF;

  @Size(max = 50, message = "Contact name must have at maximum, 50 characters")
  @NotBlank(message = "Contact name is required")
  @NotNull(message = "Contact can not be null")
  private String contactName;

  @NotBlank(message = "Email is required")
  @NotNull(message = "Email can not be null")
//  @Pattern(regexp = "^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$", message = "Invalid email format")
  private String contactEmail;
}
