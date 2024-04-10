package com.example.demo.service;

import com.example.demo.model.entity.TypeProduct;
import org.springframework.http.ResponseEntity;

public interface TypeProductService {
    ResponseEntity<?> add(TypeProduct typeProduct);
    ResponseEntity<?> delete(long id);
}
