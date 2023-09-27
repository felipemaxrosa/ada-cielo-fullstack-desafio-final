package com.api.prospect;

import com.api.prospect.models.PessoaJuridicaModel;
import com.api.prospect.repositories.TestH2Repository;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.web.client.RestTemplate;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ProspectPessoaJuridicaTests {
  @LocalServerPort
  private int port;

  private String baseUrl="http://localhost";
  private String baseUrlPessoaJuridica;
  private static RestTemplate restTemplate;

  @Autowired
  private TestH2Repository h2Repository;

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

}
