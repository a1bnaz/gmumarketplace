package com.gmu.marketplace.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    @Profile("dev") // Only applies in development
    public SecurityFilterChain devSecurityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(authz -> authz
                .anyRequest().permitAll() // Allow ALL requests in development
            )
            .headers(headers -> headers.frameOptions().disable()); // Allow H2 console
        
        return http.build();
    }

    // TODO: Implement JWT-based security for production
    // @Bean
    // @Profile("prod")
    // public SecurityFilterChain prodSecurityFilterChain(HttpSecurity http) throws Exception {
    //     // JWT configuration will go here
    //     return http.build();
    // }
}
