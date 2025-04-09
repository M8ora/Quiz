const questionSets = {
    weekTwo: [
        { 
            question: "It is a process of systematic inquiry that entails collection of data, documentation of critical information and analysis and interpretation of that data or information in accordance with suitable methodologies set by specific professional fields and academic disciplines.", 
            choices: ["Thesis", "Research", "Emphirical Research"], 
            answer: "Research"
        },
        { 
            question: "It expressed in numbers and graphs and it used to test or confirm theories and assumptions. This research used to establish generalizable facts about a topic.", 
            choices: ["QUANTITATIVE RESEARCH", "QUALITATIVE RESEARCH", "RESEARCH STUDY"], 
            answer: "QUANTITATIVE RESEARCH"
        },
        { 
            question: "Its methods include experiments, observations recorded as numbers, and surveys with closed-ended questions.", 
            choices: ["QUANTITATIVE RESEARCH", "QUALITATIVE RESEARCH", "EXPERIMENTAL RESEARCH"], 
            answer: "QUANTITATIVE RESEARCH"
        },
        { 
            question: "It expressed in words that used to understand concepts, thoughts or experiences. This type of research enables you to gather in-depth insights on topics that are not well understood.", 
            choices: ["QUANTITATIVE RESEARCH", "QUALITATIVE RESEARCH", "DESCRIPTIVE RESEARCH"], 
            answer: "QUALITATIVE RESEARCH"
        },
        { 
            question: "Its methods include interviews with open-ended questions, observations described in words, and literature reviews that explore concepts and theories.", 
            choices: ["QUANTITATIVE RESEARCH", "QUALITATIVE RESEARCH", "RESEARCH STUDY"], 
            answer: "QUALITATIVE RESEARCH"
        },
        { 
            question: "Quantitative focuses on testing hypotheses and theories.", 
            choices: ["TRUE", "FALSE"], 
            answer: "FALSE"
        },
        { 
            question: "Qualitative analyzed by summarizing, categorizing and interpreting.", 
            choices: ["TRUE", "FALSE"], 
            answer: "FALSE"
        },
        { 
            question: "Techniques and procedures used to gather information for research purposes and this methods can range from simple self-reported surveys to more complex experiments and can involve either quantitative or qualitative approaches to data gathering.", 
            choices: ["DATA COLLECTION METHOD", "ANALYZING QUALITATIVE DATA", "ANALYZING QUANTITATIVE DATA"], 
            answer: "DATA COLLECTION METHOD"
        },
        { 
            question: "List of closed or multiple choice questions that is distributed to a sample (online, in person, or over the phone).", 
            choices: ["Surveys", "Interviews", "Literature review"], 
            answer: "Surveys"
        },
        { 
            question: "Asking open-ended questions verbally to respondents.", 
            choices: ["Literature review", "Surveys", "Interviews"], 
            answer: "Interviews"
        },
        {   
            question: "Situation in which different types of variables are controlled and manipulated to establish cause-and-effect relationships.", 
            choices: ["Experiments", "Observations", "Interviews"], 
            answer: "Experiments"
        },
        { 
            question: "Observing subjects in a natural environment where variables can’t be controlled.", 
            choices: ["Experiments", "Observations", "Focus Group"], 
            answer: "Observations"
        },
        { 
            question: "Discussion among a group of people about a topic to gather opinions that can be used for further research.", 
            choices: ["Ethnography", "Focus Group", "Interviews"], 
            answer: "Focus Group"
        },
        { 
            question: "Participating in a community or organization for an extended period of time to closely observe culture and behavior.", 
            choices: ["Observations", "Ethnography", "Focus Group"], 
            answer: "Ethnography"
        },
        { 
            question: "It is based on numbers which statistical analysis is used to discover commonalities or patterns in the data. The results are often reported in graphs and tables.", 
            choices: ["Quantitative data", "", "Qualitative data"], 
            answer: "Quantitative data"
        },
        { 
            question: "It is more difficult to analyze than quantitative data. It consists of text, images or videos instead of numbers.", 
            choices: ["Qualitative data", "Quantitative data", ""], 
            answer: "Qualitative data"
        }
    ],
    weekThree: [
        { 
            question: "It is a process of collecting and analyzing numerical data that can be used to find patterns and averages, make predictions, test causal relationships, and generalize results to wider populations.", 
            choices: ["QUANTITATIVE RESEARCH", "QUALITATIVE RESEARCH", "RESEARCH STUDY"], 
            answer: "QUANTITATIVE RESEARCH"
        },
        { 
            question: "It simply seek an overall summary of your study variables.", 
            choices: ["Descriptive Research", "Correlation Research", "Experimental Research"], 
            answer: "Descriptive Research"
        },
        { 
            question: "Investigate relationships between your study variables.", 
            choices: ["Descriptive Research", "Correlation Research", "Experimental Research"], 
            answer: "Correlation Research"
        },
        { 
            question: "Systematically examine whether there is a cause-and-effect relationship between variables.", 
            choices: ["Descriptive Research", "Correlation Research", "Experimental Research"], 
            answer: "Experimental Research"
        },
        { 
            question: "It aims to accurately and systematically describe a population, situation or phenomenon.<br> It can answer what, where, when and how questions, but not why questions. <br> It is an appropriate choice when the research aim is to identify characteristics, frequencies, trends, and categories.", 
            choices: ["Descriptive Research", "Correlation Research", "Experimental Research"], 
            answer: "Descriptive Research"
        },
        { 
            question: "It investigates the relationships between variables without the researcher controlling or manipulating any of them.", 
            choices: ["Descriptive Research", "Correlation Research", "Experimental Research"], 
            answer: "Correlation Research"
        },
        { 
            question: "It is used to study causal relationships and manipulate one or more independent variables and measure their effect on one or more dependent variables.<br> It design create a set of procedures to systematically test a hypothesis. A good experimental design requires a strong understanding of the system study.", 
            choices: ["Descriptive Research", "Correlation Research", "Experimental Research"], 
            answer: "Experimental Research"
        },
        { 
            question: "It allows you to gather large volumes of data that can be analyzed for frequencies, averages and patterns.", 
            choices: ["Surveys", "Case Study", "Observations"], 
            answer: "Surveys"
        },
        { 
            question: "allow you to gather data on behaviors and phenomena without having to rely on the honesty and accuracy of respondents.<br> This method is often used by psychological, social and market researchers to understand how people act in real-life situations.", 
            choices: ["Surveys", "Case Study", "Observations"], 
            answer: "Observations"
        },
        { 
            question: "Used to describe the characteristics of a specific subject. Instead of gathering a large volume of data to identify patterns across time or location, case studies gather detailed data to identify the characteristics of a narrowly defined subject.", 
            choices: ["Surveys", "Case Study", "Observations"], 
            answer: "Case Study"
        },
        { 
            question: "It is a type of field research where the researcher will gather the data about the behavior or phenomenon in its natural environment. <br> This method often involves recording, counting, describing, and categorizing actions and events and it can include both qualitative and quantitative research.", 
            choices: ["Experimental Observation", "Naturalistic Observation", "Ethnographic Observation"], 
            answer: "Naturalistic Observation"
        },
        { 
            question: "Instead of collecting original data, it can also use data that has already been collected for a different purpose, such as official records, polls, or previous studies.", 
            choices: ["Naturalistic Observation", "Literature surveys", "Second Data"], 
            answer: "Second Data"
        },
        { 
            question: "It describe a dataset that help to understand the details of the data and finding patterns from the specific data sample.", 
            choices: ["Inferential statistics", "Descriptive Statistics"], 
            answer: "Descriptive Statistics"
        },
        { 
            question: "Aim to make predictions or highlight possible outcomes from the analyzed data obtained from descriptive statistics. <br> It used to generalize results and make predictions between groups, show relationships that exist between multiple variables, and used for hypothesis testing that predicts changes or differences.", 
            choices: ["Descriptive Statistics", "Inferential statistics"], 
            answer: "Inferential statistics"
        },
        { 
            question: "Repeating the study is possible because of standardized data collection protocols and tangible definitions of abstract concepts.", 
            choices: ["Repetition", "Replication", "Duplication"], 
            answer: "Replication"
        },
        { 
            question: "The study can be reproduced in other cultural settings, times or with different groups of participants. Results can be compared statistically.", 
            choices: ["Direct comparisons of results", "Hypothesis testing", "Large samples"], 
            answer: "Direct comparisons of results"
        },
        { 
            question: "Using formalized and established hypothesis testing procedures means that you have to carefully consider and report your research variables, predictions, data collection and testing methods before coming to a conclusion.", 
            choices: ["Direct comparisons of results", "Hypothesis testing", "Large samples"], 
            answer: "Hypothesis testing"
        },
        { 
            question: "Data from it, can be processed and analyzed using reliable and consistent procedures through quantitative data analysis.", 
            choices: ["Direct comparisons of results", "Hypothesis testing", "Large samples"], 
            answer: "Large samples"
        },
        { 
            question: "Predetermined variables and measurement procedures can mean that you ignore other relevant observations.", 
            choices: ["Narrow focus", "Superficiality", "Lack of context"], 
            answer: "Narrow focus"
        },
        { 
            question: "Using precise and restrictive operational definitions may inadequately represent complex concepts. For example, the concept of mood may be represented with just a number in quantitative research, but explained with elaboration in qualitative research.", 
            choices: ["Narrow focus", "Structural bias", "Superficiality"], 
            answer: "Superficiality"
        },
        { 
            question: "Despite standardized procedures, structural biases can still affect quantitative research. <br> Missing data, imprecise measurements or inappropriate sampling methods are biases that can lead to the wrong conclusions.", 
            choices: ["Lack of context", "Structural bias", "Narrow focus"], 
            answer: "Structural bias"
        },
        { 
            question: "Quantitative research often uses unnatural settings like laboratories or fails to consider historical and cultural contexts that may affect data collection and results.", 
            choices: ["Lack of context", "Structural bias", "Narrow focus"], 
            answer: "Lack of context"
        }
    ],
    weekFour: [
        { 
            question: "It is a data that is collected, analyzed, interpreted and presented this are the individual pieces of factual information recorded, and it is used for the purpose of the analysis process.", 
            choices: ["Variables", "Data", "Statistics"], 
            answer: "Variables"
        },
        { 
            question: "Are the result of data analysis and the Data classification and data handling are important processes as it involves a multitude of tags and labels to define the data, its integrity and confidentiality.", 
            choices: ["Variables", "Data", "Statistics"], 
            answer: "Statistics"
        },
        { 
            question: "It is a specific measurement of a variable. <br> It is the value you record in your data sheet. <br> It is generally divided into two categories: <br> • Quantitative data represents amounts <br> • Categorical data represents groupings", 
            choices: ["Variables", "Data", "Statistics"], 
            answer: "Data"
        },
        { 
            question: "It also known as numerical variables, are variables that represent measurable quantities and can be expressed in numbers.", 
            choices: ["Quantitative variables", "Qualitative variables", "Discrete Variables"], 
            answer: "Quantitative variables"
        },
        { 
            question: "These are variables that take on a finite or countable number of distinct values.", 
            choices: ["Discrete Variables", "Continuous Variables", "Categorical Variables"], 
            answer: "Discrete Variables"
        },
        { 
            question: "These can take on an infinite number of values within a given range.<br> They are measured rather than counted, and their values can be broken down into smaller increments.", 
            choices: ["Discrete Variables", "Continuous Variables", "Categorical Variables"], 
            answer: "Continuous Variables"
        },
        { 
            question: "Are variables that represent categories or groups.", 
            choices: ["Categorical Variables", "Nominal Variables", "Ordinal Variables"], 
            answer: "Categorical Variables"
        },
        { 
            question: "These are variables that represent categories with a natural order or ranking between them.", 
            choices: ["Nominal Variables", "Ordinal Variables", "Dependent Variables"], 
            answer: "Ordinal Variables"
        },
        { 
            question: "These are variables that represent categories with no inherent order or ranking between them.", 
            choices: ["Nominal Variables", "Ordinal Variables", "Dependent Variables"], 
            answer: "Nominal Variables"
        },
        { 
            question: "Also known as predictor variables or explanatory variables, are the variables that are manipulated or categorized to observe their effect on a dependent variable in an experiment or study.", 
            choices: ["Independent Variables", "Dependent Variables", "Categorical Variables"], 
            answer: "Independent Variables,"
        },
        { 
            question: "Also known as response variables or outcome variables, these are the variables in an experiment or study that are measured or observed to assess the effect of the independent variable.", 
            choices: ["Independent Variables", "Dependent Variables", "Categorical Variables"], 
            answer: "Dependent Variables"
        }
    ],
    weekFive: [
        { 
            question: "It is a method of selecting units from a population using a subjective (i.e. non-random) method.", 
            choices: ["Probability sampling", "Non-probability sampling", "Sampling"], 
            answer: "Non-probability sampling"
        },
        { 
            question: "It refers to the selection of a sample from a population, when this selection is based on the principle of randomization, that is, random selection or chance.", 
            choices: ["Probability sampling", "Non-probability sampling", "Sampling"], 
            answer: "Probability sampling"
        },
        { 
            question: "It is a method that allows researchers to conclude information about a population based on results from a subset of the population, without having to investigate every individual.", 
            choices: ["Probability sampling", "Non-probability sampling", "Sampling"], 
            answer: "Sampling"
        },
        { 
            question: "The entire group that you want to draw conclusions about. It can be defined in terms of geographical location, age, income, or many other characteristics.", 
            choices: ["Sample", "Population", "Sampling"], 
            answer: "Population"
        },
        { 
            question: "The specific group of individuals that you will collect data from.", 
            choices: ["Sample", "Population", "Sampling"], 
            answer: "Sample"
        },
        { 
            question: "Sampling that gathers a random selection from the entire population, where each unit has an equal chance of selection.", 
            choices: ["Simple Random", "Probability Sampling", "Stratified Sample"], 
            answer: "Simple Random"
        },
        { 
            question: "It collects a random selection of a sample from within certain strata, or subgroups within the population.", 
            choices: ["Systematic Sample", "Cluster Sample", "Stratified Sample"], 
            answer: "Stratified Sample"
        },
        { 
            question: "This sampling is an efficient approach when it will use to a large study, geographically dispersed populations.", 
            choices: ["Systematic Sample", "Stratified Sample", "Cluster Sample"], 
            answer: "Cluster Sample"
        },
        { 
            question: "This method is useful in situations where records of your target population already exist, such as records of an agency’s clients, enrollment lists of university students, or a company’s employment records.", 
            choices: ["Systematic Sample", "Stratified Sample", "Cluster Sample"], 
            answer: "Systematic Sample"
        },
        { 
            question: "Sometimes called “Accidental Samples,” since the participants can be selected for the sample simply because they happen to be nearby when the researcher is conducting the data collection.", 
            choices: ["Snowball sampling", "Purposive sampling", "Convenience sampling"], 
            answer: "Convenience sampling"
        },
        { 
            question: "It is a non-probability method that relies on the non-random selection of a predetermined number or proportion of units and this is called a quota.", 
            choices: ["Snowball sampling", "Quota sampling", "Purposive sampling"], 
            answer: "Quota sampling"
        },
        { 
            question: "It is also called 'Volunteer sampling' relies on participants that voluntarily agree to be part of the research.", 
            choices: ["Purposive sampling", "Self-selection sampling", "Convenience sampling"], 
            answer: "Self-selection sampling"
        },
        { 
            question: "It is used when the population is hard to reach, or there is no existing database or other sampling frame.", 
            choices: ["Purposive sampling", "Snowball sampling", "Convenience sampling"], 
            answer: "Snowball sampling"
        },
        { 
            question: "It is a blanket term for several sampling techniques that choose participants deliberately due to qualities they possess. It is also called judgmental sampling, since it relies on the judgment of the researcher to select the units (e.g., people, cases, or organizations studied).", 
            choices: ["Convenience sampling", "Purposive sampling", "Self-selection sampling"], 
            answer: "Purposive sampling"
        }
    ],
    weekSix: [
        {
            question: "It is various kind of information that is formatted in a particular way.",
            choices: ["Data", "Data Collection", "Variables"],
            answer: "Data"
        },
        { 
            question: "It is the process of gathering, measuring, and analyzing accurate data from a variety of relevant sources to find answers to research problems, answer questions, evaluate outcomes, and forecast trends and probabilities.", 
            choices: ["Data Collection", "Variables", "Data"], 
            answer: "Data Collection"
        },
        { 
            question: "It is the original or the first-hand data that is collected by the data researchers.", 
            choices: ["Primary", "Secondary"], 
            answer: "Primary"
        },
        { 
            question: "It is the initial information gathering step, performed before anyone carries out any further or related research.", 
            choices: ["Primary", "Secondary"], 
            answer: "Primary"
        },
        { 
            question: "This data is either information that the researcher has tasked other people to collect or information that the researcher has looked up and it is more easier and cheaper to obtain", 
            choices: ["Primary", "Secondary"], 
            answer: "Secondary"
        },
        { 
            question: "It is being collected by other parties and already having undergone statistical analysis.", 
            choices: ["Primary", "Secondary"], 
            answer: "Secondary"
        },
        { 
            question: "It is a process of organizing raw data, by classifying them into different categories.", 
            choices: ["Frequency Distribution Table", "Data organization", "Data Interpretation"], 
            answer: "Data organization"
        },
        { 
            question: "It is the way to arrange the raw data in an understandable order.", 
            choices: ["Representing Data", "Data Interpretation", "Data organization"], 
            answer: "Data organization"
        },
        { 
            question: "It shows the frequency of repeated items in a graphical form or tabular form and it is used to organize the collected data in table form.", 
            choices: ["Frequency Distribution Table", "Data organization", "Data Interpretation"], 
            answer: "Frequency Distribution Table"
        },
        { 
            question: "It allows to display and interpret collected data and there are different types of representing the data in different formats like tables, charts, diagrams or graphs.", 
            choices: ["Data organization", "Data Interpretation", "Representing Data"], 
            answer: "Representing Data"
        },
        { 
            question: "It is a simple way to organize data and it can be used for different types of data.", 
            choices: ["Bar Chart", "Tally Chart", "Pie Chart"], 
            answer: "Tally Chart"
        },
        { 
            question: "It is use a symbol to represent a certain frequency and it use in a chart.", 
            choices: ["Histogram", "Pictograph", "Pie Chart"], 
            answer: "Pictograph"
        },
        { 
            question: "It is called a time series graph the data that is plotted on a pair of axis and the points connected by line segments.", 
            choices: ["Line Graph", "Bar Chart", "Histogram"], 
            answer: "Line Graph"
        },
        { 
            question: "It is a chart with a visual representation of all items of data within a data set.", 
            choices: ["Pictograph", "Pie Chart", "Histogram"], 
            answer: "Pie Chart"
        },
        { 
            question: "The sectors of this chart are proportional to the different items in the data set and it used to represent categorical data.", 
             choices: ["Pictograph", "Pie Chart", "Histogram"], 
            answer: "Pie Chart"
        },
        { 
            question: "This chart represents data by using vertical (or horizontal) bars of equal width and it used for categorical or discrete numerical data.", 
            choices: ["Bar Chart", "Tally Chart", "Pie Chart"], 
            answer: "Bar Chart"
        },
        { 
            question: "It is used to represent continuous numerical data it has a similarity in bar charts, but they are different.", 
            choices: ["Histogram", "Pictograph", "Pie Chart"], 
            answer: "Histogram"
        },
        { 
            question: "It is refers to the process of using diverse analytical methods to review data and arrive at relevant conclusions.", 
            choices: ["Data organization", "Data Interpretation", "Representing Data"], 
            answer: "Data Interpretation"
        },
        { 
            question: "It helps researchers to categorize, manipulate, and summarize the information in order to answer critical questions.", 
            choices: ["Data organization", "Data Interpretation", "Representing Data"], 
            answer: "Data Interpretation"
        }
    ],
    weekSeven: [
        {
            question: "It is a single value that attempts to describe a set of data by identifying the central position within that set of data.", 
            choices: ["Central Tendency", "Frequency Distribution", "Mean"], 
            answer: "Central Tendency"
        },
        { 
            question: "It is sometimes called 'Measures of Central Location.'", 
            choices: ["Mean", "Median", "Central Tendency"], 
            answer: "Central Tendency"
        },
        { 
            question: "They are also classed as summary statistics. The mean, median and mode are all valid measures of it.", 
            choices: ["Central Tendency", "Frequency Distribution", "Median"], 
            answer: "Central Tendency"
        },
        { 
            question: "It is equal to the sum of all the values in the data set divided by the total number of values in data set.", 
            choices: ["Mean", "Median", "Mode"], 
            answer: "Mean"
        },
        { 
            question: "It can be used with both discrete and continuous data.", 
            choices: ["Mean", "Median", "Mode"], 
            answer: "Mean"
        },
        { 
            question: "It is the middle score for a set of data that has been arranged in order of magnitude.", 
            choices: ["Mean", "Median", "Mode"], 
            answer: "Median"
        },
        { 
            question: "It is the most frequent score in our data set. On a histogram it represents the highest bar in a bar chart or histogram", 
            choices: ["Mean", "Median", "Mode"], 
            answer: "Mode"
        }
    ],
    identification: [
        { 
            question: "Week 2: Mainly expressed in numbers, graphs and tables.", 
            answer: "Quantitative"
        },
        { 
            question: "Week 2: Use ________ research if you want to confirm or test something (a theory or hypothesis).", 
            answer: "Quantitative"
        },
        { 
            question: "Week 2: Use _________ research if you want to understand something (concepts, thoughts, experiences).", 
            answer: "Qualitative"
        },
        { 
            question: "Week 2: Tracking the occurrence, position and meaning of words or phrases", 
            answer: "Qualitative content analysis"
        },
        { 
            question: "Week 2: Closely examining the data to identify the main themes and patterns.", 
            answer: "Thematic analysis"
        },
        { 
            question: "Week 2: Studying how communication works in social contexts.", 
            answer: "Discourse analysis"
        },
        { 
            question: "Week 3: Quantitative research methods is use for _______, __________ or ______ research. <br> (seperate answer with comma", 
            answer: "Descriptive, Correlation, Experimental"
        },
        { 
            question: "Week 3: This method is often used by psychological, social and market researchers to understand how people act in real-life situations.", 
            answer: "Observations"
        },
        { 
            question: "Week 3: allows you to gather large volumes of data that can be analyzed for frequencies, averages and patterns.", 
            answer: "Surveys"
        },
        { 
            question: "Week 3: Used to describe the characteristics of a specific subject. Instead of gathering a large volume of data to identify patterns across time or location, case studies gather detailed data to identify the characteristics of a narrowly defined subject.", 
            answer: "Case study"
        },
        { 
            question: "Week 3: It is a type of field research where the researcher will gather the data about the behavior or phenomenon in its natural environment. <br> This method often involves recording, counting, describing, and categorizing actions and events and it can include both qualitative and quantitative research.", 
            answer: "Naturalistic observation"
        },
        { 
            question: "Week 3: Instead of collecting original data, it can also use data that has already been collected for a different purpose, such as official records, polls, or previous studies.", 
            answer: "Second data"
        },
        { 
            question: "Week 3: It describe a dataset that help to understand the details of the data and finding patterns from the specific data sample.", 
            answer: "Descriptive statistics"
        },
        { 
            question: "Week 3: Aim to make predictions or highlight possible outcomes from the analyzed data obtained from descriptive statistics. <br> It used to generalize results and make predictions between groups, show relationships that exist between multiple variables, and used for hypothesis testing that predicts changes or differences.", 
            answer: "Inferential statistics"
        },
        { 
            question: "Week 3: Repeating the study is possible because of standardized data collection protocols and tangible definitions of abstract concepts.", 
            answer: "Replication"
        },
        { 
            question: "Week 3: Data from it, can be processed and analyzed using reliable and consistent procedures through quantitative data analysis.", 
            answer: "Large samples"
        },
        { 
            question: "Week 3: Using formalized and established hypothesis testing procedures means that you have to carefully consider and report your research variables, predictions, data collection and testing methods before coming to a conclusion.", 
            answer: "Hypothesis testing"
        },
        { 
            question: "Week 3: Using precise and restrictive operational definitions may inadequately represent complex concepts. For example, the concept of mood may be represented with just a number in quantitative research, but explained with elaboration in qualitative research.", 
            answer: "Superficiality"
        },
        { 
            question: "Week 3: Predetermined variables and measurement procedures can mean that you ignore other relevant observations.", 
            answer: "Narrow focus"
        },
        { 
            question: "Week 3: Despite standardized procedures, structural biases can still affect quantitative research. <br> Missing data, imprecise measurements or inappropriate sampling methods are biases that can lead to the wrong conclusions.", 
            answer: "Structural bias"
        },
        { 
            question: "Week 3: Quantitative research often uses unnatural settings like laboratories or fails to consider historical and cultural contexts that may affect data collection and results.", 
            answer: "Lack of context"
        },
        { 
            question: "Week 4: It is a data that is collected, analyzed, interpreted and presented this are the individual pieces of factual information recorded, and it is used for the purpose of the analysis process.", 
            answer: "Variables"
        },
        { 
            question: "Week 4: It is a specific measurement of a variable. <br> It is the value you record in your data sheet. <br> It is generally divided into two categories: <br> • Quantitative data represents amounts <br> • Categorical data represents groupings", 
            answer: "Data"
        },
        { 
            question: "Week 4: It also known as numerical variables, are variables that represent measurable quantities and can be expressed in numbers.", 
            answer: "Quantitative variables"
        },
        { 
            question: "Week 4: There are two main types of quantitative variables. <br> (seperate the answer with comma)", 
            answer: "Discrete variables, Continuous variables"
        },
        { 
            question: "Week 4: These are variables that take on a finite or countable number of distinct values.", 
            answer: "Discrete variables"
        },
        { 
            question: "Week 4: These can take on an infinite number of values within a given range.<br> They are measured rather than counted, and their values can be broken down into smaller increments.", 
            answer: "Continuous variables"
        },
        { 
            question: "Week 4: Also known as qualitative variables", 
            answer: "Categorical variables"
        },
        { 
            question: "Week 4: These are variables that represent categories with no inherent order or ranking between them.", 
            answer: "Nominal variables"
        },
        { 
            question: "Week 4: These are variables that represent categories with a natural order or ranking between them.", 
            answer: "Ordinal variables"
        },

    ],
    identificationTwo: [
        { 
            question: "Week 4: Also known as Response variables or outcome variables", 
            answer: "Dependent variables"
        },
        { 
            question: "Week 4: Also known as Predictor variables or explanatory variables.", 
            answer: "Independent variables"
        },
        { 
            question: "Week 5: It is a method that allows researchers to conclude information about a population based on results from a subset of the population, without having to investigate every individual.", 
            answer: "Sampling"
        },
        { 
            question: "Week 5: It refers to the selection of a sample from a population, when this selection is based on the principle of randomization, that is, random selection or chance.", 
            answer: "Probability sampling"
        },
        { 
            question: "Week 5: It is a method of selecting units from a population using a subjective (i.e. non-random) method.", 
            answer: "Non-Probability sampling"
        },
        { 
            question: "Week 5: Every member of the population has a chance of being selected.", 
            answer: "Probability sampling"
        },
        { 
            question: "Week 5: Used in both quantitative and qualitative research. It is also used when the researcher want to apply the results only to a certain subsection or organization rather than the general public.", 
            answer: "Non-probability sampling"
        },
        { 
            question: "Week 5: Sometimes called “Accidental Samples,” since the participants can be selected for the sample simply because they happen to be nearby when the researcher is conducting the data collection.", 
            answer: "Convenience sampling"
        },
        { 
            question: "Week 5: It is also called 'Judgmental sampling', since it relies on the judgment of the researcher to select the units (e.g., people, cases, or organizations studied).", 
            answer: "Purposive sampling"
        },
        { 
            question: "Week 5: It is also called 'Volunteer sampling' relies on participants that voluntarily agree to be part of the research.", 
            answer: "Self-selection sampling"
        },
        { 
            question: "Week 6: In this process, the results are highly accurate provided the researcher collects the information however, there is downside because it is potentially time-consuming and expensive.", 
            answer: "Primary"
        },
        { 
            question: "Week 6: This data is either information that the researcher has tasked other people to collect or information that the researcher has looked up and it is more easier and cheaper to obtain", 
            answer: "Secondary"
        },
        { 
            question: "Week 6: It include classification, frequency distribution table, picture representation, graphical representation, etc.", 
            answer: "Data organization"
        },
        { 
            question: "Week 6: Two types of Frequency Distribution Table", 
            answer: "Grouped data, Ungrouped data"
        },
        { 
            question: "Week 6: The data is arranged and separated into groups called class intervals. The frequency of data belonging to each class interval is noted in a frequency distribution table.", 
            answer: "Grouped data"
        },
        { 
            question: "Week 6: It shows the frequency of an item in each separate data value rather than groups of data values.", 
            answer: "Ungrouped data"
        },
        { 
            question: "Week 6: It allows to display and interpret collected data and there are different types of representing the data in different formats like tables, charts, diagrams or graphs.", 
            answer: "Representing Data"
        },
        { 
            question: "Week 6: It helps researchers to categorize, manipulate, and summarize the information in order to answer critical questions.",  
            answer: "Data Interpretation"
        },
        {
            question: "Week 6: It is refers to the process of using diverse analytical methods to review data and arrive at relevant conclusions.",
            answer: "Data Interpretation"
        },
        {
            question: "Week 7: Sometimes called 'Measures of Central Location'.",
            answer: "Central Tendency"
        },
        {
            question: "Week 7: It can be used with both discrete and continuous data.",
            answer: "Mean"
        },
        {
            question: "Week 7: The middle score for a set of data that has been arranged in order of magnitude.",
            answer: "Median"
        },
        {
            question: "Week 7: On a histogram it represents the highest bar in a bar chart or histogram",
            answer: "Mode"
        },
    ]
};

