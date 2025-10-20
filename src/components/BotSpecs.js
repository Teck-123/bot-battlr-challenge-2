import React from 'react';

function BotSpecs({ bot, onBack, onEnlist }) {
  return (
    <div className="bot-specs">
      <div className="bot-specs-content">
        <img 
          src={bot.avatar_url} 
          alt={bot.name}
          className="bot-specs-image"
        />
        <h2>{bot.name}</h2>
        <span className={`bot-class ${bot.bot_class}`}>{bot.bot_class}</span>
        
        <div className="bot-specs-stats">
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
        
        <p className="bot-specs-catchphrase">"{bot.catchphrase}"</p>
        
        <div className="bot-specs-actions">
          <button className="btn btn-secondary" onClick={onBack}>
            ← Back to Collection
          </button>
          <button className="btn btn-primary" onClick={() => onEnlist(bot)}>
          Enlist Bot
          </button>
        </div>
      </div>
    </div>
  );
}

export default BotSpecs;