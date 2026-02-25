# FSLED Academy

> **The game-based training system for Federal & SLED opportunity capture.**
> From zero-to-Recruit to Capture Legend — learn the full acquisition lifecycle through missions, intel drops, and field exercises.

![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)
![Status](https://img.shields.io/badge/status-active-brightgreen?style=flat-square)
![Built With](https://img.shields.io/badge/built%20with-React-61dafb?style=flat-square)
![Version](https://img.shields.io/badge/version-1.0.0-blue?style=flat-square)

---

## What is FSLED Academy?

FSLED Academy is an interactive, game-driven learning platform that teaches the end-to-end federal and SLED (State, Local & Education) government contracting capture process. Built for everyone from first-day BD coordinators to seasoned capture managers, the curriculum covers how government buys, how to find and qualify opportunities, how to build winning proposals, and how to manage a portfolio-level BD strategy.

The system uses XP-gated progression, rank advancement, mission briefings, and scored field exercises to make capture methodology memorable and sticky — not just another PDF nobody reads.

---

## Curriculum

| Code | Title | Focus | XP Reward |
|------|-------|--------|-----------|
| FSLED-090 | Bootcamp | Government procurement fundamentals | 150 XP |
| FSLED-101 | Finding the Hunt | Opportunity identification & bid/no-bid | 250 XP |
| FSLED-201 | The Playbook | Capture planning & competitive analysis | 350 XP |
| FSLED-301 | Proposal Warfare | RFP deconstruction, win themes, color reviews | 450 XP |
| FSLED-401 | Pricing to Win | PTW methodology, LPTA vs. Best Value | 500 XP |
| FSLED-501 | Prime Power | Subcontracting, JVs, teaming agreements | 600 XP |
| FSLED-601 | Executive Capture | Pipeline management, BD ROI, GWAC strategy | 700 XP |
| FSLED-699 | Capstone Simulation | Full end-to-end CISA ZTA capture scenario | 1000 XP |

**Total learnable XP: 4,000**

---

## Rank System

Progress from Recruit to Capture Legend as XP accumulates.

| Rank | Title | XP Required |
|------|-------|-------------|
| ⬡ | Recruit | 0 |
| ◈ | Specialist | 150 |
| ◉ | Analyst | 400 |
| ⬟ | Strategist | 750 |
| ✦ | Sr. Capture Manager | 1,200 |
| ❖ | BD Director | 1,800 |
| ★ | VP Growth | 2,600 |
| ⬡★ | Capture Legend | 3,500 |

---

## Tech Stack

- **Framework:** React 18
- **Styling:** Inline CSS with CSS variables
- **Fonts:** IBM Plex Mono (body), Orbitron (display)
- **Persistence:** Browser Storage API (`window.storage`)
- **Build:** Vite (recommended) or Create React App

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/khaaliswooden-max/fsled_academy.git
cd fsled_academy

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
npm run preview
```

---

## Project Structure

```
fsled_academy/
├── src/
│   ├── components/
│   │   ├── HomeScreen.jsx
│   │   ├── CourseScreen.jsx
│   │   ├── MissionScreen.jsx
│   │   └── QuizScreen.jsx
│   ├── data/
│   │   ├── courses.js        # All course content
│   │   └── ranks.js          # Rank definitions
│   ├── hooks/
│   │   └── useProgress.js    # XP & completion state
│   ├── App.jsx
│   └── main.jsx
├── public/
├── docs/
│   └── curriculum/           # Extended course documentation
├── CONTRIBUTING.md
├── CHANGELOG.md
├── CODE_OF_CONDUCT.md
├── SECURITY.md
└── README.md
```

---

## Roadmap

See [ROADMAP.md](./ROADMAP.md) for the full development roadmap.

Near-term priorities:
- [ ] SLED-specific track (state procurement regulations, cooperative contracts)
- [ ] Flashcard / Intel Card mode for vocabulary drilling
- [ ] Team leaderboard for cohort-based training
- [ ] Branching outcomes in Capstone Simulation
- [ ] Mobile-optimized layout
- [ ] Instructor dashboard (progress tracking across learners)

---

## Contributing

We welcome contributions — new questions, course corrections, additional scenarios, and feature improvements. See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

---

## License

MIT License. See [LICENSE](./LICENSE) for details.

---

## About

FSLED Academy is developed and maintained by [Visionblox LLC](https://visionblox.com) — a minority-owned federal technology consultancy specializing in AI-powered federal solutions, healthcare IT, and enterprise modernization.

**Built from real capture experience. Designed to transfer it.**

---

*FSLED ACADEMY v1.0 — CAPTURE INTELLIGENCE TRAINING SYSTEM*
