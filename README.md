# CivicConnect – Smart Complaint & Issue Resolution System

## Project Overview

CivicConnect is a full-stack web application designed to simplify the process of submitting, managing, and resolving complaints.

The application provides two types of users: **User** and **Admin**. Users can register, log in, submit complaints, and track their complaint status. Admins can view all submitted complaints and update their status based on the progress of resolution.

The main goal of CivicConnect is to provide a simple and organized platform for complaint management and transparent issue resolution.

## Technologies Used

### Frontend
- Angular
- HTML
- CSS
- TypeScript

### Backend
- Java
- Spring Boot
- Spring Data JPA
- REST APIs
- JWT Authentication
- Spring Security

### Database
- PostgreSQL

### Development Tools
- Visual Studio Code
- IntelliJ IDEA
- Postman
- Git and GitHub

## Key Features

### User Module
- User Registration
- Secure Login using JWT Authentication
- Submit new complaints
- View submitted complaints
- Track complaint status

### Admin Module
- Admin Login
- View all user complaints
- Update complaint status
- Manage complaint resolution process

### Complaint Status

Complaints can have the following statuses:
- Pending
- In Progress
- Resolved

## Application Workflow

1. Users register and log in to the application.
2. Users submit complaints by providing the title, description, category, and location.
3. Complaint details are stored in the PostgreSQL database.
4. Users can view their submitted complaints and check their status.
5. Admin logs in and views all submitted complaints.
6. Admin updates complaint statuses as the issues progress towards resolution.
7. Users can view the updated status in their dashboard.

## Database Design

The application uses two main tables:

**1. Users**
- id
- name
- email
- password
- role

**2. Complaints**
- id
- title
- description
- category
- location
- status
- user_id

The `user_id` column establishes a relationship between users and their complaints.

## Project Structure

### Angular Frontend
- components – Application UI components
- pages – Home, Register, Login, User Dashboard, Admin Dashboard
- services – API communication and authentication services
- app.routes.ts – Application routing

### Spring Boot Backend
- controller – REST API endpoints
- service – Business logic
- repository – Database operations
- entity – Database entities
- config – Application configuration and security

## Project Objective

To develop a simple, user-friendly complaint management platform that improves communication between users and administrators while making complaint tracking and resolution more organized.

---

**Project Name:** CivicConnect – Smart Complaint & Issue Resolution System

**Project Type:** Full Stack Web Application

**Developed Using:** Angular, Java Spring Boot, PostgreSQL
