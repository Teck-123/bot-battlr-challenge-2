import React from 'react';

function SortBar({ sortBy, setSortBy, selectedClasses, setSelectedClasses }) {
  const botClasses = ["Support", "Medic", "Assault", "Defender", "Captain", "Witch"];

  const toggleClass = (botClass) => {
    if (selectedClasses.includes(botClass)) {
      setSelectedClasses(selectedClasses.filter(c => c !== botClass));
    } else {
      setSelectedClasses([...selectedClasses, botClass]);
    }
  };

  return (
    <div className="sort-bar">
      <div className="sort-section">
        <h3>Sort By:</h3>
        <div className="sort-buttons">
          <button 
            className={`sort-btn ${sortBy === 'health' ? 'active' : ''}`}
            onClick={() => setSortBy('health')}
          >
           Health
          </button>
          <button 
            className={`sort-btn ${sortBy === 'damage' ? 'active' : ''}`}
            onClick={() => setSortBy('damage')}
          >
            Damage
          </button>
          <button 
            className={`sort-btn ${sortBy === 'armor' ? 'active' : ''}`}
            onClick={() => setSortBy('armor')}
          >
            Armor
          </button>
          <button 
            className={`sort-btn ${sortBy === '' ? 'active' : ''}`}
            onClick={() => setSortBy('')}
          >
            Clear Sort
          </button>
        </div>
      </div>

      <div className="filter-section">
        <h3>Filter by Class:</h3>
        <div className="filter-buttons">
          {botClasses.map(botClass => (
            <button
              key={botClass}
              className={`filter-btn ${selectedClasses.includes(botClass) ? 'active' : ''}`}
              onClick={() => toggleClass(botClass)}
            >
              {botClass}
            </button>
          ))}
          {selectedClasses.length > 0 && (
            <button 
              className="filter-btn"
              onClick={() => setSelectedClasses([])}
            >
              Clear Filters
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default SortBar;