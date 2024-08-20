import React from 'react';
import Nav from './components/nav';
import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Chat from './components/Chat';

const style = {
  appContainer: `max-w-[628px] text-center mx-auto p-4 mt-3 rounded-lg `,
  sectionContainer:'flex flex-col w-[628px] min-h-screen bg-gray-100 mb-10',
};

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className={style.appContainer} id='app'>
      <section className={style.sectionContainer} id='app2'>
        <Nav />
        {user ? <Chat /> : null}
      </section>
    </div>
  );
}

export default App;
