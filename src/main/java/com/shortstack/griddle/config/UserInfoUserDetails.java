package com.shortstack.griddle.config;

import com.shortstack.griddle.model.Landlord;
import com.shortstack.griddle.model.Tenant;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.List;

@Component
public class UserInfoUserDetails implements UserDetails {

    private String name;
    private String password;
    private List<GrantedAuthority> authorities;

    public UserInfoUserDetails() {
    }

    public UserInfoUserDetails(Tenant tenant) {
        this.name = tenant.getUsername();
        this.password = tenant.getPassword();
    }

    public UserInfoUserDetails(Landlord landlord) {
        this.name = landlord.getUsername();
        this.password = landlord.getPassword();
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return name;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}