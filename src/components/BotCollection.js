import React from 'react';
import BotCard from './BotCard';

function BotCollection({ bots, onBotClick }) {
  return (
    <div className="bot-collection">
      <h2>Available Bots</h2>
      {bots.length === 0 ? (
        <div className="empty-army">
          <p>No bots available. All bots have been enlisted</p>
        </div>
      ) : (
        <div className="bot-grid">
          {bots.map(bot => (
            <BotCard
              key={bot.id}
              bot={bot}
              onClick={onBotClick}
              showDelete={false}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default BotCollection;