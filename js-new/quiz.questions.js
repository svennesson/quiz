'use strict';

quiz.questions = (function () {
	var questions = [{
		q: 'Which is the only country to have played in each and every World Cup? \n\n',
		c: '1) Brazil \n2) England \n3) Uruguay',
		a: 1,
		category: 'sport'
	}, {
		q: 'The creator of Sherlock Holmes, Sir Arthur Conan Doyle, was the first keeper for which English football club? \n\n',
		c: '1) Arsenal FC \n2) York City \n3) AFC Portsmouth',
		a: 3,
		category: 'sport'
	}, {
		q: 'Which was the first African country to qualify for a World Cup? \n\n',
		c: '1) Egypt \n2) Nigeria \n3) Kongo',
		a: 1,
		category: 'sport'
	}, {
		q: 'Which country won the first World Cup held in 1930? \n\n',
		c: '1) Brazil \n2) Uruguay \n3) France',
		a: 2,
		category: 'sport'
	}, {
		q: 'What is El Clásico? \n\n',
		c: '1) A game between Real Madrid and Barcelona \n2) A game between Liverpool and Manchester United \n3) A game between Brazil and Germany',
		a: 1,
		category: 'sport'
	}, {
		q: 'Which country dominates Olympics basketball like no one else? \n\n',
		c: '1) Brazil \n2) Spain \n3) USA',
		a: 3,
		category: 'sport'
	}, {
		q: 'How many players are there in an ice hockey team? \n\n',
		c: '1) 6 \n2) 8 \n3) 10',
		a: 1,
		category: 'sport'
	}, {
		q: 'Who scored the winning penalty in the 2006 world cup final? \n\n',
		c: '1) Guisippe Rossi \n2) Fabio Grosso \n3) Andrea Pirlo',
		a: 2,
		category: 'sport'
	}, {
		q: 'In golf, what is meant by the term "birdie"? \n\n',
		c: '1) One ower par \n2) Two under par \n3) One under par',
		a: 3,
		category: 'sport'
	}, {
		q: 'How many red balls are used in a game of snooker? \n\n', // 10 QUESTIONS
		c: '1) 12 \n2) 15 \n3) 18',
		a: 2,
		category: 'sport'
	}, {
		q: 'In motor racing, which flag is waved to show the winner? \n\n',
		c: '1) Black and white \n2) White and red \n3) Black and red',
		a: 1,
		category: 'sport'
	}, {
		q: 'In tennis, what is the point score immediately after deuce? \n\n',
		c: '1) Winner \n2) Slammer \n3) Advantage',
		a: 3,
		category: 'sport'
	}, {
		q: 'What was the name of the England footballer to be the first European Footballer of the Year? \n\n',
		c: '1) Steven Gerrard \n2) Stanley Matthews \n3) Wayne Rooney',
		a: 2,
		category: 'sport'
	}, {
		q: 'Which sport would be played during the Corbillon Cup? \n\n',
		c: '1) Table tennis \n2) Tennis \n3) Curling',
		a: 1,
		category: 'sport'
	}, {
		q: 'Which country invented volleyball? \n\n',
		c: '1) Brazil \n2) Spain \n3) USA',
		a: 3,
		category: 'sport'
	}, {
		q: 'Which colour is an archery target centre? \n\n',
		c: '1) Red \n2) Gold \n3) Blue',
		a: 2,
		category: 'sport'
	}, {
		q: 'What is the highest possible score with three darts? \n\n',
		c: '1) 180 \n2) 160 \n3) 200',
		a: 1,
		category: 'sport'
	}, {
		q: 'In a rugby league team, how many players are there? \n\n',
		c: '1) 11 \n2) 12 \n3) 13',
		a: 3,
		category: 'sport'
	}, {
		q: 'On a roulette wheel, what is the highest number? \n\n',
		c: '1) 34 \n2) 36 \n3) 38',
		a: 2,
		category: 'sport'
	}, {
		q: 'In which sport is the Davis cup awarded? \n\n', // 20 QUESTIONS
		c: '1) Tennis \n2) Golf \n3) Curling',
		a: 1,
		category: 'sport'
	}, {
		q: 'Where was the FIFA World Cup held in 1986? \n\n',
		c: '1) Germany \n2) Italy \n3) Mexico',
		a: 3,
		category: 'sport'
	}, {
		q: 'Which Italian football club bought David Platt for £5.5 million? \n\n',
		c: '1) Bari \n2) Chievo\n3) Juventus',
		a: 1,
		category: 'sport'
	}, {
		q: 'In which Olympic sport is the wearing of a beard prohibited? \n\n',
		c: '1) Cycling \n2) Boxing \n3) Wrestling',
		a: 2,
		category: 'sport'
	}, {
		q: 'Which country did Baseball originate from? \n\n',
		c: '1) England \n2) USA \n3) Mexico',
		a: 1,
		category: 'sport'
	}, {
		q: 'In poker, which hand is more valuable, flush or full house? \n\n',
		c: '1) Flush \n2) Full house',
		a: 2,
		category: 'sport'
	}, {
		q: 'How many pockets does a snooker table have? \n\n',
		c: '1) 8 \n2) 4 \n3) 6',
		a: 3,
		category: 'sport'
	}, {
		q: 'How many periods is an ice hockey game divided into? \n\n',
		c: '1) 2 \n2) 3 \n3) 4',
		a: 2,
		category: 'sport'
	}, {
		q: 'How many holes are there in a standard ten pin bowling ball? \n\n',
		c: '1) 3 \n2) 4 \n3) 5',
		a: 1,
		category: 'sport'
	}, {
		q: 'How many motorbikes take place in a speedway race? \n\n',
		c: '1) 4 \n2) 6 \n3) 8',
		a: 1,
		category: 'sport'
	}, {
		q: 'Which footballer has an autobiography called Addicted? \n\n', // 30 QUESTIONS
		c: '1) David James \n2) Tony Irwing \n3) Tony Adams',
		a: 3,
		category: 'sport'
	}, {
		q: 'In which sport can a spider be used? \n\n',
		c: '1) Tennis \n2) Snooker \n3) Darts',
		a: 2,
		category: 'sport'
	}, {
		q: 'Venus Williams is a famous name in which sport? \n\n',
		c: '1) Tennis \n2) Snooker\n3) Darts',
		a: 1,
		category: 'sport'
	}, {
		q: 'Which country won the FIFA World Cup in the years of 1994 and 2002? \n\n',
		c: '1) Italy \n2) Germany \n3) Brazil',
		a: 3,
		category: 'sport'
	}, {
		q: 'Which country did the famous racehorse Secretariat compete for? \n\n',
		c: '1) England \n2) America \n3) Sweden',
		a: 2,
		category: 'sport'
	}, {
		q: 'In which sport is a dolly known as an easy catch? \n\n',
		c: '1) Cricket \n2) Baseball \n3) Lacrosse',
		a: 1,
		category: 'sport'
	}, {
		q: 'Which British city is home to Everton Football Club? \n\n',
		c: '1) London \n2) Liverpool \n3) Manchester',
		a: 2,
		category: 'sport'
	}, {
		q: 'Which color belt comes after white in karate? \n\n',
		c: '1) Black \n2) Green \n3) Yellow',
		a: 3,
		category: 'sport'
	}, {
		q: 'Which number is located between 15 and 17 on a standard dartboard? \n\n',
		c: '1) 2 \n2) 10 \n3) 16',
		a: 1,
		category: 'sport'
	}, {
		q: 'Who ran the first sub-four-minute mile? \n\n',
		c: '1) Mary Decker \n2) Roger Bannister \n3) Nelson Mandela',
		a: 2,
		category: 'sport'
	}, {
		q: 'What type of wood is a cricket bat traditionally made from? \n\n', // 40 QUESTIONS
		c: '1) Ent \n2) Oak \n3) Willow',
		a: 3,
		category: 'sport'
	}, {
		q: 'In darts, how many points do you get if you hit a bullseye? \n\n',
		c: '1) 60 \n2) 50 \n3) 100',
		a: 2,
		category: 'sport'
	}, {
		q: 'In snooker, which colour ball is potted last to complete the frame? \n\n',
		c: '1) White \n2) Black\n3) Red',
		a: 2,
		category: 'sport'
	}, {
		q: 'In football, in the Premiership, out of 20 teams how many are relegated each season? \n\n',
		c: '1) 2 \n2) 3 \n3) 4',
		a: 2,
		category: 'sport'
	}, {
		q: 'Which American based sport has all players wearing helmets in a field with 10 team members and up to 13 subs? \n\n',
		c: '1) Baseball \n2) Soccer \n3) Lacrosse',
		a: 3,
		category: 'sport'
	}, {
		q: 'Which athlete won the Sports TV Personality of the year in 2011? \n\n',
		c: '1) Mark Cavendish \n2) Phil Taylor \n3) Michael Owen',
		a: 1,
		category: 'sport'
	}, {
		q: 'Who Am I – I am nicknamed “The Power” from Stoke and has won to date 14 world championships? \n\n',
		c: '1) Mark Cavendish \n2) Phil Taylor \n3) Steven Gerrard',
		a: 2,
		category: 'sport'
	}, {
		q: 'Sir Steve Redgrave is the most successful male in which sport: Ice Staking, Rowing or Gymnastics? \n\n',
		c: '1) Ice Staking \n2) Rowing \n3) Gymnastics',
		a: 2,
		category: 'sport'
	}, {
		q: 'What are the New Zealand national rugby team often referred to as – All Reds, All Whites or All Blacks? \n\n',
		c: '1) All reds \n2) All Whites \n3) All blacks',
		a: 3,
		category: 'sport'
	}, {
		q: 'Craven Cottage has been the football stadium since 1896 for which London based team? \n\n',
		c: '1) Fulham \n2) Queens Park Rangers \n3) West Ham',
		a: 1,
		category: 'sport'
	}, {
		q: 'True or False: Martin Johnson is known for his career in rugby? \n\n', // 50 SPORT QUESTIONS
		c: '1) False \n2) True',
		a: 2,
		category: 'sport'
	}, {
		q: 'What date was D-Day? \n\n',
		c: '1) 6th June, 1944 \n2) 5th June, 1944 \n3) 6th June, 1946 \n4) 5th June, 1946',
		a: 1,
		category: 'history'
	}, {
		q: 'How many of King Henry VIIIs wives were called Catherine? \n\n',
		c: '1) 2 \n2) 3\n3) 4',
		a: 2,
		category: 'history'
	}, {
		q: 'Which country was General Franco a dictator of? \n\n',
		c: '1) France \n2) Spain \n3) Italy',
		a: 2,
		category: 'history'
	}, {
		q: 'During which year did Fidel Castro gain power over Cuba? \n\n',
		c: '1) 1939 \n2) 1949 \n3) 1959',
		a: 3,
		category: 'history'
	}, {
		q: 'What is the name of the city where John F. Kennedy was assassinated? \n\n',
		c: '1) Dallas \n2) New York \n3) Boston',
		a: 1,
		category: 'history'
	}, {
		q: 'Which war first introduced the use of tanks? \n\n',
		c: '1) The cold war \n2) World War 1 \n3) World war 2',
		a: 2,
		category: 'history'
	}, {
		q: 'During which year did Sir Winston Churchill step into power over Great Britain? \n\n',
		c: '1) 1880 \n2) 1910 \n3) 1940',
		a: 3,
		category: 'history'
	}, {
		q: 'What were Norsemen better known as? \n\n',
		c: '1) Pirates \n2) Crusaders \n3) Vikings',
		a: 3,
		category: 'history'
	}, {
		q: 'During which year did the RMS Titanic sink? \n\n',
		c: '1) 1912 \n2) 1922 \n3) 1932',
		a: 1,
		category: 'history'
	}, {
		q: 'Who was the first president of America? \n\n', // 10 HISTORY QUESTIONS
		c: '1) Benjamin Franklin \n2) George Washington \n)3 John F Kennedy',
		a: 2,
		category: 'history'
	}, {
		q: 'During which year did Adolf Hitler die? \n\n',
		c: '1) 1945 \n2) 1950 \n3) 1940',
		a: 1,
		category: 'history'
	}, {
		q: 'During which year did Christopher Columbus discover the Bahamas? \n\n',
		c: '1) 1392 \n2) 1492 \n3) 1592',
		a: 2,
		category: 'history'
	}, {
		q: 'Which famous artist painted the ceiling of the Sistine Chapel? \n\n',
		c: '1) Leonardo Da Vinci \n2) Michelangelo \n3) Vincent Van Gogh',
		a: 2,
		category: 'history'
	}, {
		q: 'What was the Flying Scotsman? \n\n',
		c: '1) A ship \n2) A plane \n3) A train',
		a: 3,
		category: 'history'
	}, {
		q: 'In which country was the Statue of Zeus located? \n\n',
		c: '1) Greece \n2) France \n3) Italy',
		a: 1,
		category: 'history'
	}, {
		q: 'Which city did the Romans refer to as Londinium? \n\n',
		c: '1) Milano \n2) London \n3) Liverpool',
		a: 2,
		category: 'history'
	}, {
		q: 'In which country was Adolf Hitler born? \n\n',
		c: '1) Germany \n2) Poland \n3) Austria',
		a: 3,
		category: 'history'
	}, {
		q: 'In which year did the Falklands War take place? \n\n',
		c: '1) 1962 \n2) 1972 \n3) 1982',
		a: 3,
		category: 'history'
	}, {
		q: 'What is the name of King Arthurs sword? \n\n',
		c: '1) Excalibur \n2) Glamdring \n3) Hywelbane',
		a: 1,
		category: 'history'
	}, {
		q: 'Which country was Saddam Hussein a ruler of? \n\n', // 20 HISTORY QUESTIONS
		c: '1) Iran \n2) Iraq \n)3 Montenegro',
		a: 2,
		category: 'history'
	}, {
		q: 'During which year was The Great Fire of London? \n\n',
		c: '1) 1666 \n2) 1777 \n3) 1888',
		a: 1,
		category: 'history'
	}, {
		q: 'What was the name of the fleet that launched an attack on England in May 1588? \n\n',
		c: '1) The French Armada \n2) The Spanish Armada \n3) The German Armada',
		a: 2,
		category: 'history'
	}, {
		q: 'Which country did Iraq invade in 1990? \n\n',
		c: '1) Iran \n2) Kuwait \n3) Israel',
		a: 2,
		category: 'history'
	}, {
		q: 'At the Battle of Trafalgar, what was the name of Nelsons flagship? \n\n',
		c: '1) The Keeper \n2) The Dutchmen \n3) The Victory',
		a: 3,
		category: 'history'
	}, {
		q: 'What was the name of the mistress of Adolf Hitler? \n\n',
		c: '1) Eva Braun \n2) Jane Seymour \n3) Amelia Earhart',
		a: 1,
		category: 'history'
	}, {
		q: 'What was the name of the first American president to be assassinated? \n\n',
		c: '1) George Washington \n2) Abraham Lincoln \n3) John f Kennedy',
		a: 2,
		category: 'history'
	}, {
		q: 'During which year did Columbus discover America? \n\n',
		c: '1) 1292 \n2) 1392 \n3) 1492',
		a: 3,
		category: 'history'
	}, {
		q: 'Which leader famously said we shall fight them on the beaches? \n\n',
		c: '1) Napoleon \n2) Da Vinci \n3) Winston Churchill',
		a: 3,
		category: 'history'
	}, {
		q: 'Who was first to fly over the English Channel? \n\n',
		c: '1) Louis Bleriot \n2) Amelia Eahart \n3) Jane Seymour',
		a: 1,
		category: 'history'
	}, {
		q: 'In which year did the first Afghan war take place? \n\n', // 30 HISTORY QUESTIONS
		c: '1) 1809 \n2) 1839 \n)3 1869',
		a: 2,
		category: 'history'
	}, {
		q: 'With which country was the first China war fought against? \n\n',
		c: '1) Britain \n2) Sweden \n3) Spain',
		a: 1,
		category: 'history'
	}, {
		q: 'What was the name of the famous British Admiral who only had one eye? \n\n',
		c: '1) Amar \n2) Nelson \n3) Eustus',
		a: 2,
		category: 'history'
	}, {
		q: 'What is the name given to the Pirates flag that bears the skull and cross bones? \n\n',
		c: '1) Jolly Jimmy \n2) Jolly Roger \n3) Jolly Nelson',
		a: 2,
		category: 'history'
	}, {
		q: 'In 1999, which country voted to keep the Queen? \n\n',
		c: '1) England \n2) Scotland \n3) Australia',
		a: 3,
		category: 'history'
	}, {
		q: 'What was the name of the man that killed Abraham Lincoln? \n\n',
		c: '1) John Wilkes Booth \n2) Jolly Roger \n3) Neville Chamberlain',
		a: 1,
		category: 'history'
	}, {
		q: 'Which army destroyed the Inca empire in 1532? \n\n',
		c: '1) Rome \n2) Spain \n3) Norsemen',
		a: 2,
		category: 'history'
	}, {
		q: 'Who was the President of America before Barack Obama? \n\n',
		c: '1) Richard Nixon \n2) Hillary Clinton \n3) George Bush',
		a: 3,
		category: 'history'
	}, {
		q: 'Which famous car manufacturer designed the merlin engine which was used to power numerous aircrafts during the second world war? \n\n',
		c: '1) Volksvagen \n2) Mercedes \n3) Rolls-Royce',
		a: 3,
		category: 'history'
	}, {
		q: 'In which year did Germany attack France during the Second World War? \n\n',
		c: '1) 1940 \n2) 1941 \n3) 1942',
		a: 1,
		category: 'history'
	}, {
		q: 'Who designed the dome of St Peters in Rome? \n\n', // 40 HISTORY QUESTIONS
		c: '1) Leonardo Da Vinci \n2) Michelangelo \n)3 Vincent Van Gogh',
		a: 2,
		category: 'history'
	}, {
		q: 'Which country has the worlds oldest flag? \n\n',
		c: '1) Denmark \n2) Sweden \n3) Spain',
		a: 1,
		category: 'history'
	}, {
		q: 'In which city was the Titanic built? \n\n',
		c: '1) Warsawa \n2) Belfast \n3) Riga',
		a: 2,
		category: 'history'
	}, {
		q: 'Which two countries fought during the Falklands War? \n\n',
		c: '1) Argentina and Italy \n2) Argentina and Great Britain \n3) Italy and Great Britain',
		a: 2,
		category: 'history'
	}, {
		q: 'What is the largest of the dinosaurs? \n\n',
		c: '1) Tyrannosaurus Rex \n2) Triceratops \n3) Brachiosaurus',
		a: 3,
		category: 'history'
	}, {
		q: 'During which year did the London Underground first open? \n\n',
		c: '1) 1863 \n2) 1873 \n3) 1883',
		a: 1,
		category: 'history'
	}, {
		q: 'Which German city was divided by a wall? \n\n',
		c: '1) Munich \n2) Berlin \n3) Frankfurt',
		a: 2,
		category: 'history'
	}, {
		q: 'In which city was Martin Luther King shot in the year of 1968? \n\n',
		c: '1) Dallas \n2) Boston \n3) Memphis',
		a: 3,
		category: 'history'
	}, {
		q: 'Who was the first Republican President of America? \n\n',
		c: '1) Richard Nixon \n2) John f Kennedy \n3) Abraham Lincoln',
		a: 3,
		category: 'history'
	}, {
		q: 'Which nation invented fireworks? \n\n',
		c: '1) China \n2) Japan \n3) USA',
		a: 1,
		category: 'history'
	}, {
		q: 'What was the yame of the president who was shot whilst walking to California Governor Jerry Brown office? \n\n', // 50 HISTORY QUESTIONS
		c: '1) John F Kennedy \n2) Gerald Ford \n)3 Abraham Lincoln',
		a: 2,
		category: 'history'
	}, {
		q: 'What is the name of the biggest ocean on Earth \n\n',
		c: '1) Atlantic Ocean \n2) The Pacific Ocean \n3) Indian Ocean',
		a: 2,
		category: 'geography'
	}, {
		q: 'By area, what is the biggest state in the USA?? \n\n',
		c: '1) New York \n2) California \n3) Alaska',
		a: 3,
		category: 'geography'
	}, {
		q: 'What is the capital city of Australia? \n\n',
		c: '1) Melbourne \n2) Sydney \n3) Canberra',
		a: 3,
		category: 'geography'
	}, {
		q: 'Stratus, cumulus, cirrus and nimbus are types of what \n\n',
		c: '1) Stones FC \n2) Clouds \n3) Winds',
		a: 2,
		category: 'geography'
	}, {
		q: 'What is the name of a person who studies earthquakes? \n\n', //5
		c: '1) Seismologist \n2) Archaeologist \n3) Dentist',
		a: 1,
		category: 'geography'
	}, {
		q: 'In which country would you find the Leaning Tower of Pisa? \n\n',
		c: '1) France \n2) Italy \n3) Greece',
		a: 2,
		category: 'geography'
	}, {
		q: 'What is the name of the highest mountain on Earth \n\n',
		c: '1) Mt Everest \n2) Kebnekaise \n3) K2',
		a: 1,
		category: 'geography'
	}, {
		q: 'Helsinki is the capital city of which country? \n\n',
		c: '1) India \n2) China \n3) Finland',
		a: 3,
		category: 'geography'
	}, {
		q: 'The Yangtze is the longest river in the world? \n\n',
		c: '1) Yes \n2) No \n3) WAT?',
		a: 2,
		category: 'geography'
	}, {
		q: 'The terms "breeze" and "gale" help describe the speed of what? \n\n', // 10 GEOGRAPHY QUESTIONS
		c: '1) Light \n2) Sound \n3) Wind',
		a: 3,
		category: 'geography'
	}, {
		q: 'Which US state has the most farmland, in square miles? \n\n', //11
		c: '1) Montana \n2) Utah \n3) Texas',
		a: 3,
		category: 'geography'
	}, {
		q: 'What countrys language is Magyar? \n\n',
		c: '1) Estonia \n2) Hungary \n3) Germany',
		a: 2,
		category: 'geography'
	}, { //13
		q: 'What European capital stands on the river Aare? \n\n',
		c: '1) Bern \n2) Paris \n3) Stockholm',
		a: 1,
		category: 'geography'
	}, { //14
		q: 'In which country would you find the Taj Mahal? \n\n',
		c: '1) India \n2) China \n3) Egypt',
		a: 1,
		category: 'geography'
	}, { //15
		q: 'Which country has the most people? \n\n',
		c: '1) India \n2) China \n3) America',
		a: 2,
		category: 'geography'
	}, { //16
		q: 'How many states are there in the USA? \n\n',
		c: '1) 40 \n2) 50 \n3) 60',
		a: 2,
		category: 'geography'
	}, { //17
		q: 'On which continent is the Sahara desert? \n\n',
		c: '1) Asia \n2) Europe \n3) Africa',
		a: 3,
		category: 'geography'
	}, { //18
		q: 'In what city would you find Charing Cross station? \n\n',
		c: '1) Glasgow \n2) Dublin \n3) London',
		a: 3,
		category: 'geography'
	}, { //19
		q: 'How do you say ‘Hello’ in Spanish? \n\n',
		c: '1) Bonjour \n2) Hola \n3) Hallo',
		a: 2,
		category: 'geography'
	}, { //20
		q: 'If you had some yen to spend, what country would you be in? \n\n', // 20 GEOGRAPHY QUESTIONS
		c: '1) Japan \n2) China \n3) India',
		a: 1,
		category: 'geography'
	}, { //21
		q: 'Which country’s capital city is Berlin? \n\n',
		c: '1) Germany \n2) France \n3) Belgium',
		a: 1,
		category: 'geography'
	}, { //22
		q: 'On which continent would you find the South Pole? \n\n',
		c: '1) Europe \n2) Africa \n3) Antarctica',
		a: 3,
		category: 'geography'
	}];
	return questions;
}());