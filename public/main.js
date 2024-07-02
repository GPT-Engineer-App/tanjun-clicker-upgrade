let points = 0;
let premiumCurrency = 0;
let upgradeCost = 10;
let ascensionCost = 100;
let ascensionPoints = 0;
let characters = {
    tanjuwun: { level: 1, ability: "Double Points", abilityActive: false },
    eric: { level: 1, ability: "Auto Click", abilityActive: false },
    arion: { level: 1, ability: "Triple Points", abilityActive: false },
    flo: { level: 1, ability: "Double Premium Currency", abilityActive: false },
    wumpus: { level: 1, ability: "Reduce Upgrade Cost", abilityActive: false },
    claude: { level: 1, ability: "Increase Points Gain", abilityActive: false }
};

document.getElementById('clicker-btn').addEventListener('click', () => {
    points += calculatePoints();
    updateUI();
});

document.getElementById('upgrade-btn').addEventListener('click', () => {
    if (points >= upgradeCost) {
        points -= upgradeCost;
        upgradeCost *= 2;
        upgradeCharacters();
        updateUI();
    }
});

document.getElementById('ascend-btn').addEventListener('click', () => {
    if (points >= ascensionCost) {
        points -= ascensionCost;
        ascensionPoints++;
        ascensionCost *= 2;
        ascendCharacters();
        updateUI();
    }
});

document.getElementById('premium-currency-btn').addEventListener('click', () => {
    premiumCurrency++;
    updateUI();
});

function calculatePoints() {
    let totalPoints = 1;
    if (characters.tanjuwun.abilityActive) totalPoints *= 2;
    if (characters.arion.abilityActive) totalPoints *= 3;
    if (characters.claude.abilityActive) totalPoints += 5;
    return totalPoints;
}

function upgradeCharacters() {
    for (let char in characters) {
        characters[char].level++;
    }
}

function ascendCharacters() {
    for (let char in characters) {
        characters[char].level = 1;
    }
    // Apply permanent boosts or ascension upgrades here
}

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