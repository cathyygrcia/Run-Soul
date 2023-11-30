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
  "featured",
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
  'false',
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
  'false',
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
  'false',
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
  'false',
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
  'false',
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
  'false',
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
  'false',
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
  'false',
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
  'true',
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
  'false',
  3
),
(
  'Cloud Sky',
  'On',
  110,
  '[1,1.5,2,2.5,3,3.5,4,4.5,5,5.5,6,6.5,7]',
  'The shoe millions love, now adapted for 8-15 year olds. Lightweight, agile and flexible, so they can rewrite the limits.',
  '/images/kidson1.png',
  'false',
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
  'false',
  3
),
(
  'Vaporfly 3',
  'Nike',
  260,
  '[5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5]',
  'Catch ‘em if you can. Giving you race-day speed to conquer any distance, the Nike Vaporfly 3 is made for the chasers, the racers,
  the elevated pacers who can’t turn down the thrill of the pursuit.
  We reworked the leader of the super shoe pack and tuned the engine underneath to help you chase personal bests from a 10K to marathon.
  From elite runners to those new to racing, this versatile road-racing workhorse is for those who see speed as a gateway to more miles and more seemingly uncatchable highs.',
  '/images/nike2.png',
  'true',
  1
),
(
  'Mach X',
  'Hoka',
  180,
  '[5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5]',
  'What do you get when you cross the comfort and support of the Mach with a propulsive Pebax® plate?
  You’re looking at it. A pace-pushing trainer built with high-rebound cushioning; the new Mach X is supercharged with a layer of PEBA foam that’s 34% more resilient than the Carbon X3 foam.
  Softer and snappier than ever before, this adaptable trainer is comfortable enough for endurance efforts and responds equally well to pace increases.',
  '/images/hoka1.png',
  'true',
  1
),
(
  'Metaspeed Edge+',
  'Asics',
  250,
  '[5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5]',
  'The METASPEED™ EDGE+ racing shoes are designed for cadence-style runners who are looking to start fast and finish faster.
  Runners wearing these shoes will be able to take longer strides while conserving energy with each step. ​
  Thanks to an energetic midsole foam and a propulsive carbon plate, runners wearing these shoes will be able to conserve more energy while maintaining their pace at the later stages of the race.​',
  '/images/asicsf1.png',
  'true',
  2
),
(
  'Cloudrunner',
  'On',
  170,
  '[5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5]',
  'Enjoy super-soft landings and support at every step. CloudTec® cushioning in ultralight Zero-Gravity foam and a wider bottom unit with a cradle-shaped construction
  let you forget gravity. Plus, the upgraded 360° waterproof upper keeps you cool and dry whatever the conditions.',
  '/images/on1.png',
  'true',
  2
),
(
  'Speedgoat',
  'Hoka',
  155,
  '[1,1.5,2,2.5,3,3.5,4,4.5,5,5.5,6,6.5,7]',
  'A workhorse designed for technical trails, the Speedgoat returns with less weight and more traction than ever before.
  A new shoe from outsole to laces, this trail beast is updated with Vibram® Megagrip with Traction Lug for enhanced grip on loose soil.
  Retaining the same stack height and rocker profile, the Speedgoat 5 employs a lighter midsole compound and heartier, double layer jacquard mesh to inspire confidence on any terrain.',
  '/images/speedgoat1.png',
  'true',
  3

);

insert into "images"(
  "productId",
  "imageUrl"
)
values
(
  1,
  '/images/nikevaporfly1.png'
),
(
  1,
  '/images/nikevaporfly2.png'
),
(
  1,
  '/images/nikevaporfly3.png'
),
(
  1,
  '/images/nikevaporfly4.png'
),
(
  2,
  '/images/hokamach1.png'
),
(
  2,
  '/images/hokamach2.png'
),
(
  2,
  '/images/hokamach3.png'
),
(
  2,
  '/images/hokamach4.png'
),
(
  3,
  '/images/cloudmonsters1.png'
),
(
  3,
  '/images/cloudmonsters2.png'
),
(
  3,
  '/images/cloudmonsters3.png'
),
(
  3,
  '/images/cloudmonsters4.png'
),
(
  4,
  '/images/asics1.png'
),
(
  4,
  '/images/asics2.png'
),
(
  4,
  '/images/asics3.png'
),
(
  4,
  '/images/asics4.png'
),
(
  5,
  '/images/mensnike1.png'
),
(
  5,
  '/images/mensnike2.png'
),
(
  5,
  '/images/mensnike3.png'
),
(
  5,
  '/images/mensnike4.png'
),
(
  6,
  '/images/menshoka1.png'
),
(
  6,
  '/images/menshoka2.png'
),
(
  6,
  '/images/menshoka3.png'
),
(
  6,
  '/images/menshoka4.png'
),
(
  7,
  '/images/menson1.png'
),
(
  7,
  '/images/menson2.png'
),
(
  7,
  '/images/menson3.png'
),
(
  7,
  '/images/menson4.png'
),
(
  8,
  '/images/mensasics1.png'
),
(
  8,
  '/images/mensasics2.png'
),
(
  8,
  '/images/mensasics3.png'
),
(
  8,
  '/images/mensasics4.png'
),
(
  9,
  '/images/kidsnike1.png'
),
(
  9,
  '/images/kidsnike2.png'
),
(
  9,
  '/images/kidsnike3.png'
),
(
  9,
  '/images/kidsnike4.png'
),
(
  10,
  '/images/kidshoka1.png'
),
(
  10,
  '/images/kidshoka2.png'
),
(
  10,
  '/images/kidshoka3.png'
),
(
  10,
  '/images/kidshoka4.png'
),
(
  11,
  '/images/kidson1.png'
),
(
  11,
  '/images/kidson2.png'
),
(
  11,
  '/images/kidson3.png'
),
(
  11,
  '/images/kidson4.png'
),
(
  12,
  '/images/kidsasics1.png'
),
(
  12,
  '/images/kidsasics2.png'
),
(
  12,
  '/images/kidsasics3.png'
),
(
  12,
  '/images/kidsasics4.png'
),
(
  13,
  '/images/nike1.png'
),
(
  13,
  '/images/nike2.png'
),
(
  13,
  '/images/nike3.png'
),
(
  13,
  '/images/nike4.png'
),
(
  14,
  '/images/hoka1.png'
),
(
  14,
  '/images/hoka2.png'
),
(
  14,
  '/images/hoka3.png'
),
(
  14,
  '/images/hoka4.png'
),
(
  15,
  '/images/asicsf1.png'
),
(
  15,
  '/images/asicsf2.png'
),
(
  15,
  '/images/asicsf3.png'
),
(
  15,
  '/images/asicsf4.png'
),
(
  16,
  '/images/on1.png'
),
(
  16,
  '/images/on2.png'
),
(
  16,
  '/images/on3.png'
),
(
  16,
  '/images/on4.png'
),
(
  17,
  '/images/speedgoat1.png'
),
(
  17,
  '/images/speedgoat2.png'
),
(
  17,
  '/images/speedgoat3.png'
),
(
  17,
  '/images/speedgoat4.png'
);
