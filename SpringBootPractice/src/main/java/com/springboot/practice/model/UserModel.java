package com.springboot.practice.model;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;


@Entity

public class UserModel {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String firs_Name;
	private String last_Name;
	private String email;
	private String city;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getFirs_Name() {
		return firs_Name;
	}
	public void setFirs_Name(String firs_Name) {
		this.firs_Name = firs_Name;
	}
	public String getLast_Name() {
		return last_Name;
	}
	public void setLast_Name(String last_Name) {
		this.last_Name = last_Name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public UserModel(int id, String firs_Name, String last_Name, String email, String city) {
		super();
		this.id = id;
		this.firs_Name = firs_Name;
		this.last_Name = last_Name;
		this.email = email;
		this.city = city;
	}
	public UserModel() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "UserModel [id=" + id + ", firs_Name=" + firs_Name + ", last_Name=" + last_Name + ", email=" + email
				+ ", city=" + city + "]";
	}
	
}
