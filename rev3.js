
const items = [
    { definition: "0. Research", term: "A systematic gathering of data and information and its analysis for advancement of knowledge in any subject." },
    { definition: "1. Descriptive Research", term: "Concentrates on finding facts to ascertain the nature of something as it exists." },
    { definition: "2. Analytical Research", term: "Concerned with determining validity of hypothesis based on analysis of facts collected." },
    { definition: "3. Applied Research", term: "Is carried out to find answers to practical problems." },
    { definition: "4. Fundamental Research", term: "Is carried out as more to satisfy intellectual curiosity, than with the intention of using the research findings for any immediate practical application." },
    { definition: "5. Quantitative Research", term: "Studies such aspects of the research subject which are not quantifiable, and hence not subject to measurement and quantitative analysis." },
    { definition: "6. Conceptual Research", term: "Is involves investigation of thoughts and ideas and developing new ideas or interpreting the old ones based on logical reasoning." },
    { definition: "7. Inferential", term: "The purpose of this approach is to form a data, base from which to infer characteristics or relationships of population." },
    { definition: "8. Experimental", term: "Is characterized by much greater control over the research environment" },
    { definition: "9. Simulation", term: "Involves the construction of an artificial environment within which relevant information and data can be generated." },
    { definition: "10. Quantitative Research", term: "This approach can be further sub-classified into inferential, experimental and simulation approaches to research." },
    { definition: "11. Empirical Research", term: "Is based on firm verifiable data collected by either observation of facts under natural condition or obtained through experimentation." },
    { definition: "12. Qualitative Research", term: "Is concerned with subjective assessment of attitudes, opinions and behavior." },
    { definition: "13. Plagiarism", term: "Is the use of others' published and unpublished ideas or intellectual property without attribution or permission." },
    { definition: "14. Duplicate Publication", term: "Publication of a paper that overlaps substantially with one already published, without reference to the previous publication." },
    { definition: "15. Salami Publication", term: "The slicing of data from a single research process into different pieces." },
    { definition: "16. Capstone Project", term: "Is an undertaking appropriate to a professional field." },
    { definition: "17. Introduction ", term: "Provides a brief description of technology to be used." },
    { definition: "18. Methodology ", term: "Presents the materials and methods to be used in the study." },
    { definition: "19. References", term: "All literature sources and cited RRL and other materials should be reflected in this section." },
    { definition: "20. Project Context", term: "Describes the existing and prevailing issues or problems that made the researcher develop a solution for introducing the project." },
    { definition: "21. Objectives of the Study", term: "Includes a statement of the purpose/s or objective/s of the study" },
    { definition: "22. Purpose and Description", term: "Includes purpose of developing the project and discusses the reasons why the research has to be undertaken." },
    { definition: "23. Time and Place of the Study", term: "Includes the period when the study was conducted, from preparation of the outline to the preparation of the manuscript." },
    { definition: "24. Scope and Limitation of the Study", term: "Describes the nature, coverage, and time frame of the study." },
    { definition: "25. Conceptual Framework", term: "This section uses the Input-Process-Output (IPO) model that will provide the general structure and guide for the direction of the study." },
    { definition: "26. Five (5) techniques involved in defining research problem", term: "1. State the problem in a general way. <br> 2. Understand the nature of the problem. <br> 3. Survey the available literature <br> 4. Go for discussions for developing ideas. <br> 5. Rephrase the research problem" },
    { definition: "27. Issues in Research", term: "o Legal issues pertaining to regulatory bodies <br> o Avoiding bias & inappropriate research methodology <br> o Fraud in research and publication <br> o	Plagiarism and its checking <br> o Overlapping publications <br> o Copyright <br> o	Data Handling/Management <br> o	Informed Consent <br> o	Conflicting Interests" },
    { definition: "28. Criteria of Good Research", term: "o	Systematic <br> o Logical <br> o Empirical <br> o Replicable" },
    { definition: "29.1 Five Challenges in Research: Choosing the Right Topic", term: "Your research topic is the foundation on which everything else rests, so it’s crucial to choose carefully. “You can’t do anything else until you figure out the basic focus of your topic,” " },
    { definition: "29.2 Five Challenges in Research: Getting Institutions to Participate", term: "Sometimes recruiting study participants requires going through institutions, which may put up barriers, particularly if your research is broad or complex." },
    { definition: "29.3 Five Challenges in Research: Finding Study Participants", term: "Once you have your team together, it’s time to conduct your study, and that means finding participants." },
    { definition: "29.4 Five Challenges in Research: Choosing the Right Methodology", term: "Once you’ve chosen a topic, you’ll need a methodology, a procedure for conducting your research—in order to move forward." },
    { definition: "29.5 Five Challenges in Research: Dealing With Your Data", term: "The final challenge is knowing how to make sense of the data you’ve collected." },
    { definition: "30.1 11 Research Processes: Formulating the research problem", term: "This is the first and most crucial step. It involves clearly defining what you want to study. It includes: <br> Identifying the problem or area of interest. <br> Understanding the issue by exploring background information. <br> Formulating a specific research question or problem statement." },
    { definition: "30.2 11 Research Processes: Extensive literature survey", term: "This step involves reviewing existing research and studies related to your topic. It helps you: <br> Understand the current state of knowledge and what has already been explored. <br> Identify gaps in the literature where your research can contribute. <br><br> You will gather information from academic journals, books, articles, and credible online sources to build a solid foundation for your study." },
    { definition: "30.3 11 Research Processes: Developing the hypothesis", term: "A hypothesis is a predictive statement that can be tested through research. It specifies the expected relationship between variables. <br> For example, if you hypothesize: <i>Increased awareness of student organizations will lead to higher engagement</i>, you are predicting a cause-and-effect relationship. <br> If your research is exploratory (e.g., qualitative studies), you may set research objectives instead of a hypothesis." },
    { definition: "30.4 11 Research Processes: Preparing the research design", term: "This is your blueprint for conducting the research. It includes: <br> Selecting the research method (qualitative, quantitative, or mixed). <br> Choosing the type of study (descriptive, experimental, correlational, etc.). <br> Planning how to collect data, tools to use (e.g., surveys, interviews), and how to analyze the data. <br><br> A well-structured research design ensures that the study is methodologically sound and provides reliable results." },
    { definition: "30.5 11 Research Processes: Determining sample design", term: "This step involves deciding who will participate in your study and how they will be selected. It includes: <br> Identifying your target population (e.g., all students at Cavite State University Trece Martires City). <br> Choosing a sampling technique (e.g., random sampling, stratified sampling). <br> Determining the sample size needed to represent the population effectively. <br><br> The goal is to have a sample that reflects the characteristics of the larger population." },
    { definition: "30.6 11 Research Processes: Collecting the data", term: "In this step, you gather the information needed for your research. Data collection methods may include: <br> Surveys, interviews, questionnaires, or experiments. <br> Observations or using existing data sources (e.g., databases, records). <br><br> It is essential to ensure that data collection is consistent and unbiased." },
    { definition: "30.7 11 Research Processes: Execution of the project", term: "This phase involves implementing your research plan. It includes: <br> Managing the data collection process. <br> Ensuring all ethical standards are followed (e.g., obtaining consent from participants). <br> Monitoring the progress to address any issues or challenges that arise.<br><br> This step requires careful coordination and adherence to the research design." },
    { definition: "30.8 11 Research Processes: Analysis of data", term: "Once the data is collected, the next step is to analyze it to uncover patterns, relationships, or insights. This may involve: <br> Using statistical methods for quantitative data (e.g., mean, median, regression analysis). <br> Conducting thematic analysis or coding for qualitative data (e.g., identifying common themes from interviews). <br><br> Data analysis helps transform raw data into meaningful information." },
    { definition: "30.9 11 Research Processes: Hypothesis testing", term: "In this step, you evaluate whether the collected data supports or refutes your hypothesis. It involves: <br> Applying statistical tests (e.g., t-tests, chi-square tests) to check the validity of your predictions. <br> Interpreting the results to determine if there is a significant relationship between variables.<br><br> If your hypothesis is confirmed, it suggests a strong relationship. If not, it may indicate the need for further investigation." },
    { definition: "30.10 11 Research Processes: Generalizations and interpretation", term: "This stage involves making broader conclusions based on your findings. It includes: <br> Interpreting the results in the context of your research problem. <br> Discussing whether your findings align with existing theories or literature. <br> Considering the implications of your results for real-world applications or future research.<br><br> Generalizations should be made cautiously, especially if the sample size is small or not fully representative." },
    { definition: "30.11 11 Research Processes: Preparation of the report or presentation of the results", term: "The final step is to compile your research into a comprehensive report or presentation. It includes: <br> An introduction, literature review, methodology, results, discussion, conclusion, and recommendations. <br> Visual aids like tables, graphs, and charts to present data clearly. <br> Proper citation of all sources using a standard format (e.g., APA, MLA). <br><br> The goal is to communicate your findings effectively to your audience, whether it's academic peers, stakeholders, or the general public." },
    { definition: "31. Purpose of Research ", term: "To discover answers to questions through the application of scientific procedures." },
    { definition: "32.  ", term: "" },
    { definition: "3 ", term: "" },
    { definition: "3 ", term: "" },
    { definition: "3 ", term: "" },
    { definition: "3 ", term: "" },
    { definition: "3 ", term: "" },
    { definition: "3 ", term: "" },
    { definition: "3 ", term: "" },
    { definition: "3 ", term: "" },
    { definition: "3 ", term: "" },
    { definition: "3 ", term: "" },
    { definition: "3 ", term: "" },
];

