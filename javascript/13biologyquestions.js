// Questions sorted by category (25 each)
// Question content is copied using AI, the coding format and main array is created by me
const questions = [
    {
        category: "3.3 plants & animals",
        questions: [
            {
                question: "What type of rhythm persists without external cues?",
                options: [
                    "Exogenous rhythm",
                    "Endogenous rhythm",
                    "Circannual rhythm",
                    "Daily rhythm"],
                correctAnswer: 1,
            },
            {
                question: "Which plant hormone controls cell elongation and phototropism?",
                options: [
                    "Auxin",
                    "Cytokinin",
                    "Gibberellin",
                    "Ethylene"],
                correctAnswer: 0,
            },
            {
                question: "Kinesis is defined as:",
                options: [
                    "Directional movement to a stimulus",
                    "Non-directional change in activity",
                    "Random migration",
                    "Growth toward light"],
                correctAnswer: 1,
            },
            {
                question: "Which phytochrome form absorbs red light?",
                options: [
                    "Pr",
                    "Pfr",
                    "Both Pr and Pfr",
                    "Neither form"],
                correctAnswer: 0,
            },
            {
                question: "Which behaviour helps animals maintain position in flowing water?",
                options: [
                    "Thigmotaxis",
                    "Rheotaxis",
                    "Kinesis",
                    "Tropism"],
                correctAnswer: 1,
            },
            {
                question: "Photoperiodism is controlled by:",
                options: [
                    "Phytochrome system",
                    "Auxin concentration",
                    "Water availability",
                    "Nutrient uptake"],
                correctAnswer: 0,
            },
            {
                question: "Which rhythm is adjusted by zeitgebers like light?",
                options: [
                    "Exogenous rhythm",
                    "Entrainable endogenous rhythm",
                    "Circannual rhythm",
                    "Ultradian rhythm"],
                correctAnswer: 1,
            },
            {
                question: "Which behaviour strengthens group bonds in animals?",
                options: [
                    "Territoriality",
                    "Agonistic behaviour",
                    "Allelopathy",
                    "Affiliative behaviour"],
                correctAnswer: 3,
            },
            {
                question: "What is the adaptive advantage of seed dormancy?",
                options: [
                    "Avoids herbivory",
                    "Avoids competition",
                    "Ensures germination in favourable conditions",
                    "Reduces transpiration"],
                correctAnswer: 2,
            },
            {
                question: "Circadian rhythms have a cycle length of about:",
                options: [
                    "12 hours",
                    "24 hours",
                    "30 days",
                    "365 days"],
                correctAnswer: 1,
            },
            {
                question: "What type of rhythm controls migration in birds?",
                options: [
                    "Circadian",
                    "Circannual",
                    "Ultradian",
                    "Exogenous"],
                correctAnswer: 1,
            },
            {
                question: "Nastic responses differ from tropisms because they are:",
                options: [
                    "Growth responses",
                    "Non-directional responses",
                    "Always towards light",
                    "Due to auxin"],
                correctAnswer: 1,
            },
            {
                question: "Which behaviour reduces competition between species using the same resource?",
                options: [
                    "Predation",
                    "Niche differentiation",
                    "Altruism",
                    "Kinesis"],
                correctAnswer: 1,
            },
            {
                question: "Which auxin distribution causes shoots to bend toward light?",
                options: [
                    "Equal distribution",
                    "More auxin on shaded side",
                    "More auxin on lit side",
                    "Auxin absent"],
                correctAnswer: 1,
            },
            {
                question: "What is agonistic behaviour?",
                options: [
                    "Aggressive or submissive behaviour to resolve conflict",
                    "Mutualistic behaviour",
                    "Parental care",
                    "Courtship display"],
                correctAnswer: 0,
            },
            {
                question: "Which zeitgeber is most important for circadian rhythms?",
                options: [
                    "Temperature",
                    "Light-dark cycle",
                    "Humidity",
                    "Food availability"],
                correctAnswer: 1,
            },
            {
                question: "Phytochrome Pfr is biologically:",
                options: [
                    "Inactive form",
                    "Active form",
                    "Destroyed by red light",
                    "Unstable at night"],
                correctAnswer: 1,
            },
            {
                question: "Which interaction benefits one species and harms the other?",
                options: [
                    "Mutualism",
                    "Commensalism",
                    "Exploitation",
                    "Cooperation"],
                correctAnswer: 2,
            },
            {
                question: "Which rhythm repeats more than once per day?",
                options: [
                    "Circadian",
                    "Circannual",
                    "Ultradian",
                    "Tidal"],
                correctAnswer: 2,
            },
            {
                question: "Which plant hormone promotes fruit ripening?",
                options: [
                    "Ethylene",
                    "Auxin",
                    "Cytokinin",
                    "Gibberellin"],
                correctAnswer: 0,
            },
            {
                question: "Which advantage does schooling give fish?",
                options: [
                    "Reduces drag",
                    "Increases predation risk",
                    "Prevents migration",
                    "Increases competition"],
                correctAnswer: 0,
            },
            {
                question: "Which rhythm helps plants flower at the right season?",
                options: [
                    "Circadian",
                    "Circannual",
                    "Ultradian",
                    "Exogenous"],
                correctAnswer: 1,
            },
            {
                question: "What is taxis?",
                options: [
                    "Directional movement to stimulus",
                    "Non-directional random response",
                    "Growth response in plants",
                    "Social behaviour"],
                correctAnswer: 0,
            },
            {
                question: "What is allelopathy?",
                options: [
                    "Chemical inhibition of other plants",
                    "Seed dispersal by animals",
                    "Pollination by insects",
                    "Parasitic feeding"],
                correctAnswer: 0,
            },
            {
                question: "Which rhythm matches lunar cycles?",
                options: [
                    "Tidal rhythm",
                    "Circadian rhythm",
                    "Circannual rhythm",
                    "Ultradian rhythm"],
                correctAnswer: 0,
            },
        ],
    },

    {
        category: "3.4 internal environment",
        questions: [
            {
                question: "Which statement best defines homeostasis?",
                options: [
                    "Maintaining constant external environment",
                    "Maintaining stable internal conditions",
                    "Adjusting behaviour to environment",
                    "Rapid genetic adaptation"],
                correctAnswer: 1,
            },
            {
                question: "Which is an example of negative feedback?",
                options: [
                    "Labour contractions increasing oxytocin release",
                    "Shivering to raise body temperature",
                    "Fruit ripening releasing ethylene",
                    "Blood clotting cascade"],
                correctAnswer: 1,
            },
            {
                question: "Which organ monitors blood glucose?",
                options: [
                    "Liver",
                    "Kidneys",
                    "Pancreas",
                    "Small intestine"],
                correctAnswer: 2,
            },
            {
                question: "Which hormone lowers blood glucose?",
                options: [
                    "Glucagon",
                    "Adrenaline",
                    "Insulin",
                    "Cortisol"],
                correctAnswer: 2,
            },
            {
                question: "Which is an effector in thermoregulation?",
                options: [
                    "Hypothalamus",
                    "Sweat glands",
                    "Sensory neurons",
                    "Receptors in skin"],
                correctAnswer: 1,
            },
            {
                question: "Which process conserves water in the kidney?",
                options: [
                    "Filtration",
                    "Secretion",
                    "Reabsorption",
                    "Excretion"],
                correctAnswer: 2,
            },
            {
                question: "ADH increases water reabsorption by:",
                options: [
                    "Making collecting ducts more permeable",
                    "Decreasing filtration in glomerulus",
                    "Reducing urea concentration",
                    "Increasing salt excretion"],
                correctAnswer: 0,
            },
            {
                question: "Which part of the brain regulates homeostasis?",
                options: [
                    "Cerebellum",
                    "Hypothalamus",
                    "Cerebrum",
                    "Medulla"],
                correctAnswer: 1,
            },
            {
                question: "Which is an example of behavioural thermoregulation?",
                options: [
                    "Panting",
                    "Sweating",
                    "Basking in the sun",
                    "Shivering"],
                correctAnswer: 2,
            },
            {
                question: "What is osmoregulation?",
                options: [
                    "Regulation of salt and water balance",
                    "Maintenance of blood pH",
                    "Control of body temperature",
                    "Regulation of glucose"],
                correctAnswer: 0,
            },
            {
                question: "Which hormone promotes glycogen breakdown?",
                options: [
                    "Insulin",
                    "Glucagon",
                    "ADH",
                    "Aldosterone"],
                correctAnswer: 1,
            },
            {
                question: "Which blood vessel carries glucose-rich blood after eating?",
                options: [
                    "Renal artery",
                    "Pulmonary vein",
                    "Hepatic portal vein",
                    "Coronary artery"],
                correctAnswer: 2,
            },
            {
                question: "Which best describes ectotherms?",
                options: [
                    "Maintain constant body temperature internally",
                    "Depend on external heat sources",
                    "Regulate pH internally",
                    "Use only behavioural methods"],
                correctAnswer: 1,
            },
            {
                question: "In negative feedback, the response:",
                options: [
                    "Amplifies the stimulus",
                    "Reverses the stimulus",
                    "Prevents any change",
                    "Eliminates hormones"],
                correctAnswer: 1,
            },
            {
                question: "Which is a structural adaptation for thermoregulation?",
                options: [
                    "Panting",
                    "Thick fur",
                    "Sweating",
                    "Burrowing"],
                correctAnswer: 1,
            },
            {
                question: "Why does sweating cool the body?",
                options: [
                    "Water is absorbed",
                    "Heat is released during evaporation",
                    "Skin temperature rises",
                    "Salt is excreted"],
                correctAnswer: 1,
            },
            {
                question: "Where are osmoreceptors located?",
                options: [
                    "Kidney",
                    "Liver",
                    "Hypothalamus",
                    "Pancreas"],
                correctAnswer: 2,
            },
            {
                question: "Which hormone increases sodium reabsorption in kidneys?",
                options: [
                    "Insulin",
                    "Aldosterone",
                    "ADH",
                    "Glucagon"],
                correctAnswer: 1,
            },
            {
                question: "Which part of the nephron carries out ultrafiltration?",
                options: [
                    "Bowman’s capsule",
                    "Loop of Henle",
                    "Collecting duct",
                    "Distal tubule"],
                correctAnswer: 0,
            },
            {
                question: "Which response helps animals cope with cold?",
                options: [
                    "Vasodilation",
                    "Sweating",
                    "Shivering",
                    "Panting"],
                correctAnswer: 2,
            },
            {
                question: "What is the main function of the loop of Henle?",
                options: [
                    "Filter blood",
                    "Create salt gradient",
                    "Secrete hormones",
                    "Excrete urea"],
                correctAnswer: 1,
            },
            {
                question: "Which hormone is released when blood glucose is too low?",
                options: [
                    "Insulin",
                    "Glucagon",
                    "ADH",
                    "Thyroxine"],
                correctAnswer: 1,
            },
            {
                question: "Which organ stores glycogen?",
                options: [
                    "Kidney",
                    "Liver",
                    "Pancreas",
                    "Stomach"],
                correctAnswer: 1,
            },
            {
                question: "Which best describes endotherms?",
                options: [
                    "Depend only on environment",
                    "Generate heat internally",
                    "Lack sweat glands",
                    "Cannot regulate temperature"],
                correctAnswer: 1,
            },
            {
                question: "Which process removes excess hydrogen ions to regulate pH?",
                options: [
                    "Buffering in blood",
                    "Sweating",
                    "Respiration",
                    "ADH secretion"],
                correctAnswer: 0,
            },
        ],
    },

    {
        category: "3.6 human evolution",
        questions: [
            {
                question: "Which skull feature indicates bipedalism?",
                options: [
                    "Large sagittal crest",
                    "Forward foramen magnum",
                    "Large zygomatic arch",
                    "Pronounced brow ridge"],
                correctAnswer: 1,
            },
            {
                question: "Which pelvis shape is characteristic of bipedalism?",
                options: [
                    "Long and narrow",
                    "Short and broad",
                    "Wing-like and flat",
                    "Triangular"],
                correctAnswer: 1,
            },
            {
                question: "Which teeth trend is seen in modern humans?",
                options: [
                    "Larger molars",
                    "Smaller canines",
                    "Large diastema",
                    "U-shaped jaw"],
                correctAnswer: 1,
            },
            {
                question: "Which tool culture is associated with Homo habilis?",
                options: [
                    "Acheulean",
                    "Oldowan",
                    "Mousterian",
                    "Upper Paleolithic"],
                correctAnswer: 1,
            },
            {
                question: "Which hominin species first used fire?",
                options: [
                    "Australopithecus afarensis",
                    "Homo erectus",
                    "Homo habilis",
                    "Homo sapiens"],
                correctAnswer: 1,
            },
            {
                question: "Which skeletal feature supports long-distance running?",
                options: [
                    "Short femur",
                    "Arched foot",
                    "Curved fingers",
                    "Opposable big toe"],
                correctAnswer: 1,
            },
            {
                question: "Which cultural development is unique to Homo sapiens?",
                options: [
                    "Use of fire",
                    "Symbolic art",
                    "Acheulean tools",
                    "Meat consumption"],
                correctAnswer: 1,
            },
            {
                question: "The out-of-Africa hypothesis states that:",
                options: [
                    "Modern humans evolved independently worldwide",
                    "Modern humans evolved in Africa then dispersed",
                    "Neanderthals were direct ancestors of humans",
                    "Homo erectus left Africa but died out immediately"],
                correctAnswer: 1,
            },
            {
                question: "Which feature is reduced in modern humans compared to early hominins?",
                options: [
                    "Cranial capacity",
                    "Chin",
                    "Prognathism",
                    "Forehead height"],
                correctAnswer: 2,
            },
            {
                question: "Which tool culture is associated with Homo erectus?",
                options: [
                    "Oldowan",
                    "Acheulean",
                    "Mousterian",
                    "Upper Paleolithic"],
                correctAnswer: 1,
            },
            {
                question: "Which species showed the first evidence of burial of the dead?",
                options: [
                    "Homo erectus",
                    "Neanderthals",
                    "Homo habilis",
                    "Australopithecus afarensis"],
                correctAnswer: 1,
            },
            {
                question: "Which locomotor feature distinguishes Australopithecus from apes?",
                options: [
                    "Opposable big toe",
                    "Habitual bipedalism",
                    "Knuckle-walking",
                    "Quadrupedal gait"],
                correctAnswer: 1,
            },
            {
                question: "Which cranial capacity range matches modern Homo sapiens?",
                options: [
                    "400-500 cc",
                    "600-800 cc",
                    "900-1100 cc",
                    "1200-1600 cc"],
                correctAnswer: 3,
            },
            {
                question: "Which feature is linked to speech in modern humans?",
                options: [
                    "Sagittal crest",
                    "Enlarged Broca's area",
                    "Large zygomatic arch",
                    "Forward foramen magnum"],
                correctAnswer: 1,
            },
            {
                question: "Which cultural advance allowed hominins to survive colder climates?",
                options: [
                    "Use of fire",
                    "Upright posture",
                    "Thicker enamel",
                    "Diastema reduction"],
                correctAnswer: 0,
            },
            {
                question: "Which feature is more pronounced in Neanderthals than Homo sapiens?",
                options: [
                    "Chin",
                    "Occipital bun",
                    "Vertical forehead",
                    "Small brow ridges"],
                correctAnswer: 1,
            },
            {
                question: "Which tool culture is linked with Neanderthals?",
                options: [
                    "Acheulean",
                    "Oldowan",
                    "Mousterian",
                    "Upper Paleolithic"],
                correctAnswer: 2,
            },
            {
                question: "Which feature reflects reduced reliance on chewing tough food?",
                options: [
                    "Larger jaws",
                    "Reduced jaw size",
                    "Pronounced prognathism",
                    "Sagittal crest"],
                correctAnswer: 1,
            },
            {
                question: "Which hypothesis suggests continuous evolution with gene flow?",
                options: [
                    "Out-of-Africa",
                    "Multiregional",
                    "Replacement",
                    "Punctuated equilibrium"],
                correctAnswer: 1,
            },
            {
                question: "Which feature of the hand enabled tool use?",
                options: [
                    "Curved fingers",
                    "Opposable thumb",
                    "Long arms",
                    "Power grip only"],
                correctAnswer: 1,
            },
            {
                question: "Which species shows first evidence of symbolic thought?",
                options: [
                    "Australopithecus afarensis",
                    "Homo erectus",
                    "Neanderthals",
                    "Homo sapiens"],
                correctAnswer: 3,
            },
            {
                question: "Which jaw shape is typical of modern humans?",
                options: [
                    "U-shaped",
                    "Rectangular",
                    "Parabolic",
                    "Square"],
                correctAnswer: 2,
            },
            {
                question: "Which change allowed finer motor control in humans?",
                options: [
                    "Smaller brain",
                    "Expanded motor cortex",
                    "Longer forelimbs",
                    "Opposable big toe"],
                correctAnswer: 1,
            },
            {
                question: "Which species was the first to leave Africa?",
                options: [
                    "Australopithecus afarensis",
                    "Homo erectus",
                    "Homo sapiens",
                    "Neanderthals"],
                correctAnswer: 1,
            },
            {
                question: "Which cultural development greatly increased survival chances?",
                options: [
                    "Fire use",
                    "Diastema presence",
                    "Large molars",
                    "Quadrupedal gait"],
                correctAnswer: 0,
            },
        ],
    },

    {
        category: "3.7 Genetic transfer",
        questions: [
            {
                question: "Which process allows the insertion of foreign DNA into an organism?",
                options: [
                    "Natural selection",
                    "Gene transfer",
                    "Meiosis",
                    "Genetic drift"],
                correctAnswer: 1,
            },
            {
                question: "Which vector is commonly used to transfer genes in bacteria?",
                options: [
                    "Plasmid",
                    "Virus",
                    "Mitochondrion",
                    "Chromosome"],
                correctAnswer: 0,
            },
            {
                question: "Which technology allows precise genome editing in organisms?",
                options: [
                    "PCR",
                    "CRISPR-Cas9",
                    "Gel electrophoresis",
                    "Southern blotting"],
                correctAnswer: 1,
            },
            {
                question: "Which method is used to make multiple copies of a DNA sequence?",
                options: [
                    "Cloning",
                    "PCR",
                    "Transcription",
                    "Translation"],
                correctAnswer: 1,
            },
            {
                question: "Which statement best describes a GMO?",
                options: [
                    "Organism with DNA from a different species",
                    "Organism cloned from another",
                    "Organism with no mutations",
                    "Organism naturally selected"],
                correctAnswer: 0,
            },
            {
                question: "Which method produces an identical genetic copy of an organism?",
                options: [
                    "Selective breeding",
                    "Somatic cell nuclear transfer",
                    "CRISPR-Cas9",
                    "PCR"],
                correctAnswer: 1,
            },
            {
                question: "Which ethical concern is linked to human gene editing?",
                options: [
                    "Cloning extinct species",
                    "Designer babies",
                    "Plant breeding",
                    "Antibiotic use"],
                correctAnswer: 1,
            },
            {
                question: "Which enzyme cuts DNA at specific sequences?",
                options: [
                    "DNA polymerase",
                    "Restriction enzyme",
                    "Ligase",
                    "Helicase"],
                correctAnswer: 1,
            },
            {
                question: "Which enzyme joins DNA fragments together?",
                options: [
                    "DNA polymerase",
                    "Restriction enzyme",
                    "Ligase",
                    "Helicase"],
                correctAnswer: 2,
            },
            {
                question: "Which is a potential ecological risk of GMOs?",
                options: [
                    "Reduced crop yield",
                    "Gene flow to wild species",
                    "Increased natural selection",
                    "Natural cloning"],
                correctAnswer: 1,
            },
            {
                question: "Which type of cloning involves producing identical cells or organisms?",
                options: [
                    "Gene cloning",
                    "Reproductive cloning",
                    "Therapeutic cloning",
                    "Selective breeding"],
                correctAnswer: 1,
            },
            {
                question: "Which type of cloning is used to produce stem cells?",
                options: [
                    "Reproductive cloning",
                    "Therapeutic cloning",
                    "Gene cloning",
                    "Natural cloning"],
                correctAnswer: 1,
            },
            {
                question: "Which technique identifies a specific DNA sequence in a sample?",
                options: [
                    "PCR",
                    "Gel electrophoresis",
                    "Southern blot",
                    "CRISPR"],
                correctAnswer: 2,
            },
            {
                question: "Which molecule carries the genetic information in genetic engineering?",
                options: [
                    "Protein",
                    "RNA",
                    "DNA",
                    "Lipid"],
                correctAnswer: 2,
            },
            {
                question: "Which process allows bacteria to acquire new genes from their environment?",
                options: [
                    "Transformation",
                    "Transduction",
                    "Conjugation",
                    "Mutation"],
                correctAnswer: 0,
            },
            {
                question: "Which process uses a virus to transfer DNA into a cell?",
                options: [
                    "Transformation",
                    "Transduction",
                    "Conjugation",
                    "CRISPR editing"],
                correctAnswer: 1,
            },
            {
                question: "Which statement about gene therapy is correct?",
                options: [
                    "It replaces defective genes with functional ones",
                    "It creates GMOs for crops",
                    "It is only used in plants",
                    "It removes all mutations"],
                correctAnswer: 0,
            },
            {
                question: "Which is a biological implication of cloning?",
                options: [
                    "Reduced genetic diversity",
                    "Increased mutation rate",
                    "Natural selection acceleration",
                    "Improved immunity"],
                correctAnswer: 0,
            },
            {
                question: "Which method detects DNA fragment sizes?",
                options: [
                    "PCR",
                    "Gel electrophoresis",
                    "CRISPR",
                    "Southern blotting"],
                correctAnswer: 1,
            },
            {
                question: "Which concern is associated with CRISPR off-target effects?",
                options: [
                    "Unintended DNA changes",
                    "Increased gene expression",
                    "Reduced transcription",
                    "Protein misfolding"],
                correctAnswer: 0,
            },
            {
                question: "Which process is used to amplify a single gene?",
                options: [
                    "PCR",
                    "Gel electrophoresis",
                    "CRISPR editing",
                    "Gene silencing"],
                correctAnswer: 0,
            },
            {
                question: "Which is a benefit of GMOs in agriculture?",
                options: [
                    "Reduced pest resistance",
                    "Increased yield and drought tolerance",
                    "Eliminates natural selection",
                    "Increases herbivore predation"],
                correctAnswer: 1,
            },
            {
                question: "Which type of gene transfer occurs naturally in bacteria?",
                options: [
                    "Vertical gene transfer",
                    "Horizontal gene transfer",
                    "CRISPR editing",
                    "Gene cloning"],
                correctAnswer: 1,
            },
            {
                question: "Which enzyme is required for PCR to synthesize new DNA strands?",
                options: [
                    "DNA ligase",
                    "DNA polymerase",
                    "Reverse transcriptase",
                    "Restriction enzyme"],
                correctAnswer: 1,
            },
            {
                question: "Which is a potential human health implication of genetic manipulation?",
                options: [
                    "Allergy to novel proteins",
                    "Reduced gene therapy effectiveness",
                    "Loss of all genetic diversity",
                    "Natural mutation acceleration"],
                correctAnswer: 0,
            },
        ]
    }
]