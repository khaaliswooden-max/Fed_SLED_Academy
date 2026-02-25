# Contributing to FSLED Academy

Thank you for your interest in contributing. FSLED Academy is a living training system — it improves as practitioners contribute real-world capture knowledge, scenario accuracy, and platform improvements.

---

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Ways to Contribute](#ways-to-contribute)
- [Development Setup](#development-setup)
- [Contribution Guidelines](#contribution-guidelines)
- [Content Standards](#content-standards)
- [Pull Request Process](#pull-request-process)
- [Issue Reporting](#issue-reporting)

---

## Code of Conduct

This project follows the [Contributor Covenant Code of Conduct](./CODE_OF_CONDUCT.md). By participating, you agree to uphold these standards.

---

## Ways to Contribute

### Content Contributions
- **New quiz questions** — Additional field exercise questions for existing courses
- **Course corrections** — Factual updates to regulations, thresholds, or procurement processes
- **New scenarios** — Additional capstone simulation scenarios based on real contract types
- **SLED-specific content** — State and local procurement processes vary significantly; contributions from practitioners in specific states are high-value
- **Glossary expansion** — New terms for the intel vocabulary system

### Technical Contributions
- **Bug fixes** — UI issues, logic errors, storage failures
- **New features** — Items on the [roadmap](./ROADMAP.md)
- **Performance improvements** — Load time, render optimization
- **Accessibility** — WCAG compliance improvements
- **Testing** — Unit and integration test coverage

### Documentation
- Clarifying existing docs
- Adding curriculum documentation in `/docs/curriculum/`
- Translation support

---

## Development Setup

```bash
# Fork the repo on GitHub, then clone your fork
git clone https://github.com/<your-username>/fsled_academy.git
cd fsled_academy

# Install dependencies
npm install

# Create a feature branch (never work directly on main)
git checkout -b feature/your-feature-name

# Start dev server
npm run dev
```

---

## Contribution Guidelines

### Branching Strategy

| Branch Type | Pattern | Example |
|-------------|---------|---------|
| Feature | `feature/description` | `feature/sled-track` |
| Bug Fix | `fix/description` | `fix/quiz-score-calculation` |
| Content | `content/description` | `content/new-401-questions` |
| Docs | `docs/description` | `docs/contributing-update` |

### Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add SLED-specific procurement track
fix: correct XP calculation on course completion
content: add 5 new questions to FSLED-301 field exercise
docs: update roadmap with mobile milestone
```

---

## Content Standards

All educational content must meet these standards before acceptance:

**Accuracy**
- Regulation citations must reference current FAR/DFARS provisions, not outdated versions
- Dollar thresholds and set-aside rules must reflect current SBA size standards
- Procurement processes described must be consistent with actual agency practice

**Attribution**
- If content is derived from public law, regulation, or government guidance, note the source in your PR description
- Do not reproduce copyrighted training material verbatim

**Question Quality (for quiz contributions)**

Each new quiz question must include:
```json
{
  "q": "Clear, unambiguous question text",
  "options": ["Option A", "Option B", "Option C", "Option D"],
  "answer": 0,
  "explanation": "Detailed explanation of why the correct answer is correct, and why the common wrong answer is wrong"
}
```

Requirements:
- Exactly 4 options
- One definitively correct answer (no "best of bad" questions without clear reasoning)
- Explanation must be instructional, not just confirmatory ("Correct!" is not an explanation)
- Avoid trick questions — the goal is learning, not gotchas
- Questions should test application of concepts, not pure memorization

---

## Pull Request Process

1. **Open an issue first** for significant changes — discuss before building
2. Ensure all existing tests pass: `npm test`
3. Add tests for new functionality where applicable
4. Update relevant documentation
5. Fill out the PR template completely
6. Request review from at least one maintainer

**PR Title Format:**
```
[TYPE] Brief description of change
```
Example: `[CONTENT] Add 8 new FSLED-401 pricing questions`

**PRs will be reviewed within 5 business days.** Complex content PRs may require subject matter review and take longer.

---

## Issue Reporting

Use GitHub Issues with the appropriate label:

| Label | Use For |
|-------|---------|
| `bug` | Something broken in the application |
| `content-error` | Factual inaccuracy in course material |
| `enhancement` | New feature or improvement |
| `question` | Clarification needed |
| `good-first-issue` | Beginner-friendly contribution |

**For content errors**, please include:
- The specific course code and mission where the error appears
- What the content currently says
- What it should say
- Source/citation supporting the correction

---

## Questions?

Open a [GitHub Discussion](https://github.com/khaaliswooden-max/fsled_academy/discussions) for anything that doesn't fit an issue. We're building this together.
