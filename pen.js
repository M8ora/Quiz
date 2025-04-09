const questionSets = {
    comNet: [
        { 
            question: "It is a system that connects two or more computing devices for transmitting and sharing information.", 
            choices: ["Servers", "Computer Network", "Routers"], 
            answer: "Computer Network"
        },
        { 
            question: "____ and ____ are computing devices that need to be linked in the network.", 
            choices: ["Servers & Routers", "Network Devices & Nodes", "Switches & Gateways"], 
            answer: "Network Devices & Nodes"
        },
        { 
            question: "These are end devices that users directly and frequently access EXCEPT.", 
            choices: ["Computers", "Mobiles", "Routers"], 
            answer: "Routers"
        },
        { 
            question: "It is an application or storage servers where the main computation and data storage occur.", 
            choices: ["Servers", "Routers", "Switches"], 
            answer: "Servers"
        },
        { 
            question: "All requests for specific tasks or data come to it.", 
            choices: ["Servers", "Routers", "Switches"], 
            answer: "Servers"
        },
        { 
            question: "It is the process of selecting the network path through which the data packets traverse.", 
            choices: ["Servers", "Routers", "Switches"], 
            answer: "Routers"
        },
        { 
            question: "These are like repeaters to network like what transformers are to electricity grids, they are electronic devices that receive network signals and clean or strengthen them.", 
            choices: ["Servers", "Routers", "Switches"],  
            answer: "Switches"
        },
        { 
            question: "A hardware devices that act as ‘gates’ between two distinct networks. They can be firewalls, routers, or servers", 
            choices: ["IP Address", "Gateways", "DNS"], 
            answer: "Gateways"
        },
        { 
            question: "It carry pulses of light to represent data.", 
            choices: ["Coaxial Cables", "Optical Fibers", "Phone Lines"], 
            answer: "Optical Fibers"
        },
        { 
            question: "Network connections that is established through radio or other electromagnetic signals.", 
            choices: ["Wired", "Wireless", "Satellites"], 
            answer: "Wireless"
        },
        { 
            question: "It is a set of rules followed by all nodes involved in the information transfer", 
            choices: ["Communication Protocols", "Network Defense", "Computer Network"], 
            answer: "Communication Protocols"
        },
        { 
            question: "It is a conceptual model that standardizes communication in a modern network.", 
            choices: ["TCP/IP", "DNS", "Gateways"], 
            answer: "TCP/IP"
        },
        { 
            question: "This layer defines how the data is physically transferred. It includes how hardware sends data bits through physical wires or fibers.", 
            choices: ["Network access layer", "Internet layer", "Transport layer"], 
            answer: "Network access layer"
        },
        { 
            question: "This layer is responsible for packaging the data into understandable packets and allowing it to be sent and received.", 
            choices: ["Network access layer", "Internet layer", "Transport layer"], 
            answer: "Internet layer"
        },
        { 
            question: "This layer enables devices to maintain a conversation by ensuring the connection is valid and stable", 
            choices: ["Network access layer", "Internet layer", "Transport layer"], 
            answer: "Transport layer"
        },
        { 
            question: "This layer defines how high-level applications can access the network to initiate data transfer.", 
            choices: ["Application layer", "Internet layer", "Transport layer"], 
            answer: "Application layer"
        },
        { 
            question: "These form the foundation of a network, a modern network cannot exist without its defenses EXCEPT.", 
            choices: ["Nodes", "Protocols", "Links", "Devices"], 
            answer: "Devices"
        },
        { 
            question: "It is critical when unprecedented amounts of data are generated, moved, and processed across networks.", 
            choices: ["Security", "Links", "Protocols"], 
            answer: "Security"
        },
        { 
            question: "These networks enable communication between minuscule sensors and actuators.", 
            choices: ["Nanoscale networks", "Storage area network (SAN)", "Personal area network (PAN)"], 
            answer: "Nanoscale networks"
        },
        { 
            question: "It refers to a network used by just one person to connect multiple devices, such as laptops to scanners, etc", 
            choices: ["Personal area network (PAN)", "Storage area network (SAN)", "Campus area network (CAN)"], 
            answer: "Personal area network (PAN)"
        },
        { 
            question: "It connects devices within a limited geographical area, such as schools, hospitals, or office buildings.", 
            choices: ["Storage area network (SAN)", "Campus area network (CAN)", "Local area network (LAN)"], 
            answer: "Local area network (LAN)"
        },
        { 
            question: "It is a dedicated network that facilitates block-level data storage. This is used in storage devices such as disk arrays and tape libraries.", 
            choices: ["Storage area network (SAN)", "Campus area network (CAN)", "Local area network (LAN)"],
            answer: "Storage area network (SAN)"
        },
        { 
            question: "These are a collection of interconnected LANs. They are used by larger entities such as universities and governments.", 
            choices: ["Local area network (LAN)", "Wide area network (WAN)", "Campus area network (CAN)"], 
            answer: "Campus area network (CAN)"
        },
        { 
            question: "It is a large computer network that spans across a city.", 
            choices: ["Wide area network (WAN)", "Metropolitan area network (MAN)", "Enterprise private network (EPN)"], 
            answer: "Metropolitan area network (MAN)"
        },
        { 
            question: "It cover larger areas such as large cities, states, and even countries.", 
            choices: ["Virtual private network (VPN)", "Metropolitan area network (MAN)", "Cloud network"], 
            answer: "Wide area network (WAN)"
        },
        { 
            question: "It is a single network that a large organization uses to connect its multiple office locations.", 
            choices: ["Wide area network (WAN)", "Metropolitan area network (MAN)", "Enterprise private network (EPN)"], 
            answer: "Enterprise private network (EPN)"
        },
        { 
            question: "It is an overlay private network stretched on top of a public network", 
            choices: ["Virtual private network (VPN)", "Cloud network", "Enterprise private network (EPN)"], 
            answer: "Virtual private network (VPN)"
        },
        { 
            question: "It is a WAN whose infrastructure is delivered via cloud services.", 
            choices: ["Metropolitan area network (MAN)", "Wide area network (WAN)", "Cloud network"], 
            answer: "Cloud network"
        }
    ],
    netComp: [
        { 
            question: "It comprises both physical parts as well as the software required for installing computer networks, both at organizations and at home.", 
            choices: ["Computer networks components", "Hardware Components", "Software Components"], 
            answer: "Computer networks components"
        },
        { 
            question: "These components are the server, client, peer, transmission media, and connecting devices.", 
            choices: ["Computer networks components", "Hardware Components", "Software Components"], 
            answer: "Hardware Components"
        },
        { 
            question: "These are operating system and protocols.", 
            choices: ["Computer networks components", "Hardware Components", "Software Components"], 
            answer: "Software Components"
        },
        { 
            question: "These are high-configuration computers that manage the resources of the network", 
            choices: ["Servers", "Clients", "Switches"], 
            answer: "Servers"
        },
        { 
            question: "It can be of various kinds: file servers, database servers, print servers etc.", 
            choices: ["Servers", "Clients", "Switches"], 
            answer: "Servers"
        },
        { 
            question: "It is a computers that request and receive service from the servers to access and use the network resources.", 
            choices: ["Servers", "Clients", "Switches"], 
            answer: "Clients"
        },
        { 
            question: "These are the channels through which data is transferred from one device to another in a network.", 
            choices: ["Transmission Media", "Servers", "Connecting Devices"], 
            answer: "Transmission Media"
        },
        { 
            question: "It may be guided media like coaxial cable, fiber optic cables etc. or maybe unguided media like microwaves, infra-red waves etc.", 
           choices: ["Transmission Media", "Servers", "Connecting Devices"], 
            answer: "Transmission Media"
        },
        { 
            question: "It act as middleware between networks or computers, by binding the network media together", 
           choices: ["Transmission Media", "Servers", "Connecting Devices"], 
            answer: "Connecting Devices"
        },
        { 
            question: "It is typically installed in the server and facilitate workstations in a network to share files, database, applications, printers etc.", 
            choices: ["Networking Operating System", "Protocol Suite", "Database"], 
            answer: "Networking Operating System"
        },
        { 
            question: "It is used for communication between different hardware’s used in the computer network this devices are also known as physical devices, networking hardware, and network equipment otherwise computer networking devices.", 
            choices: ["Network Device", "Protocol Suite", "OS"], 
            answer: "Network Device"
        },
        { 
            question: "It is used to communicate with various network hosts and also for data transferring.", 
            choices: ["Hub", "Switch", "Modem"], 
            answer: "Hub"
        },
        { 
            question: "It is similar to a hub, this is also working at the layer in the LAN", 
            choices: ["Server", "Router", "Switch"], 
            answer: "Switch"
        },
        { 
            question: "It is used for filtering & forwarding the data.", 
            choices: ["Server", "Router", "Switch"], 
            answer: "Switch"
        },
        { 
            question: "It is a modulator and a demodulator, it modulates as well as demodulates the signal among the computer and a telephone line since the computer generates the digital data whereas the telephone line generates an analog signal.", 
            choices: ["Switch", "Bridge", "Modem"], 
            answer: "Modem"
        },
        { 
            question: "It is used for routing traffic from one network to another and this two networks could be private to a public company network.", 
            choices: ["Bridge", "Router", "Switch"], 
            answer: "Router"
        },
        { 
            question: "It is a computer network that used to unite two or more network segments.", 
            choices: ["Bridge", "Router", "Switch"], 
            answer: "Bridge"
        },
        { 
            question: "A device that connects two or more packet-switched networks or subnetworks.", 
            choices: ["Bridge", "Router", "Switch"], 
            answer: "Router"
        },
        { 
            question: "It is a two-port device that reproduce a signal on a similar network before the signal gets weak.", 
            choices: ["Repeater", "Switch", "Bridge"], 
            answer: "Repeater"
        }
    ],
    vLans: [
        { 
            question: "These are logical connections with other similar devices.", 
            choices: ["VLANS", "LANS", "Links"], 
            answer: "VLANS"
        },
        { 
            question: "Dividing the LAN reduces the number of broadcast domains.", 
            choices: ["Improved Security", "Improved IT Efficiency", "Smaller Broadcast Domains"], 
            answer: "Smaller Broadcast Domains"
        },
        { 
            question: "Only users in the same VLAN can communicate together", 
            choices: ["Improved Security", "Improved IT Efficiency", "Smaller Broadcast Domains"], 
            answer: "Improved Security"
        },
        { 
            question: "VLANs can group devices with similar requirements, e.g. faculty vs. students", 
            choices: ["Improved Security", "Improved IT Efficiency", "Smaller Broadcast Domains"], 
            answer: "Improved IT Efficiency"
        },
        { 
            question: "One switch can support multiple groups or VLANs.", 
            choices: ["Improved Security", "Improved IT Efficiency", "Reduced Cost"], 
            answer: "Reduced Cost"
        },
        { 
            question: "Small broadcast domains reduce traffic, improving bandwidth", 
            choices: ["Improved Security", "Better Performance", "Reduced Cost"], 
            answer: "Better Performance"
        },
        { 
            question: "Cannot be deleted or renamed.", 
            choices: ["Native VLAN", "Default VLAN", "Native VLAN"], 
            answer: "Default VLAN"
        },
        { 
            question: "Dedicated to user-generated traffic (email and web traffic).", 
            choices: ["Management VLAN", "Native VLAN", "Data VLAN"], 
            answer: "Data VLAN"
        },
        { 
            question: "This is used for trunk links only. All frames are tagged on an 802.1Q trunk link", 
            choices: ["Management VLAN", "Native VLAN", "Data VLAN"], 
            answer: "Native VLAN"
        },
        { 
            question: "This is used for SSH/Telnet VTY traffic and should not be carried with end user traffic.", 
            choices: ["Management VLAN", "Native VLAN", "Data VLAN"], 
            answer: "Management VLAN"
        }
    ],
    weekFive: [
        { 
            question: "", 
            choices: ["", "", ""], 
            answer: ""
        }
    ],
    identification: [
        { 
            question: "It form the foundation of a network, a modern network cannot exist without its defenses", 
            answer: "Nodes, Links, Protocols"
        },
        { 
            question: "Name examples of network defense tools.", 
            answer: "Firewall, Intrusion detection systems, Intrusion prevention systems, Network access control, Content filtes, Proxy servers, anti-DDoS devices, Load balancers"
        },
        { 
            question: "This devices are also known as Physical devices.", 
            answer: "Network Devices"
        },
        { 
            question: "The transferring of data in a computer network can be done in the form of what?", 
            answer: "Packets"
        },
        { 
            question: "It provides segmentation of the various groups of devices on the same switches", 
            answer: "VLANS"
        },
        { 
            question: "The Broadcasts, multicasts and unicasts are isolated in each individual.", 
            answer: "VLANS"
        },
        { 
            question: "Each VLAN will have its own unique range of what?", 
            answer: "IP Address"
        },
        { 
            question: "It is a point-to-point link between two network devices.", 
            answer: "Trunk"
        },
        { 
            question: "All devices connected to the switches will receive all unicast, multicast, and broadcast traffic", 
            answer: "Networks without VLANS"
        },
        { 
            question: "Unicast, multicast, and broadcast traffic is confined to a VLAN. Without a Layer 3 device to connect the VLANs, devices in different VLANs cannot communicate.", 
            answer: "Networks with VLANS"
        },
        { 
            question: "", 
            choices: ["", "", ""], 
            answer: ""
        },
        { 
            question: "", 
            choices: ["", "", ""], 
            answer: ""
        },
        { 
            question: "", 
            choices: ["", "", ""], 
            answer: ""
        },
        { 
            question: "", 
            choices: ["", "", ""], 
            answer: ""
        },
    ],
    identificationTwo: [
        { 
            question: "", 
            answer: ""
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
