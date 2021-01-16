package com.muskets.mustagram.service;

import com.muskets.mustagram.mapper.UserMapper;
import com.muskets.mustagram.vo.User;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

public interface MemberService {

    public String registerNewMember(User user);
    public User getMemberInfo(String userId);
    public List<User> getFriendList(String type, String userId);
    public String unfollowFriend(String userId, String friendId);
}
