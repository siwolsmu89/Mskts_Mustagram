package com.muskets.mustagram.service.impl;

import com.muskets.mustagram.mapper.UserMapper;
import com.muskets.mustagram.service.MemberService;
import com.muskets.mustagram.vo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("MemberService")
public class MemberServiceImpl implements MemberService {

    @Autowired
    public UserMapper userMapper;

    @Override
    public String registerNewMember(User user) {
        String resultString = "";

        System.out.println(userMapper);

        User savedUser = userMapper.getUserById(user.getId());
        if (savedUser != null) {
            resultString = "User Registration Fail : Same ID already exists";
            return resultString;
        }

        // TODO: Other Conditions Should be checked more.

        System.out.println(user.getId());
        System.out.println(user.getName());

        userMapper.insertUser(user);
        resultString = "User Registration OK";

        return resultString;
    }
}
