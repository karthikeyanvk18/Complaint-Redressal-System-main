package com.simplilearn.finalphase2.entity;

import java.util.List;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;


@Entity
public class Complaint {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int complaintId;
	private String category;
	private String heading;
	private String details;
	private String address;
	private String pincode;
	private String fullname;
	private String complaintStatus;
	@OneToOne
	private User customer;
	

//	@ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
//	@JoinTable(name = "customer_complaint", joinColumns = { @JoinColumn(name = "complaint_id") },
//	inverseJoinColumns = { @JoinColumn(name = "customer_id") })
//	private Set<User> customer;


	public User getCustomer() {
		return customer;
	}


	public void setCustomer(User customer) {
		this.customer = customer;
	}


	public int getComplaintId() {
		return complaintId;
	}


	public void setComplaintId(int complaintId) {
		this.complaintId = complaintId;
	}


	public String getCategory() {
		return category;
	}


	public void setCategory(String category) {
		this.category = category;
	}


	public String getHeading() {
		return heading;
	}


	public void setHeading(String heading) {
		this.heading = heading;
	}


	public String getDetails() {
		return details;
	}


	public void setDetails(String details) {
		this.details = details;
	}


	public String getAddress() {
		return address;
	}


	public void setAddress(String address) {
		this.address = address;
	}


	public String getPincode() {
		return pincode;
	}


	public void setPincode(String pincode) {
		this.pincode = pincode;
	}


	public String getFullname() {
		return fullname;
	}


	public void setFullname(String fullname) {
		this.fullname = fullname;
	}


	


//	public Set<User> getCustomer() {
//		return customer;
//	}
//
//
//	public void setCustomer(Set<User> customer) {
//		this.customer = customer;
//	}
	
	


	public String getComplaintStatus() {
		return complaintStatus;
	}


	public void setComplaintStatus(String complaintStatus) {
		this.complaintStatus = complaintStatus;
	}


	public Complaint() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Complaint(String category, String heading, String details, String address, String pincode, String fullname,
			String complaintStatus, User customer) {
		super();
		this.category = category;
		this.heading = heading;
		this.details = details;
		this.address = address;
		this.pincode = pincode;
		this.fullname = fullname;
		this.complaintStatus = complaintStatus;
		this.customer = customer;
	}


	


	



	

}
