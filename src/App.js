import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Header from "./components/desktop/header/Header";
import Aside from "./components/desktop/aside/Aside";
import Statistics from "./pages/desktop/statistics/Statistics";
import Results from "./pages/desktop/results/Results";
import Player from "./pages/desktop/player/Player";

function App() {
  const [playerList, setPlayerList] = useState([]);

  // fetch data
  async function getPlayerList() {
      try {
          const response = await fetch('http://195.189.226.59:5500/getUsers');
          if (!response.ok) {
              throw new Error('Failed to fetch data');
          }
          const data = await response.json();
          setPlayerList(data); 
      } catch (error) {
          console.error("Ошибка: " + error);
      }
  }
  useEffect(() => {
      getPlayerList();
  }, []);

  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app__main">
            <Aside />

            <Routes>
              <Route path="/" element={<Results />} />
              <Route path="/statistics" element={<Statistics playerList={playerList}/>} />
              <Route path="/player/:id" element={<Player playerList={playerList}/>} />
            </Routes>

        </div>
      </div>
    </Router>
  );
}

export default App;
