import React, { useState, useEffect } from 'react';
import './App.css';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import BotSpecs from './components/BotSpecs';
import SortBar from './components/SortBar';

function App() {
  const [allBots, setAllBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const [sortBy, setSortBy] = useState('');
  const [selectedClasses, setSelectedClasses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then(response => response.json())
      .then(data => setAllBots(data))
      .catch(error => {});
  }, []);

  const handleBotClick = (bot) => {
    setSelectedBot(bot);
  };

  const handleBack = () => {
    setSelectedBot(null);
  };

  const handleEnlist = (bot) => {
    if (army.find(b => b.id === bot.id)) {
      alert('This bot is already in your army!');
      return;
    }
    // only one bot per class allowed
    const classExists = army.find(b => b.bot_class === bot.bot_class);
    if (classExists) {
      alert(`You already have a ${bot.bot_class} bot (${classExists.name}) in your army! Only one bot per class is allowed.`);
      return;
    }

    setArmy([...army, bot]);
    setSelectedBot(null);
  };

  const release = (bot) => {
    setArmy(army.filter(b => b.id !== bot.id));
  };

  const discharge = (botId) => {
    if (window.confirm('Are you sure you want to discharge this bot forever? This action cannot be undone!')) {
      fetch(`http://localhost:8001/bots/${botId}`, {
        method: 'DELETE',
      }).then(() => {
          // remove from everywhere
          setArmy(army.filter(bot => bot.id !== botId));
          setAllBots(allBots.filter(bot => bot.id !== botId));
        })
        .catch(error => {});
    }
  };

  const getAvailableBots = () => {
    return allBots.filter(bot => !army.find(armyBot => armyBot.id === bot.id));
  };

  const sortBots = (bots) => {
    if(!sortBy) return bots;
    return [...bots].sort((a, b) => b[sortBy] - a[sortBy]);
  };

  const filterBots = (bots) => {
    if (selectedClasses.length === 0) return bots;
    return bots.filter(bot => selectedClasses.includes(bot.bot_class));
  };

  const getDisplayBots = () => {
    const available = getAvailableBots();
    const filtered = filterBots(available);
    return sortBots(filtered);
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1> BOT BATTLR </h1>
        <p>Build Your Ultimate Bot Army!</p>
      </header>

      <YourBotArmy 
        bots={army} 
        onRelease={release}
        onDischarge={discharge}
      />

      {selectedBot ? (
        <BotSpecs 
          bot={selectedBot}
          onBack={handleBack}
          onEnlist={handleEnlist}
        />
      ) : (
        <>
          <SortBar 
            sortBy={sortBy}
            setSortBy={setSortBy}
            selectedClasses={selectedClasses}
            setSelectedClasses={setSelectedClasses}
          />
          
          <BotCollection 
            bots={getDisplayBots()}
            onBotClick={handleBotClick}
          />
        </>
      )}
    </div>
  );
}

export default App;