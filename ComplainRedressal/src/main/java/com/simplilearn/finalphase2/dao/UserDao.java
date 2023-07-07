package com.simplilearn.finalphase2.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.simplilearn.finalphase2.entity.User;
@Repository
public interface UserDao extends CrudRepository<User, String> {

}
