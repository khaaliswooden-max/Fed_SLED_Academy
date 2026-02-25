# Security Policy

## Supported Versions

| Version | Supported |
|---------|-----------|
| 1.x.x (current) | ✅ Active |
| < 1.0.0 | ❌ Not supported |

---

## Reporting a Vulnerability

FSLED Academy takes security seriously. If you discover a vulnerability, please do not open a public GitHub issue.

**Report privately to:**
khaalis.wooden@visionblox.com

Include in your report:
- Description of the vulnerability
- Steps to reproduce
- Potential impact assessment
- Any suggested remediation (optional but appreciated)

**Response timeline:**
- Acknowledgment within 48 hours
- Initial assessment within 5 business days
- Resolution or mitigation plan within 30 days for confirmed vulnerabilities

You will be credited in the changelog (unless you prefer anonymity) when a fix is released.

---

## Security Considerations

### Data Storage

FSLED Academy uses browser-local storage (`window.storage`) to persist XP and course completion data. No personal information is collected or transmitted. No server-side user data is stored in the base application.

### Dependencies

Dependencies are managed via npm. We follow these practices:
- Regular `npm audit` runs in CI
- Dependabot alerts enabled on the repository
- No production dependencies with known critical vulnerabilities will be shipped

### Content Security

All course content is static data bundled with the application. There is no user-generated content rendered in the UI, eliminating XSS vectors from dynamic content.

---

## Scope

**In scope for vulnerability reports:**
- XSS vulnerabilities in the React application
- Logic flaws that allow bypassing XP gating or progress manipulation in ways that affect other users (in future multi-user deployments)
- Dependency vulnerabilities with CVSS score 7.0+
- Any vulnerability that could expose user data in future server-side implementations

**Out of scope:**
- Self-XSS (requires user to attack themselves)
- Theoretical vulnerabilities without demonstrated impact
- Issues in development dependencies that don't affect production builds
- Social engineering attacks

---

## Disclosure Policy

We follow coordinated disclosure. Please allow us 30 days to remediate confirmed vulnerabilities before public disclosure. We will work with you to agree on a disclosure timeline.
