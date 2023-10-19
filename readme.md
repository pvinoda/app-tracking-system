<!-- https://user-images.githubusercontent.com/89501363/144725439-5d9191f8-df13-4814-aa15-99cd752ab0cc.mp4 -->

<!-- Insert Functionality video here -->



[![GitHub license](https://img.shields.io/github/license/kingan1/application-tracking-system)](https://github.com/kingan1/application-tracking-system/blob/main/LICENSE)
[![DOI](https://zenodo.org/badge/426259091.svg)](https://zenodo.org/badge/latestdoi/426259091)
[![codecov](https://codecov.io/gh/kingan1/application-tracking-system/branch/main/graph/badge.svg)](https://codecov.io/gh/kingan1/application-tracking-system)
![GitHub issues](https://img.shields.io/github/issues/kingan1/application-tracking-system)
![GitHub issues](https://img.shields.io/github/issues-closed/kingan1/application-tracking-system)
![GitHub top language](https://img.shields.io/github/languages/top/kingan1/application-tracking-system)

[![Build and Deploy Frontend](https://github.com/SETeam59/application-tracking-system/actions/workflows/frontend_CI_CD.yml/badge.svg)](https://github.com/SETeam59/application-tracking-system/actions/workflows/frontend_CI_CD.yml)
[![Super Linter](https://github.com/SETeam59/application-tracking-system/actions/workflows/super-linter.yml/badge.svg)](https://github.com/SETeam59/application-tracking-system/actions/workflows/super-linter.yml)

#      CareerPulse-Tracker - Your Job Tracking Assistant

<!-- https://user-images.githubusercontent.com/43064854/135554150-c06afd4e-d223-47e3-b123-b45f9cd1b87a.mp4 -->

<!-- Insert ad video here -->

CareerPulse Tracker

Are you tired of managing your job applications and projects using cumbersome Excel spreadsheets? Our job and project tracker application is here to simplify the process and make it stress-free.

Features
Job Application Tracking
Wish List Management: Keep track of the jobs you're interested in, making it easy to stay organized and updated on potential opportunities.

Application History: Track the companies you've already applied to and maintain a record of any rejections. This helps you keep a clear overview of your job application journey.

Wishlist Additions: Quickly add any prospective work offers to your applicant's wishlist, ensuring nothing slips through the cracks.

Project Management Integration
Our application isn't just limited to job applications; it can be expanded into a versatile project management tool with the following features:

Dynamic Board and Column Creation
Create Multiple Boards: Designate different boards for distinct projects, jobs, or categories. This keeps your projects neatly organized and separate.

Customize Columns: Tailor each board by creating and managing columns that represent various stages, tasks, or categories related to the project. This level of customization allows you to adapt the application to your unique needs.

Column Customization
Flexible Columns: Define the title and description for each column. Customize columns to match your workflow stages, project components, or job application requirements.
Update Tracking
Progress Updates: Inside each column, add updates to track the details and progress of individual tasks, job applications, or project components.

Detailed Updates: Each update can include a title, description, and important events relevant to the specific task or job application.

Stage Tracking
Workflow Stages: Assign stages to updates to indicate where they are in the workflow. Whether it's "To Do," "In Progress," "Completed," or customized stages, you have the flexibility to categorize tasks and applications effectively.
Drag and Drop Functionality
Efficient Workflow: Utilize drag and drop functionality to move updates from one column to another. This feature enhances the user experience and makes task and job progression tracking a breeze.
Data Persistence
Secure Data Storage: Ensure that your board configurations, columns, updates, and user data are safely stored in a database for long-term accessibility. Your information is always just a click away.
Get Organized, Stay on Track
Our application provides a highly customizable job tracker and project management system that empowers you to design boards, columns, and updates to meet your specific needs. The drag-and-drop feature and dynamic column creation make task and job tracking more efficient and user-friendly. Say goodbye to Excel spreadsheets and hello to a stress-free job application and project management experience.


## Table of contents

- [Basic Design](#basic-design)
- [Demo](#demo)
- [Improvements](#improvements)
    + [Whats New](#whats-new)
- [Roadmap](#roadmap)
- [Future Scope](#future-scope)
- [Explanation](#explanation)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
    + [Requirements](#requirements)
    + [Strongly Recommended](#strongly-recommended)
- [Getting Started](#getting-started)
    + [Boot](#boot)
    + [Shutdown](#shutdown)
- [Hosting the Database](#hosting-the-database)
    + [Local MongoDB](#local-mongodb)
    + [Hosted database with MongoDB Atlas](#hosted-database-with-mongodb-atlas)
- [License](#license)
- [How to Contribute](#how-to-contribute)
- [Team Members](#team-members)



## Basic Design:
![Basic Design](https://github.com/prithvish-doshi-17/application-tracking-system/blob/main/resources/Overall%20Design.PNG)

<!-- have to add our design diagram here -->

## Samples:

### Login Page / Signup Page

The introductory visual interface displayed from which a user is able to register and log into the application.

<p align="center"><img width="700" src="./resources/login.png"></p>

<!-- replace login.png with the updated one -->


### HomeScreen

The introductory visual interface displayed from which a user is able to access different cards - Waitlisted applications, Waiting for Refereals, Applied Jobs, Application Status.The user can also add cards through this screen.

<p align="center"><img width="700" src="./resources/home_screen.png"></p>

<!-- replace home_screen.png with the updated one -->


### Add Multiple Boards

<p align="center"><img width="700" src="./resources/search.png"></p>
<p align="center"><img width="700" src="./resources/newjobdetails1.PNG"></p>

<!-- have to replace these images -->






### Whats New

#### Version 1.1

- Add headless feature for selenium
- Fix shutdown.sh
- Login frontend
- Add resume storage for users
- Updated reloading issues
- Fix linting issues

#### Version 1.0.3

- Updated badges for repository
- Users database implementation
- Add logout endpoint and update middleware
- Login frontend for login and signup functionality



## Roadmap:
![Roadmap](https://github.com/prithvish-doshi-17/application-tracking-system/blob/main/resources/Roadmap%20-%202.PNG)

<!-- have to update the image here -->


## Future Scope: 
* Include deadline reminders for the application and interview.
* Add a feature that allows users to attach these reminders to their Google calendar.
* Incorporate notifications for upcoming deadlines. 
* Add a storage option for resumes and cover letters so they can be saved for future use.
* Include a direct link to the company's application site when the wishlist item is clicked.
* Include a link to the university’s career fair page. 
* Direct connection to Linkedin, allowing for the addition of job opportunities to the wishlist.


## Explanation:

Currently, we have five fundamental features in our project:


1. Job Application Tracking: Keep an organized record of job applications, including a wish list, application history, and the ability to add prospective offers.

2. Project Management Integration: Extend the application's functionality beyond job applications to create dynamic boards and columns for project management.

3. Customization: Customize columns, titles, descriptions, and workflow stages to match your unique needs.

4. Efficient Updates: Easily track progress with detailed updates, stage assignments, and a drag-and-drop feature for seamless task management.

5. Data Security: Ensure your information is stored securely with data persistence in a database, accessible for the long term.


Any details in any table can be modified at any time during the process.

## Technologies Used:

* Python
* Node.Js
* Flask
* MongoDB
* React

## Installation:
### Requirements:
* [Python](https://www.python.org/downloads/) (recommended >= 3.8)
* [pip](https://pip.pypa.io/en/stable/installation/) (Latest version 21.3 used as of 11/3)
* [npm](https://nodejs.org/en/) (Latest version 6.14.4 used as of 11/3)
### Strongly Recommended:
* A terminal environment capable of handling bash scripts.

To install all required packages, while within the context of project root directory, run:
```
./setup.sh
```
This will handle all npm and pip package installations required for both the front and backend.

*If the script says "command not found" or something similar, run chmod +x ./setup.sh. This grants the script execution privileges. Depending on your setup, this may occur for the boot_dockerless files, amongst others. The same command will fix the issue.*

## Getting Started:
### Boot:
To run a testing environment, run:
```
./startup.sh
```
This will run flask and npm simultaneously, booting both the front and backend. Note - npm takes substantially longer to boot compared to flask.
### Shutdown:
To ensure that flask is no longer occupying a port, run:
```
./shutdown.sh
```
This will search for any active process containing "flask" and kill the process.

## Hosting the Database:
### Local MongoDB:
1. Download [MongoDB Community Server](https://docs.mongodb.com/manual/administration/install-community/)
2. Follow the [Installion Guide](https://docs.mongodb.com/guides/server/install/)
3. In  ```app.py```  set  ```'host'```  string to  ```'localhost'```
4. Run the local database: 
``` 
mongod 
```
* Recommended: Use a GUI such as [Studio 3T](https://studio3t.com/download/) to more easily interact with the database


### Hosted database with MongoDB Atlas:
1. [Create account](https://account.mongodb.com/account/register) for MongoDB
 
** ___If current MongoDB Atlas owner adds your username/password to the cluster, skip to step 4___ **

2. Follow MongoDB Atlas [Setup Guide](https://docs.atlas.mongodb.com/getting-started/) to create a database collection for hosting applications
3. In  ```app.py```  set  ```'host'```  string to your MongoDB Atlas connection string
4. Create an  ```application.yml```  file in the /backend directory with the specifications:
```
username: <MongoDB Atlas cluster username>
password: <MongoDB Atlas cluster password>
```
5. For testing through CI to function as expected, repository secrets will need to be added through the settings. Create individual secrets with the following keys/values:
```
MONGO_USER: <MongoDB Atlas cluster username>
MONGO_PASS: <MongoDB Atlas cluster password>
```
## License
The project is licensed under the [MIT](https://choosealicense.com/licenses/mit/) license. 


## How to Contribute?
Please see our CONTRIBUTING.md for instructions on how to contribute to the repository and assist us in improving the project.


## Team Members
- Sharan Jamanani
- Nayan Bhushan K N
- Saketh Ruddarraju
- Hruthwik Krishnamurthy
