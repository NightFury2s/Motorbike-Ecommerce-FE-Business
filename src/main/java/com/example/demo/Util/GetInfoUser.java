package com.example.demo.Util;
import com.example.demo.model.Dto.UserDTO;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

public class GetInfoUser {

    public  static String getInfo(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication.isAuthenticated()) {

            return authentication.getName();
        }
        return null;
    }
}
