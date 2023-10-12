
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

-- Create the Users table
CREATE TABLE "users" (
    UserID INT PRIMARY KEY,
    FirstName VARCHAR(255),
    LastName VARCHAR(255)
);
CREATE TABLE Classes (
    ClassID INT PRIMARY KEY,
    Name VARCHAR(255),
    Date DATE,
    Time TIME,
    Location VARCHAR(255),
    Instructor VARCHAR(255),
    MaxCapacity INT
);
CREATE TABLE Attendance (
    AttendanceID INT PRIMARY KEY,
    ClassID INT,
    UserID INT,
    Date DATE,
    Status VARCHAR(50) CHECK (Status IN ('Present', 'Absent')),
    FOREIGN KEY (ClassID) REFERENCES Classes (ClassID),
    FOREIGN KEY (UserID) REFERENCES users (UserID)
);
