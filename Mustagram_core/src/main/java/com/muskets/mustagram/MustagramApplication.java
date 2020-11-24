package com.muskets.mustagram;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MustagramApplication {

    public static void main(String[] args) {
        SpringApplication.run(MustagramApplication.class, args);
    }

}
