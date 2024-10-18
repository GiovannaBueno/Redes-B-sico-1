const questions = [
    {
        question: "O que significa a sigla 'IP'?",
        options: ["Internet Protocol", "Internal Protocol", "Interface Protocol", "Integrated Protocol"],
        answer: 0
    },
    {
        question: "Qual é a função de um roteador?",
        options: ["Proteger a rede contra vírus", "Conectar diferentes redes", "Armazenar dados", "Aumentar a velocidade da internet"],
        answer: 1
    },
    {
        question: "Qual é o protocolo padrão para redes sem fio?",
        options: ["FTP", "HTTP", "802.11", "TCP"],
        answer: 2
    },
    {
        question: "O que é uma rede LAN?",
        options: ["Rede de longa distância", "Rede local", "Rede de área metropolitana", "Rede de área ampla"],
        answer: 1
    },
    {
        question: "Qual é a principal função de um switch em uma rede?",
        options: ["Aumentar a velocidade da conexão", "Conectar dispositivos dentro da mesma rede", "Gerenciar endereços IP", "Proteger a rede contra ataques"],
        answer: 1
    },
    {
        question: "O que significa 'DNS'?",
        options: ["Domain Name System", "Digital Network System", "Data Network Service", "Domain Network Service"],
        answer: 0
    },
    {
        question: "Qual das opções é um endereço IP válido?",
        options: ["192.168.1.300", "256.100.50.25", "172.16.0.1", "10.0.0.999"],
        answer: 2
    },
    {
        question: "Qual é a função do DHCP em uma rede?",
        options: ["Atribuir endereços IP automaticamente", "Gerenciar a segurança da rede", "Monitorar o tráfego de dados", "Armazenar arquivos compartilhados"],
        answer: 0
    },
    {
        question: "O que é uma VPN?",
        options: ["Virtual Private Network", "Virtual Public Network", "Variable Protocol Network", "Validated Private Network"],
        answer: 0
    },
    {
        question: "Qual protocolo é utilizado para enviar e-mails?",
        options: ["FTP", "SMTP", "POP3", "HTTP"],
        answer: 1
    },
    {
        question: "O que é NAT?",
        options: ["Network Address Translation", "Network Access Technology", "Network Application Transfer", "Network Analysis Tool"],
        answer: 0
    },
    {
        question: "Qual é a diferença entre TCP e UDP?",
        options: ["TCP é mais rápido que UDP", "UDP é orientado a conexão, enquanto TCP não é", "TCP é orientado a conexão, enquanto UDP não é", "Ambos são idênticos"],
        answer: 2
    },
    {
        question: "O que significa a sigla 'WAN'?",
        options: ["Wide Area Network", "Wireless Area Network", "Wide Application Network", "Wired Access Network"],
        answer: 0
    },
    {
        question: "O que é um 'firewall'?",
        options: ["Software que acelera a conexão à internet", "Sistema de segurança que controla o tráfego de rede", "Hardware para armazenamento de dados", "Ferramenta de programação"],
        answer: 1
    },
    {
        question: "Qual dispositivo é usado para ampliar o alcance de uma rede sem fio?",
        options: ["Roteador", "Modem", "Repetidor", "Switch"],
        answer: 2
    },
    {
        question: "O que é 'latência' em uma rede?",
        options: ["A quantidade de dados que podem ser transmitidos", "O tempo que um pacote leva para viajar de um ponto a outro", "A velocidade máxima de transferência de dados", "A segurança da rede"],
        answer: 1
    },
    {
        question: "O que é um endereço MAC?",
        options: ["Endereço de um computador na internet", "Endereço físico de um dispositivo em uma rede local", "Endereço de um servidor", "Endereço de um protocolo"],
        answer: 1
    },
    {
        question: "Qual protocolo é usado para transferir arquivos?",
        options: ["SMTP", "FTP", "HTTP", "IMAP"],
        answer: 1
    },
    {
        question: "O que é um 'subnet mask'?",
        options: ["Um endereço de e-mail", "Um endereço IP estático", "Uma máscara que define o tamanho de uma sub-rede", "Um tipo de firewall"],
        answer: 2
    },
    {
        question: "Qual dos seguintes é um exemplo de ataque de rede?",
        options: ["Phishing", "Backup", "Upload", "Download"],
        answer: 0
    },
    {
        question: "O que é um 'proxy server'?",
        options: ["Um tipo de roteador", "Um servidor que atua como intermediário entre um cliente e outro servidor", "Um dispositivo de armazenamento", "Um tipo de firewall"],
        answer: 1
    },
    {
        question: "Qual é a velocidade máxima de uma conexão Ethernet padrão?",
        options: ["10 Mbps", "100 Mbps", "1 Gbps", "10 Gbps"],
        answer: 2
    },
    {
        question: "Qual é a função do protocolo ICMP?",
        options: ["Transferir dados entre servidores", "Monitorar e controlar erros na transmissão de dados", "Gerenciar endereços IP", "Enviar e-mails"],
        answer: 1
    },
    {
        question: "Qual é a principal diferença entre TCP e IP?",
        options: ["TCP é um protocolo de transporte, enquanto IP é um protocolo de rede", "TCP é um protocolo de rede, enquanto IP é um protocolo de transporte", "Ambos são protocolos de transporte", "Ambos são protocolos de rede"],
        answer: 0
    },
    {
        question: "Qual é a função de um modem em uma rede?",
        options: ["Proteger a rede", "Converter sinais digitais em analógicos e vice-versa", "Aumentar a largura de banda", "Armazenar dados"],
        answer: 1
    },
    {
        question: "O que é 'QoS' em redes?",
        options: ["Quality of Service", "Quantity of Service", "Quick Operating System", "Quality Operating System"],
        answer: 0
    },
    {
        question: "Qual é a função de um 'access point'?",
        options: ["Aumentar a segurança da rede", "Fornecer conectividade sem fio a dispositivos", "Armazenar arquivos", "Gerenciar endereços IP"],
        answer: 1
    },
    {
        question: "Qual é a diferença entre um 'hub' e um 'switch'?",
        options: ["Um hub é mais inteligente que um switch", "Um switch pode enviar dados apenas para o dispositivo correto, enquanto um hub envia para todos", "Um hub é usado para redes sem fio, enquanto um switch é usado para redes com fio", "Não há diferença"],
        answer: 1
    },
    {
        question: "O que significa a sigla 'VoIP'?",
        options: ["Voice over Internet Protocol", "Video over Internet Protocol", "Voice on Internet Protocol", "Voice over Integrated Protocol"],
        answer: 0
    },
    {
        question: "Qual é o propósito de um 'load balancer'?",
        options: ["Aumentar a segurança da rede", "Distribuir a carga de trabalho entre vários servidores", "Armazenar dados em cache", "Aumentar a velocidade da conexão"],
        answer: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;

function showQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const nextBtn = document.getElementById("nextBtn");
    const feedbackElement = document.getElementById("feedback");

    // Exibir a pergunta
    questionElement.textContent = questions[currentQuestionIndex].question;
    optionsElement.innerHTML = '';

    // Exibir as opções de resposta
    questions[currentQuestionIndex].options.forEach((option, index) => {
        const optionElement = document.createElement("div");
        optionElement.textContent = option;
        optionElement.className = "option";
        optionElement.onclick = () => selectOption(index);
        optionsElement.appendChild(optionElement);
    });

    // Ocultar botão de próxima pergunta até a resposta ser dada
    nextBtn.classList.add("hidden");
    feedbackElement.textContent = '';
}

function selectOption(index) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    const feedbackElement = document.getElementById("feedback");
    const nextBtn = document.getElementById("nextBtn");

    // Verificar se a resposta está correta
    if (index === correctAnswer) {
        feedbackElement.textContent = "Correto!";
        score++;
    } else {
        feedbackElement.textContent = "Incorreto! A resposta correta é: " + questions[currentQuestionIndex].options[correctAnswer];
    }

    // Mostrar botão de próxima pergunta
    nextBtn.classList.remove("hidden");
}

function showResults() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const nextBtn = document.getElementById("nextBtn");
    const feedbackElement = document.getElementById("feedback");

    questionElement.textContent = "Fim do quiz! Você acertou " + score + " de " + questions.length + " perguntas.";
    optionsElement.innerHTML = '';
    nextBtn.classList.add("hidden");
    feedbackElement.textContent = '';
}

function nextQuestion() {
    currentQuestionIndex++;

    // Verificar se ainda há perguntas
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    showQuestion();
    document.getElementById("nextBtn").onclick = nextQuestion;

    // Avançar com a tecla Enter
    document.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            nextQuestion();
        }
    });
});
