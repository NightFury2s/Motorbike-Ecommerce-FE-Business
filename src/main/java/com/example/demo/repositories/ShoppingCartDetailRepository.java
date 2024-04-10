package com.example.demo.repositories;

import com.example.demo.model.entity.ShoppingCartDetail;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShoppingCartDetailRepository extends CrudRepository<ShoppingCartDetail,Long> {
}

