import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const NewChatbot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, sender: "bot", text: "Hi! I’m your portfolio assistant. Ask me anything about my skills, projects, or experience!", feedback: null }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 320, height: 450 });
  const chatWindowRef = useRef(null);
  const chatEndRef = useRef(null);

  // Scroll to bottom when new message appears
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Animate chat open/close
  useEffect(() => {
    if (!chatWindowRef.current) return;
    gsap.to(chatWindowRef.current, {
      height: isChatOpen ? `${windowSize.height}px` : "0px",
      opacity: isChatOpen ? 1 : 0,
      y: isChatOpen ? 0 : 50,
      duration: 0.6,
      ease: "power3.out",
    });
  }, [isChatOpen, windowSize.height]);

  // Animate new messages
  useEffect(() => {
    gsap.from(".message:last-child", {
      opacity: 0,
      y: 20,
      scale: 0.8,
      duration: 0.5,
      ease: "back.out(1.2)",
    });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { id: messages.length + 1, sender: "user", text: input, feedback: null };
    setMessages([...messages, userMessage]);
    setInput("");
    setIsLoading(true);

    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        sender: "bot",
        text: "Thanks for your question! I am here to help you explore my portfolio.",
        feedback: null,
      };
      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full shadow-lg flex items-center justify-center z-50 transform hover:scale-110 transition-transform duration-300 animate-bounce"
        aria-label={isChatOpen ? "Close chatbot" : "Open chatbot"}
        aria-expanded={isChatOpen}
      >
        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" />
        </svg>
      </button>

      {/* Chat Window */}
      <div
        ref={chatWindowRef}
        className="fixed bottom-20 right-4 md:right-6 bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col z-50 w-[90%] max-w-[360px] md:w-[320px] md:max-w-[400px]"
        style={{ height: `${windowSize.height}px` }}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-teal-600 to-teal-400 p-3 text-white flex justify-between items-center rounded-t-2xl">
          <span className="font-semibold text-sm md:text-base">Portfolio Assistant</span>
          <button 
            onClick={() => setIsChatOpen(false)} 
            className="hover:text-gray-200"
            aria-label="Close chat window"
          >
            ✕
          </button>
        </div>

        {/* Messages with animated water bubble background */}
        <div className="flex-1 overflow-y-auto p-3 bg-teal-50 relative">
          {/* Bubble background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(15)].map((_, i) => (
              <span
                key={i}
                className="absolute w-4 h-4 bg-white rounded-full opacity-20 animate-bubble"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${5 + Math.random() * 5}s`,
                }}
              />
            ))}
          </div>

          {/* Messages */}
          <div className="relative space-y-2 z-10">
            {messages.map(msg => (
              <div
                key={msg.id}
                className={`message max-w-[80%] px-3 py-2 rounded-xl text-sm break-words ${
                  msg.sender === "user" ? "ml-auto bg-teal-500 text-white shadow-md" : "mr-auto bg-white text-gray-900 shadow"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {isLoading && <div className="ml-2 text-gray-500 italic text-xs animate-pulse">Bot is typing...</div>}
            <div ref={chatEndRef} />
          </div>
        </div>

        {/* Input */}
        <div className="p-3 flex items-center bg-gray-100 rounded-b-2xl">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask me about my portfolio..."
            className="flex-1 p-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400 text-sm"
            aria-label="Chat input"
            maxLength={500}
          />
          <button
            onClick={handleSend}
            className="ml-2 bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-full text-sm"
            aria-label="Send message"
            disabled={!input.trim() || isLoading}
          >
            Send
          </button>
        </div>
      </div>

      {/* Tailwind CSS custom animation */}
      <style>{`
        @keyframes bubble {
          0% { transform: translateY(0) scale(1); opacity: 0.2; }
          50% { transform: translateY(-20px) scale(1.2); opacity: 0.4; }
          100% { transform: translateY(0) scale(1); opacity: 0.2; }
        }
        .animate-bubble { animation-name: bubble; animation-iteration-count: infinite; animation-timing-function: ease-in-out; }
      `}</style>
    </>
  );
};

export default NewChatbot;
