import { useState } from "react";
import "./ChatAssistant.css";

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hey! I'm your assistant. Ask me anything!" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    const botReply = { sender: "bot", text: getMockReply(input) };

    setMessages([...messages, userMessage, botReply]);
    setInput("");
  };

  const getMockReply = (msg) => {
    const msgLower = msg.toLowerCase();
    if (msgLower.includes("project")) return "You can view all my projects under the 'Projects' section!";
    if (msgLower.includes("contact")) return "You’ll find contact options in the Contact section.";
    if (msgLower.includes("download")) return "You can download my resume by clicking the green resume button.";
    return "I'm still learning! Try asking something else.";
  };

  return (
    <div className={`chat-assistant ${isOpen ? "open" : ""}`}>
      {isOpen ? (
        <div className="chat-box">
          <div className="chat-header">
            <strong>Assistant</strong>
            <button onClick={() => setIsOpen(false)}>✕</button>
          </div>
          <div className="chat-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend}>➤</button>
          </div>
        </div>
      ) : (
        <button className="chat-toggle" onClick={() => setIsOpen(true)}>
          💬
        </button>
      )}
    </div>
  );
};

export default ChatAssistant;
