const questionSets = {
    jRiz: [
        { 
            question: "Batas na tungkol sa buhay at akda ni Jose Rizal na kinikilalang bayani ng ating bansa.", 
            choices: ["Republic Act 1425", "Republic Act 5516", "Republic Act 438"], 
            answer: "Republic Act 1425"
        },
        { 
            question: "Dalawang partikular na akda ni Jose Rizal na kabilang sa Rizal Law", 
            choices: ["Awit Ni Maria Clara at Ang Alaala sa Aking Bayan", "Noli Me Tangerine at Makamisa", "Noli Me Tangere at El Filibusterismo"], 
            answer: "Noli Me Tangere at El Filibusterismo",
            image: "images/tangerine.jpg"
        },
        { 
            question: "Ito ay batas na pinatupad at kailangan pag-aralan bilang mahalagang parte ng edukasyon.", 
            choices: ["Life and Works of Jose Rizal (LWR)", "Jose Rizal Law (JRL)", "J-Riz Laws (RizLaws)"], 
            answer: "Life and Works of Jose Rizal (LWR)"
        },
        { 
            question: "Sumulat ng 'Ang Ikalawang Paglilitis kay Jose Rizal: Ang Pagpapasá ng Batas Republika 1425'", 
            choices: ["Florentino A. Iniego, Jr.", "Jose B. Laurel", "Aljhon Balmes"], 
            answer: "Florentino A. Iniego, Jr."
        },
        { 
            question: "Sumulat ng 'The Trials of the Rizal Bill'", 
            choices: ["Jose B. Laurel", "Florentino A. Iniego, Jr.", "Aljhon Balmes"], 
            answer: "Jose B. Laurel"
        },
        { 
            question: "Kailan ipinanganak si Jose Rizal?", 
            choices: ["June 16, 1881", "June 19, 1861", "June 19, 1891"], 
            answer: "June 19, 1861"
        },
        { 
            question: "Kailan naganap ang unang paglilitis kay Jose Rizal?", 
            choices: ["Disyembre 11, 1968", "Disyembre 11, 1861", "Disyembre 11, 1896"], 
            answer: "Disyembre 11, 1896"
        },
        { 
            question: "Kailan pinagtibay ang parusang kamatayan kay Jose Rizal?", 
            choices: ["Disyembre 28, 1896", "Disyembre 26, 1896", "Disyembre 24, 1896"], 
            answer: "Disyembre 28, 1896"
        },
        { 
            question: "Ano ang mga kasong isinampa laban kay Jose Rizal sa unang paglilitis?", 
            choices: ["Rebelyon at pagtatag diumano ng isang samahang labag sa batas", "Pagsulat ng subersibong nobela at pagtataksil sa bayan", "Paglabag sa utos ng simbahan at sedisyon"], 
            answer: "Rebelyon at pagtatag diumano ng isang samahang labag sa batas"
        },
        { 
            question: "Kailan binaril si Jose Rizal sa Bagumbayan?", 
            choices: ["28 Disyembre 1896", "30 Disyembre 1896", "31 Disyembre 1896"], 
            answer: "30 Disyembre 1896"
        },
        { 
            question: "Ilang taon ang lumipas mula nang unang paglilitis bago naganap ang 'ikalawang paglilitis' kay Rizal?", 
            choices: ["50 taon", "60 taon", "70 taon"], 
            answer: "60 taon"
        },
        { 
            question: "Sino ang mga naghain ng panukalang batas sa Senado (Senate Bill 438) na naglalayong gawing mandatory ang pagbabasa ng mga nobela ni Rizal?", 
            choices: ["Claro M. Recto at Jacobo S. Gonzales", "Jose P. Laurel, Sr. at Jacobo S. Gonzales", "Claro M. Recto at Jose P. Laurel, Sr."], 
            answer: "Claro M. Recto at Jose P. Laurel, Sr."
        },
        { 
            question: "Kailan inihain ang Senate Bill 438 sa Senado?", 
            choices: ["19 Abril 1956", "3 Abril 1956", "12 Hunyo 1956"], 
            answer: "3 Abril 1956"
        },
        { 
            question: "Sino ang naghain ng bersyon ng panukalang batas sa Kongreso (House Bill 5561)?", 
            choices: ["Jacobo S. Gonzales", "Ramon Magsaysay", "Laurel at Recto"], 
            answer: "Jacobo S. Gonzales"
        },
        { 
            question: "Kailan inihain ang House Bill 5561 sa Kongreso?", 
            choices: ["3 Abril 1956", "17 Mayo 1956", "19 Abril 1956"], 
            answer: "19 Abril 1956"
        },
        { 
            question: "Ano ang pangunahing layunin ng Senate Bill 438 ayon sa pamagat nito?", 
            choices: ["Pag-aralan lamang ang buhay ni Rizal", "Gawing mandatory ang pagbabasa ng Noli Me Tangere at El Filibusterismo sa lahat ng kolehiyo at unibersidad", "Gawing opsyonal ang pagbabasa ng Noli at Fili"], 
            answer: "Gawing mandatory ang pagbabasa ng Noli Me Tangere at El Filibusterismo sa lahat ng kolehiyo at unibersidad"
        },
        { 
            question: "Sino ang tatlong senador na tumutol sa SB 438 sa unang bugso ng deliberasyon sa Senado?", 
            choices: ["Cuenco, Rodrigo, Rosales", "Pelaez, Sumulong, Aquino", "Yap, Santos, Cavanna"], 
            answer: "Cuenco, Rodrigo, Rosales"
        },
        { 
            question: "Sino si Jose Ma. Hernandez at ano ang kanyang posisyon sa SB 438?", 
            choices: ["Presidente ng Catholic Action of the Philippines na tumutol sa SB 438", "Isang historyador na nagbigay ng opinyon tungkol kay Rizal", "Chancellor ng Unibersidad ng Pilipinas na sumuporta sa SB 438"], 
            answer: "Presidente ng Catholic Action of the Philippines na tumutol sa SB 438"
        },
        { 
            question: "Ano ang sawikain ni Manuel Luis Quezon na binanggit ng Alagad ni Rizal bilang suporta sa SB 438?", 
            choices: ["'Ang kabataan ang pag-asa ng bayan'", "'My loyalty to my religion ends, where my loyalty to my country begins.'", "'Kung ano ang puno, siya rin ang bunga'"], 
            answer: "'My loyalty to my religion ends, where my loyalty to my country begins.'"
        },
        { 
            question: "Ayon kay Father Cavanna, ilang pahina sa Noli Me Tangere ang diumano'y naglalaman ng anti-Katolikong pahayag?", 
            choices: ["80 pahina", "120 pahina", "41 pahina"], 
            answer: "120 pahina"
        },
        { 
            question: "Ayon kay Father Cavanna, ilang pahina sa El Filibusterismo ang diumano'y nakalaan sa patriotismo?", 
            choices: ["80 pahina", "120 pahina", "41 pahina"], 
            answer: "41 pahina"
        },
        { 
            question: "Kailan inaprubahan ng Senado ang panukalang batas (SB 438)?", 
            choices: ["19 Mayo", "18 Mayo", "17 Mayo"], 
            answer: "17 Mayo"
        },
        { 
            question: "Kailan ipinasa ng Kongreso ang House Bill 5561", 
            choices: ["12 Hunyo", "12 Hulyo", "12 Mayo"], 
            answer: "12 Hunyo"
        },
        { 
            question: "Ano ang opisyal na pangalan ng batas na nilagdaan ni Presidente Magsaysay?", 
            choices: ["Batas Republika 5561", "Batas Republika 1425", "Batas Republika 438"], 
            answer: "Batas Republika 1425"
        },
        { 
            question: "Ito ang mahalagang nangyari noong ika-19 na siglo (1801-1900) sa kasaysayan at pagkakakilanlan ng Pilipinas maliban sa isa.", 
            choices: ["Sentiments awakened", "Propaganda Movement", "National anti-colonial movement", "Rebolusyon", "Edukasyon"], 
            answer: "Edukasyon"
        },
        { 
            question: "Kaninong pananaw ang karaniwang nangingibabaw sa mga tala ng kasaysayan noong panahon ng kolonyal?", 
            choices: ["Ang pananaw ng mga prayle (Friars), misyonero (Missionaries), opisyal ng kolonyal (Officials), at mga Manlalakbay (Travelers)", "Mga mangangalakal na Tsino", "Mga Pilipino"], 
            answer: "Ang pananaw ng mga prayle (Friars), misyonero (Missionaries), opisyal ng kolonyal (Officials), at mga Manlalakbay (Travelers)"
        },
        { 
            question: "Ano ang pinagmulan ng mga Pilipino", 
            choices: ["Austronesyano", "Malay", "Tsino"], 
            answer: "Austronesyano"
        },
        { 
            question: "Sa pamamagitan ng ano umano lumawak ang mga taong Austronesyano?", 
            choices: ["Pangangalakal sa lupa", "Paglalayag", "Paglalakad"], 
            answer: "Paglalayag"
        },
        { 
            question: "Ano ang relihiyon na naitatag na sa Sulu at Mindanao bago pa ang pagdating ng Kristiyanismo sa Visayas at Luzon?", 
            choices: ["Animismo", "Islam", "Hinduismo"], 
            answer: "Islam"
        },
        { 
            question: "Anong estratehiya ang ginamit ng mga Kastila sa pananakop sa Pilipinas?", 
            choices: ["Pakikipagkaibigan at alyansa", "Divide et impera (divide-and-conquer)", "Direktang militar na pananakop sa buong kapuluan"], 
            answer: "Divide et impera (divide-and-conquer)"
        }
    ],
    jRizTwo: [
        { 
            question: "Ang personal na pag-alaala ng sariling karanasan sa kabataan.", 
            choices: ["Memoir", "Autobiography", "Biography"], 
            answer: "Memoir"
        },
        {
            question: "Talaan ng mga biograpiya ng mga kilalang mga tao sa kasaysayan tulad ng mga Santo, mga kilalang tao sa simbahan, bayani, at politiko na kung saan sila'y ipinakikilala bilang walang bahid ng kamalian.", 
            choices: ["Hagiography", "Autobiography", "Biography"], 
            answer: "Hagiography"
        },
        { 
            question: "When was the execution of the three Filipino martyrs, the GOMBURZA ", 
            choices: ["1872", "1861", "1856"], 
            answer: "1872"
        },
        { 
            question: "His grades in all of his subjects were _______ or excellent.", 
            choices: ["Magnifico", "Excellente", "Sobresaliente"], 
            answer: "Sobresaliente"
        },
        { 
            question: "Saan nag-aral ng Pilosopiya at pagsulat si Jose Rizal?", 
            choices: ["Universidad de Sto. Tomas", "Ateneo de Municipal", "La Salle"], 
            answer: "Universidad de Sto. Tomas"
        },
        { 
            question: "Sino ang Ama ni Jose Rizal?", 
            choices: ["Don Felimon", "Don Francisco Mercado Rizal", "Don Francisco Mercado Alonzo"], 
            answer: "Don Francisco Mercado Rizal"
        },
        { 
            question: "Sino ang Ina ni Jose Rizal?", 
            choices: ["Donya Teodora Alonzo Realonda", "Donya Teodora Aquino", "Donya Teodora Rizal Alonzo"], 
            answer: "Donya Teodora Alonzo Realonda"
        },{ 
            question: "Ilan ang mga kapatid na babae ni Jose Rizal?", 
            choices: ["9", "10", "11"], 
            answer: "9"
        },
        { 
            question: "Sino ang panganay sa magkakapatid na Rizal?", 
            choices: ["Paciano", "Saturnina", "Narcisa"], 
            answer: "Saturnina"
        },
        { 
            question: "Sino ang nagmulat kay Jose Rizal tungkol sa mga kaugaliang Filipino at mga kwentong kababalaghan?", 
            choices: ["Yaya", "Nanay", "Kuya"], 
            answer: "Yaya"
        },
        { 
            question: "Sino ang nagtatag ng La Liga Filipina?", 
            choices: ["Andres Bonifacio", "Jose Rizal", "Apolinario Mabini"], 
            answer: "Jose Rizal"
        },
        { 
            question: "Kailan at saan itinatag ang La Liga Filipina", 
            choices: ["12 Hunyo 1898, Kawit, Cavite", "7 Hulyo 1892, Dapitan", "3 Hulyo 1892, Kalye Ilaya sa Tondo"], 
            answer: "3 Hulyo 1892, Kalye Ilaya sa Tondo"
        },
        { 
            question: "Sino ang tumayong pangulo ng La Liga Filipina?", 
            choices: ["Bonifacio Arevalo", "Deodato Arellano", "Ambrosio Salvador"], 
            answer: "Ambrosio Salvador"
        },
        { 
            question: "Ilan ang Kagawad ng La Liga Filipina?", 
            choices: ["14", "10", "24"], 
            answer: "14"
        },
        { 
            question: "Magbigay ng isang pangalan ng kagawad ng La Liga Filipina.", 
            choices: ["Graciano Lopez Jaena", "Andres Bonifacio", "Emilio Aguinaldo"], 
            answer: "Andres Bonifacio"
        },
        { 
            question: "Bakit masigasig na binantayan ng mga awtoridad ang La Liga Filipina?", 
            choices: ["Dahil tahasan itong lumalaban sa pamahalaan", "Dahil ito ay isang lihim na samahan", "Sa simpleng dahilan na si Rizal ang nagtatag ng samahan"], 
            answer: "Sa simpleng dahilan na si Rizal ang nagtatag ng samahan"
        },
        { 
            question: "Kailan nahuli si Rizal at ipinatapon sa Dapitan?", 
            choices: ["3 Hulyo 1892", "7 Hulyo 1892", "26 Agosto 1896"], 
            answer: "7 Hulyo 1892"
        },
        { 
            question: "Sino ang muling bumuhay sa La Liga Filipina pagkatapos mahuli si Rizal?", 
            choices: ["Ambrosio Salvador at Deodato Arellano", "Bonifacio Arevalo at Agustin de la Rosa", "Mabini at Bonifacio"], 
            answer: "Mabini at Bonifacio"
        },
        { 
            question: "Anong pahayagan ang sinusuportahan ng La Liga Filipina?", 
            choices: ["La Solidaridad", "Diario de Manila", "Liwayway"], 
            answer: "La Solidaridad"
        },
        { 
            question: "Saan sumapi ang maraming miyembro ng La Liga Filipina nang mawalan sila ng pananalig sa samahan?", 
            choices: ["Sa Pamahalaan", "Sa simbahan", "Sa Katipunan"], 
            answer: "Sa Katipunan"
        },
        { 
            question: "Kailan lumitaw ang Propaganda Movement?", 
            choices: ["Sa unang bahagi ng ika-19 na siglo", "Sa kalagitnaan ng ika-19 na siglo", "Sa huling bahagi ng ika-19 na siglo"], 
            answer: "Sa huling bahagi ng ika-19 na siglo"
        },
        { 
            question: "Sino ang isa sa mga kasapi ng Propaganda Movement?", 
            choices: ["Andres Bonifacio", "Graciano Lopez Jaena", "Apolinario Mabini"], 
            answer: "Graciano Lopez Jaena"
        },
        { 
            question: "Kailan nagsimula ang pampublikong edukasyon sa Pilipinas?", 
            choices: ["Noong 1500s", "Noong 1860s", "Noong 1900s"], 
            answer: "Noong 1860s"
        },
        { 
            question: "Kailan itinayo ang Suez Canal", 
            choices: ["1769", "1869", "1896"], 
            answer: "1869"
        },
        { 
            question: "Anong pangyayari noong 1872 ang nagpakita ng lumalagong damdamin ng pagkakakilanlang Pilipino", 
            choices: ["Ang pagkakatatag ng La Liga Filipina", "Ang armadong insureksyon sa arsenal ng Cavite", "Ang pagbalik ni Rizal sa Pilipinas"], 
            answer: "Ang armadong insureksyon sa arsenal ng Cavite"
        },
        { 
            question: "Ilang sundalong Pilipino ang nag-alsa sa Cavite?", 
            choices: ["500", "100", "200"], 
            answer: "200"
        },
        { 
            question: "Kailan itinatag ni Graciano Lopez Jaena ang pahayagang La Solidaridad at saan?", 
            choices: ["1872, Maynila", "1887, Madrid", "1888, Barcelona"], 
            answer: "1888, Barcelona"
        },
        { 
            question: "Sila ang mga pangunahing kontribyutor sa La Solidaridad na binanggit maliban kay?", 
            choices: ["Marcelo del Pilar", "Apolinario Mabini", "Graciano Lopez Jaena", "Jose Rizal"], 
            answer: "Apolinario Mabini"
        },
        { 
            question: "Kailan bumalik si Rizal sa Pilipinas at ano ang kanyang itinatag?", 
            choices: ["1892, Liga Filipina", "1887, Katipunan", "1898, Kongreso ng Malolos"], 
            answer: "1892, Liga Filipina"
        },
        { 
            question: "Magkano ang buwanang butaw na kinakailangang ibigay ng bawat kasapi ng La Liga Filipina?", 
            choices: ["5 sentimos", "10 sentimos", "20 sentimos"], 
            answer: "10 sentimos"
        }
    ],
    jRizThree: [
        { 
            question: "Pag-aaral tungkol sa mga pamilya, kasaysayan ng pamilya at pagtukoy sa pinagmulan ng lahi.", 
            choices: ["Genealogy", "parentiology", "Lineology"], 
            answer: "Genealogy"
        },
        { 
            question: "Ano ang tawag sa mga Pilipinong hindi kabilang sa 'plaza complex'?", 
            choices: ["Ilustrados dahil sila ay edukado", "Tulisanes, insurrectos, remontados", "Indios dahil sila ay katutubo"], 
            answer: "Tulisanes, insurrectos, remontados"
        },
        { 
            question: "Kanino unang eksklusibong itinuring ang salitang 'Filipino' at sino ang nagpalawak ng kahulugan nito?", 
            choices: ["Sa lahat ng katutubo; Andres Bonifacio", "Sa mga Kastilang ipinanganak sa Pilipinas (Insulares); Jose Rizal sa pamamagitan ni Jose Burgos", "Sa mga mestizo; Mariano Gomez"], 
            answer: "Sa mga Kastilang ipinanganak sa Pilipinas (Insulares); Jose Rizal sa pamamagitan ni Jose Burgos"
        },
        { 
            question: "Paano tinawag ni Andres Bonifacio ang mga katutubong Pilipino, anuman ang kanilang grupong etnolinguwistiko, at bakit?", 
            choices: ["Filipino dahil sila ay naninirahan sa Pilipinas", "Katipunero dahil sila ay kasapi ng Katipunan", "Tagalog dahil sila ay bahagi ng Katagalugan o ang Kapuluan ng Pilipinas"], 
            answer: "Tagalog dahil sila ay bahagi ng Katagalugan o ang Kapuluan ng Pilipinas"
        },
        { 
            question: "Ano ang tawag ni Andres Bonifacio sa Kapuluan ng Pilipinas?", 
            choices: ["Las Islas Filipinas", "Katagalugan", "Pilipinas"], 
            answer: "Katagalugan"
        },
    ]
};

let selectedTopic = 'jRiz';
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
        let isCorrect = userAnswers[i] === q.answer;

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
