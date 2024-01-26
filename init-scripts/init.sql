set client_encoding to 'UTF8';

/* ======================== TABLES ======================================= */
DROP TABLE IF EXISTS Client CASCADE;
CREATE TABLE Client (
	id SERIAL, 
    firstname VARCHAR(50) NOT NULL, 
	lastname VARCHAR(50) NOT NULL, 
	CONSTRAINT PK_Client PRIMARY KEY (id)
);
/* ----------------------------------------------------------------------- */
DROP TABLE IF EXISTS Journey CASCADE;
CREATE TABLE Journey (
    id SERIAL, 
	startDate DATE NOT NULL, 
    endDate DATE,
    clientId INT NOT NULL,
    historicalPeriodId INT NOT NULL,
    lifeInsuranceId INT NOT NULL,
    guideId INT NOT NULL,
	CONSTRAINT PK_Journey PRIMARY KEY (id)
);

CREATE TYPE DANGER_LEVEL AS ENUM ('chill', 'safe', 'dangerous','hell');

/* ----------------------------------------------------------------------- */
DROP TABLE IF EXISTS HistoricalPeriod CASCADE;
CREATE TABLE HistoricalPeriod (
    id SERIAL, 
	name VARCHAR(50) NOT NULL,
	description TEXT,
	dangerLevel DANGER_LEVEL NOT NULL,
    arrivalDate DATE NOT NULL,
	locationId INT NOT NULL,
	CONSTRAINT PK_HistoricalPeriod PRIMARY KEY (id)
);
/* ----------------------------------------------------------------------- */
DROP TABLE IF EXISTS LifeInsurance CASCADE;
CREATE TABLE LifeInsurance (
    id SERIAL, 
    title VARCHAR(10) NOT NULL,
    description TEXT NOT NULL,
    price DECIMAL(8,2) NOT NULL,
	corporalIntegrity BOOLEAN NOT NULL,
	rescueTeam BOOLEAN NOT NULL,
    wayBackEnsured BOOLEAN NOT NULL,
    actionsPersistence BOOLEAN NOT NULL,
	CONSTRAINT PK_LifeInsurance PRIMARY KEY (id)
);
/* ----------------------------------------------------------------------- */
DROP TABLE IF EXISTS Guide CASCADE;
CREATE TABLE Guide (
    id SERIAL,
	surname VARCHAR(50) NOT NULL,
    biography TEXT,
	CONSTRAINT PK_Guide PRIMARY KEY (id)
);
/* ----------------------------------------------------------------------- */
DROP TABLE IF EXISTS Location CASCADE;
CREATE TABLE Location (
    id SERIAL, 
	city VARCHAR(50) NOT NULL,
	country VARCHAR(50) NOT NULL,
	CONSTRAINT PK_Location PRIMARY KEY (id)
);

/* ======================== FOREIGN KEYS ================================= */
/* ----------------------------------------------------------------------- */
ALTER TABLE Journey
   ADD CONSTRAINT FK_Journey_Client
      FOREIGN KEY (clientId)
         REFERENCES Client (id)
ON UPDATE CASCADE;
/* ----------------------------------------------------------------------- */
ALTER TABLE Journey
   ADD CONSTRAINT FK_Journey_HistoricalPeriod
      FOREIGN KEY (historicalPeriodId)
         REFERENCES HistoricalPeriod (id)
ON UPDATE CASCADE;
/* ----------------------------------------------------------------------- */
ALTER TABLE Journey
   ADD CONSTRAINT FK_Journey_LifeInsurance
      FOREIGN KEY (lifeInsuranceId)
         REFERENCES LifeInsurance (id)
ON UPDATE CASCADE;
/* ----------------------------------------------------------------------- */
ALTER TABLE Journey
   ADD CONSTRAINT FK_Journey_Guide
      FOREIGN KEY (guideId)
         REFERENCES Guide (id)
