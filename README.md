# Task-1
## Overview
This is the Task-1 in which we have to build a basic, standalone React application

## Installation
Follow below setps to run the project:

```bash
# Clone the git repository
git clone https://github.com/mihirpatel1112/HParsons

# Navigate into the project directory
cd task-1

# Install dependencies
npm install

# Run the project
npm start
```

# Task-2
## Overview
This is the Task-2 in which we have to use SilverStrip CMS and create a DataObject and create a page and display the data

## Requirements
- XAMPP 
- PHP >=7.4, <=8.1 
- Composer

## Installation
Follow below setps to run the project:

1. Clone the git repository
```bash
git clone https://github.com/mihirpatel1112/HParsons
```

2. Navigate into the project directory
```bash
cd task-2
```

3. Open terminal

4. Install dependencies
```bash
composer install
```

5. Run the Vendor Expose Command 
```bash
composer vendor-expose
```

6. Create .env file and should contains below variables
```bash
SS_DATABASE_SERVER='localhost'
SS_DATABASE_USERNAME='db-username'
SS_DATABASE_PASSWORD='db-password-if-you-set-it'
SS_ENVIRONMENT_TYPE='dev'
SS_DATABASE_CHOOSE_NAME=true
SS_DEFAULT_ADMIN_USERNAME='admin-username'
SS_DEFAULT_ADMIN_PASSWORD='admin-password'
SS_DATABASE_NAME="your-sql-db-name"
```

## Example
```bash
SS_DATABASE_SERVER='localhost'
SS_DATABASE_USERNAME='root'
SS_DATABASE_PASSWORD=''
SS_ENVIRONMENT_TYPE='dev'
SS_DATABASE_CHOOSE_NAME=true
SS_DEFAULT_ADMIN_USERNAME='root'
SS_DEFAULT_ADMIN_PASSWORD='root'
SS_DATABASE_NAME="task2"
```

7. Setup the xampp 

8. Move the task-2 folder in xampp
```bash
C:\xampp\htdocs\task-2
```

9. Add VirtualHost to apache
```bash
C:\xampp\apache\conf\extra\httpd-vhosts.conf
```

## Paste below code at the end of the file and save it

```bash
##<VirtualHost *:80>
    ##ServerAdmin your-mail@gmail.com
    ##DocumentRoot "C:\xampp\htdocs\task-2\public"
    ##ServerName task-2.localhost
    ##ErrorLog "logs/task-2-error.log"
    ##CustomLog "logs/task-2-access.log" common
##</VirtualHost>
```

10. Add host to system
```bash
C:\Windows\System32\drivers\etc\hosts
```

## Paste below code at the end of the file
```bash
127.0.0.1 task-2.localhost
```

11. Open xampp GUI and start Apache and MySQL waait till you see Ports for both of them.

12. Build the project
```bash
http://localhost/task-2/dev/build
```

13. Create SQL Database and add the details to .env file
```bash
http://localhost/task-2/phpmyadmin
```

14. Run the project
```bash
http://localhost/task-2/
```

15. Create Venue Page
```bash
http://localhost/task-2/public/admin/pages/
```
```bash
Pages -> Add new -> Step 1(Top Level) -> Step 2(Venue Page) -> Create -> Page Name(Venue Page) -> Publish
```

16. Add a venue
```bash
http://localhost/task-2/public/admin/venues/
```




# Task-3(a)

## Overview
This is the frontend and backend using SilverStrip as backend and React as frontend

## Requirements
- XAMPP 
- PHP >=7.4, <=8.1 
- Composer

## Backend Installation
Follow below setps to run the project:

1. Clone the git repository
```bash
git clone https://github.com/mihirpatel1112/HParsons
```

2. Navigate into the project directory
```bash
cd task-3(a)
cd backend
```

3. Open terminal

4. Install dependencies
```bash
composer install
```

5. Run the Vendor Expose Command 
```bash
composer vendor-expose
```

6. Create .env file and should contains below variables
```bash
SS_DATABASE_SERVER='localhost'
SS_DATABASE_USERNAME='db-username'
SS_DATABASE_PASSWORD='db-password-if-you-set-it'
SS_ENVIRONMENT_TYPE='dev'
SS_DATABASE_CHOOSE_NAME=true
SS_DEFAULT_ADMIN_USERNAME='admin-username'
SS_DEFAULT_ADMIN_PASSWORD='admin-password'
SS_DATABASE_NAME="your-sql-db-name"
```

## Example
```bash
SS_DATABASE_SERVER='localhost'
SS_DATABASE_USERNAME='root'
SS_DATABASE_PASSWORD=''
SS_ENVIRONMENT_TYPE='dev'
SS_DATABASE_CHOOSE_NAME=true
SS_DEFAULT_ADMIN_USERNAME='root'
SS_DEFAULT_ADMIN_PASSWORD='root'
SS_DATABASE_NAME="task2"
```
     
7. Setup the xampp 

8. Move the backend folder in xampp
```bash
C:\xampp\htdocs\backend
```

9. Add VirtualHost to apache
```bash
C:\xampp\apache\conf\extra\httpd-vhosts.conf
```

## Paste below code at the end of the file and save it

```bash
##<VirtualHost *:80>
    ##ServerAdmin your-mail@gmail.com
    ##DocumentRoot "C:\xampp\htdocs\backend\public"
    ##ServerName backend.localhost
    ##ErrorLog "logs/backend-error.log"
    ##CustomLog "logs/backend-access.log" common
##</VirtualHost>
```

10. Add host to system
```bash
C:\Windows\System32\drivers\etc\hosts
```

## Paste below code at the end of the file
```bash
127.0.0.1 backend.localhost
```

11. Open xampp GUI and start Apache and MySQL waait till you see Ports for both of them.

12. Build the project
```bash
http://localhost/backend/dev/build
```

13. Create SQL Database and add the details to .env file
```bash
http://localhost/backend/phpmyadmin
```

14. Run the project
```bash
http://localhost/backend/
```

15. Create Venue Page
```bash
http://localhost/backend/public/admin/pages/
```
```bash
Pages -> Add new -> Step 1(Top Level) -> Step 2(Venue Page) -> Create -> Page Name(Venue Page) -> Publish
```

16. Add a venue
```bash
http://localhost/backend/public/admin/venues/
```

17. JSON data can be accessed at this url
```bash
http://localhost/backend/api/venues
```


## Frontend Installation

1. Clone the git repository
```bash
git clone https://github.com/mihirpatel1112/HParsons
```

2. Navigate into the project directory
```bash
cd task-3(a)
cd frontend
```

3. Install dependencies
```bash
npm install
```

4. Enter your backend in Page.jsx
```bash
http://localhost/backend/api/venues
```

4. Start the project
```bash
npm start
```





