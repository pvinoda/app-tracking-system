https://user-images.githubusercontent.com/89501363/144725439-5d9191f8-df13-4814-aa15-99cd752ab0cc.mp4

[![GitHub license](https://img.shields.io/github/license/kingan1/application-tracking-system)](https://github.com/SETeam59/application-tracking-system/blob/main/LICENSE)
[![DOI](https://zenodo.org/badge/426259091.svg)](https://zenodo.org/badge/latestdoi/426259091)
[![codecov](https://codecov.io/gh/kingan1/application-tracking-system/branch/main/graph/badge.svg)](https://codecov.io/gh/kingan1/application-tracking-system)
![GitHub issues](https://img.shields.io/github/issues/kingan1/application-tracking-system)
![GitHub issues](https://img.shields.io/github/issues-closed/kingan1/application-tracking-system)
![GitHub top language](https://img.shields.io/github/languages/top/kingan1/application-tracking-system)

[![Build and Deploy Frontend](https://github.com/kingan1/application-tracking-system/actions/workflows/frontend_CI_CD.yml/badge.svg)](https://github.com/kingan1/application-tracking-system/actions/workflows/frontend_CI_CD.yml)
[![Super Linter](https://github.com/kingan1/application-tracking-system/actions/workflows/super-linter.yml/badge.svg)](https://github.com/kingan1/application-tracking-system/actions/workflows/super-linter.yml)

#      Career Pulse Tracker - Your Job Tracking Assistant

Advertisement - Redirects Page
[![Watch the video](https://img.youtube.com/vi/VAieiJGv9_Q/maxresdefault.jpg)](https://youtu.be/VAieiJGv9_Q)


The process of applying for jobs and internships is not a cakewalk. Managing job applications is a time-consuming process. Due to the referrals and deadlines, the entire procedure can be stressful. Our application allows you to track and manage your job application process, as well as regulate it, without the use of cumbersome Excel spreadsheets.

Our application keeps track of the jobs in whichever way you like. The user can make as many columns as they would like for a variety of reasons such as applied, interviewed, rejected, etc. Our aim is to make the application as modular as possible to fit a wide variety of user needs. 

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

## Samples:

### Login Page / Signup Page

The introductory visual interface displayed from which a user is able to register and log into the application.

<p align="center"><img width="700" src="./resources/login.png"></p>


### HomeScreen

The introductory visual interface displayed from which a user is able to access different cards - Waitlisted applications, Waiting for Refereals, Applied Jobs, Application Status.The user can also add cards through this screen.

<p align="center"><img width="700" src="./resources/home_screen.png"></p>


### SearchPage

The interface through which a user is able to search for specific jobs and add them to Waitlisted Applications.

1. Navigate to Job search page, search for particular Job.
2. Click on Add button. Fill in the Details.
3. Click on Create buttop.
4. The application will then be saved as per the selected category.

<p align="center"><img width="700" src="./resources/search.png"></p>
<p align="center"><img width="700" src="./resources/newjobdetails1.PNG"></p>


### SearchPage with Salary filter

The interface through which a user is able to search for specific jobs based on the salary range selected.

1. Navigate to Job search page, search for particular Job and select the salary range from the dropdown.
2. Click on Search button.

<p align="center"><img width="700" src="./resources/salaryfilter1.png"></p>

### ResumePage

1. Navigate to resume Section
2. Upload any resume file with .PDF extension by selecting the file from local storage. Click Upload.
3. Click on download button to Download the uploaded file.

<p align="center"><img width="700" src="./resources/resume.png"></p>


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
- Implementing search based on salary functionality
- Login frontend for login and signup functionality
- Search custom date



## Roadmap:
![Roadmap](https://github.com/prithvish-doshi-17/application-tracking-system/blob/main/resources/Roadmap%20-%202.PNG)


## Future Scope: 
* Include deadline reminders for the application and interview.
* Add a feature that allows users to attach these reminders to their Google calendar.
* Incorporate notifications for upcoming deadlines. 
* Add a storage option for resumes and cover letters so they can be saved for future use.
* Include a direct link to the company's application site when the wishlist item is clicked.
* Include a link to the university’s career fair page. 
* Direct connection to Linkedin, allowing for the addition of job opportunities to the wishlist.
* Improve keyword search to improve specifications such as pay range, employment location, and so on.
* An option to maintain separate profiles for job tracking.


## Explanation:

Currently, we have four fundamental steps in our project:


1. The position for which you have applied
2. The job you want to apply for, without a referral
3. The job at which you have faced rejection, and
4. The job you're waiting for a referral.


Any details in any table can be modified at any time during the process.

## Technologies Used:

* Python
* Node.Js
* Flask
* MongoDB

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
- Ashley King
- Manoj Kumar
- Rakesh Muppala
- Sayali Parab
- Ashwin Das
- Renji Joseph Sabu 
