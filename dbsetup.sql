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

INSERT INTO workout VALUES('Dumbbell Overhead Press', 'The dumbbell overhead press is a great workout for shoulder development, and is a movment that is not often incorperated into routines. It can even translate to improving handstand strength.', 'Dumbbell', 'Shoulders');
INSERT INTO workout VALUES('Dumbbell Lateral Raise', 'The dumbbell lateral raise is a highly functional shoulder workout. Lateral strength is often overlooked, and will help greatly with lifting anything at your sides.', 'Dumbbell', 'Shoulders');
INSERT INTO workout VALUES('Bicep Curl', 'The bicep curl is the most basic dumbbell arm workout. It can be done from a sitting or standing position.', 'Dumbbell', 'Biceps');
INSERT INTO workout VALUES('Kettlebell Swing', 'The kettle bell swing is a great movement for working the entire body, and also builds aerobic endurance.', 'Kettlebell', 'Total Body');
INSERT INTO workout VALUES('Kettlebell Goblet Squat', 'The kettle bell goblet squat is a great full body workout. Holding the kettlebell infront of you will require stabalization from the core, and your entire lower body will be worked during the squat.', 'Kettlebell', 'Total Body');
INSERT INTO workout VALUES('Kettlebell Farmers Walk', 'The kettle bell farmers walk can be done with one or two kettlebells. If only one is used the core will be used to stabilize. Its a great workout for both grip strength and the entire upper body ', 'Kettlebell', 'Upper Body');
INSERT INTO workout VALUES('Bench Press', 'The bench press is the classic barbell workout, and is the main exercise used for pec development, and can easily have weight added over time for progression.', 'Barbell', 'Chest');
INSERT INTO workout VALUES('Deadlift', 'The deadlift is one of the most common barbell workouts. It teaches great form for lifting anything heavy, and the muscles developed by it are useful anytime something heavy is lifted from the floor.', 'Barbell', 'Lower Body');
INSERT INTO workout VALUES('Bent-Over Row', 'Bent-over rows are an extremely important exercise to incorporate into workout routines. It targets the back, which is often neglected, yet it is extremely important, as an under-developed back can lead to poor posture.', 'Barbell', 'Back');
INSERT INTO workout VALUES('Pullup', 'Pullups are the most basic exercise that can be done with a pullup bar. Pullups are an ideally best preformed without fully straining yourself between repititions, and strengthening the upper back through them can help with posture.', 'Pullup Bar', 'Upper Back');
INSERT INTO workout VALUES('Chinup', 'Chinups are a modification of pullups that shift the workout more towards targeting the biceps. Most of the focus still remains on the upper back, and this variation is more comfortable for some.', 'Pullup Bar', 'Upper Back');
INSERT INTO workout VALUES('Hanging Leg Raise', 'Hanging leg raises are one of the best methods for working out the core for those with access to a pullup bar. The workout can be modified for beginners by bringing the knees close to the body, making the movement easier.', 'Pullup Bar', 'Core');
INSERT INTO workout VALUES('Burpee', 'Burpees are a great alternative to weighted squats, and if enough are preformed are also a great aerobic exercies that can be done anywhere.', 'No Equipment (Bodyweight)', 'Total Body');
INSERT INTO workout VALUES('Bodyweight Squat', 'Bodyweight squats are the #1 beginner lower body workout for those with no equipment. They are not too difficult for beginners, and are a great way to get the blood flowing for those sitting for long time periods.', 'No Equipment (Bodyweight)', 'Lower Body');
INSERT INTO workout VALUES('Split Squat', 'Split squats are a more difficult progression of the bodyweight squat, a good option for those who find normal squats too easy. It works one leg at a time, so be sure to perform the same amount of repititions on each leg.', 'No Equipment (Bodyweight)', 'Lower Body');
INSERT INTO workout VALUES('Pistol Squat', 'Pistol squats are an even more difficult progression of the bodyweight squat. Be warned that they require good balance to perform properly, so it may take time to learn the proper balance needed.', 'No Equipment (Bodyweight)', 'Lower Body');