let selectedTopic = 'weekTwo';
let selectedQuestions = [];
let userAnswers = [];
let currentPage = 0;

function toggleMenu() {
document.querySelector(".nav-links").classList.toggle("show");
}


document.querySelectorAll(".dropdown > a").forEach(menu => {
menu.addEventListener("click", function (e) {
    if (window.innerWidth <= 768) {
        e.preventDefault();
        this.parentElement.classList.toggle("active");
    }
});
});

function loadQuestions(topic) {
selectedTopic = topic;
document.getElementById('setup').style.display = 'block';
document.getElementById('quiz-container').style.display = 'none';
document.getElementById('results-container').style.display = 'none';
}

function shuffleArray(array) {
return array.sort(() => Math.random() - 0.5);
}

function startQuiz(numQuestions) {
    let questions = [...questionSets[selectedTopic]];
    shuffleArray(questions);
    selectedQuestions = questions.slice(0, numQuestions).map(q => ({
        ...q,
        choices: q.choices ? shuffleArray([...q.choices]) : undefined
    }));
    userAnswers = new Array(numQuestions).fill(null);
    currentPage = 0;
    document.getElementById('setup').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    showPage();
}
function showPage() {
    let container = document.getElementById('questions');
    container.innerHTML = '';

    let start = currentPage * 5;
    let end = Math.min(start + 5, selectedQuestions.length);

    for (let i = start; i < end; i++) {
        let q = selectedQuestions[i];
        let qIndex = i;
        let div = document.createElement('div');
        div.classList.add("question-card");

        let imgHTML = q.image ? `<img src="${q.image}" class="question-image">` : "";
        div.innerHTML = `
            <h3>${qIndex + 1}. ${q.question}</h3>
            ${imgHTML}
        `;

        if (q.choices && Array.isArray(q.choices) && q.choices.length > 0) {
            q.choices.forEach(choice => {
                div.innerHTML += `<label>
                    <input type="radio" name="q${qIndex}" value="${choice}" 
                    ${userAnswers[qIndex] === choice ? 'checked' : ''} 
                    onchange="saveAnswer(${qIndex}, this.value)"> 
                    ${choice}
                </label>`;
            });
        } else {

            div.innerHTML += `
                <input type="text" name="q${qIndex}" value="${userAnswers[qIndex] || ''}" 
                oninput="saveAnswer(${qIndex}, this.value)" placeholder="Type your answer here">
            `;
        }

        container.appendChild(div);
    }

    document.getElementById('prev').style.display = currentPage === 0 ? 'none' : 'inline-block';
    document.getElementById('next').innerText = currentPage === Math.ceil(selectedQuestions.length / 5) - 1 ? "Finish" : "Next";
}

