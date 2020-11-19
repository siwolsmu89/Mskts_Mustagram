package com.muskets.mustagram.service.impl;

import com.muskets.mustagram.mapper.UserMapper;
import com.muskets.mustagram.service.MemberService;
import com.muskets.mustagram.vo.User;
import org.apache.ibatis.annotations.Mapper;

public class MemberServiceImpl implements MemberService {

    @Mapper
    public UserMapper userMapper;

    @Override
    public String registerNewMember(User user) {
        String resultString = "";

        User savedUser = userMapper.getUserById(user.getId());
        if (savedUser != null) {
            resultString = "User Registration Fail : Same ID already exists";
            return resultString;
        }

        // TODO: Other Conditions Should be checked more.

        userMapper.insertUser(user);
        resultString = "User Registration OK";

        return resultString;
    }
}
