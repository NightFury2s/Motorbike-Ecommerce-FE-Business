package com.example.demo.repositories;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import com.example.demo.model.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProductRepository extends JpaRepository<Product,Long> {
    List<Product> findByTypeProduct_NameTypeContainingIgnoreCase(String partialName);


    //tìm theo idTypeProduct

    Page<Product> findByTypeProduct_Id(Long id, Pageable pageable);

    //tìm theo DetailType
    Page<Product> findByDetailType(Long detailType, Pageable pageable);

    //tìm theo idTypeProduct cao đến thấp
    @Query("select p from Product p where p.detailType = ?1  ORDER BY p.price DESC")
    Page<Product>  findByTypeProductIdOrderByPriceDesc(Long detailType, Pageable pageable);

    //tìm theo idTypeProduct Thấp đến Cao
    @Query("select p from Product p where p.typeProduct.id = ?1  ORDER BY p.price ASC")
    Page<Product> findByTypeProductIdOrderByPriceAsc(Long detailType, Pageable pageable);

}
