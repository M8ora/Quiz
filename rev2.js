
const items = [
    { definition: "1. 1960S: PASSWORD PROTECTION", term: "There was no internet or network to worry about, security was <strong>largely focused on more physical measures, and preventing access to people with enough knowledge about how to work a computer." },
    { definition: "2.1 1970S: FROM CREEPER TO REAPER", term: "Cybersecurity’s history began with a research project during the 1970s, on what was then known as the <strong>ARPANET <br>(The Advanced Research Projects Agency Network)." },
    { definition: "2.2 1970S: FROM CREEPER TO REAPER: <br> Bob Thomas", term: "Created a computer program which was able to move ARPANET’s network, leaving a small trail wherever it went. He named the program <strong>‘CREEPER’</strong>, because of the printed message that was left when travelling across the network: <i><strong>‘I’M THE CREEPER: CATCH ME IF YOU CAN’</strong></i>." },
    { definition: "2.3 1970S: FROM CREEPER TO REAPER: <br> Ray Tomlinson", term: "The man who invented <strong>Email</strong> – later designed a program which took CREEPER to the next level, making it self-replicating and the <strong>first ever computer Worm </strong>. Fortunately, he then wrote another program called <strong>Reaper</strong> which chased CREEPER and deleted it, providing the <strong> first </strong> example of <strong><i>Antivirus software." },
    { definition: "3.1 1980S: THE INTERNET GOES MAD", term: "Computers started to become more and more connected, computer viruses became more advanced, and information security systems could not keep up with the constant barrage of innovative hacking approaches." },
    { definition: "3.2 1980S: THE INTERNET GOES MAD: Marcus Hess", term: "The Russian began using cyber power as a weapon and, in 1986, employed <strong>German computer hacker Marcus Hess </strong> to steal US military secrets. He hacked into <strong> over 400 military computers, including mainframes at the Pentagon </strong>, and intended selling their secrets to the KGB." },
    { definition: "3.3 1980S: THE INTERNET GOES MAD: Morris Worm", term: "In <strong> 1988</strong>, saw the birth of the Morris Worm – one of the major turning points in the history of information security. Network usage began to expand rapidly, and more and more universities, militaries and governments became connected to it. That meant that the security measures required had to gradually become more expansive as well, which gave birth to the Morris Worm." },
    { definition: "3.4 1980S: THE INTERNET GOES MAD: <br> ARPANET to Internet", term: "Became available to the public as the worldwide web during <strong> 1989." },
    { definition: "4.1 1990S: THE RISE OF FIREWALLS", term: "Organized crime entities saw internet becoming available to the public as potential source of revenue, and started to steal data from people and governments via the web." },
    { definition: "4.2 1990S: THE RISE OF FIREWALLS", term: "Firewalls and antivirus programs went some way to minimizing the risk of attacks, computer viruses and worms kept coming thick and fast, so hackers definitely had the upper hand at the time." },
    { definition: "5.1 2000S: PROPER PUNISHMENT", term: "In the early 2000s, governments began to clamp down on the criminality of hacking, giving much more serious sentences to those culpable – including extensive jail time and large fines." },
    { definition: "5.2 2000S: PROPER PUNISHMENT", term: "Information security continued to advance as the internet grew as well but, unfortunately, so did viruses. Hackers quickly became able to create viruses that could not only target specific organizations, but whole cities, states and even continents as well." },
    { definition: "6.1 2010S: THE ERA OF MAJOR BREACHES: Snowden & The NSA, 2013", term: "<strong>Edward Snowden</strong> – a former CIA employee and contractor for the US Government – copied and leaked classified information from the <strong> National Security Agency (NSA)</strong>, highlighting the fact that the government was effectively <strong><i>‘spying’<i></strong> on the public." },
    { definition: "6.2 2010S: THE ERA OF MAJOR BREACHES: Yahoo, 2013 – 2014", term: "Hackers broke into Yahoo, jeopardizing the accounts and personal information of all their three billion users. They were fined $35 million for failing to disclose news of the breach in a timely manner, and Yahoo’s sale price decreased by <strong> $350 million </strong> as a result." },
    { definition: "6.3 2010S: THE ERA OF MAJOR BREACHES: WannaCry, 2017", term: "More widely known as the first <strong><i>‘ransom worm’</i></strong>, <strong>WannaCry</strong> targeted computers running the <i> Microsoft Windows operating system </i> and demanded ransom payments in the Bitcoin cryptocurrency. In only one day, the worm infected over <strong> 230,000 computers across 150 countries." },
    { definition: "7. WAF", term: "web Application Firewalls" },
    { definition: "8. NBA", term: "Network Behavioral Analysis" },
    { definition: "9. Security for Information Technology", term: "Refers to the methods, tools and personnel used to defend an organization's digital assets." },
    { definition: "10. IT Security consists of two areas: Physical and Information: <br> Information Security", term: "Referred to as <strong>infosec.</strong> It includes strategies used to manage the processes, tools and policies that protect both digital and nondigital assets. When implemented effectively, infosec can maximize an organization's ability to prevent, detect and respond to threats." },
    { definition: "10.1 Three Components of Information Security: Confidentiality", term: "<strong> Data confidentiality</strong> means that <i> data should only be available to those with authorized access</i>. In your organization, employees should have access only to the data and assets they need to do their job. <br> <strong>Multi-factor authentication <i>(MFA)</i> </strong> requires a user to validate their identity by multiple methods, such as using a code delivered to a device or a biometric like a fingerprint." },
    { definition: "10.2 Three Components of Information Security: Integrity", term: "<strong> Data integrity </strong> means <i>information should be intact, complete, and accurate." },
    { definition: "10.3 Three Components of Information Security: Availability", term: "<strong> Data availability </strong> means that <i> a network, systems, and necessary devices are ready to use as intended by the authorized people." },
    { definition: "11. Key Security Concepts", term: "<strong> Network security </strong> is necessary to protect personal network hardware and clients from unwanted access, theft, damage, and other problems. The internet is the number <strong> one source of security threats</strong>. Control your network to protect it from these threats. The primary goal of network security is to protect Internet-connected machines from <i> viruses </i> and <i> hackers</i> . <strong>Firewalls, routers, and other devices give you control over your network’s security </strong>. Allow unauthorized access to unidentified individuals by undermining your own" },
    { definition: "11.1 Key Security Concepts: Assets", term: "Anything of value to a company is considered an asset." },
    { definition: "11.2 Key Security Concepts: Vulnerability:", term: "A security flaw in the hardware, software, or configuration of a device or process is called a “<i>vulnerability.”" },
    { definition: "11.2 Key Security Concepts: Risk", term: "The <strong> likelihood of being targeted by a particular attack</strong>, the likelihood of a successful attack, and overall exposure to a particular threat are all referred to as <strong><i>‘risk’." },
    { definition: "11.2 Key Security Concepts: Threat", term: "A particular type of attack source and means is called a <strong><i>“threat”." },
    { definition: "11.2 Key Security Concepts: Exploit", term: "An exploit is a <strong>Method or tool</strong> used by an attacker to exploit a vulnerability and damage a target system." },
    { definition: "11.2 Key Security Concepts: Countermeasures", term: "Countermeasures are protections that reduce possible risks. Countermeasures <strong>reduce the likelihood</strong> that an attacker can exploit a risk by reducing or eliminating the vulnerability." },
    { definition: "12.1 CRITICAL CHARACTERISTICS OF INFORMATION: Availability", term: "It is the characteristic of information that enables user access to information without interference or obstruction and in a required format. A user in this definition may be either a person or another computer system. Availability does not imply that the information is accessible to <i>any user</i>; rather, it means availability to <strong> authorized users." },
    { definition: "12.2 CRITICAL CHARACTERISTICS OF INFORMATION: Accuracy", term: "Information should have accuracy. Information has accuracy when it is <strong> free from <i>mistakes or errors</i> </strong> and it has the value that the end users expects. If information contains a value different from the user’s expectations, due to the intentional or unintentional modification of its content, it is no longer accurate." },
    { definition: "12.3 CRITICAL CHARACTERISTICS OF INFORMATION: Authentication", term: "Authentication occurs when a control provides proof that a user possesses the identity that he or she claims." },
    { definition: "12.4 CRITICAL CHARACTERISTICS OF INFORMATION: Confidentiality", term: "Confidentiality of information ensures that only those with sufficient privileges may access certain information. When unauthorized individuals or systems can access information, confidentiality is breached. To protect the confidentiality of information, a number of measures are used." },
    { definition: "12.5 CRITICAL CHARACTERISTICS OF INFORMATION: Integrity", term: "Integrity is the quality or state of being whole, complete, and uncorrupted. The integrity of information is threatened when it is exposed to corruption, damage, destruction, or other disruption of its authentic state. <strong>Corruption</strong> can occur while information is being compiled, stored, or transmitted." },
    { definition: "12.6 CRITICAL CHARACTERISTICS OF INFORMATION: Utility", term: "Information has value when it serves a particular purpose. This means that if information is available, but not in a format meaningful to the end user, it is not useful. Thus, the value of information depends on its utility." },
    { definition: "12.7 CRITICAL CHARACTERISTICS OF INFORMATION: Possession", term: "The possession of Information security is the quality or state of having ownership or control of some object or item." },
    { definition: "13. THREATS", term: "Management must be informed of the various kinds of threats facing the organization. <br> A threat is an object, person, or other entity that represents a constant danger to an asset. <br> By examining each threat category in turn, management effectively protects its information through policy, education and training, and technology controls" },
    { definition: "13.1 THREATS: ACTS OF HUMAN ERROR OR FAILURE", term: "Includes acts done without malicious intent. <br> A. Inexperience <br> B. Improper training <br> C. Incorrect assumptions <br> D. Other circumstances. <br> - Employees are greatest threats to information security – They are closest to the organizational data" },
    { definition: "13.2 THREATS: DEVIATIONS IN QUALITY OF SERVICE BY SERVICE PROVIDERS", term: "Situations of product or services not delivered as expected. <br> Information system depends on many <strong> inter-dependent </strong> support systems. <br> Three sets of service issues that dramatically affect the availability of information and systems are: <br> Internet service, Communications and Power irregularities" },
    { definition: "13.2.1 THREATS: INTERNET SERVICE", term: "Loss of Internet service can lead to considerable loss in the vailability of information" },
    { definition: "13.2.2 THREATS: COMMUNICATIONS AND OTHER SERVICES", term: "Other utility services have potential impact, among these are: telephone, water & wastewater, trash pickup, cable television, natural or propane gas, and custodial services <br> The threat of loss of services can lead to inability to function properly" },
    { definition: "13.2.3 THREATS: POWER IRREGULARITIES", term: "Voltage levels can increase, decrease, or cease: <br> A. <strong>spike</strong> – momentary increase <br> B. <strong>Surge</strong> – prolonged increase <br> C.<strong> sag </strong> – momentary low voltage <br> D. <strong> brownout </strong> – prolonged drop <br> E. <strong> fault </strong>– momentary loss of power <br> F. <strong> Blackout </strong> – prolonged loss <br> <br> Electronic equipment is susceptible to fluctuations, controls can be applied to manage power quality" },
    { definition: "14. ESPIONAGE/TRESPASS", term: "Broad category of activities that breach confidentiality. <br> A. Unauthorized accessing of information. <br> B. Competitive intelligence vs. espionage. <br> C. Shoulder surfing can occur any place a person is accessing confidential information" },
    { definition: "14. ESPIONAGE/TRESPASS", term: "Controls implemented to mark the boundaries of an organization’s virtual territory giving notice to trespassers that they are encroaching on the organization’s cyberspace. <br> <br> Hackers uses skill, guile, or fraud to steal the property of someone else." },
    { definition: "14.1 ESPIONAGE/TRESPASS: Expert hacker", term: "Develops software scripts and codes exploits, usually a master of many skills and will often create attack software and share with others." },
    { definition: "14.2 ESPIONAGE/TRESPASS: Script kiddies", term: "Hackers of limited skill, use expert-written software to exploit a system and do not usually fully understand the systems they hack." },
    { definition: "14.3 ESPIONAGE/TRESPASS: Cracker", term: "An individual who “cracks” or removes protection designed to prevent unauthorized duplication" },
    { definition: "14.4 ESPIONAGE/TRESPASS: Phreaker", term: "Hacks the public telephone network" },
    { definition: "15. ESPIONAGE OR TRESPASS", term: "Espionage or trespass occurs when an unauthorized individual attempts to gain illegal access to organizational information. It is important to distinguish between competitive intelligence and industrial espionage. <br><br> <strong> Competitive intelligence </strong> consists of legal information-gathering techniques, such as studying a company’s Web site and press releases, attending trade shows, and so on. <br><br> <strong> Industrial espionage </strong> crosses the legal boundary." },
    { definition: "16. INFORMATION EXTORTION", term: "Information extortion occurs when an attacker either threatens to steal, or actually steals, information from a company. The perpetrator demands payment for not stealing the information, for returning stolen information, or for agreeing not to disclose the information." },
    { definition: "17. SABOTAGE OR VANDALISM", term: "Sabotage and vandalism are deliberate acts that involve defacing an organization’s Web site, possibly damaging the organization’s image and causing its customers to lose faith.<br> One form of online vandalism is a hacktivist or cyberactivist operation. These are cases of high-tech civil disobedience to protest the operations, policies, or actions of an organization or government agency." },
    { definition: "18. THEFT OF EQUIPMENT OR INFORMATION", term: "Computing devices and storage devices are becoming smaller yet more powerful with vastly increased storage. As a result, these devices are becoming easier to steal and easier for attackers to use to steal information." },
    { definition: "19. IDENTITY THEFT", term: "Identity theft is the deliberate assumption of another person’s identity, usually to gain access to his or her financial information or to frame him or her for a crime." },
    { definition: "20. SOFTWARE ATTACKS", term: "Software attacks have evolved from the early years of the computer era, when attackers used malicious software to infect as many computers worldwide as possible, to the profit-driven, Web-based attacks of today. Modern cyber criminals use sophisticated, blended malware attacks, typically via the Web, to make money." },
    { definition: "20.1 SOFTWARE ATTACKS: REMOTE ATTACKS <strong>REQUIRING>/strong> USER ACTION", term: "<strong>Virus</strong> - Segment of computer code that performs malicious actions by attaching to another computer program. <br><br> <strong> Worm </strong> - Segment of computer code that performs malicious actions and will replicate, or spread, by itself (without requiring another computer program). <br><br> <strong> Phishing Attack </strong> - Phishing attacks use deception to acquire sensitive personal information by masquerading as official looking e-mails or instant messages. <br><br> <strong> Spear Phishing Attack </strong> - Phishing attacks target large groups of people. In spear phishing attacks, the perpetrators find out as much information about an individual as possible to improve their chances that phishing techniques will be able to obtain sensitive, personal information." },
    { definition: "20.2 SOFTWARE ATTACKS: REMOTE ATTACKS <strong> NEEDING NO</strong> USER ACTION", term: "<strong> Denial-of-Service Attack </strong> - Attacker sends so many information requests to a target computer system that the target cannot handle them successfully and typically crashes (ceases to function).<br><br> <strong> Distributed Denial-of-Service Attack </strong>- An attacker first takes over many computers, typically by using malicious software. These computers are called zombies or bots. The attacker uses these bots-which form a botnet-to deliver a coordinated stream of information requests to a target computer, causing it to crash." },
    { definition: "21.1 ATTACKS BY A PROGRAMMER DEVELOPING A SYSTEM: Trojan Horse", term: "Software programs that hide in other computer programs and reveal their designed behavior only when they are activated." },
    { definition: "21.2 ATTACKS BY A PROGRAMMER DEVELOPING A SYSTEM: Back Door", term: "Typically a password, known only to the attacker, that allows him or her to access a computer system at will, without having to go through any security procedures (also called a trap door)." },
    { definition: "21.3 ATTACKS BY A PROGRAMMER DEVELOPING A SYSTEM: Logic Bomb", term: "Segment of computer code that is embedded within an organization’s existing computer programs and is designed to activate and perform a destructive action at a certain time or date." },
    { definition: "22. Intellectual Property", term: "can be anything from plans for a product launch to a certain manufacturing process. It can even be the list of countries where the company's patents are in." },
    { definition: "22.1 Intellectual Property: INDUSTRIAL PROPERTY", term: "Includes patents for trademarks, geographical indications, inventions, and industrial designs." },
    { definition: "22.2 Intellectual Property: COPYRIGHT", term: "includes literary works like poems, novels, plays, website pages, artistic and musical works, photographs, sculptures, and paintings." },
    { definition: "23. SECURITY THROUGH OBSOLESCENCE", term: "It is the method of using a dated operating system on a device to prevent hackers from intruding. This method might be seen as counterintuitive in the software development world, where new security patches are released with new and improved operating systems." },
    { definition: "24. Laws", term: "● Rules that mandate or prohibit certain behavior. <br> ● Drawn from ethics." },
    { definition: "25. Ethics", term: "Define socially acceptable behaviors" },
    { definition: "25.1 Laws vs Ethics", term: "Laws carry the authority of a governing body while Ethics do not carry the authority of a governing body but Based on cultural mores. <br> ● Extends beyond criminal or contract law. <br> ● Extends beyond criminal or contract law. <br> ● Include legal obligation to restitution. <br> ● Employer can be held financially liable." },
    { definition: "26. Organizational Liability and Need for Counsel: Liability", term: "● Legal obligation of organization" },
    { definition: "26.1 Organizational Liability and Need for Counsel: Due Care", term: "● Organization makes sure that every employee knows this acceptable or unacceptable. <br> ● Knows the consequences of illegal or unethical actions." },
    { definition: "26.2 Organizational Liability and Need for Counsel: Due diligence", term: "● Make a valid effort to protect others <br> ● Maintains the effort" },
    { definition: "26.3 Organizational Liability and Need for Counsel: Jurisdiction", term: "● Court’s right to hear a case if a wrong is committed <br> ● Long Arm - Extends across the country or around the world" },
    { definition: "27. Policy Versus law: Policies", term: "● Guidelines that describe acceptable and unacceptable employee behaviors <br> ● Functions as organizational laws <br> ● Has penalties, judicial practices, and sanctions. " },
    { definition: "27. Policy Versus law: Difference between policy and law", term: "● Ignorance of policy is acceptable. <br> ● Ignorance of law is unacceptable." },
    { definition: "27. Policy Versus law: Keys for a policy to be enforceable", term: "● Dissemination <br> ● Review<br> ● Comprehension<br> ● Compliance<br> ● Uniform enforcement" },
    { definition: "28.1 Types of Law: Civil", term: "Govern a nation or state" },
    { definition: "28.2 Types of Law: Criminal", term: "Addresses activities and conduct harmful to public" },
    { definition: "28.3 Types of Law: Private", term: "Encompasses family, commercial, labor, and regulates the relationship between individuals and organizations" },
    { definition: "28.4 Types of Law: Public", term: "Regulates the structure and administration of government agencies and their relationships with citizens, employees, and other governments" },
    { definition: "29.1 International Laws and Legal Bodies", term: "Organizations do business on the Internet – they do business globally" },
    { definition: "29.2 International Laws and Legal Bodies", term: "Professionals must be sensitive to the laws and ethical values of many different cultures, societies, and countries." },
    { definition: "29.3 International Laws and Legal Bodies", term: "Few international laws relating to privacy and informational security" },
    { definition: "29.4 International Laws and Legal Bodies", term: "Few international laws relating to privacy and informational security" },
    { definition: "30. Council of Europe Convention on Cybercrime", term: "● Council of Europe Convention on Cybercrime. <br> ● Designed to oversee range of security functions." },
    { definition: "31. Agreement on Trade-Related Aspects of Intellectual Property Rights", term: "● Created by the World Trade Organization <br> ● Introduced intellectual property rules into the multilateral trade system. <br> ● First significant international effort to protect intellectual property rights" },
    { definition: "32. Digital Millennium Copyright Act <br>(DMCA)", term: "● American contribution to WTO <br>● Plan to reduce the impact of copyright, trademark, and privacy infringement <br> ● UK's version <i> Database Right" },
    { definition: "33. Risk management", term: "The process of mitigating risks to limit their impact on the health of a business." },
    { definition: "34. Business risk", term: "A ny action or inaction that increases a business’s exposure to factors that might reduce its revenue, cause it to fail, or damage its reputation." },
    { definition: "35. Risk Identification", term: "The process of documenting potential risks and then categorizing the actual risks the business faces." },
    { definition: "36. Risk Analysis", term: "Once risks have been identified, the next step is to analyze their likelihood and potential impact." },
    { definition: "37. Response Planning", term: "It answers the question: What are we going to do about it? For example, if during identification and analysis, you realized that the business is at risk of phishing attacks because its employees are unaware of email security best practices, your response plan might include security awareness training." },
    { definition: "38. Risk Mitigation", term: "It is the implementation of your response plan. It is the action your business and its employees take to reduce exposure." },
    { definition: "39. Risk Monitoring", term: "Risks are not static; they change over time. The potential impact and probability of occurrence change, and what was once considered a minor risk can grow into one that presents a significant threat to the business and its revenue. <br> Risk monitoring is the process of “keeping an eye” on the situation through regular risk assessments." },
    { definition: "40. Community of Interest (COI)", term: "Group of people who share common interests and goals, often used to exchange information and ideas, collaborate on projects, or advocate for a cause. <br> ● provide members with a sense of belonging and identity." },
    { definition: "41. Asset identification", term: "The process of identifying and documenting all assets owned by an organization." },
    { definition: "42. Valuation risk", term: "The risk that an entity suffers a loss when trading an asset or a liability due to a difference between the accounting value and the price effectively obtained in the trade." },
    { definition: "43. Asset valuation", term: "Provides a cost representation of what the organization stands to lose in the event of a major compromise. From the risk management perspective, assets are generally valued based on the business value and not only on simple acquisition or replacement costs." },
    { definition: "44. Business value", term: "Measured in terms of revenue loss or other potential impacts when an asset is compromised." },
    { definition: "45. Listing Assets in Order of Importance", term: "Weighting should be created for each category based on the answers to questions. The relative importance of each asset is calculated using weighted factor analysis. The assets in order of importance are listed using a weighted factor analysis worksheet." },
    { definition: "46. Data classification", term: "the process of separating and organizing data into relevant groups (“classes”) based on their shared characteristics, such as their level of sensitivity, the risks they present, and the compliance regulations that protect them. To protect sensitive data, it must be located, classified according to its level of sensitivity, and accurately tagged. Then, enterprises must handle each group of data in ways that ensure only authorized people can gain access, both internally and externally, and that the data is always handled" },
    { definition: "47. Data classification: Manual", term: "Traditional data classification methods require human intervention and enforcement." },
    { definition: "47. Data classification: Automated", term: "Technology-driven solutions eliminate the risks of human intervention, including excessive time and errors, while adding persistence (around-the-clock classification of all data)." },
    { definition: "47. Data classification: Hybrid", term: "Human intervention provides context for data classification, while tools enable efficiency and policy enforcement." },
    { definition: "48. Data management", term: "The practice of collecting, keeping, and using data securely, efficiently, and cost-effectively." },
    { definition: "49. Security Clearance", term: "Allows an individual filling a specific position to have access to classified national security information up to and including the level of clearance that they hold as long as the individual has a “need to know” the information and signed a non-disclosure agreement." },
    { definition: "52. Confidential clearance", term: "This type of security clearance is the least restrictive. It provides access to information that can cause damage to national security if it is disclosed without authorization. It must be reinvestigated for continued eligibility every 15 years." },
    { definition: "53. Secret clearance", term: "Provides access to information that can cause serious damage to national security if disclosed without authorization. Must be reinvestigated for continued eligibility every 10 years and requires NACLC and a Credit investigation" },
    { definition: "54. Top secret clearance", term: "This type of security clearance is the most restrictive and provides access to information that can cause grave damage to national security if disclosed without authorization. Must be reinvestigated for continued eligibility every five years. Typically granted after a Single Scope Background Investigation (SSBI), for data related to counterterrorism, counterintelligence, and other extremely sensitive information" },
    { definition: "52.1 Five Risk Control Strategies: Avoiding risks", term: "Reducing risks is all about minimizing the likelihood of a risk occurring or minimizing the consequences caused by a risk. This is especially relevant in situations where risks cannot be fully eliminated or avoided." },
    { definition: "52.2 Five Risk Control Strategies: Reducing Risks", term: "Reducing risks is all about minimizing the likelihood of a risk occurring or minimizing the consequences caused by a risk. This is especially relevant in situations where risks cannot be fully eliminated or avoided." },
    { definition: "52.3 Five Risk Control Strategies: Risk Sharing", term: "Similar to risk sharing, risk transferring is also about the sharing of risk but particularly so to external organizations like a third-party or several organizations. It was originally derived from insurance where the signing of an insurance policy helped to transfer some of the risks from the policyholder to the insurer." },
    { definition: "52.4 Five Risk Control Strategies: Risk Transfer", term: "Similar to risk sharing, risk transferring is also about the sharing of risk but particularly so to external organizations like a third-party or several organizations. It was originally derived from insurance where the signing of an insurance policy helped to transfer some of the risks from the policyholder to the insurer." },
    { definition: "52.5 Five Risk Control Strategies: Retaining the Risk", term: "<i>'When the cost of managing a risk is higher than the impact of therisk itself, it may be prudent to just contain the risk.'" },
    { definition: "53. Cost-Benefit Analysis", term: "The process of comparing the projected or estimated costs and benefits (or opportunities) associated with a project decision to determine whether it makes sense from a business perspective." },
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