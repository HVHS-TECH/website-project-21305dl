// Questions sorted by category (25 each)
// Question content is copied using AI, the coding format and main array is created by me
const questions = [
    {
        category: "2.1 biology investigation",
        questions: [
            {
                question: "Which is the independent variable in an investigation?",
                options: ["The variable you measure", 
                        "The variable you change", 
                        "The variable you keep constant", 
                        "The control"],
                correctAnswer: 1,
            },
            {
                question: "Which is the dependent variable in an investigation?",
                options: ["The variable you measure", 
                        "The variable you change", 
                        "The variable you keep constant", 
                        "The control"],
                correctAnswer: 0,
            },
            {
                question: "What is a control in a biological experiment?",
                options: ["A repeated trial", 
                        "A standard for comparison", 
                        "The variable you measure", 
                        "An uncontrolled factor"],
                correctAnswer: 1,
            },
            {
                question: "Why is it important to repeat measurements?",
                options: ["To reduce random error", 
                        "To reduce systematic error", 
                        "To change the independent variable", 
                        "To change the dependent variable"],
                correctAnswer: 0,
            },
            {
                question: "Which type of error can be reduced by careful technique?",
                options: ["Random error", 
                        "Systematic error", 
                        "Human error", 
                        "Measurement error"],
                correctAnswer: 1,
            },
            {
                question: "Which graph is most appropriate for comparing the effect of different treatments?",
                options: ["Bar graph", 
                        "Line graph", 
                        "Histogram", 
                        "Scatter plot"],
                correctAnswer: 0,
            },
            {
                question: "Which graph is most appropriate to show the relationship between two continuous variables?",
                options: ["Bar graph", 
                        "Line graph", 
                        "Histogram", 
                        "Pie chart"],
                correctAnswer: 1,
            },
            {
                question: "How should data be recorded to ensure reliability?",
                options: ["Include raw measurements and units", 
                        "Only record averages", 
                        "Record only significant results", 
                        "Ignore anomalous results"],
                correctAnswer: 0,
            },
            {
                question: "Which factor should be kept constant in a fair test?",
                options: ["Independent variable", 
                        "Dependent variable", 
                        "Control variables", 
                        "All variables randomly"],
                correctAnswer: 2,
            },
            {
                question: "What is meant by 'validity' in an investigation?",
                options: ["The investigation measures what it is supposed to measure", 
                        "The investigation has no errors", 
                        "The results are repeated", 
                        "The hypothesis is correct"],
                correctAnswer: 0,
            },
            {
                question: "What is meant by 'reliability' in an investigation?",
                options: ["The results are consistent when repeated", 
                        "The results are accurate", 
                        "The hypothesis is supported", 
                        "The experiment uses control variables"],
                correctAnswer: 0,
            },
            {
                question: "Why should units be recorded with data?",
                options: ["To make graphs easier", 
                        "To ensure clarity and allow calculation", 
                        "To impress the examiner", 
                        "It is optional"],
                correctAnswer: 1,
            },
            {
                question: "What does a standard deviation indicate?",
                options: ["The mean of measurements", 
                        "The spread of measurements around the mean", 
                        "The largest measurement", 
                        "The smallest measurement"],
                correctAnswer: 1,
            },
            {
                question: "What is an anomalous result?",
                options: ["A measurement that is consistent with others", 
                        "A measurement that is clearly different from the trend", 
                        "A measurement with no units", 
                        "A result predicted by the hypothesis"],
                correctAnswer: 1,
            },
            {
                question: "Which is the correct order for a scientific investigation?",
                options: ["Hypothesis → Data collection → Analysis → Conclusion", 
                        "Data collection → Hypothesis → Conclusion → Analysis", 
                        "Conclusion → Hypothesis → Data → Analysis", 
                        "Analysis → Hypothesis → Data → Conclusion"],
                correctAnswer: 0,
            },
            {
                question: "Why is a pilot study useful?",
                options: ["To confirm the hypothesis", 
                        "To test the method and identify problems before the main experiment", 
                        "To change the independent variable", 
                        "To avoid making a conclusion"],
                correctAnswer: 1,
            },
            {
                question: "Why should experiments be repeated?",
                options: ["To reduce random error and increase reliability", 
                        "To increase systematic error", 
                        "To change the dependent variable", 
                        "To produce different results"],
                correctAnswer: 0,
            },
            {
                question: "What type of data is produced by counting number of individuals?",
                options: ["Qualitative", 
                        "Categorical", 
                        "Quantitative discrete", 
                        "Quantitative continuous"],
                correctAnswer: 2,
            },
            {
                question: "What type of data is produced by measuring the length of a leaf?",
                options: ["Qualitative", 
                        "Categorical", 
                        "Quantitative discrete", 
                        "Quantitative continuous"],
                correctAnswer: 3,
            },
            {
                question: "When drawing a line of best fit, you should:",
                options: ["Pass through all points exactly", 
                        "Show the overall trend of the data", 
                        "Ignore all anomalous points", 
                        "Draw a horizontal line"],
                correctAnswer: 1,
            },
            {
                question: "A controlled variable in a plant growth experiment might be:",
                options: ["Amount of water", 
                        "Type of fertilizer", 
                        "Height of plant measured", 
                        "All of the above"],
                correctAnswer: 0,
            },
            {
                question: "Why is it important to have a control group?",
                options: ["To ensure the independent variable is effective", 
                        "To provide a baseline for comparison", 
                        "To increase sample size", 
                        "To avoid repeating measurements"],
                correctAnswer: 1,
            },
            {
                question: "What is a hypothesis?",
                options: ["A testable prediction", 
                        "A proven fact", 
                        "A result of an experiment", 
                        "An anomalous measurement"],
                correctAnswer: 0,
            },
            {
                question: "Which statistical test is commonly used at Level 2 for comparing two sets of data?",
                options: ["Chi-squared test", 
                        "t-test", 
                        "Regression analysis", 
                        "ANOVA"],
                correctAnswer: 1,
            },
            {
                question: "Which of the following best describes a valid biological investigation?",
                options: ["Includes a testable hypothesis, controlled variables, and reliable measurements", 
                        "Only collects data without analysis", 
                        "Randomly changes all variables", 
                        "Ignores anomalous results"],
                correctAnswer: 0,
            },
            {
                question: "Why is it important to identify uncertainties in measurements?",
                options: ["To make graphs look better", 
                        "To assess the reliability and precision of results", 
                        "To avoid recording raw data", 
                        "It is optional"],
                correctAnswer: 1,
            }
        ],
    },

    {
        category: "3.2 biology response",
        questions: [
                {
                question: "What is the primary purpose of integrating biological knowledge in addressing socio-scientific issues?",
                options: [
                    "To develop a personal opinion on the issue",
                    "To understand the scientific principles underlying the issue",
                    "To persuade others to adopt a specific viewpoint",
                    "To memorize facts related to the issue"
                ],
                correctAnswer: 1
            },
            {
                question: "Which of the following is an example of a socio-scientific issue?",
                options: [
                    "The process of photosynthesis",
                    "The impact of climate change on biodiversity",
                    "The structure of DNA",
                    "The function of the human heart"
                ],
                correctAnswer: 1
            },
            {
                question: "In the context of genetic modification, what does 'gene editing' refer to?",
                options: [
                    "Changing the genetic makeup of an organism",
                    "Copying genes from one organism to another",
                    "Mutating genes naturally",
                    "Deleting genes from an organism"
                ],
                correctAnswer: 0
            },
            {
                question: "Which ethical concern is associated with gene editing in humans?",
                options: [
                    "Increased biodiversity",
                    "Potential unintended consequences",
                    "Enhanced disease resistance",
                    "Improved crop yields"
                ],
                correctAnswer: 1
            },
            {
                question: "What role do scientific models play in understanding socio-scientific issues?",
                options: [
                    "They provide definitive solutions to problems",
                    "They simplify complex biological processes for better understanding",
                    "They replace the need for empirical research",
                    "They are used to predict future events with certainty"
                ],
                correctAnswer: 1
            },
            {
                question: "Which of the following is a potential benefit of genetically modified crops?",
                options: [
                    "Increased nutritional content",
                    "Reduced pesticide use",
                    "Enhanced resistance to environmental stresses",
                    "All of the above"
                ],
                correctAnswer: 3
            },
            {
                question: "What is a major concern regarding the use of genetically modified organisms (GMOs) in agriculture?",
                options: [
                    "Loss of biodiversity",
                    "Increased food security",
                    "Higher crop yields",
                    "Decreased resistance to pests"
                ],
                correctAnswer: 0
            },
            {
                question: "How does understanding the biology of pathogens help in addressing public health issues?",
                options: [
                    "By identifying potential treatments and preventive measures",
                    "By eliminating the need for vaccines",
                    "By reducing the cost of healthcare",
                    "By increasing the spread of diseases"
                ],
                correctAnswer: 0
            },
            {
                question: "Which factor is most important when evaluating the impact of a new drug on human health?",
                options: [
                    "Cost of production",
                    "Efficacy and safety",
                    "Popularity among patients",
                    "Marketing strategies"
                ],
                correctAnswer: 1
            },
            {
                question: "What is the significance of peer-reviewed scientific research in informing public policy?",
                options: [
                    "It ensures that policies are based on credible and validated information",
                    "It allows policymakers to ignore public opinion",
                    "It guarantees that policies will be successful",
                    "It eliminates the need for further research"
                ],
                correctAnswer: 0
            },
            {
                question: "Which of the following is a consequence of antibiotic resistance?",
                options: [
                    "Increased effectiveness of antibiotics",
                    "Decreased healthcare costs",
                    "Difficulty in treating infections",
                    "Improved immune system function"
                ],
                correctAnswer: 2
            },
            {
                question: "What is the role of biodiversity in ecosystem stability?",
                options: [
                    "It reduces the resilience of ecosystems",
                    "It increases the risk of disease outbreaks",
                    "It contributes to ecosystem resilience and functionality",
                    "It has no impact on ecosystem stability"
                ],
                correctAnswer: 2
            },
            {
                question: "How can public awareness campaigns contribute to addressing environmental issues?",
                options: [
                    "By promoting sustainable behaviors and policies",
                    "By discouraging scientific research",
                    "By increasing pollution levels",
                    "By reducing government regulations"
                ],
                correctAnswer: 0
            },
            {
                question: "What is a key consideration when assessing the ethical implications of cloning?",
                options: [
                    "The potential for increased genetic diversity",
                    "The impact on individual identity and autonomy",
                    "The cost of cloning procedures",
                    "The speed of technological advancement"
                ],
                correctAnswer: 1
            },
            {
                question: "Which of the following is an example of a renewable resource?",
                options: [
                    "Coal",
                    "Wind energy",
                    "Natural gas",
                    "Nuclear energy"
                ],
                correctAnswer: 1
            },
            {
                question: "What is the primary concern regarding the use of fossil fuels?",
                options: [
                    "Their abundance",
                    "Their contribution to climate change",
                    "Their low cost",
                    "Their renewable nature"
                ],
                correctAnswer: 1
            },
            {
                question: "How does deforestation impact biodiversity?",
                options: [
                    "It increases habitat availability for species",
                    "It leads to loss of species and ecosystem services",
                    "It has no impact on biodiversity",
                    "It enhances genetic diversity"
                ],
                correctAnswer: 1
            },
            {
                question: "What is the role of scientific consensus in shaping environmental policies?",
                options: [
                    "It provides a unified understanding to guide decision-making",
                    "It allows for personal opinions to override scientific evidence",
                    "It discourages public participation",
                    "It eliminates the need for policy evaluation"
                ],
                correctAnswer: 0
            },
            {
                question: "Which of the following is a potential consequence of overfishing?",
                options: [
                    "Increased fish populations",
                    "Depletion of fish stocks",
                    "Enhanced marine biodiversity",
                    "Improved fishery sustainability"
                ],
                correctAnswer: 1
            },
            {
                question: "How can genetic screening contribute to disease prevention?",
                options: [
                    "By identifying individuals at risk for certain genetic disorders",
                    "By eliminating the need for vaccinations",
                    "By curing existing genetic diseases",
                    "By increasing the mutation rate"
                ],
                correctAnswer: 0
            },
            {
                question: "What is the significance of understanding the biology of invasive species?",
                options: [
                    "It helps in developing strategies to manage and mitigate their impact",
                    "It has no relevance to conservation efforts",
                    "It promotes the spread of invasive species",
                    "It decreases the need for biodiversity protection"
                ],
                correctAnswer: 0
            },
            {
                question: "Which of the following is a challenge in the implementation of sustainable agricultural practices?",
                options: [
                    "High initial costs and resource requirements",
                    "Lack of scientific evidence",
                    "Decreased crop yields",
                    "Increased environmental degradation"
                ],
                correctAnswer: 0
            },
            {
                question: "How does understanding the genetics of cancer aid in treatment development?",
                options: [
                    "By identifying genetic mutations that drive cancer progression",
                    "By eliminating the need for chemotherapy",
                    "By reducing the cost of cancer treatments",
                    "By preventing all forms of cancer"
                ],
                correctAnswer: 0
            },
            {
                question: "What is the role of bioethics in biotechnology?",
                options: [
                    "To evaluate the moral implications of biotechnological advancements",
                    "To promote unrestricted scientific experimentation",
                    "To discourage public involvement in scientific discussions",
                    "To prioritize economic gains over ethical considerations"
                ],
                correctAnswer: 0
            },
            {
                question: "Which of the following is a potential risk associated with the use of nanotechnology in medicine?",
                options: [
                    "Unintended biological interactions",
                    "Improved drug delivery systems",
                    "Enhanced diagnostic capabilities",
                    "Reduced side effects of treatments"
                ],
                correctAnswer: 0
            },
            {
                question: "How can climate change affect human health?",
                options: [
                    "By altering patterns of disease transmission",
                    "By improving air quality",
                    "By reducing the prevalence of vector-borne diseases",
                    "By stabilizing food production"
                ],
                correctAnswer: 0
            },
            {
                question: "What is the importance of public engagement in scientific decision-making?",
                options: [
                    "It ensures that diverse perspectives are considered",
                    "It delays the decision-making process",
                    "It complicates the implementation of policies",
                    "It has no impact on scientific outcomes"
                ],
                correctAnswer: 0
            }
        ],
    },

    {
        category: "2.5 genetic variation",
        questions: [
            {
                question: "Which process produces genetic variation by shuffling alleles?",
                options: ["Mitosis", 
                        "Meiosis", 
                        "Binary fission", 
                        "Fertilisation only"],
                correctAnswer: 1,
            },
            {
                question: "Which is an example of a source of genetic variation?",
                options: ["Mutation", 
                        "Crossing over", 
                        "Independent assortment", 
                        "All of the above"],
                correctAnswer: 3,
            },
            {
                question: "What is a mutation?",
                options: ["A change in the sequence of DNA", 
                        "A change in phenotype without DNA change", 
                        "Fusion of gametes", 
                        "Cell division by mitosis"],
                correctAnswer: 0,
            },
            {
                question: "Which type of mutation changes a single base in DNA?",
                options: ["Point mutation", 
                        "Frameshift mutation", 
                        "Chromosome mutation", 
                        "Inversion"],
                correctAnswer: 0,
            },
            {
                question: "What is the term for the physical expression of a genotype?",
                options: ["Genotype", 
                        "Phenotype", 
                        "Allele", 
                        "Trait"],
                correctAnswer: 1,
            },
            {
                question: "Which term describes the genetic makeup of an organism?",
                options: ["Genotype", 
                        "Phenotype", 
                        "Trait", 
                        "Chromosome"],
                correctAnswer: 0,
            },
            {
                question: "What is an allele?",
                options: ["A type of gene", 
                        "A chromosome", 
                        "A cell", 
                        "A mutation"],
                correctAnswer: 0,
            },
            {
                question: "Which of the following is a source of variation between individuals?",
                options: ["Independent assortment", 
                        "Crossing over", 
                        "Mutation", 
                        "All of the above"],
                correctAnswer: 3,
            },
            {
                question: "During meiosis, homologous chromosomes separate during:",
                options: ["Prophase I", 
                        "Metaphase I", 
                        "Anaphase I", 
                        "Telophase I"],
                correctAnswer: 2,
            },
            {
                question: "Which term describes organisms with two identical alleles for a trait?",
                options: ["Homozygous", 
                        "Heterozygous", 
                        "Codominant", 
                        "Dominant"],
                correctAnswer: 0,
            },
            {
                question: "Which term describes organisms with two different alleles for a trait?",
                options: ["Homozygous", 
                        "Heterozygous", 
                        "Dominant", 
                        "Recessive"],
                correctAnswer: 1,
            },
            {
                question: "A recessive allele is expressed in the phenotype when:",
                options: ["It is homozygous", 
                        "It is heterozygous", 
                        "It is codominant", 
                        "It is dominant"],
                correctAnswer: 0,
            },
            {
                question: "Which pattern of inheritance results in both alleles being expressed equally?",
                options: ["Dominant-recessive", 
                        "Incomplete dominance", 
                        "Codominance", 
                        "Polygenic"],
                correctAnswer: 2,
            },
            {
                question: "Incomplete dominance occurs when:",
                options: ["The dominant allele masks the recessive allele", 
                        "The heterozygote has an intermediate phenotype", 
                        "Two alleles are equally expressed", 
                        "Mutation occurs in both alleles"],
                correctAnswer: 1,
            },
            {
                question: "Which term describes a change in the frequency of alleles in a population over time?",
                options: ["Evolution", 
                        "Inheritance", 
                        "Mutation", 
                        "Variation"],
                correctAnswer: 0,
            },
            {
                question: "Which of these is a genetic variation that arises from meiosis?",
                options: ["Crossing over", 
                        "Independent assortment", 
                        "Segregation of alleles", 
                        "All of the above"],
                correctAnswer: 3,
            },
            {
                question: "Which is an example of continuous variation?",
                options: ["Blood type", 
                        "Height", 
                        "Flower color (red/white)", 
                        "Albinism"],
                correctAnswer: 1,
            },
            {
                question: "Which is an example of discontinuous variation?",
                options: ["Height", 
                        "Weight", 
                        "Blood type", 
                        "Foot length"],
                correctAnswer: 2,
            },
            {
                question: "Which term describes the proportion of individuals in a population carrying a particular allele?",
                options: ["Allele frequency", 
                        "Phenotype frequency", 
                        "Genotype", 
                        "Trait distribution"],
                correctAnswer: 0,
            },
            {
                question: "What is the main source of new alleles in a population?",
                options: ["Mutation", 
                        "Crossing over", 
                        "Independent assortment", 
                        "Fertilisation"],
                correctAnswer: 0,
            },
            {
                question: "Which of the following statements about meiosis is true?",
                options: ["It produces identical cells", 
                        "It reduces chromosome number by half", 
                        "It occurs only in body cells", 
                        "It produces two cells"],
                correctAnswer: 1,
            },
            {
                question: "A Punnett square is used to:",
                options: ["Predict phenotype ratios", 
                        "Predict genotype ratios", 
                        "Visualise inheritance patterns", 
                        "All of the above"],
                correctAnswer: 3,
            },
            {
                question: "Which is an example of polygenic inheritance?",
                options: ["Blood type", 
                        "Height", 
                        "Albinism", 
                        "Hitchhiker's thumb"],
                correctAnswer: 1,
            },
            {
                question: "Which process combines alleles from two parents to produce a zygote?",
                options: ["Fertilisation", 
                        "Meiosis", 
                        "Mutation", 
                        "Independent assortment"],
                correctAnswer: 0,
            },
            {
                question: "Genetic variation is important in a population because:",
                options: ["It allows adaptation to changing environments", 
                        "It reduces reproduction", 
                        "It produces identical offspring", 
                        "It removes alleles from the population"],
                correctAnswer: 0,
            },
            {
                question: "Which type of mutation affects only one nucleotide in a DNA sequence?",
                options: ["Point mutation", 
                        "Frameshift mutation", 
                        "Chromosomal mutation", 
                        "Deletion of a whole gene"],
                correctAnswer: 0,
            }
        ],
    },

    {
        category: "2.7 gene expression",
        questions: [
           {
                question: "Which molecule carries the genetic code from DNA to the ribosome?",
                options: ["tRNA", 
                        "mRNA", 
                        "rRNA", 
                        "DNA polymerase"],
                correctAnswer: 1,
            },
            {
                question: "What is transcription?",
                options: ["Synthesis of RNA from a DNA template", 
                        "Synthesis of DNA from RNA", 
                        "Translation of mRNA into protein", 
                        "Replication of DNA"],
                correctAnswer: 0,
            },
            {
                question: "Which enzyme is responsible for synthesising RNA during transcription?",
                options: ["DNA polymerase", 
                        "RNA polymerase", 
                        "Ribosome", 
                        "Ligase"],
                correctAnswer: 1,
            },
            {
                question: "Where does transcription occur in eukaryotic cells?",
                options: ["Cytoplasm", 
                        "Nucleus", 
                        "Ribosome", 
                        "Mitochondria"],
                correctAnswer: 1,
            },
            {
                question: "What is translation?",
                options: ["Synthesis of RNA from DNA", 
                        "Synthesis of protein from mRNA", 
                        "Replication of DNA", 
                        "Transcription of tRNA"],
                correctAnswer: 1,
            },
            {
                question: "Which molecule brings amino acids to the ribosome during translation?",
                options: ["tRNA", 
                        "mRNA", 
                        "rRNA", 
                        "DNA"],
                correctAnswer: 0,
            },
            {
                question: "Which part of the tRNA binds to the mRNA codon?",
                options: ["Anticodon", 
                        "Amino acid attachment site", 
                        "Ribosome binding site", 
                        "Promoter"],
                correctAnswer: 0,
            },
            {
                question: "What is a codon?",
                options: ["Three nucleotides on DNA", 
                        "Three nucleotides on mRNA that code for an amino acid", 
                        "A triplet of tRNA molecules", 
                        "A regulatory protein"],
                correctAnswer: 1,
            },
            {
                question: "Which type of RNA is part of the ribosome?",
                options: ["mRNA", 
                        "tRNA", 
                        "rRNA", 
                        "snRNA"],
                correctAnswer: 2,
            },
            {
                question: "Which statement correctly describes the relationship between genes and proteins?",
                options: ["Genes are made of proteins", 
                        "Genes code for proteins via mRNA", 
                        "Proteins code for genes", 
                        "Proteins are copied into DNA"],
                correctAnswer: 1,
            },
            {
                question: "What is the start codon for translation in most organisms?",
                options: ["UAA", 
                        "AUG", 
                        "UGG", 
                        "UAG"],
                correctAnswer: 1,
            },
            {
                question: "Which of these is a stop codon?",
                options: ["AUG", 
                        "UAA", 
                        "AUG and UGG", 
                        "GGG"],
                correctAnswer: 1,
            },
            {
                question: "Which of these can cause a change in gene expression?",
                options: ["Mutation in a gene", 
                        "Change in environmental conditions", 
                        "Both of the above", 
                        "Neither"],
                correctAnswer: 2,
            },
            {
                question: "Which type of mutation changes a single base in DNA?",
                options: ["Point mutation", 
                        "Frameshift mutation", 
                        "Chromosomal mutation", 
                        "Insertion of a whole gene"],
                correctAnswer: 0,
            },
            {
                question: "Which type of mutation can result in a completely different protein being produced?",
                options: ["Missense mutation", 
                        "Nonsense mutation", 
                        "Frameshift mutation", 
                        "Silent mutation"],
                correctAnswer: 2,
            },
            {
                question: "A silent mutation:",
                options: ["Changes the amino acid sequence", 
                        "Does not change the amino acid sequence", 
                        "Produces a stop codon", 
                        "Removes a whole gene"],
                correctAnswer: 1,
            },
            {
                question: "Which sequence correctly represents the central dogma of molecular biology?",
                options: ["DNA → RNA → Protein", 
                        "Protein → RNA → DNA", 
                        "RNA → DNA → Protein", 
                        "DNA → Protein → RNA"],
                correctAnswer: 0,
            },
            {
                question: "Which factor can regulate gene expression in eukaryotes?",
                options: ["Promoter regions", 
                        "Transcription factors", 
                        "Environmental signals", 
                        "All of the above"],
                correctAnswer: 3,
            },
            {
                question: "Which term describes a group of genes controlled together in prokaryotes?",
                options: ["Operon", 
                        "Exon", 
                        "Intron", 
                        "Codon"],
                correctAnswer: 0,
            },
            {
                question: "Which type of RNA carries the code from DNA out of the nucleus?",
                options: ["tRNA", 
                        "mRNA", 
                        "rRNA", 
                        "snRNA"],
                correctAnswer: 1,
            },
            {
                question: "Which of the following best describes a mutation in a regulatory gene?",
                options: ["May increase or decrease transcription of other genes", 
                        "Always stops translation completely", 
                        "Always produces a nonfunctional protein", 
                        "Has no effect on gene expression"],
                correctAnswer: 0,
            },
            {
                question: "Which sequence of events occurs during gene expression?",
                options: ["Replication → Translation → Transcription", 
                        "Transcription → Translation → Protein synthesis", 
                        "Translation → Transcription → Protein synthesis", 
                        "Transcription → Replication → Translation"],
                correctAnswer: 1,
            },
            {
                question: "Which of the following is a difference between DNA and RNA?",
                options: ["DNA has uracil, RNA has thymine", 
                        "DNA is single-stranded, RNA is double-stranded", 
                        "DNA has thymine, RNA has uracil", 
                        "DNA has ribose, RNA has deoxyribose"],
                correctAnswer: 2,
            },
            {
                question: "Which part of the gene determines where transcription begins?",
                options: ["Exon", 
                        "Intron", 
                        "Promoter", 
                        "Terminator"],
                correctAnswer: 2,
            },
            {
                question: "Which of the following is a post-transcriptional modification in eukaryotes?",
                options: ["Addition of a 5' cap", 
                        "Poly-A tail addition", 
                        "Splicing out introns", 
                        "All of the above"],
                correctAnswer: 3,
            },
            {
                question: "Which type of mutation can lead to a stop codon appearing prematurely?",
                options: ["Nonsense mutation", 
                        "Missense mutation", 
                        "Frameshift mutation", 
                        "Silent mutation"],
                correctAnswer: 0,
            }
        ]
    }
]