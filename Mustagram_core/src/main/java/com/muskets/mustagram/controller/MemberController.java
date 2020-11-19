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
    public String registerNewUser(@RequestParam User user) {
        return memberService.registerNewMember(user);
    }

}
