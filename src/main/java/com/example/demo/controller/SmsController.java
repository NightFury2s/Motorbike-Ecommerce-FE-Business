package com.example.demo.controller;

import com.example.demo.model.Dto.sms;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

//@CrossOrigin(origins = "https://rest.esms.vn/MainService.svc/json/SendMultipleMessage_V4_post_json/")

@RestController
@RequestMapping("/sms")
public class SmsController {
    @Value("${sms.api.url}")
    private String smsApiUrl;


    @PostMapping("/sendSms")
    public ResponseEntity<?> sendSms(@RequestBody sms smsRequest) {

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<sms> requestEntity = new HttpEntity<>(smsRequest, headers);

        RestTemplate restTemplate = new RestTemplate();

        return restTemplate.exchange(
                smsApiUrl,
                HttpMethod.POST,
                requestEntity,
                String.class
        );
    }
}