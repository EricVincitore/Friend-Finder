# Friend-Finder
This app will allow the user to fill out a survey and see who matches them the most.

## Overview

Welcome to the Friend-Finder app! This app will allow you to fill out a quick ten question survey to get who is most like them form the data file. All of the questions on the survey reflect how you enjoy your time or what your preferred way to relax is.

## Instructions

### Heroku Instructions

1. Navigate to the heroku page for the app using the link at the bottom of this README.  
![Starting Button](images/herokupage.png)

2. Once you are at the page click the open app button in the upper right corner of the page. YOu should be redirected to a new page with the starting green for the survey.  
* Heroku Button  
![Heroku Button](images/herokubutton.png)

* Starting Screen  
![Starting Screen](images/startingscreen.png)

4. When you would like to start the survey click the button labeled "Go to Survey".    
![Starting Button](images/surveybutton.png)

5. Fill in your name and add link to an image of yourself before you start answering questions.  
![Starting Info](images/startinginfo.png)

6. Fill out all ten questions with "1" if you strongly disagree to "5" if you strongly agree.  
![Questions](images/question.png)

7. After you have answered all questions click the submit button to have a modal window appear with the name and photo of your closest match.  
![Your Match](images/yourmatch.png)

### Git-Hub Instructions

1. After you have pulled the repository navigate to the folder in your terminal and run the following commands to install node and the required dependencies.
    * npn init -y
        * This downloads the node package.
    * npm install 
        * This will install the node package.
    * npm install express
        * This will download and install the latest version of express to the file allowing teh server to run correctly.
    * npm install path
        * This will download and install the latest path package allowing you to go to sub-pages from the homepage.

2. Navigate to the server.js file in your terminal and run the following command.
    node server.js


3. This should prompt you with a line that tells you the local host port it is running on. Copy the local host port you are using and paste it into your web browser to navigate to the starting page.
* Terminal  
![Terminal Command](images/localhost.png)

* Browser  
![Browser Command](images/localhostBrowser.PNG)

* Starting Screen  
![Starting Screen](images/startingscreen.png)

4. When you would like to start the survey click the button labeled "Go to Survey".  
![Starting Button](images/surveybutton.png)

5. Fill in your name and add link to an image of yourself before you start answering questions.  
![Starting Info](images/startinginfo.png)

6. Fill out all ten questions with "1" if you strongly disagree to "5" if you strongly agree.  
![Questions](images/question.png)

7. After you have answered all questions click the submit button to have a modal window appear with the name and photo of your closest match.  
![Your Match](images/yourmatch.png)

## Links

### Heroku Page

https://dashboard.heroku.com/apps/friendfinderapp1001

### Git-Hub Page

https://github.com/EricVincitore/Friend-Finder

## Technologies Used

* HTML5
* Javascript
* Node.js
* Path
* Express
* Heroku

## Development Role

This app was developed by Eric Vincitore.