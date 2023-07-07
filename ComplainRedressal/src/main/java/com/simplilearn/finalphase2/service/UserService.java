package com.simplilearn.finalphase2.service;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.simplilearn.finalphase2.dao.RoleDao;
import com.simplilearn.finalphase2.dao.UserDao;
import com.simplilearn.finalphase2.entity.Role;
import com.simplilearn.finalphase2.entity.User;

@Service
public class UserService {
	@Autowired //(required=true)
	private UserDao userdao;
	
	@Autowired //(required=true)
	private RoleDao roledao;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	
	public void deleteUser(String userName) {
		userdao.deleteById(userName);
	}

	public User RegisterNewUser(User user) {
		Role role = roledao.findById("Customer").get();
		
		Set<Role> roles = new HashSet<>();
		roles.add(role);
		user.setRole(roles);
		
		user.setUserpassword(getEncodedPassword(user.getUserpassword()));
		
		return userdao.save(user);
	}
	
	public User RegisterNewEngineer(User engg) {
		Role role = roledao.findById("Engineer").get();
		
		Set<Role> roles = new HashSet<>();
		roles.add(role);
		engg.setRole(roles);
		
		engg.setUserpassword(getEncodedPassword(engg.getUserpassword()));
		
		return userdao.save(engg);
	}
	
	public User RegisterNewManager(User manager) {
		Role role = roledao.findById("Manager").get();
		
		Set<Role> roles = new HashSet<>();
		roles.add(role);
		manager.setRole(roles);
		
		manager.setUserpassword(getEncodedPassword(manager.getUserpassword()));
		
		return userdao.save(manager);
	}
	
	public void initRolesAndUser() {
		Role adminRole = new Role();
		adminRole.setRoleName("Admin");
		adminRole.setRoleDescription("Administrative role for the website");
		roledao.save(adminRole);
		
		Role customerRole = new Role();
		customerRole.setRoleName("Customer");
		customerRole.setRoleDescription("Default role for customers");
		roledao.save(customerRole);
		
		Role managerRole = new Role();
		managerRole.setRoleName("Manager");
		managerRole.setRoleDescription("Assigning complaints to suitable engineer to resolve it");
		roledao.save(managerRole);
		
		Role engineerRole = new Role();
		engineerRole.setRoleName("Engineer");
		engineerRole.setRoleDescription("Resolve the complaints and update the status");
		roledao.save(engineerRole);
		
		User adminUser = new User();
		adminUser.setFullName("admin");
		adminUser.setUserName("admin123");
		adminUser.setUserpassword(getEncodedPassword("pwd@123"));
		Set<Role> adminRoles = new HashSet<>();
		adminRoles.add(adminRole);
		adminUser.setRole(adminRoles);
		userdao.save(adminUser);
		
		User managerUser = new User();
		managerUser.setFullName("ABC Manager1");
		managerUser.setUserName("manager1");
		managerUser.setUserpassword(getEncodedPassword("manager1@pwd"));;
		Set<Role> managerRoles = new HashSet<>();
		managerRoles.add(managerRole);
		managerUser.setRole(managerRoles);
		userdao.save(managerUser);
	}
	
	public String getEncodedPassword(String password) {
		return passwordEncoder.encode(password);
	}
}

/*
 * adminUser.setUserpassword("pwd@123");
 * This has to store encrypted password*/