let currentPage = 1;
const itemsPerPage = 5;


function renderItems() {
    const listContainer = document.getElementById('reviewer-list');
    listContainer.innerHTML = '';

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const currentItems = items.slice(start, end);

    currentItems.forEach(item => {
        const itemElement = document.createElement('div');
        const termElement = document.createElement('p');
        const seeMoreBtn = document.createElement('button');


        itemElement.innerHTML = `<h3>${item.definition}</h3>`;
        termElement.innerHTML = item.term;
        termElement.classList.add('line-clamp');

 
        seeMoreBtn.textContent = 'More';
        seeMoreBtn.classList.add('see-more-btn');

        seeMoreBtn.addEventListener('click', () => {
            if (termElement.classList.contains('line-clamp')) {
                termElement.classList.remove('line-clamp');
                seeMoreBtn.textContent = 'Less';
            } else {
                termElement.classList.add('line-clamp');
                seeMoreBtn.textContent = 'More';
            }
        });


        itemElement.appendChild(termElement);
        itemElement.appendChild(seeMoreBtn);
        listContainer.appendChild(itemElement);
    });
}


function goToNextPage() {
    if (currentPage < Math.ceil(items.length / itemsPerPage)) {
        currentPage++;
        renderItems();
    }
}

function goToPrevPage() {
    if (currentPage > 1) {
        currentPage--;
        renderItems();
    }
}


function toggleMenu() {
    const navOptions = document.querySelector('.nav-options');
    navOptions.classList.toggle('active');
}


document.getElementById('next-page').addEventListener('click', goToNextPage);
document.getElementById('prev-page').addEventListener('click', goToPrevPage);
document.getElementById('burger-menu').addEventListener('click', toggleMenu);

renderItems();