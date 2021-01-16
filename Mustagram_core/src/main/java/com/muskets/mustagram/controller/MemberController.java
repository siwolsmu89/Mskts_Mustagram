package com.muskets.mustagram.controller;

import com.muskets.mustagram.service.MemberService;
import com.muskets.mustagram.vo.User;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/member")
public class MemberController {

    @Autowired
    private MemberService memberService;

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

    @RequestMapping("friend.do")
    public String getFriendInfo(@RequestParam String type, @RequestParam String userId) {

        System.out.println("getFriendInfo Activated..");
        System.out.println("type ::" + type);
        System.out.println("userId :: " + userId);

        User user = memberService.getMemberInfo(userId);
        if (user == null) {
            System.out.println("No user");
            return "Failed To Get User Information";
        }

        List<User> friends = memberService.getFriendList(type, userId);

        JSONArray result = new JSONArray(friends);
        System.out.println(result.toString());
        return result.toString();
    }

    @RequestMapping("unfollow.do")
    public String unfollowFriend(@RequestParam String userId, @RequestParam String friendId) {
        System.out.println("unfollowFriend Activated..");
        System.out.println("User ID :: " + userId);
        System.out.println("Friend ID :: " + friendId);

        User user = memberService.getMemberInfo(userId);
        if (user == null) {
            System.out.println("No user");
            return "Failed To Get User Information";
        }

        List<User> friends = memberService.getFriendList("r", userId);
        for (User friend : friends) {
            if (friendId.equals(friend.getId())){
                return memberService.unfollowFriend(userId, friendId);
            }
        }

        return "Failed To Delete Follower : No matching Friend Exists";
    }

}
