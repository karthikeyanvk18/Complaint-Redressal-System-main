package com.simplilearn.finalphase2.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.simplilearn.finalphase2.dao.RoleDao;
import com.simplilearn.finalphase2.entity.Role;

@Service
public class RoleService {
	@Autowired //(required=true)
	private RoleDao roledao;
	
	public Role createNewRole(Role role) {
		return roledao.save(role);//will save this role and return the information saved.
		
	}

}
