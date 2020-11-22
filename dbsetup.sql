DROP DATABASE hackwesternwebsite;
CREATE DATABASE IF NOT EXISTS hackwesternwebsite;
USE hackwesternwebsite;

SHOW TABLES;
CREATE TABLE equipment(
  equipmentname VARCHAR(30),
  PRIMARY KEY (equipmentname)
  );

CREATE TABLE workout(
  workoutname VARCHAR(50),
  workoutdescription VARCHAR(300),
  equipmentname VARCHAR(30),
  bodypart VARCHAR(30),
  PRIMARY KEY (workoutname),
  FOREIGN KEY (equipmentname) REFERENCES equipment(equipmentname)
  );

INSERT INTO equipment VALUES('No Equipment (Bodyweight)');
INSERT INTO equipment VALUES('Dumbbell');
INSERT INTO equipment VALUES('Kettlebell');
INSERT INTO equipment VALUES('Barbell');
INSERT INTO equipment VALUES('Pullup Bar');

INSERT INTO workout VALUES('Dumbbell Overhead Press', 'The dumbbell overhead press is the perfect workout for shoulder development, and can even translate to improving handstand strength!', 'Dumbbell', 'Shoulders');
INSERT INTO workout VALUES('Bicep Curl', 'The bicep curl is the most basic arm workout using a dumbbell, and can be done from a sitting or standing position', 'Dumbbell', 'Biceps');
INSERT INTO workout VALUES('Kettlebell Swing', 'The kettle bell swing is a great movement for working the entire body, and also builds aerobic endurance.', 'Kettlebell', 'Total Body');
INSERT INTO workout VALUES('Bench Press', 'The bench press is the classic barbell workout, and is the main exercise used for developing a larger chest.', 'Barbell', 'Chest');
INSERT INTO workout VALUES('Burpee', 'Burpees are a great alternative to weighted squats, and if enough are preformed are also a great aerobic exercies that can be done anywhere.', 'No Equipment (Bodyweight)', 'Total Body');
INSERT INTO workout VALUES('Pullup', 'Pullups are an ideally are best preformed without fully straining yourself between repititions, and strengthening the upper back through them can help with posture.', 'Pullup Bar', 'Upper Back');




