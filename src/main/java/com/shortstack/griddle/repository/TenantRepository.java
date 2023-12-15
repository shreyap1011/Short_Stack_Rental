package com.shortstack.griddle.repository;

import com.shortstack.griddle.model.Tenant;
import org.springframework.data.repository.CrudRepository;

public interface TenantRepository extends CrudRepository<Tenant, Integer> {
}
