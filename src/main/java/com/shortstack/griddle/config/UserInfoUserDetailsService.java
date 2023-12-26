package com.shortstack.griddle.config;

import com.shortstack.griddle.model.Tenant;
import com.shortstack.griddle.repository.TenantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;


@Component
public class UserInfoUserDetailsService implements UserDetailsService {

    @Autowired
    private TenantRepository repository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Tenant tenant = repository.findByUsername(username);
        if (tenant != null) {
            return new UserInfoUserDetails(tenant);
        } else {
            throw new UsernameNotFoundException("User not found: " + username);
        }
    }
}
