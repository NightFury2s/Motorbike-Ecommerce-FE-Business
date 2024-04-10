package com.example.demo.repositories;

import com.example.demo.model.entity.OTP;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

@Service
public interface OTPRepository extends JpaRepository<OTP, Long> {

}