import React, { useState } from 'react';
import { auth, db } from '../firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import './nav.css';

const SendMessage = ({ scroll }) => {
  const [input, setInput] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();
    if (input.trim() === '') {
      alert('Please enter a message');
      return;
    }

    const { uid, displayName } = auth.currentUser;
    await addDoc(collection(db, 'messages'), {
      text: input,
      name: displayName,
      uid,
      timestamp: serverTimestamp(),
    });

    setInput('');
    if (scroll.current) {
      scroll.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <form onSubmit={sendMessage} className="form" style={{ position: 'fixed',borderRadius: '10px', bottom: 0, zIndex: 1000 }}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="me"
        type="text"
        placeholder="Type a message"
      />
      <button id="b2" type="submit">
        Send
      </button>
    </form>
  );
};

export default SendMessage;
