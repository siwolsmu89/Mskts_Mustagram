package com.muskets.mustagram.controller;

import com.muskets.mustagram.service.MemberService;
import com.muskets.mustagram.vo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/member")
public class MemberController {

    @Autowired
    public MemberService memberService;

    @RequestMapping("/register.do")
    public String registerNewUser() {
        User user = new User();
        user.setId("siwolsmu");
        user.setName("minsk");
        user.setPassword("1234");
        user.setTelePhone("123-1234");
        user.setEmail("siwol_smuire89@naver.com");
        user.setGender("M");
        user.setBirthdate("20201124");
        user.setAddress("Seoul, Korea");
        user.setImage("");
        user.setNickname("crowstone");
        user.setSns("");

        System.out.println(user.toString());

        return memberService.registerNewMember(user);
    }

}