function saveAnswer(index, value) {
userAnswers[index] = value;
}

function nextPage() {
if (currentPage < Math.ceil(selectedQuestions.length / 5) - 1) {
    currentPage++;
    showPage();
} else {
    showResults();
}
}

function prevPage() {
if (currentPage > 0) {
    currentPage--;
    showPage();
}
}

function showResults() {
document.getElementById('quiz-container').style.display = 'none';
let container = document.getElementById('results-container');
container.innerHTML = '';

let correctCount = 0;

selectedQuestions.forEach((q, i) => {
    if (userAnswers[i] === q.answer) {
        correctCount++;
    }
});

let percentage = Math.round((correctCount / selectedQuestions.length) * 100);

container.innerHTML += `
    <div class="result-summary">
        <h2>Quiz Completed!</h2>
        <p>Score: ${correctCount} / ${selectedQuestions.length} (${percentage}%)</p>
    </div>
`;

selectedQuestions.forEach((q, i) => {
    let userAnswer = userAnswers[i] || '';
    let isCorrect = userAnswer.trim().toLowerCase() === q.answer.trim().toLowerCase();
    
    if (isCorrect) {
        correctCount++;
    }

    container.innerHTML += `
        <div class="result-card">
            <h3>${i + 1}. ${q.question}</h3>
            <p class="your-answer">Your Answer: 
                <span class="${isCorrect ? 'correct-answer' : 'wrong-answer'}">
                    ${userAnswers[i] || 'No Answer'}
                </span>
            </p>
            <p>Correct Answer:</p>
            ${q.answerImage ? `<img src="${q.answerImage}" class="answer-image">` : `<p class="correct-answer">${q.answer}</p>`}
        </div>
    `;
});

document.getElementById('results-container').style.display = 'block';
}
