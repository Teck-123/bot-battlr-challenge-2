import React from 'react';
import BotCard from './BotCard';

function YourBotArmy({ bots, onRelease, onDischarge }) {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      {bots.length === 0 ? (
        <div className="empty-army">
          <p>Your army is empty. Enlist some bots to get started</p>
        </div>
      ) : (
        <div className="army-grid">
          {bots.map(bot => (
            <BotCard
              key={bot.id}
              bot={bot}
              onClick={onRelease}
              onDelete={onDischarge}
              showDelete={true}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default YourBotArmy;