package com.simplilearn.finalphase2.dao;

import org.springframework.data.repository.CrudRepository;


import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;
import com.simplilearn.finalphase2.entity.Complaint;
import com.simplilearn.finalphase2.entity.User;

@Repository
public interface ComplaintDao extends CrudRepository<Complaint, Integer>{

	public List<Complaint> findAll(Pageable pageable);
	
	public List<Complaint> findByCustomer(User user);
	
}
