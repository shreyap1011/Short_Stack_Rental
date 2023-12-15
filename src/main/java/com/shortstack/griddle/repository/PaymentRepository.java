package com.shortstack.griddle.repository;

import com.shortstack.griddle.model.Payment;
import com.shortstack.griddle.model.User;
import org.springframework.data.repository.CrudRepository;

public interface PaymentRepository extends CrudRepository<Payment, Integer> {
}
