package com.example.demo.repositories;


import com.example.demo.model.entity.ShoppingCartDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StatusShoppingCartRepository extends JpaRepository<ShoppingCartDetail,Long> {

}
