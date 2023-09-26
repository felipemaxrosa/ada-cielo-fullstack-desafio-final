package com.api.prospect.controllers;

import com.api.prospect.dtos.PessoaJuridicaDto;
import com.api.prospect.models.PessoaJuridicaModel;
import com.api.prospect.repositories.PessoaJuridicaRepository;
import com.api.prospect.utils.StringUtils;
import jakarta.validation.Valid;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/prospect-pessoa-juridica")
public class PessoaJuridicaController {
  @Autowired
  private PessoaJuridicaRepository pessoaJuridicaRepository;

  @PostMapping
  public ResponseEntity<Object> addNewProspectPessoaJuridica(@RequestBody @Valid PessoaJuridicaDto pessoaJuridicaDto) {
    if (pessoaJuridicaRepository.existsByCnpj(pessoaJuridicaDto.getCnpj())) {
      return ResponseEntity.status(HttpStatus.CONFLICT).body("Conflict: CNPJ is already in use!");
    }

    var pessoaJuridicaModel = new PessoaJuridicaModel();
    BeanUtils.copyProperties(pessoaJuridicaDto, pessoaJuridicaModel);

    String formattedContactCpf = StringUtils.formatToSpecificDigits(pessoaJuridicaDto.getContactCpf(), 11);
    String formattedCnpj = StringUtils.formatToSpecificDigits(pessoaJuridicaDto.getCnpj(), 14);

    pessoaJuridicaModel.setCnpj(formattedCnpj);
    pessoaJuridicaModel.setContactCpf(formattedContactCpf);

    return ResponseEntity.status(HttpStatus.CREATED).body(pessoaJuridicaRepository.save(pessoaJuridicaModel));
  }

  @ResponseStatus(HttpStatus.BAD_REQUEST)
  @ExceptionHandler(MethodArgumentNotValidException.class)
  public Map<String, String> handleValidationExceptions(MethodArgumentNotValidException ex) {
    Map<String, String> errors = new HashMap<>();

    ex.getBindingResult().getAllErrors().forEach((error) -> {
      String fieldName = ((FieldError) error).getField();
      String errorMessage = error.getDefaultMessage();
      errors.put(fieldName, errorMessage);
    });

    return errors;
  }
}
