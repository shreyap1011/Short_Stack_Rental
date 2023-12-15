package com.shortstack.griddle.repository;

import com.shortstack.griddle.model.Address;
import com.shortstack.griddle.model.User;
import org.springframework.data.repository.CrudRepository;

public interface AddressRepository extends CrudRepository<Address, Integer> {
}
