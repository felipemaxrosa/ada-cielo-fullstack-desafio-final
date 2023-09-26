package com.api.prospect.repositories;

import com.api.prospect.models.PessoaJuridicaModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PessoaJuridicaRepository extends JpaRepository<PessoaJuridicaModel, Long> {
  boolean existsByCnpj(String cnpj);
}
