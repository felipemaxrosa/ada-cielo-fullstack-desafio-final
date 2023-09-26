package com.api.prospect.controllers;

import com.api.prospect.dtos.PessoaFisicaDto;
import com.api.prospect.models.PessoaFisicaModel;
import com.api.prospect.repositories.PessoaFisicaRepository;
import jakarta.validation.Valid;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    return ResponseEntity.status(HttpStatus.CREATED).body(pessoaFisicaRepository.save(pessoaFisicaModel));
  }
}
