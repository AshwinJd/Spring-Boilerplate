package com.stackroute.profilemicroservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class ProfilemicroserviceApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProfilemicroserviceApplication.class, args);
	}

}
