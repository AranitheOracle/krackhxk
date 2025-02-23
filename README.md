# AquaFi - Blockchain-Based Event Ticketing Platform

AquaFi is a decentralized NFT ticketing platform built on the Aptos blockchain that revolutionizes event ticketing through blockchain technology and NFTs.

## Features

### User Interface
- *Modern Design*
  - Clean, intuitive interface with a dark theme
  - Responsive design that works on mobile and desktop
  - Animated transitions and hover effects using Framer Motion
  - Glassmorphism-inspired UI elements

- *Navigation*
  - Expandable side navigation
  - Top navigation bar with wallet connection
  - Quick access to Events, Resale Marketplace, and My Tickets

- *Event Discovery*
  - Advanced search functionality
  - Date-based filtering
  - Venue-based filtering
  - Real-time seat availability tracking

- *Ticket Management*
  - Digital QR code generation for each ticket
  - Ticket viewing in "My Tickets" section
  - Integrated wallet connectivity via Petra Wallet
  - Real-time transaction status updates

### Smart Contract Features (nftTicket.move)

1. *Venue Management*
   - Create and manage venue profiles
   - Set maximum ticket capacity
   - Customizable venue metadata

2. *Primary Market*
   - Mint NFT tickets with unique properties
   - Set original ticket prices
   - Configure maximum resale percentages
   - Define royalty structures

3. *Secondary Market*
   - P2P ticket resale functionality
   - Price caps to prevent scalping
   - Automated royalty distribution
   - Secure ticket transfers

4. *Security Features*
   - Immutable ticket metadata
   - Verifiable ownership on blockchain
   - Protected venue management functions
   - Secure payment processing

## Technical Stack

- *Frontend*: Next.js, TypeScript, Tailwind CSS, Framer Motion
- *Blockchain*: Aptos Network
- *Smart Contracts*: Move Language
- *Wallet Integration*: Petra Wallet

## Getting Started

### Prerequisites
bash
# Install Node.js (v16 or higher)
# Install Aptos CLI
# Install Move Compiler


### Installation

1. Clone the repository
bash
git clone https://github.com/Crypt0-X2/krackhxk
cd krackhxk


2. Install dependencies
bash
cd frontend/my-next-app
npm install


3. Configure environment variables
bash
cp .env.example .env.local
# Edit .env.local with your settings


4. Deploy the smart contract
bash
cd contract
aptos move publish


5. Start the development server
bash
cd frontend/my-next-app
npm run dev


## Contract Deployment

1. Update the contract address in nftUtils.ts:
typescript
export const CONTRACT_ADDRESS = "YOUR_DEPLOYED_CONTRACT_ADDRESS";


2. Compile and deploy the contract:
bash
aptos move compile
aptos move publish


## Architecture

### Frontend Architecture
- Pages-based routing with Next.js
- Global state management with Zustand
- Wallet connection context provider
- Reusable components for tickets and events

### Smart Contract Architecture
- Modular design with separate concerns
- Event management module
- Ticket lifecycle handling
- Secondary market functionality
- Access control and security

## Project Structure
```
krackhxk/
├── frontend/
│   └── my-next-app/
│       ├── public/
│       │   ├── images/
│       │   │   ├── event1.jpg
│       │   │   └── aquaFiCard.png
│       └── src/
│           ├── app/
│           │   ├── eventList/
│           │   │   └── page.tsx
│           │   ├── mytickets/
│           │   │   └── page.tsx
│           │   ├── layout.tsx
│           │   ├── page.tsx
│           │   └── WalletProvider.tsx
│           ├── components/
│           │   └── TicketCard.tsx
│           ├── store/
│           │   └── eventStore.ts
│           └── utils/
│               └── nftUtils.ts
├── backend/
│   ├── routes/
│   │   └── tickets.ts
│   ├── models/
│   │   ├── Event.ts
│   │   └── Ticket.ts
│   └── utils/
│       ├── aptos.ts
│       └── qrCode.ts
└── contract/
    └── sources/
        └── nftTicket.move
```


### Directory Structure Explanation

- frontend/: Next.js application
  - public/: Static assets
  - src/app/: Next.js 13+ app directory
  - src/components/: Reusable React components
  - src/store/: State management
  - src/utils/: Utility functions

- backend/: Express.js server
  - routes/: API endpoints
  - models/: Database models
  - utils/: Helper functions

- contract/: Aptos Move smart contracts
  - sources/: Move modules

## Security Considerations

1. *Smart Contract Security*
   - Input validation
   - Access control checks
   - Price manipulation prevention
   - Secure fund handling

2. *Frontend Security*
   - Wallet connection validation
   - Transaction verification
   - Error handling
   - Data validation

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Aptos Team for blockchain infrastructure
- Next.js team for the frontend framework
- Community contributors and testers
