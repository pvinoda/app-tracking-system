<!-- Video -->
[![Watch the video](https://img.youtube.com/vi/VAieiJGv9_Q/maxresdefault.jpg)](https://youtu.be/VAieiJGv9_Q)

<!-- Insert Functionality video here -->

[![GitHub license](https://img.shields.io/github/license/SETeam59/application-tracking-system)](https://github.com/SETeam59/application-tracking-system/blob/main/LICENSE)
[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.10212010.svg)](https://doi.org/10.5281/zenodo.10212010)
[![codecov](https://codecov.io/gh/SETeam59/application-tracking-system/branch/main/graph/badge.svg)](https://codecov.io/gh/SETeam59/application-tracking-system)
[![PEP8](https://img.shields.io/badge/code%20style-pep8-orange.svg)](https://www.python.org/dev/peps/pep-0008/)
[![Issues](https://img.shields.io/github/issues/SETeam59/application-tracking-system)](https://GitHub.com/SETeam59/application-tracking-system/)
[![Issues Closed](https://img.shields.io/github/issues-closed/SETeam59/application-tracking-system)](https://GitHub.com/SETeam59/application-tracking-system/)
![last commit](https://img.shields.io/github/last-commit/SETeam59/application-tracking-system)
![Lines of code](https://tokei.rs/b1/github/SETeam59/application-tracking-system)
[![Repo-size](https://img.shields.io/github/repo-size/SETeam59/application-tracking-system)](https://GitHub.com/SETeam59/application-tracking-system/)
[![file_count](https://img.shields.io/github/directory-file-count/SETeam59/application-tracking-system)](https://GitHub.com/SETeam59/application-tracking-system/)
[![language_count](https://img.shields.io/github/languages/count/SETeam59/application-tracking-system)](https://GitHub.com/SETeam59/application-tracking-system/)
[![Downloads](https://img.shields.io/github/downloads/SETeam59/application-tracking-system/total)](https://GitHub.com/SETeam59/application-tracking-system/)
[![Top Language](https://img.shields.io/github/languages/top/SETeam59/application-tracking-system)](https://GitHub.com/SETeam59/application-tracking-system/)
[![Release](https://img.shields.io/github/v/release/SETeam59/application-tracking-system)](https://gitHub.com/SETeam59/application-tracking-system)
[![Build and Deploy Frontend](https://github.com/SETeam59/application-tracking-system/actions/workflows/frontend_CI_CD.yml/badge.svg)](https://github.com/SETeam59/application-tracking-system/actions/workflows/frontend_CI_CD.yml)




# Career Pulse Tracker - Your Job Tracking Assistant

Advertisement - Redirects Page
[![Watch the video](https://img.youtube.com/vi/VAieiJGv9_Q/maxresdefault.jpg)](https://youtu.be/VAieiJGv9_Q)

CareerPulse Tracker

Are you tired of managing your job applications and projects using cumbersome Excel spreadsheets? Our job and project tracker application is here to simplify the process and make it stress-free.

## Get Organized, Stay on Track

Our application provides a highly customizable job tracker and project management system that empowers you to design boards, columns, and updates to meet your specific needs. The drag-and-drop feature and dynamic column creation make task and job tracking more efficient and user-friendly. Say goodbye to Excel spreadsheets and hello to a stress-free job application and project management experience.

## Table of Contents

- [Basic Design](#basic-design)
- [Demo](#demo)
- [Improvements](#improvements)
    + [What's New](#whats-new)
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

## Samples

### Login Page / Signup Page

The introductory visual interface displayed from which a user is able to register and log into the application.

<p align="center"><img width="700" src="resources\login.jpg"></p>

### Home Screen

The introductory visual interface displayed from which a user is able to access different updates on the application - like Waiting for Referrals, Applied Jobs, Application Status. The user can also add boards through this screen.

<p align="center"><img width="700" src="resources\Homepage.jpg"></p>

### Add New Boards

A user can add a new board to keep track of data
<p align="center"><img width="700" src="resources\add_new_board.jpg"></p>

### Add New Columns

New columns can be added by the user if required
<p align="center"><img width="700" src="resources\adding_new_column.jpg"></p>

### Updating the board

A user can update the status of the application like shown in the picture
<p align="center"><img width="700" src="resources\Updating_the_board.jpg"></p>

### Deleting Boards

If a user wishes to delete the board then they can delete the board as well
<p align="center"><img width="700" src="resources\delete_board.jpg"></p>



### Editing and Deleting the task

A user can edit the tasks as specified in the pic below. This updates the database if the operation is edit and removes the task from database if the task is deleted.
<p align="center"><img width="700" src="resources\editing_and_deleting_the_tasks.jpg"></p>

### Night mode implementation

We have implemented the night mode feature as well which diversifies the application.
<p align="center"><img width="700" src="resources\night_mode.jpg"></p>
<p align="center"><img width="700" src="resources\night_mode_edit_board.jpg"></p>

### What's New

#### Version 1.1

- Add headless feature for Selenium
- Fix shutdown.sh
- Login frontend
- Add resume storage for users
- Updated reloading issues
- Fix linting issues

#### Version 1.3

- Updated badges for the repository
- Users' database implementation
- Add logout endpoint and update middleware
- Login frontend for login and signup functionality
- Added Dark Mode to improve user experience


## Future Scope

- Include deadline reminders for the application and interview.
- Add a feature that allows users to attach these reminders to their Google calendar.
- Incorporate notifications for upcoming deadlines.
- Add a storage option for resumes and cover letters so they can be saved for future use.
- Include a direct link to the company's application site when the wishlist item is clicked.
- Include a link to the university’s career fair page.
- Direct connection to Linkedin, allowing for the addition of job opportunities to the wishlist.

## Explanation

Currently, we have five fundamental features in our project:

1. **Job Application Tracking:** Keep an organized record of job applications, including a wish list, application history, and the ability to add prospective offers.

2. **Project Management Integration:** Extend the application's functionality beyond job applications to create dynamic boards and columns for project management.

3. **Customization:** Customize columns, titles, descriptions, and workflow stages to match your unique needs.

4. **Efficient Updates:** Easily track progress with detailed updates, stage assignments, and a drag-and-drop feature for seamless task management.

5. **Data Security:** Ensure your information is stored securely with data persistence in a database, accessible for the long term.

## Technologies Used

- Python
- Node.Js
- Flask
- MongoDB
- React

## Installation

### Requirements:

- [Python](https://www.python.org/downloads/) (recommended >= 3.8)
- [pip](https://pip.pypa.io/en/stable/installation/) (Latest version 21.3 used as of 11/3)
- [npm](https://nodejs.org/en/) (Latest version 6.14.4 used as of 11/3)

### Strongly Recommended:

- A terminal environment capable of handling bash scripts.

To install all required packages, while within the context of the project root directory, run:

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
