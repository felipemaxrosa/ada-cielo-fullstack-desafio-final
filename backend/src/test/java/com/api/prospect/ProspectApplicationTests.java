package com.api.prospect;

import com.api.prospect.models.PessoaFisicaModel;
import com.api.prospect.repositories.TestH2Repository;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.web.client.RestTemplate;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class ProspectApplicationTests {

	@LocalServerPort
	private int port;

	private String baseUrl="http://localhost";
	private String baseUrlPessoaFisica;
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
		baseUrlPessoaFisica = baseUrl.concat("/prospect-pessoa-fisica");
		baseUrlPessoaJuridica = baseUrl.concat("/prospect-pessoa-juridica");
	}

  // Prospect Pessoa Fisica Tests
	// -------------------------------------------------------------
	@Test
	public void testAddNewProspectPessoaFisica() {
		PessoaFisicaModel pessoaFisicaModel = new PessoaFisicaModel();

		pessoaFisicaModel.setCpf("99999999999");
		pessoaFisicaModel.setMcc("1234");
		pessoaFisicaModel.setContactEmail("felipetest@test.com");
		pessoaFisicaModel.setContactName("Felipe Rosa");

		PessoaFisicaModel response = restTemplate.postForObject(baseUrlPessoaFisica, pessoaFisicaModel, PessoaFisicaModel.class);

		if (!response.getCpf().isEmpty()) {
			assertEquals(pessoaFisicaModel.getCpf(), response.getCpf());
		}
	}

	@Test
	@Sql(statements = "INSERT INTO TB_PROSPECT_PF (id, cpf, mcc, contact_name, contact_email) VALUES (1, '99999999999', '1234', 'Felipe Test', 'felipe@test.com')", executionPhase = Sql.ExecutionPhase.BEFORE_TEST_METHOD)
	@Sql(statements = "DELETE FROM TB_PROSPECT_PF WHERE id=1", executionPhase = Sql.ExecutionPhase.AFTER_TEST_METHOD)
	public void testGetProspectPessoaFisica() {
		List<PessoaFisicaModel> prospects = restTemplate.getForObject(baseUrlPessoaFisica, List.class);

		assertEquals(1, prospects.size());
		assertEquals(1, h2Repository.findAll().size());
	}

}
