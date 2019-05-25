# CAB230 Workbooks

These instructions are intended for QUT students in the CAB230 class. It is assumed that you have access to the workbooks associated with this unit.

## Installation Instructions

- Install MySQL Workbench [link](https://dev.mysql.com/downloads/windows/installer/8.0.html)
  - Install should include Workbench and Server
  - If Workbench fails to run, restart your computer
  - If Workbench continues to fail, reinstall it
- Edit knexfile.js with your username and password for the MySQL server
- Open project folder in Visual Studio Code
  - Hit `ctrl+~` to open integrated terminal
  - Run `npm install` in terminal
  - Run `np start` in terminal

## How to Use

- Check commit history of project to see the changes required by each workbook
- If you want to checkout a workbook:
  - Click on commits
  - Select the commit relating to the workbook you want
  - Select 'Browse files'
  - Clone or download project

## Known Issues

- Error Message: ER_NOT_SUPPORTED_AUTH_MODE
  - Open MySQL Workbench, and run the following query in the database:
    - `ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'insert_your_password_here'`
  - If this does not fix your problem, follow this solution: [link](https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server)