ON UPDATE CASCADE;
/* ----------------------------------------------------------------------- */
ALTER TABLE HistoricalPeriod
   ADD CONSTRAINT FK_HistoricalPeriod_Location
      FOREIGN KEY (locationId)
         REFERENCES Location (id)
ON UPDATE CASCADE;
/* ----------------------------------------------------------------------- */

/* ======================== DATA CREATION ================================ */

/* ---------------------------------GUIDES ------------------------------- */
INSERT INTO Guide (surname, biography) VALUES ('Jean-François Hêche', '');
INSERT INTO Guide (surname, biography) VALUES ('Vincent Guidoux', '');
INSERT INTO Guide (surname, biography) VALUES ('Olivier Lemer', '');
INSERT INTO Guide (surname, biography) VALUES ('Fabien Dutoit', '');
INSERT INTO Guide (surname, biography) VALUES ('Nastaran Fatemi', '');
INSERT INTO Guide (surname, biography) VALUES ('Yassin Kamoun', '');

/* ---------------------------------CLIENTS  ----------------------------- */
INSERT INTO Client (firstname, lastname) VALUES ('Bastian', 'Chollet');
INSERT INTO Client (firstname, lastname) VALUES ('Elliot', 'Ganty');
INSERT INTO Client (firstname, lastname) VALUES ('Alexis', 'Monthoux');
INSERT INTO Client (firstname, lastname) VALUES ('Malo', 'Romano');
INSERT INTO Client (firstname, lastname) VALUES ('Flavio', 'Sovilla');
INSERT INTO Client (firstname, lastname) VALUES ('Kévin', 'Jorand');
INSERT INTO Client (firstname, lastname) VALUES ('Kevin', 'Ferati');
INSERT INTO Client (firstname, lastname) VALUES ('Pirakasraj', 'Anthonponrajkumar');
INSERT INTO Client (firstname, lastname) VALUES ('Victor', 'Nondjock');
INSERT INTO Client (firstname, lastname) VALUES ('Yvan', 'Cochet');

/* ---------------------------------Location  ----------------------------- */
INSERT INTO Location (id, city, country) VALUES (0,'Yorktown', 'United States');
INSERT INTO Location (id, city, country) VALUES (1,'Paris', 'France');

/* ---------------------------------Life insurance  ------------------------ */
INSERT INTO LifeInsurance (title, description, price, corporalIntegrity, rescueTeam, wayBackEnsured, actionsPersistence) VALUES ('NONE', 'no life insurance', 0, FALSE, FALSE, FALSE, FALSE);
INSERT INTO LifeInsurance (title, description, price, corporalIntegrity, rescueTeam, wayBackEnsured, actionsPersistence) VALUES ('BASIC', 'you can at least come back', 100, FALSE, FALSE, TRUE, FALSE);
INSERT INTO LifeInsurance (title, description, price, corporalIntegrity, rescueTeam, wayBackEnsured, actionsPersistence) VALUES ('LIMITED', 'you come back in one piece', 5000, TRUE, FALSE, TRUE, FALSE);
INSERT INTO LifeInsurance (title, description, price, corporalIntegrity, rescueTeam, wayBackEnsured, actionsPersistence) VALUES ('ADVANCED', 'you wont spend all your life stuck in a medieval prison', 5000, FALSE, TRUE, TRUE, FALSE);
INSERT INTO LifeInsurance (title, description, price, corporalIntegrity, rescueTeam, wayBackEnsured, actionsPersistence) VALUES ('TOTAL', 'you wont create a time paradox', 100000, TRUE, FALSE, TRUE, TRUE);

/* ---------------------------------Location  ----------------------------- */
INSERT INTO HistoricalPeriod (name, description, dangerLevel, arrivalDate, locationId)
VALUES ('American revolutionary war', 'Great Britain recognized the independence and sovereignty of the United States', 'dangerous', '1781-09-28', 0);
INSERT INTO HistoricalPeriod (name, description, dangerLevel, arrivalDate, locationId)
VALUES ('French revolution', 'period of political and societal change in France', 'dangerous', '1789-07-14',1);