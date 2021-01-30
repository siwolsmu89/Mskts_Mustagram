package com.muskets.mustagram.mapper;

import com.muskets.mustagram.vo.User;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Mapper
public interface UserMapper {
    void insertUser(User user);
    void updateUser(User user);
    void deleteUser(String userId);
    void insertFollower(String userId, String friendId);
    void deleteFollower(String userId, String friendId);
    User getUserById(String userId);
    List<User> getAllFollowersOf(String userId);
    List<User> getAllFolloweesOf(String userId);
}
