import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Welcome to IdleTanjun</h1>
      <p className="text-lg mb-8">Help Tanjun find Alex by progressing through levels and defeating bosses.</p>
      <div className="space-x-4">
        <Link to="/game">
          <Button variant="primary">Start Playing</Button>
        </Link>
        <Link to="/settings">
          <Button variant="secondary">Settings</Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;