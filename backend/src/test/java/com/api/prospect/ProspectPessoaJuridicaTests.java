package com.api.prospect;

import com.api.prospect.models.PessoaFisicaModel;
import com.api.prospect.models.PessoaJuridicaModel;
import com.api.prospect.repositories.TestH2PessoaJuridicaRepository;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.web.client.RestTemplate;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ProspectPessoaJuridicaTests {
  @LocalServerPort
  private int port;

  private String baseUrl="http://localhost";
  private String baseUrlPessoaJuridica;
  private static RestTemplate restTemplate;

  @Autowired
  private TestH2PessoaJuridicaRepository h2Repository;

  @BeforeAll
  public static void init() {
    restTemplate = new RestTemplate();
  }

  @BeforeEach
  public void setUp() {
    baseUrl = baseUrl.concat(":").concat(port+"");
    baseUrlPessoaJuridica = baseUrl.concat("/prospect-pessoa-juridica");
  }

  // Prospect Pessoa Juridica Tests
  // -------------------------------------------------------------
  @Test
  public void testAddNewProspectPessoaJuridica() {
    PessoaJuridicaModel pessoaJuridicaModel = new PessoaJuridicaModel();

    pessoaJuridicaModel.setContactCpf("99999999999");
    pessoaJuridicaModel.setCnpj("99999999999999");
    pessoaJuridicaModel.setMcc("1234");
    pessoaJuridicaModel.setContactName("Felipe Rosa");
    pessoaJuridicaModel.setContactEmail("felipe@test.com");
    pessoaJuridicaModel.setCorporateName("Micromax Company");

    PessoaJuridicaModel response = restTemplate.postForObject(baseUrlPessoaJuridica, pessoaJuridicaModel, PessoaJuridicaModel.class);

    if (!response.getCnpj().isEmpty()) {
      assertEquals(pessoaJuridicaModel.getCnpj(), response.getCnpj());
    }
  }

  @Test
  @Sql(statements = "INSERT INTO TB_PROSPECT_PJ (id, cnpj, corporate_name, mcc, contact_cpf, contact_name, contact_email) VALUES (1, '57973182000102', 'Micromax Solutions', '1234', '99999999999', 'Felipe Rosa', 'felipe.test@email.com')", executionPhase = Sql.ExecutionPhase.BEFORE_TEST_METHOD)
  @Sql(statements = "DELETE FROM TB_PROSPECT_PJ WHERE id=1", executionPhase = Sql.ExecutionPhase.AFTER_TEST_METHOD)
  public void testGetProspectPessoaJuridica() {
    List<PessoaJuridicaModel> prospects = restTemplate.getForObject(baseUrlPessoaJuridica, List.class);

    assertEquals(1, prospects.size());
    assertEquals(1, h2Repository.findAll().size());
  }

  @Test
  @Sql(statements = "INSERT INTO TB_PROSPECT_PJ (id, cnpj, corporate_name, mcc, contact_cpf, contact_name, contact_email) VALUES (1, '57973182000102', 'Micromax Solutions', '1234', '99999999999', 'Felipe Rosa', 'felipe.test@email.com')", executionPhase = Sql.ExecutionPhase.BEFORE_TEST_METHOD)
  @Sql(statements = "DELETE FROM TB_PROSPECT_PJ WHERE id=1", executionPhase = Sql.ExecutionPhase.AFTER_TEST_METHOD)
  public void testGetProspectPessoaJuridicaById() {
    PessoaJuridicaModel prospect = restTemplate.getForObject(baseUrlPessoaJuridica+"/{id}", PessoaJuridicaModel.class, 1);

    assertAll(
            () -> assertNotNull(prospect),
            () -> assertEquals(1, prospect.getId())
    );
  }

}
