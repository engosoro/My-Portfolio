import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  // Fade-in sections
  useEffect(() => {
    const fadeIns = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    fadeIns.forEach((el) => observer.observe(el));
    return () => fadeIns.forEach((el) => observer.unobserve(el));
  }, []);

  // Scroll-to-top
  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
  };

  const sendMessage = () => {
    if (input.trim() === "") return;

    const newUserMessage = { from: "user", text: input };
    setMessages((prev) => [...prev, newUserMessage]);

    // Simulate bot reply
    setTimeout(() => {
      const botReply = { from: "bot", text: "Thanks for your message! 😊" };
      setMessages((prev) => [...prev, botReply]);
    }, 800);

    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <>
    {/* Theme Toggle */}
    <button className="toggle-theme-icon" onClick={toggleTheme}>
          {darkMode ? "🌞" : "🌙"}
        </button>
        <br />
      <Navbar />

      <main>
        

        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <Footer />

      {/* Scroll-To-Top */}
      {showTopBtn && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="scroll-to-top"
        >
          ↑
        </button>
      )}

      {/* Floating Assistant */}
      <div className="chat-container">
        <button
          className="chat-toggle"
          onClick={() => setShowChat((prev) => !prev)}
        >
          💬
        </button>

        {showChat && (
          <div className="chat-box">
            <div className="chat-messages">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`chat-message ${msg.from === "user" ? "user" : "bot"}`}
                >
                  {msg.text}
                </div>
              ))}
            </div>
            <div className="chat-input">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Type a message..."
              />
              <button onClick={sendMessage}>Send</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
