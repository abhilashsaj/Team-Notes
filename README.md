# Presence Service

You can find the project at https://note-app-b3546.web.app/

## Requirements

This application can be built on any framework which you are comfortable with and feel is best
suited for this.

  1. You would need to create both backend & frontend for this application.
  2. Create a basic user registration and authentication system.
  3. Create a page that contains the UI element/component (similar to the one shown
  towards the left in the image above) to show the people who are currently viewing the
  page. This page should only be accessed by registered users.
  4. UI element/component should have the following features
      1. We should be able to see their registered name, avatar, etc on hovering over the
      avatar.
      2. We should also be able to see who all have visited the page in the past and the
      last timestamp they visited the page
      5. Show error page when an unauthenticated user is trying to access the page

## Design and architecture

### Workflow

Register user with registration page, two modes editor/reader. Will automatically login after creation.

Editor can see other active users, view and Add notes

Reader can only view other users/notes

Non registered users cannot do anything.

When a user logs in/registers or makes any changes, notification will be displayed on the notification tab with time

###  Architecture

Frontend Frameworks: React, Redux, Material-ui

Backend: Google firestore, Authentication, Hosting, Cloud Functions(Node.js)

Database collections:  

    Users - firstname, lastname, initials, role, status
    
    Notifications - uid/email, content, time, user
    
    Notes - id, author first name, author last name, created at
    
    

## Features

Authentication: Email and password using google authentication

Presence System: Presence of users is done by updating the status to active and inactive on login/logout.

Notifications: Logging in, adding new note, new user

Error Handling: Any error on registeration/login is handled by outputing to the user the error on the same page as a message.

Basic notes managment system

Route guarding is done.

Mobile responsive.


## Usage Guide

This project was bootstrapped with [Create React App]

  Clone repo `git clone ...` 
  
  npm install
  
  npm start

  
