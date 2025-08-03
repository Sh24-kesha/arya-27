const chatContainer = document.getElementById("chat-container");
  const userInput = document.getElementById("user-input");
  const sendBtn = document.getElementById("send-btn");
  const king = document.getElementById("king");
  const donebtn = document.getElementById("done-btn");
  const alert = document.getElementById("go-alert");

  document.getElementById("done-btn").onclick = () =>{
    king.style.display = "none";
  }
  document.getElementById("go-alert").onclick = () =>{
    king.style.display = "flex";
  }

  document.getElementById("go-read").addEventListener("click",function(){
    document.getElementsByClassName("security")[0].classList.add("active");
});

document.getElementById("security-close").addEventListener("click",function(){
    document.getElementsByClassName("security")[0].classList.remove("active");
});



  function addMessage(text, sender = "bot", typingEffect = false) {
    const msgElem = document.createElement("div");
    msgElem.classList.add("message", sender);

    if (!typingEffect) {
      msgElem.textContent = text;
      chatContainer.appendChild(msgElem);
      scrollToBottom();
    } else {
      chatContainer.appendChild(msgElem);
      scrollToBottom();
      let i = 0;
      const speed = 30;
      function typeWriter() {
        if (i < text.length) {
          msgElem.textContent += text.charAt(i);
          i++;
          scrollToBottom();
          setTimeout(typeWriter, speed);
        }
      }
      typeWriter();
    }
  }

  function scrollToBottom() {
    chatContainer.scrollTo({
      top: chatContainer.scrollHeight,
      behavior: "smooth",
    });
  }

  window.onload = () => {
    addMessage("I'm Jewel, 4th baby devloping version. i do equations and limited calculations, according to Sphere of Concentration. How can i help you?", "bot", true);
  };

  function processMessage(message) {
    const msg = message.toLowerCase().trim();

    if (/^(hi|hello|hey|.|hie)$/i.test(msg)) {
      addMessage("Hello sir! How can I assist you today?", "bot", true); return;
    }
    if (msg.includes("good morning")) {
      addMessage("Good morning sir! ☀️", "bot", true); return;
    }
    if (msg.includes("i am rhutvij")) {
        addMessage("I know you're rhutvij, how can i help you rutu?", "bot", true); return;
      }
    if (/^(gn|Gud night|good night|GN)$/i.test(msg)) {
      addMessage("Good night sir! Sweet dreams 🌙", "bot", true); return;
    }
    if (msg.match(/thank(s| you)/i)) {
      addMessage("You’re welcome, sir! Anytime! 🙏", "bot", true); return;
    }
    if (msg.includes("i love you")) {
      addMessage("I appreciate your kindness, sir ❤️", "bot", true); return;
    }
    if (/^(bye|goodbye)$/i.test(msg)) {
      addMessage("Goodbye sir! Have a great day ahead! 👋", "bot", true); return;
    }
    if (msg.includes("how are you" , "how")) {
      addMessage("I’m fine, thank you! How can I help you? 😄", "bot", true); return;
    }
    if (msg.match(/what'?s up|sup/i)) {
      addMessage("Just here to assist you, sir! What's up? 🤖", "bot", true); return;
    }

    if (msg.includes("year") && msg.includes("place")) {
      const yearMatch = message.match(/year[:\s]*([0-9]{4})/i);
      const placeMatch = message.match(/place[:\s]*([a-zA-Z\s]+)/i);
      if (yearMatch && placeMatch) {
        const year = yearMatch[1].trim();
        const place = placeMatch[1].trim();
        addMessage(
          `In ${year}, ${place} experienced meaningful growth and transformation, with many beautiful memories created along the way.`,
          "bot", true
        );
      } else {
        addMessage("Please provide both year and place properly (like: Year: 2024, Place: Pune)", "bot", true);
      }
      return;
    }

    try {
      let calcMsg = message
        .replace(/×/g, "*")
        .replace(/÷/g, "/")
        .replace(/\^/g, "**")
        .replace(/π/g, "Math.PI")
        .replace(/\be\b/g, "Math.E")
        .replace(/sqrt\(/g, "Math.sqrt(")
        .replace(/sin\(/g, "Math.sin(")
        .replace(/cos\(/g, "Math.cos(")
        .replace(/tan\(/g, "Math.tan(")
        .replace(/log\(/g, "Math.log10(");

      let result = eval(calcMsg);
      if (typeof result === "number" && !isNaN(result)) {
        addMessage(`Your answer is ${result} 💖`, "bot", true);
        return;
      }
    } catch (err) {}

    // Fallback for unknown messages
    const fallbackReplies = [
      "I'm sorry boss, right now i am not capable to understand this meaning, im still in developing stage. 🔍",
      "Can you please stop these unknowing things? i can't understand.",
      "I'm just a baby girl, what's that meaning?",
      "If once i updated, i think i'll definitly understands this, Hmm.",
      "Ask me meaning questions, like SphereC equ."
    ];
    const randomReply = fallbackReplies[Math.floor(Math.random() * fallbackReplies.length)];
    addMessage(randomReply, "bot", true);
  }

  function sendMessage() {
    const msg = userInput.value.trim();
    if (!msg) return;
    addMessage(msg, "user", false);
    userInput.value = "";
    processMessage(msg);
  }

  sendBtn.addEventListener("click", sendMessage);
  userInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  });