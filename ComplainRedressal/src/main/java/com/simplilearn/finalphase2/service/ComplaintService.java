package com.simplilearn.finalphase2.service;


import java.util.List;


import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.simplilearn.finalphase2.configuration.JwtRequestFilter;
import com.simplilearn.finalphase2.dao.ComplaintDao;
import com.simplilearn.finalphase2.dao.UserDao;
import com.simplilearn.finalphase2.entity.Complaint;
import com.simplilearn.finalphase2.entity.User;

@Service
public class ComplaintService {

	@Autowired
	public ComplaintDao complaintDao;
	
	@Autowired
	public UserDao userDao;
	
	private static final String COMPLAINT_RAISED = "Raised";
	
	//mark status as resolved
	public void markAsResolved(Integer complaintId) {
		Complaint complaint = complaintDao.findById(complaintId).get();

		if (complaint != null) {
			complaint.setComplaintStatus("Resolved");
			complaintDao.save(complaint);
		}else {
			complaint.setComplaintStatus("Error");
			complaintDao.save(complaint);
		}
	}
	
	
	//mark status as in progress
	public void markAsWip(Integer complaintId) {
		Complaint complaint = complaintDao.findById(complaintId).get();

		if (complaint != null) {
			complaint.setComplaintStatus("Work in progress");
			complaintDao.save(complaint);
		}else {
			complaint.setComplaintStatus("Error");
			complaintDao.save(complaint);
		}
	}
	
	
	//mark status as in review
	public void markAsInReview(Integer complaintId) {
		Complaint complaint = complaintDao.findById(complaintId).get();

		if (complaint != null) {
			complaint.setComplaintStatus("In Review");
			complaintDao.save(complaint);
		}else {
			complaint.setComplaintStatus("Error");
			complaintDao.save(complaint);
		}
	}
	
	
	
	//adding new complaint feature for customer
	public Complaint addNewComplaint(Complaint c) {
		c.setComplaintStatus(COMPLAINT_RAISED);
		return complaintDao.save(c);
	}
	
	//getting all complaints list 
	public List<Complaint> getAllComplaint(){
		return (List<Complaint>)complaintDao.findAll();
	}
	
	public List<Complaint> getAllComplaintsForEngineer(){
		Complaint c = new Complaint();
		String pin = c.getPincode();
		if(pin.equals("110025")) {
			return (List<Complaint>)complaintDao.findAll();
		}
		else {
			return null;
		}
		
	}
	
	//deleting complaint
	public void deleteComplaint(Integer complaintId) {
		complaintDao.deleteById(complaintId);
		
	}
	
	//getting compaints by Id
	public Complaint getComplaintById(Integer complaintId) {
		return complaintDao.findById(complaintId).get();
	}
	
	public List<Complaint> getMyComplaintDetails() {
		String currentUser = JwtRequestFilter.CURRENT_USER;// will get the current username
		User user = userDao.findById(currentUser).get(); // by this we will get all the userdetails

		return complaintDao.findByCustomer(user);
		// this method described inside orderDetailDao will return list of orders for
		// that particular user
	}
}
