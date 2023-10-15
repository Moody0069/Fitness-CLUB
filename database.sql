
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
INSERT INTO Classes (ClassID, Name, Date, Time, Location, Instructor, MaxCapacity)
VALUES
  (1, 'Yoga Class', '2023-10-15', '14:00:00', 'Yoga Studio A', 'Instructor 1', 20),
  (2, 'Cycling Class', '2023-10-16', '10:30:00', 'Cycling Studio B', 'Instructor 2', 15),
  (3, 'Zumba Class', '2023-10-17', '18:15:00', 'Dance Studio C', 'Instructor 3', 25),
  (4, 'Pilates Class', '2023-10-18', '09:30:00', 'Pilates Studio D', 'Instructor 4', 15),
  (5, 'Spin Class', '2023-10-19', '17:45:00', 'Spin Studio E', 'Instructor 5', 20),
  (6, 'Aerobics Class', '2023-10-20', '12:00:00', 'Aerobics Studio F', 'Instructor 6', 25);
