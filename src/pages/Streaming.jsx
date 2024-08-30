import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { auth } from '../firebase';
import './Streaming.css';

const Streaming = () => {
  const user = auth.currentUser;
  const [messages, setMessages] = useState([
    { user: "Draneb", text: "Can't wait for this stream!", color: "#9147ff" },
    { user: "Alice", text: "This is awesome!", color: "#ff5722" },
    { user: "Bob", text: "I love the music!", color: "#4caf50" },
    { user: "Charlie", text: "Great stream!", color: "#2196f3" },
    { user: "Daisy", text: "Can’t wait for the next song!", color: "#ffeb3b" },
    { user: "Evan", text: "This is my favorite track!", color: "#9c27b0" },
    { user: "Fiona", text: "Is this live?", color: "#673ab7" },
    { user: "George", text: "Absolutely amazing!", color: "#3f51b5" },
    { user: "Hannah", text: "Loving the vibes!", color: "#cddc39" },
    { user: "Isaac", text: "What a show!", color: "#ff9800" },
  ]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      setMessages([...messages, { user: user.email, text: input, color }]);
      setInput(''); // Clear input after sending
    }
  };

  return (
    <div className="streaming-page">
      <h2>Now Streaming</h2>
      <div className="streaming-container">
        <div className="video-player">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=SPTEgMRQ4M0&list=RDSPTEgMRQ4M0&start_radio=1"
            controls
            width="100%"
            height="100%"
          />
        </div>
        <div className="chatbox">
          <div className="chatbox-header">
            <h3>Live Chat</h3>
          </div>
          <div className="chatbox-content">
            {messages.map((message, index) => (
              <div key={index} className="chat-message">
                <strong style={{ color: message.color }}>{message.user}:</strong> {message.text}
              </div>
            ))}
          </div>
          <div className="chatbox-input">
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') handleSendMessage();
              }}
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Streaming;
