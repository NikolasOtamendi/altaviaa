import React, { useState, useEffect } from "react";
import { auth, db } from "./firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { ref, onValue, push } from "firebase/database";

function App() {
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMsg, setNewMsg] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged(setUser);
    const messagesRef = ref(db, "messages");
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val() || {};
      setMessages(Object.values(data));
    });
  }, []);

  const login = () => {
    signInWithPopup(auth, new GoogleAuthProvider());
  };

  const sendMsg = () => {
    if (newMsg.trim()) {
      push(ref(db, "messages"), {
        text: newMsg,
        user: user.displayName,
        uid: user.uid,
        photo: user.photoURL,
        time: Date.now(),
      });
      setNewMsg("");
    }
  };

  if (!user) return <button onClick={login}>Entrar com Google</button>;

  return (
    <div>
      <h1>Discord Clone</h1>
      <div>
        {messages.map((msg, i) => (
          <div key={i}>
            <img src={msg.photo} width={32} alt="avatar" />
            <b>{msg.user}</b>: {msg.text}
          </div>
        ))}
      </div>
      <input
        value={newMsg}
        onChange={e => setNewMsg(e.target.value)}
        placeholder="Mensagem"
      />
      <button onClick={sendMsg}>Enviar</button>
    </div>
  );
}

export default App;
