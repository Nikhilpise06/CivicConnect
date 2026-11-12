package com.complaint.complaint_management.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class ComplaintRequest {

    @NotBlank
    private String title;

    @NotBlank
    private String description;

    private String category;

    private String location;

    @NotNull
    private Long userId;

    public String getTitle() { return title; }

    public void setTitle(String title) { this.title = title; }

    public String getDescription() { return description; }

    public void setDescription(String description) { this.description = description; }

    public String getCategory() { return category; }

    public void setCategory(String category) { this.category = category; }

    public String getLocation() { return location; }

    public void setLocation(String location) { this.location = location; }

    public Long getUserId() { return userId; }

    public void setUserId(Long userId) { this.userId = userId; }
}