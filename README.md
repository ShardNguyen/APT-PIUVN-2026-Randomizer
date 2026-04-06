# Pump It Up Asia Pacific Tournament - Tournament Randomizer Controller

A real-time randomizer controller for **Pump It Up Asia Pacific Tournament**, based on [https://github.com/hidr0c/VHMaimai-Championship-Controller](**Soralia Studio**'s project for Van Hanh Maimai Championship). This system provides a comprehensive solution for randomizing songs and simulating PIU APT's song picking process.
## Overview

This application is modified to consist two main pages designed for tournament broadcasting:

- **Controller Page** (`/controller`) - Main control panel for tournament operators
- **Random Display** (`/`) - Song randomization display with animated reveal

## Features

- Real-time song randomization with animated overlay reveal
- Ban/Pick phase management
- Multiple song pool support for different tournament rounds
- Live synchronization between controller and display pages via WebSocket
- Stream-ready transparent overlays for OBS integration

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000/controller](http://localhost:3000/controller) to access the control panel

### Available Pages

| Page | URL | Description |
|------|-----|-------------|
| Controller | `/controller` | Main control panel |
| Random Display | `/` | Song randomization overlay |

## Usage

1. Open the [http://localhost:3000/controller](Controller page) to manage the tournament
2. Select the appropriate song pool for the current round
3. Configure random count, pick count, and ban count
4. Press **Start** to randomize songs (overlay will cover results)
5. Press **Show song** to reveal results with diagonal wipe animation
6. Use Ban/Pick controls to manage song selection
7. Navigate to Match Display for the final song lineup

## Technology Stack

- Next.js 14 (React Framework)
- TypeScript
- Socket.IO (Real-time Communication)
- Tailwind CSS

## Links

### Official Pages

- Van Hanh Maimai Championship Facebook Page: [Facebook Page](https://www.facebook.com/profile.php?id=61579710413403)
- Van Hanh Maimai Championship's Stream: [Stream VOD](https://www.youtube.com/live/Qd18K1g0GOg?si=M-Ci3IHr17kfWfjk)

### Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Socket.IO Documentation](https://socket.io/docs/v4/)

## Credits

This project is originally developed by **Soralia Studio** and modified by Shard for APT PIU 2026.

### Development Team

| Role | Name |
|------|------|
| Lead Developer | Hidr0 |
| Contributor and Modifier | Shard |
| Contributor | Necros1s |

## License

This project is developed for Van Hanh Maimai Championship tournament events and is permitted by hidr0 for usage in PIU APT 2026.
