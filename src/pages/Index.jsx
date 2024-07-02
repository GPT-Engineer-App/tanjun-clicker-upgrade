import React, { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    // Initialize the Discord SDK
    if (window.initializeDiscordSDK) {
      window.initializeDiscordSDK({
        clientId: 'YOUR_DISCORD_CLIENT_ID',
        // Add other necessary configuration options here
      }).then(() => {
        console.log('Discord SDK initialized successfully');
      }).catch((error) => {
        console.error('Failed to initialize Discord SDK', error);
      });
    } else {
      console.error('Discord SDK script not loaded');
    }
  }, []);

  return (
    <div className="text-center">
      <h1 className="text-3xl">Welcome to IdleTanjun</h1>
      <p>Help Tanjun find Alex by progressing through levels and defeating bosses.</p>
      <a href="/public/index.html" className="text-blue-500">Start Playing</a>
    </div>
  );
};

export default Index;