-- Use SQL insert statements to add any
-- starting/dummy data to your database tables

-- EXAMPLE:

--  insert into "todos"
--    ("task", "isCompleted")
--    values
--      ('Learn to code', false),
--      ('Build projects', false),
--      ('Get a job', false);

insert into "category" (
  "name"
)
values(

  'Mens'
),
(
  'Womens'
),
(
  'Kids'
);


insert into "products" (
  "name",
  "brand",
  "price",
  "size",
  "details",
  "imageUrl",
  "categoryId"
) values (
  'Vaporfly 2',
  'Nike',
  250,
  '[5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5]',
  'Continue the next evolution of speed with a racing shoe made to you help chase new goals and records.
  It helps improve comfort and breathability with a redesigned upper.
  From a 10K to a marathon, this model, like the previous version, has the responsive cushioning and secure support to push you towards your personal best.',
  '/images/nikevaporfly1.png',
  2
),
(
  'Mach 5',
  'Hoka',
  140,
  '[5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5]',
  'The lovechild of Mach 4 and Mach Supersonic, this lively pavement pounder is built for performance and ready to race.
  Sporting a stripped back creel mesh upper and lay-flat tongue, the new Mach 5 delivers a snappier
  ride with PROFLYs stacked midsole setup, offering a lightweight, responsive foam directly underfoot and rubberized EVA below.',
  '/images/hokamach1.png',
  2
),
(
  'Cloud Monster',
  'On',
  170,
  '[5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5]',
  'Running never felt like this. Our biggest Cloud elements ever meet an ultra powerful Speedboard®.
  The result? Extremely soft landings and maximum rebound, for energy return you won' || E't believe. This is running on Clouds with the volume turned up.',
  '/images/cloudmonsters1.png',
  2
),
(
  'Gel-Kayano 30',
  'Asics',
  160,
  '[5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5]',
  'From 5Ks to full marathons, the GEL-KAYANO® 30 shoe is designed to provide advanced stability and softer cushioning properties.
  ​The new 4D GUIDANCE SYSTEM™ helps provide adaptive stability. This helps you experience a more supportive and balanced stride during your distance training.',
  '/images/asics1.png',
  2
),
(
  'Vaporfly 2',
  'Nike',
  250,
  '[5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5]',
  'Continue the next evolution of speed with a racing shoe made to you help chase new goals and records.
  It helps improve comfort and breathability with a redesigned upper.
  From a 10K to a marathon, this model, like the previous version, has the responsive cushioning and secure support to push you towards your personal best.',
  '/images/mensnike1.png',
  1
),
(
  'Mach 5',
  'Hoka',
  140,
  '[5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5]',
   'The lovechild of Mach 4 and Mach Supersonic, this lively pavement pounder is built for performance and ready to race.
  Sporting a stripped back creel mesh upper and lay-flat tongue, the new Mach 5 delivers a snappier
  ride with PROFLYs stacked midsole setup, offering a lightweight, responsive foam directly underfoot and rubberized EVA below.',
  '/images/menshoka1.png',
  1
),
(
  'Cloud Monster',
  'On',
  170,
  '[5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5]',
  'Running never felt like this. Our biggest Cloud elements ever meet an ultra powerful Speedboard®.
  The result? Extremely soft landings and maximum rebound, for energy return you won' || E't believe. This is running on Clouds with the volume turned up.',
  '/images/menson1.png',
  1
),
(
  'Gel-Kayano 30',
  'Asics',
  160,
  '[5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5]',
  'From 5Ks to full marathons, the GEL-KAYANO® 30 shoe is designed to provide advanced stability and softer cushioning properties.
  ​The new 4D GUIDANCE SYSTEM™ helps provide adaptive stability. This helps you experience a more supportive and balanced stride during your distance training.',
  '/images/mensasics1.png',
  1
),
(
  'Pegasus 40',
  'Nike',
  105,
  '[1,1.5,2,2.5,3,3.5,4,4.5,5,5.5,6,6.5,7]',
  'The Pegasus 40 reps the past and future of Nike running. Whether you' || E're gearing up for a school track meet or just running around the playground,
  these shoes will help get you there.
  Breathable on top and bouncy on bottom, the lightweight design flexes with your foot so you comfortably cut, corner and spring into action when it' || E's time to play.',
  '/images/kidsnike1.png',
  3
),
(
  'Clifton 9',
  'Hoka',
  110,
  '[1,1.5,2,2.5,3,3.5,4,4.5,5,5.5,6,6.5,7]',
  'Designed for future milers and marathoners alike, the kids Clifton 9 delivers all the same cushy comfort
  and performance—now in a slightly smaller package. Designed to fit the unique shape of kids' || E' feet,
  we' || E've cued up an ultralight 30% sugarcane midsole, 31% recycled yarn upper, plus a high-abrasion rubber outsole to keep up with the most active of kiddos.',
  '/images/kidshoka1.png',
  3
),
(
  'Cloud Sky',
  'On',
  110,
  '[1,1.5,2,2.5,3,3.5,4,4.5,5,5.5,6,6.5,7]',
  'The shoe millions love, now adapted for 8-15 year olds. Lightweight, agile and flexible, so they can rewrite the limits.',
  '/images/kidson1.png',
  3
),
(
  'GT-1000',
  'Asics',
  100,
  '[1,1.5,2,2.5,3,3.5,4,4.5,5,5.5,6,6.5,7]',
  'The GT-1000™ 12 GRADE SCOOL shoe is designed to keep energized feet in motion. A LITETRUSS™ support system is placed in the midsole to increase stability as kids roll through their stride.
  Meanwhile, E.V.A cushioning and GEL™ technology create good shock absorption with a softer feel underfoot. Designed with a kids-specific last,
  these shoes offer a more accommodating fit for growing feet.
  Lastly, this style includes a solid rubber outsole, a medial wrap-up, and toe rubber stitching to improve durability.',
  '/images/kidsasics1.png',
  3
);
