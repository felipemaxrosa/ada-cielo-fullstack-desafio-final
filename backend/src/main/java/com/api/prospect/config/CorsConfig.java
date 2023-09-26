package com.api.prospect.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
public class CorsConfig {
  @Bean
  public CorsFilter corsFilter() {
    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
    CorsConfiguration config = new CorsConfiguration();

    config.addAllowedOrigin("http://localhost:3000"); // Replace with your React app's URL
    config.addAllowedMethod("*");
    config.addAllowedHeader("*");

    source.registerCorsConfiguration("/**", config);
    return new CorsFilter((CorsConfigurationSource) source);
  }
}
