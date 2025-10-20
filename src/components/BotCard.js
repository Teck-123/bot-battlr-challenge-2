import React from 'react';

function BotCard({ bot, onClick, onDelete, showDelete }) {
  const handleDelete = (e) => {
    e.stopPropagation();
    onDelete(bot.id);
  };

  return (
    <div className="bot-card" onClick={() => onClick(bot)}>
      {showDelete && (
        <button className="delete-btn" onClick={handleDelete} title="Discharge Forever">
          ✕
        </button>
      )}
      <img 
        src={bot.avatar_url} 
        alt={bot.name}
        className="bot-card-image"
      />
      <h3>{bot.name}</h3>
      <span className={`bot-class ${bot.bot_class}`}>{bot.bot_class}</span>
      
      <div className="bot-stats">
        <div className="stat-row">
          <span className="stat-label">Health:</span>
          <span className="stat-value">{bot.health}</span>
        </div>
        <div className="stat-row">
          <span className="stat-label">Damage:</span>
          <span className="stat-value">{bot.damage}</span>
        </div>
        <div className="stat-row">
          <span className="stat-label">Armor:</span>
          <span className="stat-value">{bot.armor}</span>
        </div>
      </div>
      
      <p className="bot-catchphrase">{bot.catchphrase}</p>
    </div>
  );
}

export default BotCard;
