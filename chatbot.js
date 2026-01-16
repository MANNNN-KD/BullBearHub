document.body.innerHTML += `
<div id="chatIcon">💬</div>
<div id="chatWindow">
    <div id="chatHeader">BullBear AI</div>
    <div id="chatMessages"></div>
    <input id="chatInput" placeholder="Ask anything..." />
</div>
`;

document.getElementById("chatIcon").onclick = () => {
    document.getElementById("chatWindow").classList.toggle("open");
};

document.getElementById("chatInput").addEventListener("keypress", function(e) {
    if (e.key === "Enter") sendMessage();
});

function sendMessage() {
    let msg = chatInput.value;
    if (!msg) return;

    chatMessages.innerHTML += `<div class='userMsg'>${msg}</div>`;
    chatInput.value = "";

    setTimeout(() => {
        chatMessages.innerHTML += `<div class='botMsg'>AI Response Coming Soon...</div>`;
    }, 500);
}
