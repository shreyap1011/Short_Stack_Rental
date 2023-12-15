package com.shortstack.griddle.repository;

import com.shortstack.griddle.model.Payment;
import org.springframework.data.repository.CrudRepository;

public interface PaymentRepository extends CrudRepository<Payment, Integer> {
}
