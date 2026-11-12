
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComplaintService } from '../../services/complaint';


@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-dashboard.html'
})
export class AdminDashboard implements OnInit {

  complaints: any[] = [];
  message = '';

  constructor(
    private complaintService: ComplaintService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.loadComplaints();
  }

  // Load all complaints
  loadComplaints() {

    this.complaintService.getAllComplaints().subscribe({

      next: (data) => {
        this.complaints = data;
        console.log('Admin Complaints:', data);

        this.cdr.detectChanges();
      },

      error: (error) => {
        console.error('Error:', error);
      }

    });

  }

  // Update complaint status
  updateStatus(id: number, status: string) {

    this.complaintService.updateStatus(id, status).subscribe({

      next: () => {
        this.message = 'Status Updated Successfully';
        this.loadComplaints();
      },

      error: () => {
        this.message = 'Status Update Failed';
      }

    });

  }

}
