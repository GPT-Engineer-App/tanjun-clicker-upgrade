let points = 0;
let premiumCurrency = 0;
let upgradeCost = 10;
let ascensionCost = 100;
let characters = {
    tanjuwun: { level: 1 },
    eric: { level: 1 },
    arion: { level: 1 },
    flo: { level: 1 },
    wumpus: { level: 1 },
    claude: { level: 1 }
};

document.getElementById('clicker-btn').addEventListener('click', () => {
    points++;
    updateUI();
});

document.getElementById('upgrade-btn').addEventListener('click', () => {
    if (points >= upgradeCost) {
        points -= upgradeCost;
        upgradeCost *= 2;
        updateUI();
    }
});

document.getElementById('ascend-btn').addEventListener('click', () => {
    if (points >= ascensionCost) {
        points -= ascensionCost;
        ascensionCost *= 2;
        updateUI();
    }
});

document.getElementById('premium-currency-btn').addEventListener('click', () => {
    premiumCurrency++;
    updateUI();
});

function updateUI() {
    document.getElementById('points').innerText = `Points: ${points}`;
    document.getElementById('premium-currency').innerText = `Premium Currency: ${premiumCurrency}`;
    document.getElementById('upgrade-btn').innerText = `Upgrade (Cost: ${upgradeCost} points)`;
    document.getElementById('ascend-btn').innerText = `Ascend (Cost: ${ascensionCost} points)`;
    document.getElementById('tanjuwun-level').innerText = `Level ${characters.tanjuwun.level}`;
    document.getElementById('eric-level').innerText = `Level ${characters.eric.level}`;
    document.getElementById('arion-level').innerText = `Level ${characters.arion.level}`;
    document.getElementById('flo-level').innerText = `Level ${characters.flo.level}`;
    document.getElementById('wumpus-level').innerText = `Level ${characters.wumpus.level}`;
    document.getElementById('claude-level').innerText = `Level ${characters.claude.level}`;
}

// Discord SDK Integration
import { DiscordSDK } from '@discord/embedded-app-sdk';
const discordSdk = new DiscordSDK('YOUR_OAUTH2_CLIENT_ID');

async function setup() {
    await discordSdk.ready();
    const { code } = await discordSdk.commands.authorize({
        client_id: 'YOUR_OAUTH2_CLIENT_ID',
        response_type: 'code',
        state: '',
        prompt: 'none',
        scope: ['identify', 'applications.commands'],
    });

    const response = await fetch('/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
    });
    const { access_token } = await response.json();

    await discordSdk.commands.authenticate({ access_token });
}

setup();