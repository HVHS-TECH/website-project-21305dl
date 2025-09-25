// Questions sorted by category (25 each)
// Question content is copied using AI, the coding format and main array is created by me
const questions = [
    {
        category: "ecology",
        questions: [
             {
                question: "What is an ecosystem?",
                options: [
                    "A group of the same species living together",
                    "Living things, their environment, and their interactions",
                    "Only the abiotic factors in an environment",
                    "A single food chain"],
                correctAnswer: 1,
            },
            {
                question: "Which of the following is a biotic factor?",
                options: [
                    "Sunlight",
                    "Soil moisture",
                    "Predation",
                    "Temperature"],
                correctAnswer: 2,
            },
            {
                question: "Which of the following is an abiotic factor?",
                options: [
                    "Trees",
                    "Birds",
                    "Wind",
                    "Insects"],
                correctAnswer: 2,
            },
            {
                question: "What does the term 'habitat' mean?",
                options: [
                    "The role an organism plays in its ecosystem",
                    "The environment where an organism lives",
                    "The genetic makeup of an organism",
                    "A group of different populations"],
                correctAnswer: 1,
            },
            {
                question: "What is a species?",
                options: [
                    "A group of organisms that can interbreed and produce fertile offspring",
                    "Any group of animals living in the same place",
                    "A type of habitat",
                    "A food chain component"],
                correctAnswer: 0,
            },
            {
                question: "Closely related species belong to the same:",
                options: [
                    "Family",
                    "Genus",
                    "Order",
                    "Kingdom"],
                correctAnswer: 1,
            },
            {
                question: "Which of the following is a structural adaptation?",
                options: [
                    "Nocturnal feeding",
                    "A penguin's waterproof feathers",
                    "Migration in winter",
                    "Producing concentrated urine"],
                correctAnswer: 1,
            },
            {
                question: "Which of the following is a behavioural adaptation?",
                options: [
                    "Large leaves for photosynthesis",
                    "Thick fur for insulation",
                    "Hibernation during cold months",
                    "Long roots to reach water"],
                correctAnswer: 2,
            },
            {
                question: "Which of the following is a functional (physiological) adaptation?",
                options: [
                    "A tui's curved beak",
                    "Photosynthesis in leaves",
                    "Penguins huddling together",
                    "Gecko's sticky feet"],
                correctAnswer: 1,
            },
            {
                question: "Why do all food chains start with a producer?",
                options: [
                    "Producers eat other organisms",
                    "Producers provide energy by making food using sunlight",
                    "Producers recycle nutrients",
                    "Producers are predators"],
                correctAnswer: 1,
            },
            {
                question: "Which of the following is a producer in New Zealand ecosystems?",
                options: [
                    "Kauri tree",
                    "Kiwi",
                    "Stoat",
                    "Weta"],
                correctAnswer: 0,
            },
            {
                question: "Which is an example of a decomposer?",
                options: [
                    "Mushrooms",
                    "Kea",
                    "Silver fern",
                    "Kakapo"],
                correctAnswer: 0,
            },
            {
                question: "What is the role of consumers in a food web?",
                options: [
                    "Produce energy from sunlight",
                    "Break down dead material",
                    "Feed on other organisms for energy",
                    "Recycle nutrients into the soil"],
                correctAnswer: 2,
            },
            {
                question: "If the population of a top predator decreases, what may happen?",
                options: [
                    "Prey populations increase",
                    "Prey populations decrease",
                    "Producers stop photosynthesising",
                    "Decomposers die out"],
                correctAnswer: 0,
            },
            {
                question: "What is a food web?",
                options: [
                    "A chain showing one path of energy flow",
                    "A network of interconnected food chains",
                    "A relationship between only producers and decomposers",
                    "A list of abiotic factors"],
                correctAnswer: 1,
            },
            {
                question: "Which of these is an example of a human threat to ecosystems?",
                options: [
                    "Introduced predators",
                    "Habitat destruction",
                    "Plastic pollution",
                    "All of the above"],
                correctAnswer: 3,
            },
            {
                question: "Why are introduced predators like stoats a threat to New Zealand's native species?",
                options: [
                    "They compete with humans for food",
                    "Native species did not evolve with mammalian predators",
                    "They increase biodiversity",
                    "They recycle nutrients"],
                correctAnswer: 1,
            },
            {
                question: "What is one effect of overfishing on marine ecosystems?",
                options: [
                    "Increased fish biodiversity",
                    "Disruption of food webs",
                    "More stable populations",
                    "Improved ecosystem balance"],
                correctAnswer: 1,
            },
            {
                question: "Why are marine reserves important in New Zealand?",
                options: [
                    "They reduce pollution",
                    "They protect habitats and species for conservation",
                    "They allow more fishing",
                    "They remove abiotic factors"],
                correctAnswer: 1,
            },
            {
                question: "Which of the following is an example of eco-tourism pressure on marine species?",
                options: [
                    "Whale watching disturbing whale behaviour",
                    "Increased seaweed growth",
                    "Reduced boat traffic",
                    "Penguin colonies expanding"],
                correctAnswer: 0,
            },
            {
                question: "What is biosecurity?",
                options: [
                    "Protecting borders from unwanted species and diseases",
                    "Managing water quality",
                    "Increasing biodiversity",
                    "Promoting eco-tourism"],
                correctAnswer: 0,
            },
            {
                question: "Which of the following is an example of habitat destruction?",
                options: [
                    "Clearing native bush for farmland",
                    "Planting more native trees",
                    "Building marine reserves",
                    "Restoring wetlands"],
                correctAnswer: 0,
            },
            {
                question: "What is one solution to plastic waste in ecosystems?",
                options: [
                    "Using biodegradable alternatives",
                    "Producing more plastics",
                    "Encouraging overfishing",
                    "Introducing more predators"],
                correctAnswer: 0,
            },
            {
                question: "Why are New Zealand's offshore islands important for conservation?",
                options: [
                    "They provide safe habitats free of predators",
                    "They increase tourism only",
                    "They reduce oxygen in the atmosphere",
                    "They destroy food webs"],
                correctAnswer: 0,
            },
            {
                question: "What tool can scientists use to identify unknown species?",
                options: [
                    "Punnett square",
                    "Food chain",
                    "Identification key",
                    "Energy pyramid"],
                correctAnswer: 2,
            },
        ],
    },

    {
        category: "astronomy",
        questions: [
                {
                question: "Why is the Sun essential to our solar system?",
                options: [
                    "It provides light and heat energy for life on Earth",
                    "It reflects light from other stars",
                    "It produces Earth's gravity",
                    "It causes earthquakes"],
                correctAnswer: 0,
            },
            {
                question: "What causes night and day on Earth?",
                options: [
                    "Earth's revolution around the Sun",
                    "Earth's rotation on its axis",
                    "The Moon's orbit around Earth",
                    "The tilt of Earth's axis"],
                correctAnswer: 1,
            },
            {
                question: "What is the length of a day?",
                options: [
                    "The time for Earth to orbit the Sun once",
                    "The time for Earth to rotate once on its axis",
                    "The time for the Moon to orbit Earth",
                    "The time from sunrise to sunset"],
                correctAnswer: 1,
            },
            {
                question: "What is the length of a year?",
                options: [
                    "The time for Earth to rotate once",
                    "The time for Earth to orbit the Sun once",
                    "The time for the Moon to orbit Earth",
                    "The time for the Sun to rise and set"],
                correctAnswer: 1,
            },
            {
                question: "What does rotate mean?",
                options: [
                    "To spin on an axis",
                    "To orbit around another object",
                    "To tilt towards the Sun",
                    "To travel in a straight line"],
                correctAnswer: 0,
            },
            {
                question: "What does revolve mean?",
                options: [
                    "To spin on an axis",
                    "To orbit around another object",
                    "To move with the Sun",
                    "To spin the Moon"],
                correctAnswer: 1,
            },
            {
                question: "What causes the seasons on Earth?",
                options: [
                    "The Moon's orbit around Earth",
                    "The tilt of Earth's axis as it orbits the Sun",
                    "The Sun moving closer to Earth in summer",
                    "Changes in Earth's rotation speed"],
                correctAnswer: 1,
            },
            {
                question: "Which of the following is a phase of the Moon?",
                options: [
                    "Solar eclipse",
                    "Half moon",
                    "Sunspot",
                    "Aurora"],
                correctAnswer: 1,
            },
            {
                question: "What causes tides on Earth?",
                options: [
                    "The Moon's gravitational pull",
                    "The tilt of Earth's axis",
                    "The rotation of the Sun",
                    "The seasons"],
                correctAnswer: 0,
            },
            {
                question: "What is a solar eclipse?",
                options: [
                    "The Earth passes between the Sun and Moon",
                    "The Moon passes between the Sun and Earth",
                    "The Sun passes between Earth and Moon",
                    "The Moon's shadow covers the Sun permanently"],
                correctAnswer: 1,
            },
            {
                question: "What is Maramataka?",
                options: [
                    "The Māori lunar calendar",
                    "The Māori solar calendar",
                    "The constellation of Matariki",
                    "A type of telescope"],
                correctAnswer: 0,
            },
            {
                question: "What does Maramataka help with?",
                options: [
                    "Identifying earthquakes",
                    "Telling the time of day",
                    "Planning fishing, planting, and harvesting",
                    "Mapping the solar system"],
                correctAnswer: 2,
            },
            {
                question: "Why is Matariki important in Aotearoa New Zealand?",
                options: [
                    "It signals the Māori New Year",
                    "It marks the longest day of the year",
                    "It shows the start of summer",
                    "It causes high tides"],
                correctAnswer: 0,
            },
            {
                question: "Which measurement is commonly used for distances within our Solar System?",
                options: [
                    "Light years",
                    "Astronomical units (AU)",
                    "Parsecs",
                    "Kilometres only"],
                correctAnswer: 1,
            },
            {
                question: "Approximately how far is Earth from the Sun?",
                options: [
                    "150,000 km",
                    "150 million km",
                    "1 million km",
                    "1 billion km"],
                correctAnswer: 1,
            },
            {
                question: "Which planet is known as the 'Red Planet'?",
                options: [
                    "Venus",
                    "Mars",
                    "Jupiter",
                    "Mercury"],
                correctAnswer: 1,
            },
            {
                question: "Which planet is the largest in the Solar System?",
                options: [
                    "Earth",
                    "Saturn",
                    "Jupiter",
                    "Neptune"],
                correctAnswer: 2,
            },
            {
                question: "Which tool has been most important in exploring space?",
                options: [
                    "Thermometers",
                    "Telescopes",
                    "Compasses",
                    "Microscopes"],
                correctAnswer: 1,
            },
            {
                question: "What is a galaxy?",
                options: [
                    "A system of stars, gas, and dust held together by gravity",
                    "A single star with its planets",
                    "The path a planet takes around the Sun",
                    "A type of telescope"],
                correctAnswer: 0,
            },
            {
                question: "Which of the following is not a planet?",
                options: [
                    "Venus",
                    "Pluto",
                    "Saturn",
                    "Neptune"],
                correctAnswer: 1,
            },
            {
                question: "What is one issue of space exploration?",
                options: [
                    "It increases rainfall",
                    "It can cause space junk",
                    "It reduces global warming",
                    "It destroys ecosystems on Earth"],
                correctAnswer: 1,
            },
            {
                question: "Which of the following is a challenge of travelling to Mars?",
                options: [
                    "Short travel time",
                    "Radiation exposure",
                    "High oxygen levels",
                    "Close distance to Earth"],
                correctAnswer: 1,
            },
            {
                question: "Which of the following makes living on Mars difficult?",
                options: [
                    "Abundant liquid water",
                    "Thin atmosphere with little oxygen",
                    "Frequent earthquakes",
                    "Excessive gravity"],
                correctAnswer: 1,
            },
            {
                question: "What type of object is the Sun?",
                options: [
                    "A planet",
                    "A star",
                    "A comet",
                    "A galaxy"],
                correctAnswer: 1,
            },
            {
                question: "Which planet has rings made mostly of ice and rock?",
                options: [
                    "Mars",
                    "Jupiter",
                    "Saturn",
                    "Uranus"],
                correctAnswer: 2,
            },
        ],
    },

    {
        category: "science introduction",
        questions: [
            {
                question: "What is Year 9 Science mainly about?",
                options: [
                    "Memorising facts only",
                    "Understanding the world through experiments and investigations",
                    "Learning only about chemistry",
                    "Studying only space and astronomy"],
                correctAnswer: 1,
            },
            {
                question: "Which of the following is a hazard in a science laboratory?",
                options: [
                    "Water on the floor",
                    "Loose hair near a flame",
                    "Chemicals left open",
                    "All of the above"],
                correctAnswer: 3,
            },
            {
                question: "Which is an example of unsafe behaviour in the laboratory?",
                options: [
                    "Wearing safety glasses",
                    "Running around the lab",
                    "Tying back long hair",
                    "Following instructions carefully"],
                correctAnswer: 1,
            },
            {
                question: "Why are safety glasses important in the laboratory?",
                options: [
                    "They look stylish",
                    "They protect your eyes from chemicals and flames",
                    "They make it easier to see small things",
                    "They are not important at all"],
                correctAnswer: 1,
            },
            {
                question: "What should you do if a chemical spills?",
                options: [
                    "Clean it up immediately without telling anyone",
                    "Report it to the teacher and follow instructions",
                    "Ignore it",
                    "Sweep it into a pile"],
                correctAnswer: 1,
            },
            {
                question: "Which piece of equipment is used to measure volume?",
                options: [
                    "Measuring cylinder",
                    "Ruler",
                    "Thermometer",
                    "Balance"],
                correctAnswer: 0,
            },
            {
                question: "Which piece of equipment is used to measure temperature?",
                options: [
                    "Bunsen burner",
                    "Thermometer",
                    "Balance",
                    "Beaker"],
                correctAnswer: 1,
            },
            {
                question: "Which piece of equipment is used to measure mass?",
                options: [
                    "Measuring cylinder",
                    "Thermometer",
                    "Balance",
                    "Tripod"],
                correctAnswer: 2,
            },
            {
                question: "Which equipment would you use to heat a liquid safely?",
                options: [
                    "Bunsen burner",
                    "Tripod and gauze mat",
                    "Beaker on table",
                    "Test tube in hand"],
                correctAnswer: 1,
            },
            {
                question: "What is the barrel on a Bunsen burner?",
                options: [
                    "The part that controls gas supply",
                    "The metal tube where the flame burns",
                    "The base of the burner",
                    "The part that connects to the gas hose"],
                correctAnswer: 1,
            },
            {
                question: "What part of the Bunsen burner adjusts the flame colour?",
                options: [
                    "Base",
                    "Gas tap",
                    "Air hole",
                    "Barrel"],
                correctAnswer: 2,
            },
            {
                question: "Which Bunsen burner flame is safest when not in use?",
                options: [
                    "Blue roaring flame",
                    "Invisible flame",
                    "Orange safety flame",
                    "No flame"],
                correctAnswer: 2,
            },
            {
                question: "Which Bunsen burner flame is hottest?",
                options: [
                    "Blue roaring flame",
                    "Orange safety flame",
                    "No flame",
                    "Yellow candle flame"],
                correctAnswer: 0,
            },
            {
                question: "Which safety rule applies to long hair in the lab?",
                options: [
                    "Leave it down",
                    "Tie it back",
                    "Cover it with a hat",
                    "Cut it short"],
                correctAnswer: 1,
            },
            {
                question: "Which safety rule applies to loose clothing in the lab?",
                options: [
                    "Tie it back or wear a lab coat",
                    "Wear it over the flames",
                    "It is not important",
                    "Roll up sleeves only"],
                correctAnswer: 0,
            },
            {
                question: "What should you do before using any lab equipment?",
                options: [
                    "Guess how it works",
                    "Ask the teacher and read instructions",
                    "Use it carefully without looking",
                    "Ignore instructions"],
                correctAnswer: 1,
            },
            {
                question: "Why is it important to know hazards in the lab?",
                options: [
                    "To avoid accidents",
                    "To make experiments slower",
                    "To use more chemicals",
                    "To impress classmates"],
                correctAnswer: 0,
            },
            {
                question: "Which of these is used to hold liquids during heating?",
                options: [
                    "Beaker",
                    "Test tube",
                    "Measuring cylinder",
                    "All of the above"],
                correctAnswer: 1,
            },
            {
                question: "What should you do after finishing an experiment?",
                options: [
                    "Leave equipment dirty",
                    "Clean equipment and wash hands",
                    "Turn off lights only",
                    "Ignore spills"],
                correctAnswer: 1,
            },
            {
                question: "Which of the following is part of proper lab behaviour?",
                options: [
                    "Eating food near chemicals",
                    "Following teacher instructions",
                    "Running around lab",
                    "Ignoring rules"],
                correctAnswer: 1,
            },
            {
                question: "Which of the following is NOT lab equipment?",
                options: [
                    "Bunsen burner",
                    "Beaker",
                    "Thermometer",
                    "Notebook"],
                correctAnswer: 3,
            },
            {
                question: "Which part of the Bunsen burner connects to the gas supply?",
                options: [
                    "Barrel",
                    "Gas inlet",
                    "Air hole",
                    "Base"],
                correctAnswer: 1,
            },
            {
                question: "Which flame is visible but cooler than the blue flame?",
                options: [
                    "Blue roaring flame",
                    "Orange safety flame",
                    "Invisible flame",
                    "None"],
                correctAnswer: 1,
            },
            {
                question: "Why should you never leave a lit Bunsen burner unattended?",
                options: [
                    "It may go out",
                    "It may cause a fire",
                    "It wastes gas",
                    "It changes flame colour"],
                correctAnswer: 1,
            },
            {
                question: "What is a common sense rule for lab safety?",
                options: [
                    "Always smell chemicals directly",
                    "Keep work area tidy",
                    "Run when carrying chemicals",
                    "Taste liquids to identify them"],
                correctAnswer: 1,
            }
        ],
    },

    {
        category: "science skills",
        questions: [
           {
                question: "Which unit is used to measure length in science?",
                options: [
                    "Metres",
                    "Litres",
                    "Grams",
                    "Seconds"],
                correctAnswer: 0,
            },
            {
                question: "Which unit is used to measure mass?",
                options: [
                    "Litres",
                    "Grams",
                    "Seconds",
                    "Newtons"],
                correctAnswer: 1,
            },
            {
                question: "Which unit is used to measure time?",
                options: [
                    "Seconds",
                    "Grams",
                    "Metres",
                    "Litres"],
                correctAnswer: 0,
            },
            {
                question: "When recording results in a table, the first column usually shows:",
                options: [
                    "The dependent variable",
                    "The independent variable",
                    "The conclusion",
                    "The equipment"],
                correctAnswer: 1,
            },
            {
                question: "A graph should have:",
                options: [
                    "A title only",
                    "Labels and units on both axes",
                    "Numbers but no labels",
                    "Pictures instead of axes"],
                correctAnswer: 1,
            },
            {
                question: "What does a line graph show?",
                options: [
                    "Trends or patterns in data",
                    "Random drawings",
                    "The names of equipment",
                    "Hazards in the lab"],
                correctAnswer: 0,
            },
            {
                question: "What is the first step in the scientific method?",
                options: [
                    "Write the conclusion",
                    "Make an observation or ask a question",
                    "Draw a graph",
                    "Collect equipment"],
                correctAnswer: 1,
            },
            {
                question: "What is a hypothesis?",
                options: [
                    "A prediction based on observations",
                    "The equipment list",
                    "The final conclusion",
                    "The dependent variable"],
                correctAnswer: 0,
            },
            {
                question: "Which of the following describes a fair test?",
                options: [
                    "Only one variable is changed and others are controlled",
                    "All variables are changed at once",
                    "No variables are measured",
                    "Only dependent variables are changed"],
                correctAnswer: 0,
            },
            {
                question: "What should a good conclusion be based on?",
                options: [
                    "Opinions only",
                    "The data collected during the experiment",
                    "Guesswork",
                    "Predictions only"],
                correctAnswer: 1,
            },
            {
                question: "Making an inference means:",
                options: [
                    "Stating exactly what you observed",
                    "Making a logical explanation based on observations",
                    "Guessing without evidence",
                    "Repeating the experiment"],
                correctAnswer: 1,
            },
            {
                question: "What is an observation?",
                options: [
                    "A measurement or description of something seen or measured",
                    "A guess",
                    "A prediction",
                    "A hypothesis"],
                correctAnswer: 0,
            },
            {
                question: "Which variable is deliberately changed in an experiment?",
                options: [
                    "Independent variable",
                    "Dependent variable",
                    "Controlled variable",
                    "Random variable"],
                correctAnswer: 0,
            },
            {
                question: "Which variable is measured in response to changes?",
                options: [
                    "Independent variable",
                    "Dependent variable",
                    "Controlled variable",
                    "Random variable"],
                correctAnswer: 1,
            },
            {
                question: "Which variable is kept constant to ensure a fair test?",
                options: [
                    "Independent variable",
                    "Dependent variable",
                    "Controlled variable",
                    "Random variable"],
                correctAnswer: 2,
            },
            {
                question: "What is the purpose of repeating an experiment?",
                options: [
                    "To make graphs prettier",
                    "To improve accuracy and reliability",
                    "To change results",
                    "To practice lighting Bunsen burners"],
                correctAnswer: 1,
            },
            {
                question: "What is the aim of an experiment?",
                options: [
                    "To guess results",
                    "To describe what you want to investigate",
                    "To draw graphs",
                    "To name equipment"],
                correctAnswer: 1,
            },
            {
                question: "Which part of an experiment lists the tools and materials used?",
                options: [
                    "Method",
                    "Aim",
                    "Equipment list",
                    "Conclusion"],
                correctAnswer: 2,
            },
            {
                question: "Which part of an experiment describes the steps taken?",
                options: [
                    "Aim",
                    "Method",
                    "Results",
                    "Conclusion"],
                correctAnswer: 1,
            },
            {
                question: "What is the purpose of a line graph?",
                options: [
                    "To show trends in data over time or conditions",
                    "To make the lab report look nice",
                    "To record equipment",
                    "To list variables"],
                correctAnswer: 0,
            },
            {
                question: "What is a valid conclusion?",
                options: [
                    "A statement based on data collected",
                    "A personal opinion",
                    "A random guess",
                    "A description of equipment only"],
                correctAnswer: 0,
            },
            {
                question: "Making a prediction involves:",
                options: [
                    "Guessing with no basis",
                    "Using observations and prior knowledge",
                    "Repeating measurements",
                    "Drawing a graph first"],
                correctAnswer: 1,
            },
            {
                question: "Which of these is an example of fair testing?",
                options: [
                    "Changing one variable while keeping others constant",
                    "Changing all variables at once",
                    "Not measuring any variables",
                    "Ignoring safety rules"],
                correctAnswer: 0,
            },
            {
                question: "How do you identify trends in data?",
                options: [
                    "By looking for patterns in numbers or graphs",
                    "By guessing",
                    "By measuring only one data point",
                    "By ignoring results"],
                correctAnswer: 0,
            },
            {
                question: "Which is part of writing a scientific conclusion?",
                options: [
                    "Comparing results to the hypothesis",
                    "Ignoring the results",
                    "Repeating the aim",
                    "Listing equipment"],
                correctAnswer: 0,
            },
        ],
    },

    {
        category: "forces",
        questions: [
            {
                question: "What is speed?",
                options: [
                    "The rate of change of distance with time",
                    "The distance travelled only",
                    "The time taken to travel a distance",
                    "The force acting on an object"],
                correctAnswer: 0,
            },
            {
                question: "What is the formula to calculate speed?",
                options: [
                    "v = dt",
                    "v = d / t",
                    "v = t / d",
                    "v = d + t"],
                correctAnswer: 1,
            },
            {
                question: "Which SI unit is used for speed?",
                options: [
                    "m/s",
                    "kg",
                    "N",
                    "J"],
                correctAnswer: 0,
            },
            {
                question: "In a distance-time graph, a straight upward line indicates:",
                options: [
                    "Constant speed",
                    "Stopped object",
                    "Acceleration",
                    "Deceleration"],
                correctAnswer: 0,
            },
            {
                question: "In a distance-time graph, a horizontal line indicates:",
                options: [
                    "Constant speed",
                    "Object stopped",
                    "Acceleration",
                    "Falling object"],
                correctAnswer: 1,
            },
            {
                question: "Force can be described as:",
                options: [
                    "A push or a pull",
                    "Only a push",
                    "Only a pull",
                    "Energy"],
                correctAnswer: 0,
            },
            {
                question: "Which device measures force in Newtons?",
                options: [
                    "Spring balance",
                    "Ruler",
                    "Thermometer",
                    "Stopwatch"],
                correctAnswer: 0,
            },
            {
                question: "Which of these is a contact force?",
                options: [
                    "Friction",
                    "Gravity",
                    "Magnetism",
                    "Weight"],
                correctAnswer: 0,
            },
            {
                question: "Which force acts downward on objects due to gravity?",
                options: [
                    "Weight",
                    "Tension",
                    "Thrust",
                    "Friction"],
                correctAnswer: 0,
            },
            {
                question: "Friction is a force that:",
                options: [
                    "Opposes motion",
                    "Increases motion",
                    "Has no effect",
                    "Pulls objects up"],
                correctAnswer: 0,
            },
            {
                question: "Which of these is an example of friction being useful?",
                options: [
                    "Car brakes stopping a car",
                    "Ice skating",
                    "Oil on a surface",
                    "Polished glass"],
                correctAnswer: 0,
            },
            {
                question: "Which force acts along a rope or string when pulled?",
                options: [
                    "Tension",
                    "Weight",
                    "Friction",
                    "Thrust"],
                correctAnswer: 0,
            },
            {
                question: "Balanced forces cause:",
                options: [
                    "No change in motion",
                    "Acceleration",
                    "Change of direction",
                    "Increase in weight"],
                correctAnswer: 0,
            },
            {
                question: "Unbalanced forces cause:",
                options: [
                    "Change in motion",
                    "No change in motion",
                    "No effect on objects",
                    "Equal push and pull"],
                correctAnswer: 0,
            },
            {
                question: "What is the difference between mass and weight?",
                options: [
                    "Mass is matter; weight is gravity on mass",
                    "Mass is gravity; weight is matter",
                    "They are the same",
                    "Mass depends on shape; weight does not"],
                correctAnswer: 0,
            },
            {
                question: "Which is a non-contact force?",
                options: [
                    "Gravity",
                    "Friction",
                    "Tension",
                    "Thrust"],
                correctAnswer: 0,
            },
            {
                question: "Combustion is:",
                options: [
                    "Burning of a fuel",
                    "A physical change",
                    "Freezing of water",
                    "Mixing liquids"],
                correctAnswer: 0,
            },
            {
                question: "Complete combustion produces which gas?",
                options: [
                    "Carbon dioxide",
                    "Carbon monoxide",
                    "Hydrogen",
                    "Nitrogen"],
                correctAnswer: 0,
            },
            {
                question: "Incomplete combustion produces which dangerous gas?",
                options: [
                    "Carbon monoxide",
                    "Oxygen",
                    "Carbon dioxide",
                    "Water vapour"],
                correctAnswer: 0,
            },
            {
                question: "The fire triangle consists of:",
                options: [
                    "Fuel, oxygen, heat",
                    "Fuel, light, water",
                    "Heat, water, oxygen",
                    "Fuel, nitrogen, oxygen"],
                correctAnswer: 0,
            },
            {
                question: "Fossil fuels are:",
                options: [
                    "Non-renewable energy sources",
                    "Renewable energy sources",
                    "Made from water",
                    "Solar energy"],
                correctAnswer: 0,
            },
            {
                question: "Chemical reactions produce:",
                options: [
                    "New substances",
                    "Only physical changes",
                    "Energy only",
                    "No change"],
                correctAnswer: 0,
            },
            {
                question: "Energy in fuels can be measured as:",
                options: [
                    "Joules",
                    "Metres",
                    "Newtons",
                    "Litres"],
                correctAnswer: 0,
            },
            {
                question: "An example of reducing friction is:",
                options: [
                    "Lubricating moving parts",
                    "Using sandpaper",
                    "Roughening surfaces",
                    "Wearing heavy boots"],
                correctAnswer: 0,
            },
            {
                question: "Thrust is a force that:",
                options: [
                    "Pushes an object forward",
                    "Pulls objects back",
                    "Stops motion",
                    "Increases friction"],
                correctAnswer: 0,
            }
        ],
    },

    {
        category: "waves",
        questions: [
            {
                question: "Which type of wave moves perpendicular to the direction of energy transfer?",
                options: [
                    "Transverse wave",
                    "Longitudinal wave",
                    "Sound wave",
                    "Shock wave"],
                correctAnswer: 0,
            },
            {
                question: "Which type of wave moves parallel to the direction of energy transfer?",
                options: [
                    "Transverse wave",
                    "Longitudinal wave",
                    "Light wave",
                    "Radio wave"],
                correctAnswer: 1,
            },
            {
                question: "Which of the following is part of the electromagnetic spectrum?",
                options: [
                    "Radio waves",
                    "Sound waves",
                    "Water waves",
                    "Seismic waves"],
                correctAnswer: 0,
            },
            {
                question: "Light travels in:",
                options: [
                    "Straight lines",
                    "Curved paths only",
                    "Random directions",
                    "Circular paths"],
                correctAnswer: 0,
            },
            {
                question: "Shadows are caused by:",
                options: [
                    "Light being blocked by an object",
                    "Sound waves interfering",
                    "Refraction only",
                    "Magnets"],
                correctAnswer: 0,
            },
            {
                question: "Primary colours of light are:",
                options: [
                    "Red, green, blue",
                    "Red, yellow, blue",
                    "Orange, green, violet",
                    "Cyan, magenta, yellow"],
                correctAnswer: 0,
            },
            {
                question: "White light is made of:",
                options: [
                    "All colours of the visible spectrum",
                    "Only red light",
                    "Only green light",
                    "No colours"],
                correctAnswer: 0,
            },
            {
                question: "A prism splits white light into a spectrum called:",
                options: [
                    "ROYGBIV",
                    "RGB",
                    "CMY",
                    "IRUV"],
                correctAnswer: 0,
            },
            {
                question: "The law of reflection states:",
                options: [
                    "Angle of incidence = angle of reflection",
                    "Light bends when reflected",
                    "Reflected rays lose energy",
                    "Light slows down"],
                correctAnswer: 0,
            },
            {
                question: "Concave mirrors cause light rays to:",
                options: [
                    "Converge",
                    "Diverge",
                    "Stay parallel",
                    "Disperse randomly"],
                correctAnswer: 0,
            },
            {
                question: "Convex mirrors cause light rays to:",
                options: [
                    "Diverge",
                    "Converge",
                    "Stay parallel",
                    "Rotate"],
                correctAnswer: 0,
            },
            {
                question: "Refraction occurs when light:",
                options: [
                    "Changes speed and direction in a new medium",
                    "Reflects from a mirror",
                    "Travels in a vacuum",
                    "Disappears"],
                correctAnswer: 0,
            },
            {
                question: "Objects appear coloured because:",
                options: [
                    "They reflect certain wavelengths of light",
                    "They emit sound",
                    "They absorb gravity",
                    "They are magnetic"],
                correctAnswer: 0,
            },
            {
                question: "The cornea is part of the:",
                options: [
                    "Eye",
                    "Ear",
                    "Brain",
                    "Skin"],
                correctAnswer: 0,
            },
            {
                question: "The pupil controls:",
                options: [
                    "Amount of light entering the eye",
                    "Focus of sound",
                    "Eye movement",
                    "Colour perception"],
                correctAnswer: 0,
            },
            {
                question: "The retina:",
                options: [
                    "Receives light signals and sends them to the brain",
                    "Produces tears",
                    "Controls eye movement",
                    "Focuses sound"],
                correctAnswer: 0,
            },
            {
                question: "The optic nerve:",
                options: [
                    "Carries signals from the retina to the brain",
                    "Controls pupil size",
                    "Reflects light",
                    "Produces lens shape"],
                correctAnswer: 0,
            },
            {
                question: "Sound waves are detected by:",
                options: [
                    "The ear",
                    "The eye",
                    "The nose",
                    "The tongue"],
                correctAnswer: 0,
            },
            {
                question: "Which part of the ear converts sound waves into signals for the brain?",
                options: [
                    "Cochlea",
                    "Cornea",
                    "Pupil",
                    "Lens"],
                correctAnswer: 0,
            },
            {
                question: "What causes a rainbow effect when light passes through a prism?",
                options: [
                    "Dispersion of light into component colours",
                    "Reflection from a surface",
                    "Absorption of all light",
                    "Magnification"],
                correctAnswer: 0,
            },
            {
                question: "What type of lenses converge parallel rays of light?",
                options: [
                    "Convex lenses",
                    "Concave lenses",
                    "Plane mirrors",
                    "Concave mirrors"],
                correctAnswer: 0,
            },
            {
                question: "What type of lenses diverge parallel rays of light?",
                options: [
                    "Concave lenses",
                    "Convex lenses",
                    "Plane lenses",
                    "Spherical mirrors"],
                correctAnswer: 0,
            },
            {
                question: "Curved mirrors can be used in:",
                options: [
                    "Makeup, security, vehicle mirrors",
                    "Sound amplification",
                    "Measuring speed",
                    "Heating objects"],
                correctAnswer: 0,
            },
            {
                question: "Light is a form of:",
                options: [
                    "Energy",
                    "Mass",
                    "Force",
                    "Gravity"],
                correctAnswer: 0,
            },
            {
                question: "Mixing red, green, and blue light produces:",
                options: [
                    "White light",
                    "Black",
                    "Yellow light",
                    "No light"],
                correctAnswer: 0,
            },
            {
                question: "Visual illusions occur due to:",
                options: [
                    "How the brain interprets light signals",
                    "Changes in air pressure",
                    "Changes in gravity",
                    "Sound waves"],
                correctAnswer: 0,
            }
        ],
    },

    {
        category: "chemistry",
        questions: [
            {
                question: "What are all substances made up of?",
                options: ["Cells", 
                    "Particles (atoms and molecules)", 
                    "Energy only", 
                    "Electrons only"],
                correctAnswer: 1,
            },
            {
                question: "Which property is true of all matter?",
                options: ["It has colour", 
                    "It has mass and takes up volume", 
                    "It can dissolve in water", 
                    "It is always visible"],
                correctAnswer: 1,
            },
            {
                question: "Mass is best defined as:",
                options: ["The space an object takes up", 
                    "The amount of matter in an object", 
                    "The heaviness of an object", 
                    "The thickness of an object"],
                correctAnswer: 1,
            },
            {
                question: "Which unit is commonly used for mass?",
                options: ["Millilitres", 
                    "Metres", 
                    "Grams", 
                    "Newtons"],
                correctAnswer: 2,
            },
            {
                question: "Volume is a measure of:",
                options: ["The heaviness of matter", 
                    "The space matter occupies", 
                    "The number of particles", 
                    "The density of a material"],
                correctAnswer: 1,
            },
            {
                question: "Density is calculated as:",
                options: ["Mass x volume", 
                    "Volume ÷ mass", 
                    "Mass ÷ volume", 
                    "Mass + volume"],
                correctAnswer: 2,
            },
            {
                question: "The unit of density is usually:",
                options: ["Grams per millilitre", 
                    "Grams", 
                    "Millilitres per second", 
                    "Kilograms"],
                correctAnswer: 0,
            },
            {
                question: "Which state of matter has a fixed shape and volume?",
                options: ["Solid", 
                    "Liquid", 
                    "Gas", 
                    "Plasma"],
                correctAnswer: 0,
            },
            {
                question: "Which state of matter has particles that move freely and fill any container?",
                options: ["Solid", 
                    "Liquid", 
                    "Gas", 
                    "Plasma"],
                correctAnswer: 2,
            },
            {
                question: "Which diagram shows particles packed tightly in rows?",
                options: ["Solid", 
                    "Liquid", 
                    "Gas", 
                    "Plasma"],
                correctAnswer: 0,
            },
            {
                question: "What is the process called when a liquid turns into a gas?",
                options: ["Melting", 
                    "Evaporation", 
                    "Condensation", 
                    "Freezing"],
                correctAnswer: 1,
            },
            {
                question: "Which change of state involves gas changing directly to a solid?",
                options: ["Sublimation", 
                    "Deposition", 
                    "Evaporation", 
                    "Condensation"],
                correctAnswer: 1,
            },
            {
                question: "Which of these is an element?",
                options: ["Water", 
                    "Carbon dioxide", 
                    "Iron", 
                    "Salt"],
                correctAnswer: 2,
            },
            {
                question: "What is the smallest particle of an element?",
                options: ["Atom", 
                    "Molecule", 
                    "Compound", 
                    "Mixture"],
                correctAnswer: 0,
            },
            {
                question: "When elements combine chemically, they form:",
                options: ["Mixtures", 
                    "Compounds", 
                    "Solutions", 
                    "Suspensions"],
                correctAnswer: 1,
            },
            {
                question: "Which of the following is a chemical change?",
                options: ["Ice melting", 
                    "Water boiling", 
                    "Paper burning", 
                    "Salt dissolving"],
                correctAnswer: 2,
            },
            {
                question: "Which of these is a pure substance?",
                options: ["Salt solution", 
                    "Air", 
                    "Gold", 
                    "Seawater"],
                correctAnswer: 2,
            },
            {
                question: "The law of conservation of mass states:",
                options: ["Mass can be created in reactions", 
                    "Mass is lost during chemical changes", 
                    "Mass is the same before and after a reaction", 
                    "Mass only exists in solids"],
                correctAnswer: 2,
            },
            {
                question: "Diffusion is:",
                options: ["The breaking of bonds in solids", 
                    "The mixing of particles by random motion", 
                    "The settling of solids in liquids", 
                    "The evaporation of water"],
                correctAnswer: 1,
            },
            {
                question: "Which is the solvent in a salt solution?",
                options: ["Salt", 
                    "Water", 
                    "Salt + water", 
                    "Particles"],
                correctAnswer: 1,
            },
            {
                question: "What is the solute in salt water?",
                options: ["Water", 
                    "Salt", 
                    "Air", 
                    "Carbon dioxide"],
                correctAnswer: 1,
            },
            {
                question: "Which separation method is best for salt water?",
                options: ["Filtering", 
                    "Evaporating", 
                    "Magnetism", 
                    "Decanting"],
                correctAnswer: 1,
            },
            {
                question: "Which method separates coloured inks?",
                options: ["Chromatography", 
                    "Distillation", 
                    "Filtration", 
                    "Decanting"],
                correctAnswer: 0,
            },
            {
                question: "Which process separates alcohol from water?",
                options: ["Filtration", 
                    "Distillation", 
                    "Evaporation", 
                    "Chromatography"],
                correctAnswer: 1,
            },
            {
                question: "Brownian motion provides evidence for:",
                options: ["The existence of particles", 
                    "The flow of energy", 
                    "The law of conservation of mass", 
                    "The presence of gravity"],
                correctAnswer: 0,
            },
        ],
    },

    {
        category: "water cycle",
        questions: [
            {
                question: "What is the main source of water in the water cycle?",
                options: ["The ocean", 
                    "The atmosphere", 
                    "Groundwater", 
                    "The Sun"],
                correctAnswer: 3,
            },
            {
                question: "Which process in the water cycle changes liquid water to gas?",
                options: ["Condensation", 
                    "Evaporation", 
                    "Precipitation", 
                    "Infiltration"],
                correctAnswer: 1,
            },
            {
                question: "Clouds are formed during which process?",
                options: ["Condensation", 
                    "Evaporation", 
                    "Precipitation", 
                    "Collection"],
                correctAnswer: 0,
            },
            {
                question: "Rain, snow, and hail are forms of:",
                options: ["Condensation", 
                    "Evaporation", 
                    "Precipitation", 
                    "Infiltration"],
                correctAnswer: 2,
            },
            {
                question: "Which process adds water back to rivers and oceans?",
                options: ["Condensation", 
                    "Evaporation", 
                    "Precipitation", 
                    "Collection"],
                correctAnswer: 3,
            },
            {
                question: "Which is NOT a process in the water cycle?",
                options: ["Transpiration", 
                    "Photosynthesis", 
                    "Condensation", 
                    "Precipitation"],
                correctAnswer: 1,
            },
            {
                question: "Where does drinking water for the Hutt Valley come from?",
                options: ["Rainwater tanks", 
                    "Desalination plants", 
                    "Rivers and aquifers", 
                    "The ocean"],
                correctAnswer: 2,
            },
            {
                question: "Salinity is a measure of:",
                options: ["Water clarity", 
                    "Amount of dissolved salts", 
                    "Temperature of water", 
                    "Presence of oxygen"],
                correctAnswer: 1,
            },
            {
                question: "Which part of the water cycle involves plants releasing water vapor?",
                options: ["Infiltration", 
                    "Transpiration", 
                    "Condensation", 
                    "Precipitation"],
                correctAnswer: 1,
            },
            {
                question: "What is infiltration?",
                options: ["Water flowing into rivers", 
                    "Water soaking into the ground", 
                    "Water turning into gas", 
                    "Water freezing"],
                correctAnswer: 1,
            },
            {
                question: "Which best describes the water supply in the Hutt Valley?",
                options: ["Collected entirely from rainfall", 
                    "Drawn from rivers, groundwater, and reservoirs", 
                    "From desalination of seawater", 
                    "Trucked in from other regions"],
                correctAnswer: 1,
            },
            {
                question: "Measuring the salinity of water along Te Awa Kairangi helps to:",
                options: ["Test how salty the water is", 
                    "Measure its temperature", 
                    "Check the flow speed", 
                    "Identify the water colour"],
                correctAnswer: 0,
            },
            {
                question: "Healthy river water usually has:",
                options: ["Low oxygen levels", 
                    "High biodiversity", 
                    "No living organisms", 
                    "High levels of pollutants"],
                correctAnswer: 1,
            },
            {
                question: "What does precipitation add to the water cycle?",
                options: ["Energy from the Sun", 
                    "Fresh water to Earth's surface", 
                    "Heat energy to oceans", 
                    "Carbon dioxide"],
                correctAnswer: 1,
            },
            {
                question: "Testing the health of a river over several days helps scientists:",
                options: ["Predict weather changes", 
                    "Track ecosystem changes over time", 
                    "Count fish populations only", 
                    "Measure mountain height"],
                correctAnswer: 1,
            },
            {
                question: "Which of the following reduces water quality in rivers?",
                options: ["Filtering", 
                    "Evaporation", 
                    "Pollution", 
                    "Condensation"],
                correctAnswer: 2,
            },
            {
                question: "Which step of the water cycle is driven by the Sun's energy?",
                options: ["Precipitation", 
                    "Condensation", 
                    "Evaporation", 
                    "Collection"],
                correctAnswer: 2,
            },
            {
                question: "Which of these organisms could be used to test river health?",
                options: ["Macroinvertebrates", 
                    "Dogs", 
                    "Sheep", 
                    "Rats"],
                correctAnswer: 0,
            },
            {
                question: "Why is the water cycle considered a closed system?",
                options: ["Water is constantly created", 
                    "Water is recycled and conserved", 
                    "Water is lost to space", 
                    "Water only evaporates"],
                correctAnswer: 1,
            },
            {
                question: "Which tool would you use to measure salinity?",
                options: ["Thermometer", 
                    "Salinometer/conductivity meter", 
                    "Spring balance", 
                    "Stopwatch"],
                correctAnswer: 1,
            },
            {
                question: "How does precipitation affect river levels?",
                options: ["Decreases them", 
                    "Has no effect", 
                    "Increases them", 
                    "Turns water into ice"],
                correctAnswer: 2,
            },
            {
                question: "What is the role of rivers in the water cycle?",
                options: ["They create water", 
                    "They transfer water to oceans", 
                    "They evaporate salt", 
                    "They absorb sunlight"],
                correctAnswer: 1,
            },
            {
                question: "Why do scientists collect school-wide river data?",
                options: ["To compare across times and places", 
                    "To reduce rainfall", 
                    "To stop river flow", 
                    "To measure mountain size"],
                correctAnswer: 0,
            },
            {
                question: "Which of these is a threat to the Hutt River?",
                options: ["Pollution from human activity", 
                    "Evaporation", 
                    "Condensation", 
                    "Photosynthesis"],
                correctAnswer: 0,
            },
            {
                question: "Which cycle links evaporation, condensation, precipitation, and collection?",
                options: ["Carbon cycle", 
                    "Nitrogen cycle", 
                    "Water cycle", 
                    "Rock cycle"],
                correctAnswer: 2,
            },
        ],
    },

    {
        category: "four spheres",
        questions: [
            {
                question: "Which statement best describes Earth's four spheres?",
                options: [
                    "Independent systems that never interact",
                    "Interlinked systems that interact with each other",
                    "Only about rocks and air",
                    "Only about living things"],
                correctAnswer: 1,
            },
            {
                question: "Which sphere includes rocks and the solid Earth?",
                options: [
                    "Hydrosphere",
                    "Geosphere",
                    "Atmosphere",
                    "Biosphere"],
                correctAnswer: 1,
            },
            {
                question: "Which sphere contains all water on Earth?",
                options: [
                    "Hydrosphere",
                    "Geosphere",
                    "Biosphere",
                    "Atmosphere"],
                correctAnswer: 0,
            },
            {
                question: "Which sphere is made up of living organisms?",
                options: [
                    "Geosphere",
                    "Atmosphere",
                    "Hydrosphere",
                    "Biosphere"],
                correctAnswer: 3,
            },
            {
                question: "What percentage of Earth's atmosphere is oxygen gas?",
                options: [
                    "10%",
                    "21%",
                    "50%",
                    "78%"],
                correctAnswer: 1,
            },
            {
                question: "What is the chemical formula for ozone?",
                options: [
                    "O2",
                    "O3",
                    "CO2",
                    "C6H12O6"],
                correctAnswer: 1,
            },
            {
                question: "What is the role of the ozone layer?",
                options: [
                    "To produce oxygen gas",
                    "To absorb ultraviolet radiation",
                    "To create global warming",
                    "To trap carbon dioxide"],
                correctAnswer: 1,
            },
            {
                question: "Which property does oxygen NOT have?",
                options: [
                    "Colourless",
                    "Odourless",
                    "Highly reactive",
                    "Coloured green"],
                correctAnswer: 3,
            },
            {
                question: "Why is oxygen essential for most life?",
                options: [
                    "It makes up bones",
                    "It is required for respiration",
                    "It is needed for photosynthesis",
                    "It causes weather patterns"],
                correctAnswer: 1,
            },
            {
                question: "Which property is true of carbon dioxide?",
                options: [
                    "It is colourless",
                    "It is tasteless",
                    "It is used in photosynthesis",
                    "All of the above"],
                correctAnswer: 3,
            },
            {
                question: "Which gas is mainly responsible for global warming?",
                options: [
                    "Oxygen",
                    "Carbon dioxide",
                    "Nitrogen",
                    "Ozone"],
                correctAnswer: 1,
            },
            {
                question: "What is one effect of global warming?",
                options: [
                    "Lower sea levels",
                    "Changing weather patterns",
                    "Decreased CO2 levels",
                    "More oxygen in the atmosphere"],
                correctAnswer: 1,
            },
            {
                question: "What is the primary source of Earth's heat?",
                options: [
                    "The Earth's core",
                    "The Sun",
                    "Volcanoes",
                    "Electricity"],
                correctAnswer: 1,
            },
            {
                question: "What causes land and sea breezes?",
                options: [
                    "Heating and cooling of land and water",
                    "Rotation of the Earth",
                    "Gravity from the Moon",
                    "Clouds forming in the atmosphere"],
                correctAnswer: 0,
            },
            {
                question: "What is the difference between weather and climate?",
                options: [
                    "Weather is short-term, climate is long-term",
                    "Weather is global, climate is local",
                    "Weather never changes, climate does",
                    "They mean the same thing"],
                correctAnswer: 0,
            },
            {
                question: "What do gyres influence?",
                options: [
                    "The seasons",
                    "Movement of plastics in oceans",
                    "The greenhouse effect",
                    "Cloud formation"],
                correctAnswer: 1,
            },
            {
                question: "Which life process does M in MRS GREN stand for?",
                options: [
                    "Movement",
                    "Mitosis",
                    "Melting",
                    "Magnetism"],
                correctAnswer: 0,
            },
            {
                question: "Which life process does R in MRS GREN stand for?",
                options: [
                    "Respiration",
                    "Reflection",
                    "Reproduction",
                    "Reaction"],
                correctAnswer: 0,
            },
            {
                question: "Which element is a trace element essential for health?",
                options: [
                    "Iron (Fe)",
                    "Carbon (C)",
                    "Hydrogen (H)",
                    "Oxygen (O)"],
                correctAnswer: 0,
            },
            {
                question: "Which statement describes the periodic table?",
                options: [
                    "It arranges elements randomly",
                    "It arranges elements by increasing atomic number",
                    "It groups all metals on the right",
                    "It arranges compounds, not elements"],
                correctAnswer: 1,
            },
            {
                question: "Which key elements make up most of living things?",
                options: [
                    "O, C, H, N",
                    "Fe, Zn, Cu, I",
                    "Na, Cl, Mg, Se",
                    "O3, CO2, H2O"],
                correctAnswer: 0,
            },
            {
                question: "Which condition makes Earth's zone of life special?",
                options: [
                    "Presence of liquid water",
                    "Extreme heat",
                    "Thin ozone layer",
                    "Strong winds"],
                correctAnswer: 0,
            },
            {
                question: "What is a global implication of the greenhouse effect?",
                options: [
                    "Reduced CO2 emissions",
                    "Rising sea levels",
                    "Decreased Sunlight",
                    "Cooling of the atmosphere"],
                correctAnswer: 1,
            },
            {
                question: "How can we reduce carbon dioxide emissions?",
                options: [
                    "Burning more coal",
                    "Using renewable energy",
                    "Cutting down forests",
                    "Driving more cars"],
                correctAnswer: 1,
            },
            {
                question: "What is the importance of ocean currents?",
                options: [
                    "They move continents",
                    "They distribute heat around the globe",
                    "They form the ozone layer",
                    "They cause earthquakes"],
                correctAnswer: 1,
            },
        ],
    },
]