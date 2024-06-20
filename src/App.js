import logo from './logo.jpg';
import Navbar from './components/navbar';
import HomeContainer from './components/HomeContainer';
import Footer from './components/Footer';
import { useState } from 'react';


function App() {
  const [entries, setEntries] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const addEntry = () => {
    setEntries([...entries, { title, content }]);
    setTitle('');
    setContent('');
  };
  return (
    <>
      <Navbar>
        <div className="logo">
        <img src="./logo.jpg" alt="Logo" />
        </div>
      </Navbar>
      <HomeContainer>

      </HomeContainer>
      <Footer>

      </Footer>
    </>
  );
}

export default App;
