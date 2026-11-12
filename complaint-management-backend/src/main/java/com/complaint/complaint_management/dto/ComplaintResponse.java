package com.complaint.complaint_management.dto;

import com.complaint.complaint_management.entity.Complaint;

import java.time.LocalDateTime;

public record ComplaintResponse(

        Long id,
        String title,
        String description,
        String category,
        String location,
        String status,
        LocalDateTime createdAt,
        Long userId,
        String userName,
        String userEmail

) {

    public static ComplaintResponse from(Complaint c) {

        return new ComplaintResponse(
                c.getId(),
                c.getTitle(),
                c.getDescription(),
                c.getCategory(),
                c.getLocation(),
                c.getStatus(),
                c.getCreatedAt(),
                c.getUser().getId(),
                c.getUser().getName(),
                c.getUser().getEmail()
        );
    }
}