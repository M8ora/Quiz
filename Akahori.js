const questionSets = {
    Security: [
        { 
            question: "These principles are review to develop a secure system which prevents the security flaws and also prevents unwanted access to the system?", 
            choices: ["Unified Process Principles", "Security Design Principles", "Security Principles"], 
            answer: "Security Design Principles"
        },
        { 
            question: "This fundamental security principle defines that the security measures implemented in the software band the hardware must be simple and small. This would ease the testers to test the security measures thoroughly.", 
            choices: ["Economy of Mechanism", "Least Common Mechanism", "Complete Mediation"], 
            answer: "Economy of Mechanism"
        },
        { 
            question: "when it comes to practice, we cannot consider this as the best security design principle.", 
            choices: ["Economy of Mechanism", "Least Common Mechanism", "Complete Mediation"], 
            answer: "Economy of Mechanism"
        },
        { 
            question: "This principle says that if any user wants access to any mechanism then whether the access is permitted or denied should be based on authorization rather than elimination.", 
            choices: ["Fail-safe Defaults", "Isolation", "Complete Mediation"], 
            answer: "Fail-safe Defaults"
        },
        { 
            question: "This principle denies unauthorized access. If there occurs any mistake while designing the security mechanism which grants access based on permission or authorization. That mechanism fails by simply denying access, which is the safest condition.", 
            choices: ["Fail-safe Defaults", "Least Privilege", "Complete Mediation"], 
            answer: "Fail-safe Defaults"
        },
        { 
            question: "This principle says that the system should not trust the access decisions it recovers from the system cache. This particular security design principle says that there must be a mechanism in the system that checks each access through the access control mechanism.", 
            choices: ["Least Privilege", "Psychological Acceptability", "Complete Mediation"], 
            answer: "Complete Mediation"
        },
        { 
            question: "This principle is followed by the NIST (National Institute of Standards and Technology) to standardize the algorithms because it helps in worldwide adoption of NIST approved algorithms.", 
            choices: ["Layering", "Open Design", "Complete Mediation"], 
            answer: "Open Design"
        },
        { 
            question: "This security principle states that whenever a user tries to gain access to a system, the access should not be granted based on a single attribute or condition.", 
            choices: ["Least Privilege", "Separation of Privilege", "Psychological Acceptability"], 
            answer: "Separation of Privilege"
        },
        { 
            question: "This principle states that each user should be able to access the system with the least privilege. Only those limited privileges should be assigned to the user which are essential to perform the desired task.", 
            choices: ["Least Privilege", "Separation of Privilege", "Psychological Acceptability"], 
            answer: "Least Privilege"
        },
        { 
            question: "This security design principle should be minimum common functions to share between the different user. This principle reduces the count of communication paths and therefore further reduces the hardware and software implementation.", 
            choices: ["Least Astonishment", "Least Common Mechanism", "Complete Mediation"], 
            answer: "Least Common Mechanism"
        },
        { 
            question: "This principle reduces the threat of unwanted access to the system as it becomes easy to verify if there are some unwanted access to the shared function.", 
            choices: ["Least Astonishment", "Least Common Mechanism", "Complete Mediation"],
            answer: "Least Common Mechanism"
        },
        { 
            question: "This security design principle says that the security mechanisms design to protect the system should not interfere with the working of the user every now and then.", 
            choices: ["Psychological Acceptability", "Isolation", "Encapsulation"], 
            answer: "Psychological Acceptability"
        },
        { 
            question: "It is suggested that the security mechanism should introduce minimum hurdles to the user of the system. The security mechanism should not be designed such that it becomes difficult for the user to access the resources in the system.", 
            choices: ["Psychological Acceptability", "Isolation", "Encapsulation"], 
            answer: "Psychological Acceptability"
        },
        { 
            question: "This security design principle is a form of isolation which is designed on the principle of object-oriented principles. Here the processes of the protected system can only access the data object of the system and these processes can only be invoked from a domain entry point.", 
            choices: ["Isolation", "Encapsulation", "Modularity"], 
            answer: "Encapsulation"
        },
        { 
            question: "This security designing principle says that the security mechanism must be generated as separate and protected modules and the security mechanism must be generated using the modular architecture.", 
            choices: ["Layering", "Modularity", "Isolation"], 
            answer: "Modularity"
        },
        { 
            question: "This principle helps in updating the security mechanism independently without modifying the entire system.", 
            choices: ["Layering", "Modularity", "Isolation"], 
            answer: "Modularity"
        },
        { 
            question: "Multiple security layers must be used in order to protect the opponent from accessing crucial information. Applying multiple security layers provides multiple barriers to the adversary if he tries to access the protected system.", 
            choices: ["Layering", "Modularity", "Isolation"], 
            answer: "Layering"
        },
        { 
            question: "This security design principle states that the user interface of the system must not amaze the user while accessing the secure system. He should be able to understand how the security mechanism is essential to protect the system.", 
            choices: ["Modularity", "Least Astonishment", "Complete Mediation"], 
            answer: "Least Astonishment"
        },
    ],
    Threats: [
        { 
            question: "It is a communication of intent to inflict harm or loss on another person.", 
            choices: ["Threat", "Attack", "Risk"], 
            answer: "Threat"
        },
        { 
            question: "It can be anything that can take advantage of a vulnerability to breach security and negatively alter, erase, harm object or objects of interest.", 
            choices: ["Threat", "Attack", "Risk"], 
            answer: "Threat"
        },
        { 
            question: "It is an information security threat that involves an attempt to obtain, alter, destroy, remove, implant or reveal information without authorized access or permission. ", 
            choices: ["Threat", "Attack", "Phishing Attack"], 
            answer: "Attack "
        },
        { 
            question: "It is a type of cybersecurity attack that attempts to obtain data that are sensitive like Username, Password, and more. It attacks the user through mail, text, or direct messages. ", 
            choices: ["Phishing Attack", "Attack", "Threat"], 
            answer: "Phishing Attack"
        },
        { 
            question: "It is a type of Social Engineering Attack.", 
            choices: ["Phishing Attack", "Attack", "Threat"], 
            answer: "Phishing Attack"
        },
        { 
            question: "Attackers will register fake domains impersonating real organizations and will send thousands of generic requests. Links usually lead to malicious websites that steal credentials or install malicious code, known as malware, on users’ devices.", 
            choices: ["Email phishing", "Phishing", "Whaling"], 
            answer: "Email phishing"
        },
        { 
            question: "It is also known as CEO fraud.", 
            choices: ["Email phishing", "Phishing", "Whaling"],
            answer: "Whaling"
        },
        { 
            question: "Attackers use social media or company websites to find the names of the organization’s CEO or other members of senior management. Then they impersonate the person using a similar email address.", 
            choices: ["Email phishing", "Phishing", "Whaling"],
            answer: "Whaling"
        },
        { 
            question: "It is sending a message that requires someone to take action. This is the next evolution of vishing. Often the text includes a link that, when clicked, installs malware on the user’s device.", 
            choices: ["Whaling", "Smishing", "Pharming"], 
            answer: "Smishing"
        },
        { 
            question: "It is short for “voice phishing”, which consists of tricking people on the phone, persuading them to divulge sensitive information. In this type of attack, the attacker tries to steal the victim’s data and use it to his advantage.", 
            choices: ["Vishing", "Smishing", "Voshing"], 
            answer: "Vishing"
        },
        { 
            question: "Social media has become another popular place for phishing attacks.", 
            choices: ["Clone phishing", "Angler phishing", "Evil Twin"], 
            answer: "Angler phishing"
        },
        { 
            question: "It occurs when cybercriminals use notification features or direct messages in social media applications to trick someone into taking action.", 
            choices: ["Angler phishing", "Clone phishing", "Evil Twin"], 
            answer: "Angler phishing"
        },
        { 
            question: "Nowadays cybercriminals are using HTTPS in the links that they use to perform phishing attacks. Even though HTTPS is a secure protocol, attackers are now making use of HTTPS links.", 
            choices: ["SQL Injector", "HTTP Phishing", "HTTPS Phishing"], 
            answer: "HTTPS Phishing"
        },
        { 
            question: "This type of phishing attack uses email but with a specific targeted approach. The attackers use open-source intelligence (OSINT) to gather information about a particular company through social media or the company’s website.", 
            choices: ["Spear Phishing", "Pharming", "Watering hole phishing"], 
            answer: "Spear Phishing"
        },
        { 
            question: "The attackers hack a Domain Name server (DNS). The domain names are translated into IP addresses with the help of DNS.", 
            choices: ["Spear Phishing", "Pharming", "Watering hole phishing"], 
            answer: "Pharming"
        },
        { 
            question: "Whenever a user types a URL in a browser, the server will redirect the user to a fraud or cloned website that might look exactly the same as an original or legitimate website.", 
            choices: ["Spear Phishing", "Pharming", "Watering hole phishing"], 
            answer: "Pharming"
        },
        { 
            question: "Cyber attackers place malicious code in the pop-ups that appear on a website like a browser prompts the message www.example.com wants to show notifications.", 
            choices: ["Pop-up phishing", "Clone phishing", "Evil Twin"], 
            answer: "Pop-up phishing"
        },
        { 
            question: "An attacker uses an original email that contains some sort of attachments and links.", 
            choices: ["Clone Phishing", "Pop-up phishing", "Evil Twin"], 
            answer: "Clone Phishing"
        },
        { 
            question: "The attacker makes use of a fake WIFI hotspot to carry out man-in-middle attacks. With help of the fake WIFI hotspot, the attacker can steal login credentials or personal information.", 
            choices: ["Clone Phishing", "Pop-up phishing", "Evil Twin"], 
            answer: "Evil Twin"
        },
        { 
            question: "It is a type of attack in which an attacker attempts to compromise a specific group of end-users by infecting a website known to be visited by a member of the group.", 
            choices: ["Email phishing", "Watering Hole Phishing", "HTTPS Phishing"], 
            answer: "Watering Hole Phishing"
        },
        { 
            question: "Its purpose is to infect the targeted user’s computer and gain network access at the target’s workplace.", 
            choices: ["Email phishing", "Watering Hole Phishing", "HTTPS Phishing"],
            answer: "Watering Hole Phishing"
        },
        { 
            question: "These are an emerging kind of threat that target software developers and suppliers. The goal is to access source codes, build processes, or update mechanisms by infecting legitimate apps to distribute malware.", 
            choices: ["Threat", "Phishing", "Supply chain attacks"], 
            answer: "Supply chain attacks"
        },
        { 
            question: "The attackers begin by building a targeted list of emails. Common tactics include mining LinkedIn profiles, sifting through business email databases, or even going through various websites in search of contact information.", 
            choices: ["PHASE 1 – Email List Targeting", "PHASE 2 – Launch AttackPhishing Attack", "PHASE 3 – Social Engineering", "PHASE 4 – Financial Gain"], 
            answer: "PHASE 1 – Email List Targeting"
        },
        { 
            question: "Attackers begin rolling out their BEC attacks by sending out mass emails. It’s difficult to identify malicious intent at this stage since attackers will utilize tactics such as spoofing, look-alike domains, and fake email names.", 
            choices: ["PHASE 1 – Email List Targeting", "PHASE 2 – Launch AttackPhishing Attack", "PHASE 3 – Social Engineering", "PHASE 4 – Financial Gain"], 
            answer: "PHASE 2 – Launch AttackPhishing Attack"
        },
        { 
            question: "At this stage attackers will impersonate individuals within a company such as CEOs or other individuals within finance departments. It’s common to see emails that request urgent responses.", 
            choices: ["PHASE 1 – Email List Targeting", "PHASE 2 – Launch AttackPhishing Attack", "PHASE 3 – Social Engineering", "PHASE 4 – Financial Gain"], 
            answer: "PHASE 3 – Social Engineering"
        },
        { 
            question: "If attackers can successfully build trust with an individual, this is typically the phase where financial gain or data breach is made.", 
            choices: ["PHASE 1 – Email List Targeting", "PHASE 2 – Launch AttackPhishing Attack", "PHASE 3 – Social Engineering", "PHASE 4 – Financial Gain"], 
            answer: "PHASE 4 – Financial Gain"
        },
       
        // Add more questions...
    ],
    Application: [
        { 
            question: "It refers to a router that stops anyone from viewing a computer's IP address over the Internet.", 
            choices: ["Hardware Application Security", "Software Application Security", "Application Security"], 
            answer: "Hardware application security"
        },
        { 
            question: "This procedures verify that the user is who they claim to be. When logging into an application, this can be performed by requiring the user to supply a user name and password.", 
            choices: ["Authentication", "Authorization", "Encryption"], 
            answer: "Authentication"
        },        { 
            question: "A user may be authorized to access and use the application after being authenticated. By comparing the user's identification to a list of authorized users, the system may verify that the user has permission to access the application. In order for the application to match only validated user credentials to the approved user list, authentication must take place before authorization.", 
            choices: ["Logging", "Authorization", "Encryption"], 
            answer: "Authorization"
        },
        { 
            question: "Other security measures can safeguard sensitive data from being seen or utilized by a cybercriminal after a user has been verified and is using the application.", 
            choices: ["Authentication", "Logging", "Encryption"], 
            answer: "Encryption"
        },
        { 
            question: "If a security breach occurs in an application, logging can assist in determining who gained access to the data and how they did so.", 
            choices: ["Encryption", "Logging", "Application Security Testing"], 
            answer: "Encryption"
        },
        { 
            question: "A method that ensures that all of these security controls are functioning effectively.", 
            choices: ["Authorization", "Application Security Testing", "Encryption"], 
            answer: "Application Security Testing"
        },
        { 
            question: "It aids in the detection of code flaws by examining the application source files for the root cause.", 
            choices: ["Static Application Security Testing (SAST)", "Dynamic Application Security Testing (DAST)", "Interactive Application Security Testing (IAST)", "Run-time Application Security Protection (RASP)"], 
            answer: "Static Application Security Testing (SAST)"
        },
        { 
            question: "It  is a more proactive approach, simulating security breaches on a live web application to deliver precise information about exploitable flaws.", 
            choices: ["Static Application Security Testing (SAST)", "Dynamic Application Security Testing (DAST)", "Interactive Application Security Testing (IAST)", "Run-time Application Security Protection (RASP)"], 
            answer: "Dynamic Application Security Testing (DAST)"
        },
        { 
            question: "Combines parts of SAST and DAST by performing analysis in real-time or at any moment during the development or production process from within the application.", 
            choices: ["Static Application Security Testing (SAST)", "Dynamic Application Security Testing (DAST)", "Interactive Application Security Testing (IAST)", "Run-time Application Security Protection (RASP)"], 
            answer: "Interactive Application Security Testing (IAST)"
        },
        { 
            question: "It has access to all of the application's code and components, allowing it to produce more accurate results and provide more in-depth access than previous versions.", 
            choices: ["Static Application Security Testing (SAST)", "Dynamic Application Security Testing (DAST)", "Interactive Application Security Testing (IAST)", "Run-time Application Security Protection (RASP)"], 
            answer: "Interactive Application Security Testing (IAST)"
        },
        { 
            question: "It also works within the application, but it is more concerned with security than with testing.", 
            choices: ["Static Application Security Testing (SAST)", "Dynamic Application Security Testing (DAST)", "Interactive Application Security Testing (IAST)", "Run-time Application Security Protection (RASP)"], 
            answer: "Run-time Application Security Protection (RASP)"
        },
        { 
            question: "It provides continuous security checks and automatic responses to possible breaches, which includes terminating the session and informing IT teams.", 
            choices: ["Static Application Security Testing (SAST)", "Dynamic Application Security Testing (DAST)", "Interactive Application Security Testing (IAST)", "Run-time Application Security Protection (RASP)"], 
            answer: "Run-time Application Security Protection (RASP)"
        },
        { 
            question: "The architecture and design of the application can be examined for security flaws before code is created. The construction of a threat model is a popular strategy used at this phase.", 
            choices: ["Black-box Security Audit", "White-box Security Review or Code Review", "Design Review", "Automated Tooling"], 
            answer: "Design Review"
        },
        { 
            question: "A security engineer delves into the application by manually inspecting the source code and looking for security issues. Vulnerabilities unique to the application can be discovered through understanding the application.", 
            choices: ["Black-box Security Audit", "White-box Security Review or Code Review", "Design Review", "Automated Tooling"], 
            answer: "White-box Security Review or Code Review"
        },
        { 
            question: "This is accomplished solely through the use of an application to test it for security flaws; no source code is necessary.", 
            choices: ["Black-box Security Audit", "White-box Security Review or Code Review", "Design Review", "Automated Tooling"], 
            answer: "Black-box Security Audit"
        },
        { 
            question: "Many security tools can be automated by including them in the development or testing process. Automated DAST/SAST tools that are incorporated into code editors or CI/CD systems are examples.", 
            choices: ["Black-box Security Audit", "White-box Security Review or Code Review", "Design Review", "Automated Tooling"],  
            answer: "Automated Tooling"
        },
        { 
            question: "Many websites and software providers offer hacker-powered application security solutions through which individuals can be recognized and compensated for reporting defects.", 
            choices: ["SQL injection (SQLi)", "Coordinated Vulnerability Platform", "Cross-Site Scripting (XSS)"], 
            answer: "Coordinated Vulnerability Platform"
        },
        { 
            question: "It allows an attacker to insert client-side code into a webpage. This gives the attacker direct access to the user's sensitive information.", 
            choices: ["Coordinated Vulnerability Platform", "Cross-Site Scripting (XSS)", "SQL injection (SQLi)"], 
            answer: "Cross-Site Scripting (XSS)"
        },
        { 
            question: "It flood the targeted server or the infrastructure that supports it with various types of traffic. This illegitimate traffic eventually prevents legitimate users from accessing the server, causing it to shut down.", 
            choices: ["Cross-Site Request Forgery (CSRF)", "Denial-of-Service (DoS) and Distributed Denial-of-Service (DDoS)", "SQL injection (SQLi)"], 
            answer: "Denial-of-Service (DoS) and Distributed Denial-of-Service (DDoS)"
        },
        { 
            question: "It is a technique used by hackers to exploit database flaws. These attacks, in particular, can reveal user identities and passwords, as well as enabling attackers to edit or destroy data, as well as modify or create user rights.", 
            choices: ["Cross-Site Scripting (XSS)", "Cross-Site Request Forgery (CSRF)", "SQL injection (SQLi)"], 
            answer: "SQL injection (SQLi)"
        },
        { 
            question: "It mimic authorized users after duping them into submitting an authorization request. Since their accounts have additional permissions, high-level users are obviously frequent targets of this strategy, and once the account is compromised, the attacker can remove, change, or destroy data.", 
            choices: ["Cross-Site Scripting (XSS)", "Cross-Site Request Forgery (CSRF)", "SQL injection (SQLi)"], 
            answer: "Cross-Site Request Forgery (CSRF)"
        },
        { 
            question: "It occurs when bad actors execute a variety of attacks on an application, they end up unintentionally changing some area of its memory. As a result, the software exhibits unexpected behavior or fails.", 
            choices: ["Buffer Overflow", "Automated Tooling", "Memory Corruption"], 
            answer: "Memory Corruption"
        },
        { 
            question: "It occurs when malicious code is injected into the system's designated memory region. Overflowing the buffer zone's capacity causes surrounding areas of the application's memory to be overwritten with data, posing a security risk.", 
            choices: ["Automated Tooling", "Buffer Overflow", "Memory Corruption"], 
            answer: "Buffer Overflow"
        },
        // Add more questions...
    ]
};

