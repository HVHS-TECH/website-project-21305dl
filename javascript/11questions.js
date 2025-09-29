// Questions sorted by category (25 each)
// Question content is copied using AI, the coding format and main array is created by me
const questions = [
    {
        category: "chemistry",
        questions: [
            {
                question: "What is the smallest particle of an element that still retains its properties?",
                options: [
                    "Molecule",
                    "Atom",
                    "Compound",
                    "Electron"],
                correctAnswer: 1,
            },
            {
                question: "Which subatomic particle has a positive charge?",
                options: [
                    "Electron",
                    "Neutron",
                    "Proton",
                    "Photon"],
                correctAnswer: 2,
            },
            {
                question: "Which subatomic particle has no charge?",
                options: [
                    "Electron",
                    "Neutron",
                    "Proton",
                    "Positron"],
                correctAnswer: 1,
            },
            {
                question: "What is the atomic number of an element equal to?",
                options: [
                    "Number of neutrons",
                    "Number of protons",
                    "Number of electrons only",
                    "Protons + neutrons"],
                correctAnswer: 1,
            },
            {
                question: "What is the mass number of an atom?",
                options: [
                    "Protons only",
                    "Electrons + protons",
                    "Protons + neutrons",
                    "Neutrons only"],
                correctAnswer: 2,
            },
            {
                question: "How many electrons can the first electron shell hold?",
                options: [
                    "2",
                    "4",
                    "6",
                    "8"],
                correctAnswer: 0,
            },
            {
                question: "Which group of the Periodic Table contains the noble gases?",
                options: [
                    "Group 1",
                    "Group 7",
                    "Group 0/18",
                    "Group 2"],
                correctAnswer: 2,
            },
            {
                question: "Which statement best describes an ion?",
                options: [
                    "An atom with a full outer shell",
                    "An atom that has gained or lost electrons",
                    "An atom that has changed number of protons",
                    "An atom that has split into smaller atoms"],
                correctAnswer: 1,
            },
            {
                question: "What is the charge on a sodium ion (Na) after it loses one electron?",
                options: [
                    "0",
                    "1+",
                    "1-",
                    "2+"],
                correctAnswer: 1,
            },
            {
                question: "Which is a compound?",
                options: [
                    "Oxygen (O2)",
                    "Water (H2O)",
                    "Helium (He)",
                    "Iron (Fe)"],
                correctAnswer: 1,
            },
            {
                question: "Which type of bonding involves the sharing of electrons?",
                options: [
                    "Ionic bonding",
                    "Covalent bonding",
                    "Metallic bonding",
                    "Hydrogen bonding"],
                correctAnswer: 1,
            },
            {
                question: "Which type of bonding involves the transfer of electrons?",
                options: [
                    "Ionic bonding",
                    "Covalent bonding",
                    "Metallic bonding",
                    "Hydrogen bonding"],
                correctAnswer: 0,
            },
            {
                question: "What is the chemical symbol for sulfuric acid?",
                options: [
                    "HCl",
                    "HNO3",
                    "H2SO4",
                    "NaOH"],
                correctAnswer: 2,
            },
            {
                question: "What is the chemical symbol for hydrochloric acid?",
                options: [
                    "HCl",
                    "HNO3",
                    "H2SO4",
                    "CH3COOH"],
                correctAnswer: 0,
            },
            {
                question: "What is the pH of a neutral solution?",
                options: [
                    "0",
                    "7",
                    "14",
                    "1"],
                correctAnswer: 1,
            },
            {
                question: "Which ion do acids release in solution?",
                options: [
                    "OH-",
                    "Na+",
                    "H+",
                    "Cl-"],
                correctAnswer: 2,
            },
            {
                question: "Which ion do bases release in solution?",
                options: [
                    "H+",
                    "OH-",
                    "Cl-",
                    "Na+"],
                correctAnswer: 1,
            },
            {
                question: "What products form when an acid reacts with a metal?",
                options: [
                    "Salt + carbon dioxide",
                    "Salt + water",
                    "Salt + hydrogen",
                    "Hydrogen + oxygen"],
                correctAnswer: 2,
            },
            {
                question: "What products form when an acid reacts with a base?",
                options: [
                    "Salt + hydrogen",
                    "Salt + water",
                    "Salt + oxygen",
                    "Salt + carbon dioxide"],
                correctAnswer: 1,
            },
            {
                question: "What products form when an acid reacts with a carbonate?",
                options: [
                    "Salt + water",
                    "Salt + carbon dioxide + water",
                    "Salt + hydrogen",
                    "Salt + oxygen"],
                correctAnswer: 1,
            },
            {
                question: "What gas is produced when metals react with acids?",
                options: [
                    "Oxygen",
                    "Hydrogen",
                    "Carbon dioxide",
                    "Nitrogen"],
                correctAnswer: 1,
            },
            {
                question: "What test confirms hydrogen gas?",
                options: [
                    "Limewater turns cloudy",
                    "Glowing splint relights",
                    "Burning splint makes a squeaky pop",
                    "Blue litmus turns red"],
                correctAnswer: 2,
            },
            {
                question: "What test confirms carbon dioxide gas?",
                options: [
                    "Glowing splint relights",
                    "Blue litmus turns red",
                    "Limewater turns cloudy",
                    "Burning splint squeaky pop"],
                correctAnswer: 2,
            },
            {
                question: "What test confirms oxygen gas?",
                options: [
                    "Glowing splint relights",
                    "Burning splint squeaky pop",
                    "Limewater turns cloudy",
                    "Blue litmus turns red"],
                correctAnswer: 0,
            },
            {
                question: "What type of reaction is burning magnesium in oxygen?",
                options: [
                    "Decomposition",
                    "Neutralisation",
                    "Oxidation",
                    "Displacement"],
                correctAnswer: 2,
            },
        ],
    },

    {
        category: "physics",
        questions: [
            {
                question: "What is the unit of force?",
                options: [
                    "Joule",
                    "Newton",
                    "Watt",
                    "Pascal"],
                correctAnswer: 1,
            },
            {
                question: "What instrument is used to measure force?",
                options: [
                    "Thermometer",
                    "Voltmeter",
                    "Spring balance",
                    "Ammeter"],
                correctAnswer: 2,
            },
            {
                question: "Which equation links force, mass, and acceleration?",
                options: [
                    "v = d/t",
                    "F = ma",
                    "P = VI",
                    "W = Fd"],
                correctAnswer: 1,
            },
            {
                question: "What is the acceleration due to gravity on Earth?",
                options: [
                    "1.6 m/s²",
                    "5.5 m/s²",
                    "9.8 m/s²",
                    "12 m/s²"],
                correctAnswer: 2,
            },
            {
                question: "Which unit is used to measure work?",
                options: [
                    "Newton",
                    "Joule",
                    "Watt",
                    "Volt"],
                correctAnswer: 1,
            },
            {
                question: "Which equation represents work?",
                options: [
                    "W = Fd",
                    "F = ma",
                    "P = VI",
                    "V = IR"],
                correctAnswer: 0,
            },
            {
                question: "What is the unit of power?",
                options: [
                    "Joule",
                    "Watt",
                    "Newton",
                    "Ampere"],
                correctAnswer: 1,
            },
            {
                question: "Which equation links power, work, and time?",
                options: [
                    "P = W/t",
                    "P = VI",
                    "F = ma",
                    "W = Fd"],
                correctAnswer: 0,
            },
            {
                question: "What type of energy is stored in a stretched rubber band?",
                options: [
                    "Kinetic",
                    "Elastic potential",
                    "Gravitational potential",
                    "Thermal"],
                correctAnswer: 1,
            },
            {
                question: "What type of energy is stored in an object raised above the ground?",
                options: [
                    "Elastic potential",
                    "Nuclear",
                    "Kinetic",
                    "Gravitational potential"],
                correctAnswer: 3,
            },
            {
                question: "What type of energy is associated with movement?",
                options: [
                    "Kinetic",
                    "Gravitational potential",
                    "Elastic potential",
                    "Thermal"],
                correctAnswer: 0,
            },
            {
                question: "Which law states that energy cannot be created or destroyed?",
                options: [
                    "Newton's First Law",
                    "Ohm's Law",
                    "Law of Conservation of Energy",
                    "Hooke's Law"],
                correctAnswer: 2,
            },
            {
                question: "What is the unit of current?",
                options: [
                    "Volt",
                    "Ampere",
                    "Ohm",
                    "Watt"],
                correctAnswer: 1,
            },
            {
                question: "What is the unit of voltage?",
                options: [
                    "Ampere",
                    "Watt",
                    "Volt",
                    "Ohm"],
                correctAnswer: 2,
            },
            {
                question: "What is the unit of resistance?",
                options: [
                    "Volt",
                    "Ohm",
                    "Ampere",
                    "Watt"],
                correctAnswer: 1,
            },
            {
                question: "Which equation links voltage, current, and resistance?",
                options: [
                    "V = IR",
                    "P = VI",
                    "F = ma",
                    "W = Fd"],
                correctAnswer: 0,
            },
            {
                question: "Which equation links power, voltage, and current?",
                options: [
                    "P = VI",
                    "V = IR",
                    "F = ma",
                    "W = Fd"],
                correctAnswer: 0,
            },
            {
                question: "What happens to current in a series circuit?",
                options: [
                    "It splits at junctions",
                    "It is the same everywhere",
                    "It increases with more branches",
                    "It decreases with resistance"],
                correctAnswer: 1,
            },
            {
                question: "What happens to voltage in a parallel circuit?",
                options: [
                    "It is shared between components",
                    "It is the same across each branch",
                    "It decreases with resistance",
                    "It increases at junctions"],
                correctAnswer: 1,
            },
            {
                question: "What type of wave is sound?",
                options: [
                    "Transverse",
                    "Longitudinal",
                    "Electromagnetic",
                    "Surface"],
                correctAnswer: 1,
            },
            {
                question: "What type of wave is light?",
                options: [
                    "Transverse",
                    "Longitudinal",
                    "Mechanical",
                    "Sound"],
                correctAnswer: 0,
            },
            {
                question: "What is the speed of light in a vacuum?",
                options: [
                    "3.0 x 10⁸ m/s",
                    "1.5 x 10⁸ m/s",
                    "3.0 x 10⁶ m/s",
                    "9.8 m/s²"],
                correctAnswer: 0,
            },
            {
                question: "Which part of the electromagnetic spectrum has the longest wavelength?",
                options: [
                    "Gamma rays",
                    "X-rays",
                    "Radio waves",
                    "Ultraviolet"],
                correctAnswer: 2,
            },
            {
                question: "Which part of the electromagnetic spectrum has the shortest wavelength?",
                options: [
                    "Microwaves",
                    "Infrared",
                    "Visible light",
                    "Gamma rays"],
                correctAnswer: 3,
            },
            {
                question: "What is refraction?",
                options: [
                    "The bending of light as it passes between materials",
                    "The bouncing of light off a surface",
                    "The spreading out of waves through a gap",
                    "The overlapping of two waves"],
                correctAnswer: 0,
            },
        ],
    },

    {
        category: "biology",
        questions: [
            {
                question: "Which structure controls the movement of substances into and out of a cell?",
                options: [
                    "Nucleus",
                    "Cytoplasm",
                    "Cell membrane",
                    "Mitochondria"],
                correctAnswer: 2,
            },
            {
                question: "Which organelle is the site of photosynthesis?",
                options: [
                    "Nucleus",
                    "Chloroplast",
                    "Mitochondria",
                    "Cell wall"],
                correctAnswer: 1,
            },
            {
                question: "What is the main function of mitochondria?",
                options: [
                    "Protein synthesis",
                    "Energy release through respiration",
                    "Photosynthesis",
                    "Storage of genetic material"],
                correctAnswer: 1,
            },
            {
                question: "What does MRS GREN stand for?",
                options: [
                    "Movement, Respiration, Sensitivity, Growth, Reproduction, Excretion, Nutrition",
                    "Movement, Reproduction, Sensitivity, Genes, Respiration, Energy, Nutrition",
                    "Mass, Respiration, Structure, Growth, Regulation, Excretion, Nerves",
                    "Motion, Respiration, Sensitivity, Growth, Reproduction, Enzymes, Nucleus"],
                correctAnswer: 0,
            },
            {
                question: "Which of the following is a structural adaptation?",
                options: [
                    "Thick fur in polar bears",
                    "Migration of birds",
                    "Photosynthesis",
                    "Hibernation"],
                correctAnswer: 0,
            },
            {
                question: "What is the role of enzymes in biological processes?",
                options: [
                    "They slow down reactions",
                    "They provide energy",
                    "They speed up reactions",
                    "They store genetic material"],
                correctAnswer: 2,
            },
            {
                question: "What is diffusion?",
                options: [
                    "Movement of water through a membrane",
                    "Movement of particles from low to high concentration",
                    "Movement of particles from high to low concentration",
                    "Movement of food into blood"],
                correctAnswer: 2,
            },
            {
                question: "What is osmosis?",
                options: [
                    "Diffusion of any gas",
                    "Diffusion of solute through a membrane",
                    "Diffusion of water through a partially permeable membrane",
                    "Diffusion of oxygen into cells"],
                correctAnswer: 2,
            },
            {
                question: "Which statement best describes DNA?",
                options: [
                    "It is made of amino acids",
                    "It carries genetic information",
                    "It is found only in animal cells",
                    "It produces glucose during photosynthesis"],
                correctAnswer: 1,
            },
            {
                question: "Genes are:",
                options: [
                    "Sections of DNA coding for a trait",
                    "Proteins in the cytoplasm",
                    "Carbohydrates in cell membranes",
                    "Lipids that provide energy"],
                correctAnswer: 0,
            },
            {
                question: "What is an allele?",
                options: [
                    "A different form of a gene",
                    "A cell organelle",
                    "A type of enzyme",
                    "A stage of mitosis"],
                correctAnswer: 0,
            },
            {
                question: "Which is an example of variation caused by the environment?",
                options: [
                    "Eye colour",
                    "Blood type",
                    "Language spoken",
                    "Sickle-cell trait"],
                correctAnswer: 2,
            },
            {
                question: "What process produces gametes in humans?",
                options: [
                    "Mitosis",
                    "Meiosis",
                    "Fertilisation",
                    "Respiration"],
                correctAnswer: 1,
            },
            {
                question: "Which diagram shows energy flow in an ecosystem?",
                options: [
                    "Food chain",
                    "Punnett square",
                    "Cell diagram",
                    "Periodic table"],
                correctAnswer: 0,
            },
            {
                question: "What is a producer in a food chain?",
                options: [
                    "An organism that eats others",
                    "An organism that breaks down waste",
                    "An organism that makes its own food",
                    "An organism that moves energy"],
                correctAnswer: 2,
            },
            {
                question: "Which organisms recycle nutrients back into ecosystems?",
                options: [
                    "Consumers",
                    "Producers",
                    "Decomposers",
                    "Predators"],
                correctAnswer: 2,
            },
            {
                question: "What is biodiversity?",
                options: [
                    "The variety of genes in one species",
                    "The variety of species in an ecosystem",
                    "The amount of oxygen produced by plants",
                    "The total biomass of animals"],
                correctAnswer: 1,
            },
            {
                question: "Which best describes natural selection?",
                options: [
                    "Humans choosing animals to breed",
                    "Favourable traits increasing survival and reproduction",
                    "Random changes in DNA",
                    "All species surviving equally well"],
                correctAnswer: 1,
            },
            {
                question: "Which base pairs with adenine (A) in DNA?",
                options: [
                    "Cytosine",
                    "Thymine",
                    "Guanine",
                    "Uracil"],
                correctAnswer: 1,
            },
            {
                question: "Which base pairs with cytosine (C) in DNA?",
                options: [
                    "Adenine",
                    "Thymine",
                    "Guanine",
                    "Uracil"],
                correctAnswer: 2,
            },
            {
                question: "Which is the correct word equation for respiration?",
                options: [
                    "Glucose + oxygen → carbon dioxide + water + energy",
                    "Carbon dioxide + water → glucose + oxygen",
                    "Glucose → lactic acid + energy",
                    "Oxygen + nitrogen → carbon dioxide + water"],
                correctAnswer: 0,
            },
            {
                question: "What is the purpose of photosynthesis?",
                options: [
                    "To release energy",
                    "To store energy in glucose",
                    "To produce oxygen only",
                    "To absorb carbon dioxide for respiration"],
                correctAnswer: 1,
            },
            {
                question: "Which is an abiotic factor in an ecosystem?",
                options: [
                    "Predation",
                    "Temperature",
                    "Competition",
                    "Parasitism"],
                correctAnswer: 1,
            },
            {
                question: "Which human activity reduces biodiversity?",
                options: [
                    "Conservation",
                    "Habitat destruction",
                    "Breeding programmes",
                    "Wildlife reserves"],
                correctAnswer: 1,
            },
            {
                question: "What is a mutation?",
                options: [
                    "A change in DNA sequence",
                    "A new species forming",
                    "A type of enzyme",
                    "A change in behaviour"],
                correctAnswer: 0,
            },
        ],
    },
]