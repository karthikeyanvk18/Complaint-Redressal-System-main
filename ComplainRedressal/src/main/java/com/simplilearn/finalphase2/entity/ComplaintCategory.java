package com.simplilearn.finalphase2.entity;




import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.OneToOne;

@Entity
public class ComplaintCategory {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int categoryId;
	private String BroadBand;
	private String PrePaid;
	private String PostPaid;
	private String PlansDetails;
	@OneToOne
	private Complaint complaint;
	public String getBroadBand() {
		return BroadBand;
	}
	public void setBroadBand(String broadBand) {
		BroadBand = broadBand;
	}
	public String getPrePaid() {
		return PrePaid;
	}
	public void setPrePaid(String prePaid) {
		PrePaid = prePaid;
	}
	public String getPostPaid() {
		return PostPaid;
	}
	public void setPostPaid(String postPaid) {
		PostPaid = postPaid;
	}
	public String getPlansDetails() {
		return PlansDetails;
	}
	public void setPlansDetails(String plansDetails) {
		PlansDetails = plansDetails;
	}
	public Complaint getComplaint() {
		return complaint;
	}
	public void setComplaint(Complaint complaint) {
		this.complaint = complaint;
	}
	public ComplaintCategory(String broadBand, String prePaid, String postPaid, String plansDetails,
			Complaint complaint) {
		super();
		BroadBand = broadBand;
		PrePaid = prePaid;
		PostPaid = postPaid;
		PlansDetails = plansDetails;
		this.complaint = complaint;
	}
	public int getCategoryId() {
		return categoryId;
	}
	public void setCategoryId(int categoryId) {
		this.categoryId = categoryId;
	}
	
	
	

}
