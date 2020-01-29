#CREATE database hospitals;


CREATE TABLE Providers (
    ID int NOT NULL UNIQUE PRIMARY KEY,
    ProviderName varchar(255),
    Address varchar(511),
    City varchar(255),
    State varchar(255),
    Zip int,
    RefferalRegion varchar(255)
);

CREATE TABLE GPD (
    ID int NOT NULL UNIQUE PRIMARY KEY,
    DRGDefinition varchar(255)
);


CREATE TABLE Payments (
    ID int NOT NULL UNIQUE PRIMARY KEY auto_increment,
	Discharges int,
    CoveredCharges float,
    TotalPayments float,
    MedicarePayments float,
    GPDID int,
    ProviderID int,

    FOREIGN KEY (GPDID) REFERENCES GPD (ID),
    FOREIGN KEY (ProviderID) REFERENCES Providers (ID)
);