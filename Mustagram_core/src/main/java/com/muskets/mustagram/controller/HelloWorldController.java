package com.muskets.mustagram.controller;

import com.muskets.mustagram.mapper.HelloWorldMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@RestController
public class HelloWorldController {

    @Autowired
    public HelloWorldMapper mapper;

    @RequestMapping("/hello")
    public String helloWorld() {
        System.out.println("HelloWorldController activated..");
        System.out.println("Set hello..");
        Map<String, String> paramMap = new HashMap<>();
        Date sysdate = new Date();
        paramMap.put("name", "Hello World, " + sysdate.toString());

        System.out.println("Insert hello..");
        mapper.insertTest(paramMap);

        System.out.println("All work done..");
        System.out.println("HelloWorldController deactivated..");
        return "Hello World";
    }
}
