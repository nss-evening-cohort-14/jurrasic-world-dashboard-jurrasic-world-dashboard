# Jurassic World Visitor Dashboard

### Product Owner
Your PO is assigned as an approver and feedback for your application. They are not there to guide you through code. If you have code related needs, submit a completed issue ticket.

PO: **Dr. T**

### Description

You are tasked with creating a dashboard to maintain the greatest biological experiment that doubles as the greatest theme park, Jurassic World!  You will need to keep track of the dinosaurs, the staff, the rides, the vendors, and the equipment needed to run a successful biological experiment... I mean, theme park.  To provide a more immersive and suspenseful experience, the creators of the park have introduced the Chaos Monkey that you are tasked with keeping track of.  The Chaos Monkey gets loose at the same time every day and usually wreaks havoc around the park.  

### Requirements
* Complete Planning
    * Make sure to break down tickets into milestones, include an ERD and a Workflow Diagram of how you will tackle each part of the application
    * NOTE: This includes setting up a development branch that branches off of the main branch to test your team's code and for review by the PO
* Set up deployment EARLY and deploy with every milestone so that the PO can see the web interface
* Add Webpack to the Project
- Authentication for (CUD), Read-only without authentication
* Dinosaurs module
* Staff module
* Rides module
* Vendors module
* Equipment module
* Show a toast on the page when the Chaos Monkey strikes

### User Stories

#### Authentication

- As a user, I should be able to log in to add, edit, or delete from any of the modules.
- As a user, if I'm not authenticated, I can only read the information.
- As a user, I should be able to login using Google
- As a user, I should be able to logout

#### Dinosaurs

- As a user, I should be able to add new dinosaurs
- As a user, I should be able to delete dinosaurs
- As a user, I should be able to edit the dinosaurs
- As a user, I should be able to view all the dinosaurs

#### Staff 

- As a user, I should be able to add new staff
- As a user, I should be able to delete staff
- As a user, I should be able to edit the staff
- As a user, I should be able to view all the staff

#### Rides

- As a user, I should be able to add new rides
- As a user, I should be able to delete rides
- As a user, I should be able to edit the rides
- As a user, I should be able to view all the rides

#### Vendors

- As a user, I should be able to add new vendors
- As a user, I should be able to delete vendors
- As a user, I should be able to edit the vendors
- As a user, I should be able to view all the vendors

#### Equipment

- As a user, I should be able to add new equipment
- As a user, I should be able to delete equipment
- As a user, I should be able to edit the equipment
- As a user, I should be able to view all the equipment

#### Chaos Monkey

- As a user, I should be shown a toast whenever the Chaos Monkey strikes
- As a user, I should allow the Chaos Monkey to do one random act for a set interval
- As a user, the Chaos Monkey should have a chance to break down a random ride
- As a user, the Chaos Monkey should have a chance to kidnap a random staff member
- As a user, the Chaos Monkey should have a chance to break a random piece of equipment 

