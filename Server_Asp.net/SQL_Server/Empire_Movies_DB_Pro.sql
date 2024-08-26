USE Empire_Movies_pro 


CREATE TABLE users(
	ID_User int IDENTITY(1,1) not null,
	U_Name NVARCHAR(150) not null,
	Mail NVARCHAR(120) not null, 
	U_password NVARCHAR(256) not null, 
	Preferences NVARCHAR(20) not null,

	CONSTRAINT PK_User PRIMARY KEY
	(
		ID_User ASC
	),

	CONSTRAINT UQ_Name UNIQUE
	(
		Mail
	)
)

CREATE TABLE movies(
	ID_Movie INT IDENTITY(1,1) not null,
	Title NVARCHAR(50) not null,
	M_Description NVARCHAR(300) not null,
	M_Year INT not null,
	M_Length INT not null,
	URL_img NVARCHAR(300) not null,

		CONSTRAINT PK_ID_Movie PRIMARY KEY
		(
			ID_Movie ASC	
		),
		
		CONSTRAINT UQ_Title_Movies UNIQUE
		(
			Title
		)

);

CREATE TABLE Series(
	ID_Series INT IDENTITY(1,1) not null,
	Title NVARCHAR(50) not null,
	S_Description NVARCHAR(300) not null,
	S_Year INT not null,
	S_Length INT not null,
	URL_img NVARCHAR(300) not null,

		CONSTRAINT PK_ID_Series PRIMARY KEY
		(
			ID_Series ASC	
		),

		CONSTRAINT UQ_Title_Series UNIQUE
		(
			Title
		),

);

CREATE TABLE Seasons(
	ID_Season INT IDENTITY(1,1) not null,
	ID_Series INT not null,
	N_Season INT not null,
	SS_Year INT not null,
	N_Chapers INT not null,

	CONSTRAINT PK_ID_Season PRIMARY KEY
	(
		ID_Season ASC	
	),


	CONSTRAINT FK_Series FOREIGN KEY(ID_Series)
		REFERENCES Series(ID_Series),
);

CREATE TABLE Chapers(
	ID_Chapers INT IDENTITY(1,1) not null,
	ID_Series INT not null,
	ID_Season INT not null,
	Number_Chaper INT not null,
	Title NVARCHAR(50) not null,
	C_Length INT not null,

	CONSTRAINT PK_ID_Chapers PRIMARY KEY
	(
		ID_Chapers ASC	
	),

	CONSTRAINT FK_Chapers_Series FOREIGN KEY(ID_Series)
		REFERENCES Series(ID_Series),

	CONSTRAINT FK_Chapers_Season FOREIGN KEY(ID_Season)
		REFERENCES Seasons(ID_Season),

);

CREATE TABLE favorites(
	ID_Favorites INT IDENTITY(1,1) not null,
	ID_User INT not null,
	ID_Movie INT,
	ID_Series INT,

	CONSTRAINT PK_ID_F PRIMARY KEY
	(
		ID_Favorites ASC
	),

	CONSTRAINT FK_User_Favorites FOREIGN KEY(ID_User)
		REFERENCES users(ID_User),

	CONSTRAINT FK_Movies_Favorites FOREIGN KEY(ID_Movie)
		REFERENCES movies(ID_Movie)
		
);

CREATE INDEX IDX_User_Favorites ON favorites(ID_User);

CREATE TABLE History(
	ID_History INT IDENTITY(1,1) not null,
	ID_User INT not null,
	ID_Movie INT,
	ID_Series INT,

	CONSTRAINT PK_ID_History PRIMARY KEY
	(
		ID_History ASC
	),

	CONSTRAINT FK_User_History FOREIGN KEY(ID_User)
		REFERENCES users(ID_User),

	CONSTRAINT FK_Movies_History FOREIGN KEY(ID_Movie)
		REFERENCES movies(ID_Movie)
		
);

CREATE INDEX IDX_User_History ON History(ID_User);

CREATE TABLE RolUsers
(
	ID_Rol INT IDENTITY(1,1) not null,
	Rol_type NVARCHAR (15) not null,
	ID_User INT not null,

	CONSTRAINT PK_ID_Rol PRIMARY KEY
	(
		ID_Rol ASC
	),

	CONSTRAINT FK_USER FOREIGN KEY (ID_User)
		REFERENCES users(ID_User)
)

CREATE TABLE Categorys(
	ID_Category INT IDENTITY(1,1) not null,
	Category NVARCHAR(40) not null

	CONSTRAINT PK_ID_Category PRIMARY KEY
	(
		ID_Category ASC
	)
);

CREATE TABLE MoviesCategorys( /* Categorias para peliculas */
	ID_MoviesCategorys INT IDENTITY(1,1) not null,
	ID_Movie INT not null,
	ID_Category INT not null

	CONSTRAINT PK_ID_MoviesCategorys PRIMARY KEY
	(
		ID_MoviesCategorys ASC
	),

	CONSTRAINT FK_ID_Movie FOREIGN KEY (ID_Movie)
		REFERENCES movies(ID_Movie),
	
	CONSTRAINT FK_ID_Category FOREIGN KEY (ID_Category)
		REFERENCES Categorys(ID_Category)
);

CREATE TABLE SeriesCategorys( /* Categorias para series */
	ID_SeriesCategorys INT IDENTITY(1,1) not null,
	ID_Series INT not null,
	ID_Category INT not null

	CONSTRAINT PK_ID_SeriesCategorys PRIMARY KEY
	(
		ID_SeriesCategorys ASC
	),

	CONSTRAINT FK_ID_Series FOREIGN KEY (ID_Series)
		REFERENCES Series(ID_Series),
	
	CONSTRAINT FK_ID_Category_Series FOREIGN KEY (ID_Category)
		REFERENCES Categorys(ID_Category)
);

ALTER TABLE favorites ADD CONSTRAINT FK_Favorites_Series FOREIGN KEY(ID_Series) REFERENCES Series(ID_Series);
ALTER TABLE History ADD CONSTRAINT FK_History_Series FOREIGN KEY(ID_Series) REFERENCES Series(ID_Series);

CREATE UNIQUE INDEX IX_Unique_User_Movie_Series
ON favorites (ID_User, ID_Movie, ID_Series);
