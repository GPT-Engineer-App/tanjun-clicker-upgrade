import React, { useEffect } from 'react';

const Game = () => {
  useEffect(() => {
    // Initialize the Discord SDK
    if (window.Discord) {
      const clientId = 'YOUR_DISCORD_CLIENT_ID';
      const scopes = ['identify', 'rpc', 'messages.read'];
      const rpc = new window.Discord.Client({ transport: 'websocket' });

      rpc.on('ready', () => {
        console.log('Discord SDK initialized successfully');
      });

      rpc.login({ clientId, scopes }).catch((error) => {
        console.error('Failed to initialize Discord SDK', error);
      });
    } else {
      console.error('Discord SDK script not loaded');
    }
  }, []);

  return (
    <div className="text-center">
      <h1 className="text-3xl">Game Page</h1>
      <p>Game content goes here...</p>
    </div>
  );
};

export default Game;