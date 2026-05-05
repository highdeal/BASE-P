# 🔵 Base Hardhat Project

Smart contract project for the [Base](https://base.org) blockchain.

## Setup
\`\`\`bash
npm install
cp .env.example .env  # fill in your keys
\`\`\`

## Commands
\`\`\`bash
npx hardhat compile                                        # compile
npx hardhat test                                           # run tests
npx hardhat run scripts/deploy.js --network baseSepolia   # deploy to testnet
npx hardhat run scripts/deploy.js --network base          # deploy to mainnet
\`\`\`

## Networks
| Network | Chain ID |
|---|---|
| Base Mainnet | 8453 |
| Base Sepolia | 84532 |
