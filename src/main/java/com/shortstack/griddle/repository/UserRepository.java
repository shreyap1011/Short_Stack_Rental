package com.shortstack.griddle.repository;

import org.springframework.data.repository.CrudRepository;
import com.shortstack.griddle.model.User;
import java.util.List;

public interface UserRepository extends CrudRepository<User, Integer> {

}
