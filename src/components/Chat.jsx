import React, {useState, useEffect, useRef} from 'react'
import Messages from './Messages';
import {db} from '../firebase';
import {query, collection,orderBy,onSnapshot } from 'firebase/firestore';
import SendMessage from './SendMessage';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const scroll = useRef();
    
    useEffect(() => {
        const q= query(collection(db, 'messages'), orderBy('timestamp'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let messages = [];
            querySnapshot.forEach((doc) => {
                messages.push({...doc.data(), id: doc.id});
            })
            setMessages(messages)
        })
        return () => unsubscribe();
    },[])
  return (
    <>
    <main className='main'>
        {messages && messages.map((message) => (
            <Messages key={message.id} message={message}/>
        ))}
    </main>
    {/* send Message Component*/}
    <SendMessage scroll={scroll}/>
    <span ref={scroll}></span>
    </>
  )
}

export default Chat