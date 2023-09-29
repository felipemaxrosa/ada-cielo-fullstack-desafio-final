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
  @Size(max = 11, message = "CPF must have at maximum, 11 characters")
  @NotBlank(message = "CPF is required")
  @NotNull(message = "CPF is required")
  private String cpf;

  @Size(max = 4, message = "MCC must have at maximum, 4 characters")
  @NotBlank(message = "MCC (Merchant Category Code) is required")
  @NotNull(message = "MCC (Merchant Category Code) is required")
  private String mcc;

  @Size(max = 50, message = "Contact name must have at maximum, 50 characters")
  @NotBlank(message = "Contact name is required")
  @NotNull(message = "Contact name is required")
  private String contactName;

  @NotBlank(message = "Email is required")
  @NotNull(message = "Email is required")
  @Pattern(regexp = "^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$", message = "Invalid email format")
  private String contactEmail;
}