let selectedTopic = 'Security';
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
        ...q, choices: shuffleArray([...q.choices])
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
    
    let start = currentPage * 2;
    let end = Math.min(start + 2, selectedQuestions.length);

    for (let i = start; i < end; i++) {
        let q = selectedQuestions[i];
        let qIndex = i;
        let div = document.createElement('div');
        div.classList.add("question-card");
        div.innerHTML = `<h3>${qIndex + 1}. ${q.question}</h3>`;

        q.choices.forEach(choice => {
            div.innerHTML += `<label>
                <input type="radio" name="q${qIndex}" value="${choice}" 
                ${userAnswers[qIndex] === choice ? 'checked' : ''} 
                onchange="saveAnswer(${qIndex}, this.value)"> 
                ${choice}
            </label>`;
        });

        container.appendChild(div);
    }

    document.getElementById('prev').style.display = currentPage === 0 ? 'none' : 'inline-block';
    document.getElementById('next').innerText = currentPage === Math.ceil(selectedQuestions.length / 2) - 1 ? "Finish" : "Next";
}

function saveAnswer(index, value) {
    userAnswers[index] = value;
}

function nextPage() {
    if (currentPage < Math.ceil(selectedQuestions.length / 2) - 1) {
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
        let isCorrect = userAnswers[i] === q.answer;
        container.innerHTML += `
            <div class="result-card">
                <h3>${i + 1}. ${q.question}</h3>
                <p class="your-answer">Your Answer: 
                    <span class="${isCorrect ? 'correct-answer' : 'wrong-answer'}">
                        ${userAnswers[i] || 'No Answer'}
                    </span>
                </p>
                <p>Correct Answer: <span class="correct-answer">${q.answer}</span></p>
            </div>
        `;
    });

    document.getElementById('results-container').style.display = 'block';
}