package com.example.demo.service;

import com.example.demo.model.Dto.ShoppingCartDto;
import org.springframework.http.ResponseEntity;

public interface ShoppingCartService {
    ResponseEntity<?> addCart(ShoppingCartDto shoppingCartDto);
    ResponseEntity<?> getAll();
    ResponseEntity<?> deltete(long id);
}
