# DB seeder file
CREATE TABLE sports(
    id INT AUTO_INCREMENT PRIMARY KEY,    
    word VARCHAR(100)
);

INSERT INTO sports(word) VALUES
    ('basketball'),
    ('football'),
    ('baseball'),
    ('bicycle'),
    ('boxing'),
    ('cricket'),
    ('karate'),
    ('kayaking'),
    ('lacrosse'),
    ('weightlifting'),
    ('leagueoflegends'),
    ('hockey'),
    ('tennis'),
    ('skating'),
    ('fencing'),
    ('judo'),
    ('bowling'),
    ('volleyball'),
    ('dodgeball'),
    ('figureskating'),
    ('wrestling'),
    ('aerobics'),
    ('dribble'),
    ('strike'),
    ('touchdown'),
    ('golf'),
    ('billiards'),
    ('swimming'),
    ('snowboarding'),
    ('rollerblading');

CREATE TABLE musics(
    id INT AUTO_INCREMENT PRIMARY KEY,    
    word VARCHAR(100)
);

INSERT INTO musics(word) VALUES
    ('hiphop'),
    ('rap'),
    ('rock'),
    ('jazz'),
    ('kpop'),
    ('folk'),
    ('reggae'),
    ('punk'),
    ('edm'),
    ('disco'),
    ('blues'),
    ('classical'),
    ('opera'),
    ('trap'),
    ('dubstep'),
    ('house'),
    ('techno'),
    ('swing'),
    ('christian'),
    ('pop'),
    ('metal'),
    ('harmony'),
    ('piano'),
    ('strike'),
    ('fusion'),
    ('chord'),
    ('tempo'),
    ('vocal'),
    ('pitch'),
    ('alto');

CREATE TABLE foods(
    id INT AUTO_INCREMENT PRIMARY KEY,    
    word VARCHAR(100)
);

INSERT INTO foods(word) VALUES
    ('bread'),
    ('potato'),
    ('cabbage'),
    ('carrot'),
    ('apple'),
    ('orange'),
    ('banana'),
    ('eggs'),
    ('rice'),
    ('soup'),
    ('chicken'),
    ('steak'),
    ('corn'),
    ('beef'),
    ('yogurt'),
    ('grapes'),
    ('cherry'),
    ('blueberry'),
    ('onion'),
    ('pancake'),
    ('omlette'),
    ('nuts'),
    ('garlic'),
    ('taco'),
    ('burrito'),
    ('sushi'),
    ('fish'),
    ('icecream'),
    ('pickle'),
    ('tomatoe');

CREATE TABLE highscores( 
    id INT AUTO_INCREMENT PRIMARY KEY,    
    name VARCHAR(100),
    score INT,
    category VARCHAR(100)
);

--used for testing 
INSERT INTO highscores(name,score,category) VALUES 
    ('christian', 24, 'sports'),
    ('dana', 30, 'sports') ; 


