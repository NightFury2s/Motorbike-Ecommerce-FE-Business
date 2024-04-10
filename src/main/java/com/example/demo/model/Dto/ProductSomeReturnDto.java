package com.example.demo.model.Dto;

import com.example.demo.model.entity.Img;
import com.example.demo.model.entity.Product;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class ProductSomeReturnDto {
    private long id;
    private String name;
    private float originalPrice ;
    private float newPrice;
    private float discount;
    private List<Img> images = new ArrayList<>();


    public ProductSomeReturnDto(Product product){
        this.setId(product.getId());
        this.setName(product.getName());
        this.setOriginalPrice(product.getPrice());
        this.setNewPrice( product.getPrice()-(product.getPrice() * product.getDiscount()/100) );
        this.setDiscount(product.getDiscount());
        this.setImages(product.getImages());
    }
}
