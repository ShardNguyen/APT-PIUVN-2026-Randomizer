# Pump It Up Asia Pacific Tournament - Tournament Randomizer Controller

A real-time randomizer controller for **Pump It Up Asia Pacific Tournament**, based on [**Soralia Studio**'s project for Van Hanh Maimai Championship](https://github.com/hidr0c/VHMaimai-Championship-Controller). This system provides a comprehensive solution for randomizing songs and simulating PIU APT's song picking process.
## Overview

This application is modified to consist two main pages designed for tournament broadcasting:

- **Controller Page** (`/controller`) - Main control panel for tournament operators
- **Random Display** (`/`) - Song randomization display with animated reveal.

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

## Usage for tournament

0. Run installation
1. Open the [http://localhost:3000/controller](http://localhost:3000/controller) in a browser to manage the randomizer
2. Select the appropriate song pool for the current round
3. Configure the pick count
4. Press **Start Process twice** to load up the songs in the pool
5. Press **Start Random** to play the random animation
6. After the randomization is done, press the highlighted song in the controller to pick the song

To display the randomizer page on OBS, simply add a Browser Source and add this link [http://localhost:3000/](http://localhost:3000/) as URL

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
