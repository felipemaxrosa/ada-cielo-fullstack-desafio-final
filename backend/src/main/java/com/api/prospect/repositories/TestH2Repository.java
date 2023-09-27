package com.api.prospect.repositories;

import com.api.prospect.models.PessoaFisicaModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TestH2Repository extends JpaRepository<PessoaFisicaModel, Long> {
}
