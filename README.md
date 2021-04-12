# Jurassic World Dashboard [![Netlify Status](https://api.netlify.com/api/v1/badges/e09f24a1-a7ac-4baa-a693-5bbd56286b01/deploy-status)](https://app.netlify.com/sites/jurassic-world-dashboard/deploys)
## Netlify Link
[jurassic-world-dashboard.netlify.app](https://jurassic-world-dashboard.netlify.app)
## Overview 
This is a dashboard to maintain the greatest biological experiment which doubles as the greatest theme park, Jurassic World. Logged in users are able to create, update and delete park staff, vendors, equipment, rides and dinosaurs. The park monkey, Ebenezer, creates chaos around the park when released. 
## Description of User 
This app is a great source of entertainment for children or Jurassic World fans!
## Features 
- Dinosaur view
- Staff view
- Equipment view 
- Vendor view 
- Ride view 

- User authentication 
- Ability to create, update or delete data from each view (only for logged in users).
- Modal form to create and update data.
- A button to let the monkey loose. 
- When the monkey is loose, a toast pops up with a randomized message. 
- When the same button is clicked, the monkey goes back to its cage and the toast disappears. 
- Home page with clickable cards which will redirect user to desired view. 
- Navigation bar with buttons to each view and a logo which will redirect user to home page.

## Loom 
https://www.loom.com/share/5e4bfea74ddd43b59b4eaf2c4a91d7b3

## Helpful Links
- Figma: https://www.figma.com/file/031olQyE3BwuD0WJtrGIIS/Jurassic-World-Visitor
- Project Board: https://github.com/nss-evening-cohort-14/jurrasic-world-dashboard-jurrasic-world-dashboard/projects/1
- User flow chart: ![flow-chart](https://user-images.githubusercontent.com/76187279/112084938-a2856980-8b57-11eb-9b64-b77e00d96c76.png)
- ERD: https://dbdiagram.io/d/604e67b4fcdcb6230b241915
## Screenshots
![landingpage](https://user-images.githubusercontent.com/23327097/112085211-1a539400-8b58-11eb-84cd-20bbfd41e8b1.png)
![toast](https://user-images.githubusercontent.com/23327097/112085225-1f184800-8b58-11eb-9531-308af9b500da.png)
![staff](https://user-images.githubusercontent.com/23327097/112085247-29d2dd00-8b58-11eb-8d3b-de550e5e9e4c.png)

## Contributors 
- John Maple: https://github.com/Greenfin17
- Lindsey Satterfield: https://github.com/lindseysatterfield
- Tad Sekeres: https://github.com/tsekeres
- Gabrielle Tobermann: https://github.com/Gabrielle-Tobermann

## Week 1

### Description

You are tasked with creating a dashboard to maintain the greatest biological experiment that doubles as the greatest theme park, Jurassic World!  You will need to keep track of the dinosaurs, the staff, the rides, the vendors, and the equipment needed to run a successful biological experiment... I mean, theme park.  To provide a more immersive and suspenseful experience, the creators of the park have introduced the Chaos Monkey that you are tasked with keeping track of.  The Chaos Monkey gets loose at the same time every day and usually wreaks havoc around the park.  

### Requirements

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

## Week 2

### Description
After the first group of developers mysteriously disappeared in a freak accident (conveniently right before the checks cleared), you'll need to pick up where they left off.  The higher-ups really like the dashboard the last team built, but also want to keep track of the staff, and want to know the schedule of each staff.  They should be able to assign a staff member to a dinosaur, or a vendor, as well as the ability to assign equipment to a staff member.  The Chaos Monkey doesn't really appreciate all the micro-management, and has developed more heinous ways to cause trouble.  The higher-ups are starting to understand the impact that introducing a Chaos Monkey has on the park, and has tasked you with creating a system that will alert the park manager when and where the Chaos Monkey strikes.  

## Links
- ERD: https://dbdiagram.io/d/606d107eecb54e10c33f0295
- Deployed App: https://development--e14-jurassicworld2.netlify.app/

### Requirements

- Chaos Monkey Requirements: 
  - When Chaos Monkey kidnaps staff member, remove them from the roster and any assigned roles/equipment/dinos
  - When Chaos Monkey breaks a ride, the ride should no longer be operational
  - Chaos Monkey can break a random piece of equipment

* Scheduling Requirement:
  * List view of unassigned staff members
  * List view of unstaffed rides, vendors, dinosaurs
  * Each dinosaur needs 2 staff members to prevent from getting loose
  * Each ride needs to be staffed to be operational
  * Each vendor needs to be staffed to be operational
  * Calendar view
* Alerts Requirement
  - Breakout alarm - if a dinosaur doesn't have enough keepers, alert the user
  - Keep a log of all the Chaos Monkey incidents
  - Test Equipment, I should have a button that tests all of my equipment and alerts the user of each equipment that's broken.

### User Stories

#### Chaos Monkey

- As a user, when the Chaos Monkey kidnaps an employee, they should be automatically unassigned from their station and removed from the staff list.  They're not coming back.
- As a user, when the Chaos Monkey breaks a ride, the ride should no longer be operational
- As a user, when the Chaos Monkey breaks a piece of equipment, any assigned staff can no longer use it and are unassigned.

#### Scheduling 

- As a user, I should be able to assign a staff member to either a dinosaur, a ride, or a vendor
- As a user, I should be able to assign a piece of equipment to a staff member
- As a user, I should be able to see all unassigned staff members to keep slacking to a minimum
- As a user, I should be able to see all unattended rides, vendors, dinosaurs, and equipment
- As a user, I should be able to view the schedule in a calendar view

#### Alerts

- As a user, I should be alerted whenever there is a dinosaur that has less than 2 handlers
- As a user, I should be alerted when the Chaos Monkey strikes, including info on what it did, and to whom.
- As a user, I should be able to test all the equipment.  When I click the button, I should be alerted to each broken piece of equipment
