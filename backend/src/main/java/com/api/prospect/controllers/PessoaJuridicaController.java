package com.api.prospect.controllers;

import com.api.prospect.dtos.PessoaJuridicaDto;
import com.api.prospect.models.PessoaFisicaModel;
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
import java.util.Optional;

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

  @PutMapping("/{id}")
  public ResponseEntity<Object> updateProspectPessoaJuridica(
          @PathVariable(value = "id") Long id,
          @RequestBody @Valid PessoaJuridicaDto pessoaJuridicaDto
  ) {
    Optional<PessoaJuridicaModel> pessoaJuridicaModelOptional = pessoaJuridicaRepository.findById(id);

    if (!pessoaJuridicaModelOptional.isPresent()) {
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Prospect Pessoa Juridica not found.");
    }

    var pessoaJuridicaModel = new PessoaJuridicaModel();
    BeanUtils.copyProperties(pessoaJuridicaDto, pessoaJuridicaModel);

    pessoaJuridicaModel.setId(pessoaJuridicaModelOptional.get().getId());
    String formattedContactCpf = StringUtils.formatToSpecificDigits(pessoaJuridicaDto.getContactCpf(), 11);
    String formattedCnpj = StringUtils.formatToSpecificDigits(pessoaJuridicaDto.getCnpj(), 14);

    pessoaJuridicaModel.setCnpj(formattedCnpj);
    pessoaJuridicaModel.setContactCpf(formattedContactCpf);

    return ResponseEntity.status(HttpStatus.OK).body(pessoaJuridicaRepository.save(pessoaJuridicaModel));
  }

  @GetMapping("/{id}")
  public ResponseEntity<Object> getOneProspectPessoaJuridica(@PathVariable(value = "id") Long id) {
    Optional<PessoaJuridicaModel> pessoaJuridicaModelOptional = pessoaJuridicaRepository.findById(id);

    if (!pessoaJuridicaModelOptional.isPresent()) {
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Prospect Pessoa Juridica not found.");
    }

    return ResponseEntity.status(HttpStatus.OK).body(pessoaJuridicaModelOptional.get());
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Object> deleteProspectPessoaJuridica(@PathVariable(value = "id") Long id) {
    Optional<PessoaJuridicaModel> pessoaJuridicaModelOptional = pessoaJuridicaRepository.findById(id);

    if (!pessoaJuridicaModelOptional.isPresent()) {
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Prospect Pessoa Juridica not found.");
    }

    pessoaJuridicaRepository.delete(pessoaJuridicaModelOptional.get());

    return ResponseEntity.status(HttpStatus.OK).body("Prospect Pessoa Juridica has been deleted successfully!");
  }

  @GetMapping
  public ResponseEntity<Object> getAllProspectPessoaJuridica() {
    return ResponseEntity.status(HttpStatus.OK).body(pessoaJuridicaRepository.findAll());
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
