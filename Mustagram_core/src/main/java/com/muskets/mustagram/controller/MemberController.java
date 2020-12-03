package com.muskets.mustagram.controller;

import com.muskets.mustagram.service.MemberService;
import com.muskets.mustagram.vo.User;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/member")
public class MemberController {

    @Autowired
    public MemberService memberService;

    @RequestMapping("/register.do")
    public String registerNewUser(@RequestBody User user) {
        return memberService.registerNewMember(user);
    }

    @RequestMapping("/info.do")
    public String getUserInfo(@RequestParam String userId) {
        System.out.println("getUserInfo Activated..");
        System.out.println("userId :: " + userId);
        User user = memberService.getMemberInfo(userId);

        if (user == null) {
            return "Failed To Get User Information";
        }

        JSONObject result = new JSONObject(user);
        return result.toString();
    }

}
