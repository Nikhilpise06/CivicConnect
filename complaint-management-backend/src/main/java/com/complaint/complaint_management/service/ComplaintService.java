package com.complaint.complaint_management.service;

import com.complaint.complaint_management.dto.*;
import com.complaint.complaint_management.entity.*;
import com.complaint.complaint_management.repository.*;

import org.springframework.stereotype.Service;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class ComplaintService {

    private final ComplaintRepository complaintRepository;

    private final UserRepository userRepository;

    public ComplaintService(
            ComplaintRepository complaintRepository,
            UserRepository userRepository
    ) {
        this.complaintRepository = complaintRepository;
        this.userRepository = userRepository;
    }

    public ComplaintResponse create(ComplaintRequest request) {

        User user = userRepository.findById(request.getUserId())
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND, "User not found"
                ));

        Complaint complaint = new Complaint();

        complaint.setTitle(request.getTitle());

        complaint.setDescription(request.getDescription());

        complaint.setCategory(request.getCategory());

        complaint.setLocation(request.getLocation());

        complaint.setStatus("PENDING");

        complaint.setUser(user);

        return ComplaintResponse.from(
                complaintRepository.save(complaint)
        );
    }

    public List<ComplaintResponse> getUserComplaints(Long userId) {

        return complaintRepository
                .findByUserIdOrderByCreatedAtDesc(userId)
                .stream()
                .map(ComplaintResponse::from)
                .toList();
    }

    public List<ComplaintResponse> getAllComplaints() {

        return complaintRepository
                .findAllByOrderByCreatedAtDesc()
                .stream()
                .map(ComplaintResponse::from)
                .toList();
    }

    public ComplaintResponse updateStatus(Long id, String status) {

        if (!List.of(
                "PENDING", "IN_PROGRESS", "RESOLVED"
        ).contains(status)) {

            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST, "Invalid status"
            );
        }

        Complaint complaint = complaintRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND, "Complaint not found"
                ));

        complaint.setStatus(status);

        return ComplaintResponse.from(
                complaintRepository.save(complaint)
        );
    }
}