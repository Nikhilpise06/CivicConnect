package com.complaint.complaint_management.controller;

import com.complaint.complaint_management.dto.*;
import com.complaint.complaint_management.service.ComplaintService;

import jakarta.validation.Valid;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;

import java.util.List;

@RestController
@RequestMapping("/api/complaints")
public class ComplaintController {

    private final ComplaintService complaintService;

    public ComplaintController(ComplaintService complaintService) {

        this.complaintService = complaintService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ComplaintResponse create(
            @Valid @RequestBody ComplaintRequest request
    ) {

        return complaintService.create(request);
    }

    @GetMapping("/user/{userId}")
    public List<ComplaintResponse> getUserComplaints(
            @PathVariable Long userId
    ) {

        return complaintService.getUserComplaints(userId);
    }

    @GetMapping
    public List<ComplaintResponse> getAllComplaints() {

        return complaintService.getAllComplaints();
    }

    @PutMapping("/{id}/status")
    public ComplaintResponse updateStatus(
            @PathVariable Long id,
            @Valid @RequestBody StatusRequest request
    ) {

        return complaintService.updateStatus(
                id, request.getStatus()
        );
    }
}