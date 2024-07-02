# tanjun-clicker-upgrade

Build me a Idle Clicker game with Upgrades, acention, Acention Upgrades and localization. There should also be room for a Premium currency. The premium currency should be buyable via a button. Skip the transaction fornow and just add the premium currency. 
The app should be in playin HTML and JS with a index.
The app should be called "IdleTanjun" and theme tanjun and his friends.
The Story is that Alex got lost and you have to help Tanjun to find him. In order to do that, you have to preserve trough some levels and kill bosses. In this process you unlock new Friends like: Tanjuwun, Eric, Arion, Flo, Wumpus and Claude. Each character should have a unique special ability and levels. 
The game should not be p2w and be easy to build on.

The app should embed the embedded discord SDK wich you can use like this:
import {DiscordSDK} from '@discord/embedded-app-sdk';
const discordSdk = new DiscordSDK(YOUR_OAUTH2_CLIENT_ID);

async function setup() {
  // Wait for READY payload from the discord client
  await discordSdk.ready();

  // Pop open the OAuth permission modal and request for access to scopes listed in scope array below
  const {code} = await discordSdk.commands.authorize({
    client_id: YOUR_OAUTH2_CLIENT_ID,
    response_type: 'code',
    state: '',
    prompt: 'none',
    scope: ['identify', 'applications.commands'],
  });

  // Retrieve an access_token from your application's server
  const response = await fetch('/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      code,
    }),
  });
  const {access_token} = await response.json();

  // Authenticate with Discord client (using the access_token)
  auth = await discordSdk.commands.authenticate({
    access_token,
  });
}

and it should also implement some multiplayer functionality.

also create good looking art assets for the app.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React with shadcn-ui and Tailwind CSS.

- Vite
- React
- shadcn-ui
- Tailwind CSS

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/tanjun-clicker-upgrade.git
cd tanjun-clicker-upgrade
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
