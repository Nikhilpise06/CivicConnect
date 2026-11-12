
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  private apiUrl = 'http://localhost:8081/api/complaints';

  constructor(private http: HttpClient) {}

  // Get all complaints (Admin)
  getAllComplaints(): Observable<any[]> {

    return this.http.get<any[]>(this.apiUrl);

  }

  // Get complaints by user ID
  getUserComplaints(userId: number): Observable<any[]> {

    return this.http.get<any[]>(
      `${this.apiUrl}/user/${userId}`
    );

  }

  // Submit complaint
  addComplaint(complaint: any): Observable<any> {

    return this.http.post<any>(
      this.apiUrl,
      complaint
    );

  }

  // Update complaint status (Admin)
  updateStatus(id: number, status: string): Observable<any> {

    return this.http.put(
      `${this.apiUrl}/${id}/status`,
      { status: status }
    );

  }

}
