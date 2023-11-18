-- Use SQL insert statements to add any
-- starting/dummy data to your database tables

-- EXAMPLE:

--  insert into "todos"
--    ("task", "isCompleted")
--    values
--      ('Learn to code', false),
--      ('Build projects', false),
--      ('Get a job', false);

insert into "products" (
  "name",
  "brand",
  "price",
  "size",
  "details",
  "imageUrl"
) values (
  'Vaporfly 2',
  'Nike',
  250,
  '[5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5]',
  'Continue the next evolution of speed with a racing shoe made to you help chase new goals and records.
  It helps improve comfort and breathability with a redesigned upper.
  From a 10K to a marathon, this model, like the previous version, has the responsive cushioning and secure support to push you towards your personal best.',
  '/images/nikevaporfly1.png'
),
(
  'Mach 5',
  'Hoka',
  140,
  '[5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5]',
  'The lovechild of Mach 4 and Mach Supersonic, this lively pavement pounder is built for performance and ready to race.
  Sporting a stripped back creel mesh upper and lay-flat tongue, the new Mach 5 delivers a snappier
  ride with PROFLYs stacked midsole setup, offering a lightweight, responsive foam directly underfoot and rubberized EVA below.',
  '/images/hokamach1.png'
),
(
  'Cloud Monster',
  'On',
  170,
  '[5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5]',
  'Running never felt like this. Our biggest Cloud elements ever meet an ultra powerful Speedboard®.
  The result? Extremely soft landings and maximum rebound, for energy return you won' || E't believe. This is running on Clouds with the volume turned up.',
  '/images/cloudmonsters1.png'
),
(
  'Gel-Kayano 30',
  'Asics',
  160,
  '[5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5]',
  'From 5Ks to full marathons, the GEL-KAYANO® 30 shoe is designed to provide advanced stability and softer cushioning properties.
  ​The new 4D GUIDANCE SYSTEM™ helps provide adaptive stability. This helps you experience a more supportive and balanced stride during your distance training.',
  '/images/asics1.png'
),
(
  'Ghost 15',
  'Brooks',
  140,
  '[5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5]',
  'Its a marathon Our long term science based approach The carbon neutral Ghost 15 is only our latest sustainability effort. Take a look at where we' || E're headed on our path to a healthier planet.',
  '/images/brooks1.png'
)
