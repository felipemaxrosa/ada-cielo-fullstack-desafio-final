package com.api.prospect.repositories;

import com.api.prospect.models.PessoaJuridicaModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TestH2PessoaJuridicaRepository extends JpaRepository<PessoaJuridicaModel, Long> {
}
