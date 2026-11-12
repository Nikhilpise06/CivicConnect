
import { ChangeDetectorRef, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ComplaintService } from '../../services/complaint';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-dashboard.html'
})
export class UserDashboard implements OnInit {

  message = '';
  complaints: any[] = [];
  user: any;

  complaint = {
    title: '',
    description: '',
    category: '',
    location: '',
    userId: 0
  };

  constructor(
    private complaintService: ComplaintService,
    private cdr: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {

    if (isPlatformBrowser(this.platformId)) {

      const storedUser = localStorage.getItem('currentUser');

      if (!storedUser) {
        this.message = 'Please login first';
        return;
      }

      try {
        this.user = JSON.parse(storedUser);

        if (!this.user || !this.user.id) {
          this.message = 'Invalid user information. Please login again.';
          return;
        }

        this.complaint.userId = this.user.id;
        this.loadComplaints();

      } catch (error) {
        this.message = 'Invalid user information. Please login again.';
        console.error(error);
      }
    }
  }

  // Submit complaint
  submitComplaint() {

    this.complaintService.addComplaint(this.complaint).subscribe({next: () => {

        this.message = 'Complaint Submitted Successfully';

        this.complaint = {
          title: '',
          description: '',
          category: '',
          location: '',
          userId: this.user.id
        };

        this.loadComplaints();
      },

      error: (error) => {
        console.error(error);
        this.message = 'Unable to Submit Complaint';
      }

    });
  }

  // Load logged-in user's complaints
  loadComplaints() {

    this.complaintService.getUserComplaints(this.user.id).subscribe({next: (data) => {
          this.complaints = data;
          console.log('User Complaints:', data);
          this.cdr.detectChanges();
        },

        error: (error) => {
          console.error(error);
          this.message = 'Unable to load complaints';
        }

      });
  }

}
