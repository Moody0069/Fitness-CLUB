
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
-- CREATE TABLE Users (
--     UserID INT PRIMARY KEY,
--     Email VARCHAR(255) UNIQUE NOT NULL,
--     Password VARCHAR(255) NOT NULL,
--     Name VARCHAR(255),
--     -- Add other columns as needed
-- );

-- -- Create the Classes table
-- CREATE TABLE Classes (
--     ClassID INT PRIMARY KEY,
--     Name VARCHAR(255),
--     Date DATE,
--     Time TIME,
--     Location VARCHAR(255),
--     Instructor VARCHAR(255),
--     MaxCapacity INT,
--     -- Add other columns as needed
-- );

-- -- Create the Attendance table
-- CREATE TABLE Attendance (
--     AttendanceID INT PRIMARY KEY,
--     ClassID INT,
--     UserID INT,
--     Date DATE,
--     Status VARCHAR(50) CHECK (Status IN ('Present', 'Absent')),
--     FOREIGN KEY (ClassID) REFERENCES Classes (ClassID),
--     FOREIGN KEY (UserID) REFERENCES Users (UserID)
--     -- Add other columns as needed
-- );