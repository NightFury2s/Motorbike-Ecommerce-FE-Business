package com.example.demo.model.Dto;

import com.example.demo.model.entity.Img;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class ProductDto {

   // private Long id;
    private String name;
    private long price;
    private long quantity;
    private Long detailType;
    private long idTypeProduct;
    private int discount;
    private String describe;
    private List<Img> images = new ArrayList<>();

   
}
