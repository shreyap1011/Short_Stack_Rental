package com.shortstack.griddle.config;

import com.shortstack.griddle.model.Landlord;
import com.shortstack.griddle.model.Tenant;
import com.shortstack.griddle.repository.LandlordRepository;
import com.shortstack.griddle.repository.TenantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;


@Component
public class UserInfoUserDetailsService implements UserDetailsService {

    @Autowired
    private TenantRepository tenantRepository;

    @Autowired
    private LandlordRepository landlordRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Tenant tenant = tenantRepository.findByUsername(username);
        if (tenant != null) {
            return new UserInfoUserDetails(tenant);
        }

        Landlord landlord = landlordRepository.findByUsername(username);
        if (landlord != null) {
            return new UserInfoUserDetails(landlord);
        }

        throw new UsernameNotFoundException("User not found with username: " + username);
    }
}
