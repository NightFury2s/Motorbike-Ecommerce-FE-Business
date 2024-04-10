package com.example.demo.controller;

import com.example.demo.model.Dto.ProductDto;

import com.example.demo.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

//@RequestMapping("/admin/productcar")
@RestController
public class ProductController {


  private final   ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }


    //@RequestParam("productImage") MultipartFile fileProductImage
    @PostMapping("/admin/productcar/add")
    public ResponseEntity<?> addProduct(@RequestBody ProductDto productDto) {
        return productService.addCard(productDto);
    }

    @GetMapping("/productcar/getall/{page}/{size}")
    public ResponseEntity<?> getAllProduct(@PathVariable int page, @PathVariable int size) {
        return productService.getAll(page, size);
    }

    // get theo idType
    @GetMapping("/productcar/getsome/{page}/{size}/{idType}")
    public ResponseEntity<?> getSomeProduct(@PathVariable int page, @PathVariable int size, @PathVariable Long idType) {
        return productService.getSome(page, size, idType);
    }

    //get theo detailType
    @GetMapping("/productcar/getTypeDetail/{page}/{size}/{detailType}")
    public ResponseEntity<?> getTypeDetail(@PathVariable int page, @PathVariable int size, @PathVariable Long detailType) {
        return productService.getTypeDetail(page, size, detailType);
    }

    //chi tiết sản phẩm
    @GetMapping("/product/getDetail/{idProduct}")
    public ResponseEntity<?> getProductDetail(@PathVariable Long idProduct) {
        return productService.getDetail(idProduct);
    }

    @DeleteMapping("/admin/productcar/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable long id) {
        return productService.delete(id);
    }

    @PutMapping("/admin/productcar/put/{id}")
    public ResponseEntity<?> put(@PathVariable long id, @RequestBody ProductDto productDto) {
        return productService.put(id, productDto);
    }



}
