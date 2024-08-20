import React from "react";
import { auth } from "../firebase";
import { db } from '../firebase';
import { doc, deleteDoc } from 'firebase/firestore';

const style = {
  m: {
    display: "InlineBlock",
    overflow: "hidden",
    scrollTop: "auto",
  },
  message: {
    display: "flex",
    alignItems: "center",
    boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.25)",
    margin: "18px 0.75rem",
    padding: "0.5rem 0.75rem",
    borderTopLeftRadius: "9999px",
    borderTopRightRadius: "9999px",
    overflow: "hidden",
  },
  name: {
    position: "absolute",
    marginTop: "-4rem",
    color: "#7d7d7d",
    fontSize: "10px",
  },
  sent: {
    backgroundColor: "#395dff",
    color: "#fff",
    flexDirection: "row-reverse",
    textAlign: "end",
    float: "right",
    borderBottomLeftRadius: "9999px",
  },
  received: {
    backgroundColor: "#e5e5ea",
    color: "#000",
    float: "left",
    borderBottomRightRadius: "9999px",
  },
  del: {
    backgroundColor: "red",
    color: "white",
    marginRight: "30px",
    float: "right",
    borderRadius: "9px",
    border: "none",
    padding: "2px 3px",
    cursor: "pointer",
  }
};

const Messages = ({ message }) => {
  const handleDelete = async () => {
    try {
      // Delete the message from the Firestore database
      await deleteDoc(doc(db, 'messages', message.id));
      // You may also want to update the state or perform other actions after deletion
    } catch (error) {
      console.error('Error deleting message:', error);
    }
  };


  
  const messageClass =
    message.uid === auth.currentUser.uid ? style.sent : style.received;

  return (
    <div>
    <div style={style.m}>
      <div style={{ ...style.message, ...messageClass }}>
        <p style={style.name}>{message.name}</p>
        <p>{message.text}</p>
        {messageClass === style.sent && (
          <button style={style.del} onClick={handleDelete}>
            Delete
          </button>
        )}
      </div>
    </div>
  </div>
  );
};

export default Messages;

