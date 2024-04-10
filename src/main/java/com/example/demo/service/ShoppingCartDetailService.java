package com.example.demo.service;

import com.example.demo.model.entity.ShoppingCartDetail;
import org.springframework.http.ResponseEntity;

public interface ShoppingCartDetailService {
    ResponseEntity<?> add(Long shoppingCartId, ShoppingCartDetail shoppingCartDetail);
    ResponseEntity<?> getAll();
    ResponseEntity<?> deltete(long id);
}
