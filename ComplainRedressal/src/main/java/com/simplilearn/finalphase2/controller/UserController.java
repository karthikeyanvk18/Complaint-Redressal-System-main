package com.simplilearn.finalphase2.controller;

import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.simplilearn.finalphase2.dao.UserDao;
import com.simplilearn.finalphase2.entity.User;
import com.simplilearn.finalphase2.service.UserService;

@RestController
public class UserController {
	@Autowired
	private UserService userservice;
	
	@Autowired
	private UserDao userDao;
	
	@PostConstruct//will run each the program starts
	public void initRolesAndUsers() {
		userservice.initRolesAndUser();
	}
	
	@PostMapping({"/registerNewCustomer"})
	public User RegisterNewUser(@RequestBody User customer) {
		return userservice.RegisterNewUser(customer); 
	}
	
	//for admin to register new engineer
	@PreAuthorize("hasRole('Admin')")
	@PostMapping({"/registerNewEngineer"})
	public User RegisterNewEngineer(@RequestBody User engg) {
		return userservice.RegisterNewEngineer(engg); 
	}
	
	//for admin to register new manager
	@PreAuthorize("hasRole('Admin')")
	@PostMapping({"/registerNewManager"})
	public User RegisterNewManager(@RequestBody User manager) {
		return userservice.RegisterNewManager(manager); 
	}
	
	@GetMapping({"/forAdmin"})
	@PreAuthorize("hasRole('Admin')") //this will give access only to users having role of Admin
	public String forAdmin() {
		return "This URL is only accessible to admin";
	}
	
	@GetMapping({"/forManager"})
	@PreAuthorize("hasRole('Manager')")
	public String forManager() {
		return "This URL is only accessible to Manager";
	}
	
	@GetMapping({"/forCustomer"})
	@PreAuthorize("hasRole('Customer')")
	public String forCustomer() {
		return "This URL is only accessible to Customer";
	}
	
	@GetMapping({"/forEngineer"})
	@PreAuthorize("hasRole('Engineer')")
	public String forEngineer() {
		return "This URL is only accessible to Engineer";
	}
	
	@PreAuthorize("hasRole('Admin')")
	@GetMapping("/allUser")
	public List<User> getAllUsers() {
		return (List<User>) userDao.findAll();
	}
	
	@PreAuthorize("hasRole('Admin')")
	@DeleteMapping("/deleteUser/{userName}")
	public void deleteUser(@PathVariable String userName) {
		userservice.deleteUser(userName);
	}
	
	

}
