package com.api.prospect.controllers;

import com.api.prospect.dtos.PessoaFisicaDto;
import com.api.prospect.models.PessoaFisicaModel;
import com.api.prospect.repositories.PessoaFisicaRepository;
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
@RequestMapping("/prospect-pessoa-fisica")
public class PessoaFisicaController {
  @Autowired
  private PessoaFisicaRepository pessoaFisicaRepository;

  @PostMapping
  public ResponseEntity<Object> addNewProspectPessoaFisica(@RequestBody @Valid PessoaFisicaDto pessoaFisicaDto) {
    if (pessoaFisicaRepository.existsByCpf(pessoaFisicaDto.getCpf())) {
      return ResponseEntity.status(HttpStatus.CONFLICT).body("Conflict: CPF is already in use!");
    }

    var pessoaFisicaModel = new PessoaFisicaModel();
    BeanUtils.copyProperties(pessoaFisicaDto, pessoaFisicaModel);

    String formattedCpf = StringUtils.formatToSpecificDigits(pessoaFisicaDto.getCpf(), 11);
    pessoaFisicaModel.setCpf(formattedCpf);

    return ResponseEntity.status(HttpStatus.CREATED).body(pessoaFisicaRepository.save(pessoaFisicaModel));
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
