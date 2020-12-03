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

        User savedUser = userMapper.getUserById(user.getId());
        if (savedUser != null) {
            resultString = "Registration Fail : Same ID already exists";
            return resultString;
        }

        // TODO: Other Conditions Should be checked more.

        System.out.println(user);

        if (user.getNickname() == null) {
            System.out.println("name:" + user.getName());
            user.setNickname(user.getName());
        }

        System.out.println(user);

        userMapper.insertUser(user);
        resultString = "Registration Success";

        return resultString;
    }

    @Override
    public User getMemberInfo(String userId) {
        System.out.println("GetMemberInfo Activated..");
        System.out.println("userId :: " + userId);
        User user = userMapper.getUserById(userId);
        return user;
    }


}
