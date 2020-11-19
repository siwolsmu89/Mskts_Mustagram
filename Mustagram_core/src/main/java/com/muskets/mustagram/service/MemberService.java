package com.muskets.mustagram.service;

import com.muskets.mustagram.mapper.UserMapper;
import com.muskets.mustagram.vo.User;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public interface MemberService {

    public String registerNewMember(User user);
}
