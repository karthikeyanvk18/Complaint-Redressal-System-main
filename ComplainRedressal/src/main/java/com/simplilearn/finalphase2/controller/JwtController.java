package com.simplilearn.finalphase2.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.simplilearn.finalphase2.entity.JwtRequest;
import com.simplilearn.finalphase2.entity.JwtResponse;
import com.simplilearn.finalphase2.service.JwtService;

@RestController
@CrossOrigin
public class JwtController {
	@Autowired
	private JwtService jwtservice;
	
	@PostMapping({"/authenticate"})
	public JwtResponse CreateJwtToken(@RequestBody JwtRequest jwtrequest)throws Exception {
		return jwtservice.createJwtToken(jwtrequest);
	}

}
