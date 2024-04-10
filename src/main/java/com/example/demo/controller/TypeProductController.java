package com.example.demo.controller;

import com.example.demo.model.entity.TypeProduct;
import com.example.demo.service.TypeProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/admin/type")
@Controller
public class TypeProductController {


    private final  TypeProductService typeProductService;
    @Autowired
    public TypeProductController(TypeProductService typeProductService) {
        this.typeProductService = typeProductService;
    }


    @PostMapping("/add")

    public ResponseEntity<?> addTypeProduct(@RequestBody TypeProduct typeProduct){
        return typeProductService.add(typeProduct);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable long id) {
        return typeProductService.delete(id);
    }
}
