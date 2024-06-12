CREATE DATABASE Sky_ScraperDB;

USE Sky_ScraperDB;

CREATE TABLE Users (
    
    id INT IDENTITY(1,1) PRIMARY KEY,
    username VARCHAR(250) NOT NULL,
    email VARCHAR(250) NOT NULL,
    password VARCHAR(250) NOT NULL,
    account_type VARCHAR(220) NOT NULL,
    job_function VARCHAR(230) NOT NULL,
    state VARCHAR(250) NOT NULL
);

CREATE TABLE Sky_ScraperDB.Users (
    UserID INT PRIMARY KEY AUTO_INCREMENT,
    Email VARCHAR(255) NOT NULL UNIQUE,
    Password VARCHAR(255) NOT NULL,
    UserType VARCHAR(50) NOT NULL
);


ALTER TABLE Sky_ScraperDB.dbo.Users
ALTER COLUMN Email NVARCHAR(255) NOT NULL;

CREATE TABLE Listings (
    ID INT PRIMARY KEY IDENTITY(151,231),
    UserID INT NOT NULL,
    Title VARCHAR(255) NOT NULL,
    Description TEXT,
    Type AS ('Property' + ', ' + 'Casualty' + ', ' + 'Life' + ',' + 'Health') PERSISTED NOT NULL,
    FOREIGN KEY (UserID) REFERENCES Users(ID)
);

CREATE TABLE Companies (
    ID INT PRIMARY KEY IDENTITY(151,231),
    Name VARCHAR(255) NOT NULL,
    Type AS ('Carrier' + ', ' + 'Wholesaler' + ', ' + 'MGA') PERSISTED NOT NULL
);

CREATE TABLE UserFavorites (
    UserID INT NOT NULL,
    ListingID INT NOT NULL,
    CompanyID INT NOT NULL,
    PRIMARY KEY (UserID, ListingID, CompanyID),
    FOREIGN KEY (UserID) REFERENCES Users(ID),
    FOREIGN KEY (ListingID) REFERENCES Listings(ID),
    FOREIGN KEY (CompanyID) REFERENCES Companies(ID)
);
