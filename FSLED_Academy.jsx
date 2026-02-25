import { useState, useEffect } from "react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const RANKS = [
  { id: 0, title: "Recruit", min: 0, badge: "⬡" },
  { id: 1, title: "Specialist", min: 150, badge: "◈" },
  { id: 2, title: "Analyst", min: 400, badge: "◉" },
  { id: 3, title: "Strategist", min: 750, badge: "⬟" },
  { id: 4, title: "Sr. Capture Mgr", min: 1200, badge: "✦" },
  { id: 5, title: "BD Director", min: 1800, badge: "❖" },
  { id: 6, title: "VP Growth", min: 2600, badge: "★" },
  { id: 7, title: "Capture Legend", min: 3500, badge: "⬡★" },
];

const COURSES = [
  {
    id: "090",
    code: "FSLED-090",
    title: "Bootcamp",
    subtitle: "Government Buys Differently",
    color: "#4ade80",
    xpReward: 150,
    unlockXP: 0,
    icon: "🎖",
    missions: [
      {
        id: "m1",
        title: "Why Government Contracting Exists",
        type: "lesson",
        content: `The federal government is the world's largest buyer — spending over $700B annually on goods and services. State, local, and education (SLED) agencies add hundreds of billions more. But unlike commercial markets, government cannot simply decide to buy something. Every dollar must be appropriated by a legislative body, justified by need, and competed fairly under public law.\n\nThis creates a structured, rule-driven market with predictable rhythms — and once you understand those rhythms, you can hunt opportunities before they surface publicly.`,
        keyPoints: [
          "Federal government spends $700B+ annually",
          "Every purchase requires authorization (appropriations)",
          "Acquisitions are governed by FAR (Federal Acquisition Regulation)",
          "SLED = State, Local, Education — governed by state procurement codes",
          "Competition is mandatory unless an exception applies"
        ]
      },
      {
        id: "m2",
        title: "The Fiscal Year Cycle",
        type: "lesson",
        content: `The federal fiscal year runs October 1 – September 30. This is the single most important calendar fact in federal BD. Agencies must obligate (commit) their budget by September 30 or risk losing unspent funds — creating a surge of awards in Q4 (July–Sept).\n\nQ1 (Oct–Dec): New budgets load. Slow award activity. Great time to shape opportunities.\nQ2 (Jan–Mar): Mid-year corrections. RFPs start flowing.\nQ3 (Apr–Jun): Award tempo increases.\nQ4 (Jul–Sep): Sprint. Maximum awards. If you're not already in the pipeline, you're too late.`,
        keyPoints: [
          "Federal FY: Oct 1 – Sep 30",
          "Q4 (Jul–Sep) = peak award season",
          "'Use it or lose it' drives Q4 spending",
          "SLED agencies may have different FY calendars (e.g., Jul 1 – Jun 30)",
          "Shape early. Win the Q4 awards that started in Q1."
        ]
      },
      {
        id: "m3",
        title: "Core Vocabulary: Your Field Manual",
        type: "lesson",
        content: `You cannot compete in a market you cannot speak. These are the non-negotiable terms every capture professional must know cold.\n\nUEI — Unique Entity Identifier. Your company's 12-character ID in the federal system (replaced DUNS in 2022). Required to bid.\nSAM.gov — System for Award Management. The single federal database where all opportunities, awards, and registrations live.\nNAICS Code — North American Industry Classification System. A 6-digit code that classifies your business type. This determines which contracts you're eligible for.\nPSC — Product/Service Code. A 4-character code describing what is being bought on a specific contract.\nContracting Officer (CO/KO) — The government official with legal authority to bind the government to a contract. The only person who can make promises that count.\nProgram Manager (PM/COR) — The end user who defines what they actually need. Often more influential than the CO in shaping requirements.`,
        keyPoints: [
          "UEI required for all federal bids",
          "SAM.gov = the hub of all federal opportunity activity",
          "NAICS codes determine set-aside eligibility",
          "CO has contract authority; PM has technical authority",
          "Know both — the CO awards it, the PM decides if you win it"
        ]
      },
      {
        id: "q1",
        title: "Field Exercise: 090 Qualification",
        type: "quiz",
        questions: [
          {
            q: "The federal government's fiscal year ends on:",
            options: ["December 31", "September 30", "June 30", "March 31"],
            answer: 1,
            explanation: "The federal FY runs October 1 – September 30. This drives the Q4 award surge you'll learn to hunt."
          },
          {
            q: "Which official has the legal authority to bind the government to a contract?",
            options: ["Program Manager", "Contracting Officer's Representative", "Contracting Officer", "Agency Head"],
            answer: 2,
            explanation: "The Contracting Officer (CO/KO) is the only person with warrant authority. Promises from anyone else are non-binding."
          },
          {
            q: "What replaced the DUNS number in 2022 as the unique business identifier for federal contractors?",
            options: ["EIN", "CAGE Code", "UEI", "NAICS"],
            answer: 2,
            explanation: "The Unique Entity Identifier (UEI) is the 12-character SAM.gov-issued ID that replaced Dun & Bradstreet's DUNS in April 2022."
          },
          {
            q: "Why is Q4 (July–September) the busiest award period in federal contracting?",
            options: [
              "Agencies receive new budgets in Q4",
              "Congress mandates Q4 awards",
              "Agencies must obligate budgets by Sept 30 or lose unspent funds",
              "Q4 has the fewest holidays"
            ],
            answer: 2,
            explanation: "'Use it or lose it' — unspent appropriated funds typically cannot be carried over, so agencies accelerate spending in Q4."
          },
          {
            q: "SLED stands for:",
            options: [
              "State, Local, and Education",
              "Systems, Logistics, Engineering, and Defense",
              "Statewide, Legislative, and Emergency Departments",
              "Subcontract, Licensing, and Enterprise Development"
            ],
            answer: 0,
            explanation: "SLED = State, Local, and Education. These agencies represent hundreds of billions in additional procurement opportunity beyond the federal government."
          }
        ]
      }
    ]
  },
  {
    id: "101",
    code: "FSLED-101",
    title: "Finding the Hunt",
    subtitle: "Opportunity Identification",
    color: "#60a5fa",
    xpReward: 250,
    unlockXP: 100,
    icon: "🎯",
    missions: [
      {
        id: "m1",
        title: "The Acquisition Pipeline: Before It Goes Public",
        type: "lesson",
        content: `Most companies find opportunities on SAM.gov — after the RFP drops. By then, the requirements are locked, the incumbent has positioned their solution, and the customer knows who they want. You're responding cold to someone else's well-shaped deal.\n\nThe capture professional's job is to find opportunities 12–18 months before the RFP drops — while the agency is still deciding what to buy, how to structure it, and which vendors they'll trust.\n\nThe acquisition pipeline has three pre-solicitation phases:\n1. Agency Budget/Planning — Internal to the agency. Tracked via congressional budget justifications and agency forecasts.\n2. Market Research — Agency actively talks to industry. This is your window.\n3. Pre-Solicitation — Sources Sought, RFI, Draft RFP. Public signals the deal is forming.`,
        keyPoints: [
          "Best opportunities are found 12-18 months before RFP",
          "Agency forecasts publish planned acquisitions (check agency procurement websites)",
          "Market research phase = highest influence window",
          "Sources Sought = agency testing the market, not yet committed to a structure",
          "Draft RFPs are a gift — respond and shape the final requirements"
        ]
      },
      {
        id: "m2",
        title: "SAM.gov Mastery: Reading a Synopsis",
        type: "lesson",
        content: `SAM.gov is the mandatory posting location for federal opportunities over $25,000. Every listing tells you something. Here's what to read:\n\nSolicitation Number — Tracks the opportunity. The last two digits often indicate fiscal year (e.g., W91QV2-24-R-0003 = FY24).\nNotice Type — Sources Sought (market research), Presolicitation (coming soon), Solicitation (RFP is live), Award (already done — but reveals incumbent).\nNAICS Code — Tells you what set-aside categories might apply and if your business qualifies.\nResponse Deadline — Non-negotiable in government. Miss it, you're out.\nContracting Office — Who's buying. Understand the office's history and priorities.\nDescription — Often vague by design. Read between the lines. What capability gap are they solving?`,
        keyPoints: [
          "SAM.gov = mandatory for federal opps over $25K",
          "Notice Type tells you where in the lifecycle the opp is",
          "Award notices reveal incumbents — competitive intelligence gold",
          "NAICS code drives set-aside eligibility",
          "Late submissions are never accepted — ever"
        ]
      },
      {
        id: "m3",
        title: "The Bid/No-Bid Decision",
        type: "lesson",
        content: `Chasing every opportunity is a strategy for bankruptcy. Proposal teams are finite. BD resources are finite. Every proposal you write costs real money — typically $50K–$500K+ for large federal pursuits.\n\nThe Bid/No-Bid gate is your profit protection system. Score each opportunity against:\n\nP-WIN (Probability of Win) — Be honest. Do you have an incumbent advantage? A teaming edge? Customer relationships? Below 25%? Probably a pass.\nStrategic Fit — Does this contract build capability, past performance, or revenue in a direction you're intentionally growing?\nResource Reality — Do you have the staff to perform AND the bandwidth to propose?\nCompetitive Intel — Who else is bidding? Are there known incumbents with deep roots?\nSet-Aside Alignment — Are you eligible for the set-aside being used?`,
        keyPoints: [
          "Every proposal costs money. Choose fights you can win.",
          "P-WIN below 25% is usually a no-bid",
          "Strategic pursuit = building toward a position, not just chasing revenue",
          "Incumbent advantage is real — it takes deliberate positioning to displace",
          "Bid/No-Bid is a gate, not a suggestion"
        ]
      },
      {
        id: "q1",
        title: "Field Exercise: 101 Qualification",
        type: "quiz",
        questions: [
          {
            q: "The ideal time to identify and engage a federal opportunity is:",
            options: [
              "When the RFP drops on SAM.gov",
              "12-18 months before the RFP is released",
              "After the Sources Sought closes",
              "During the orals phase"
            ],
            answer: 1,
            explanation: "Early engagement allows you to shape requirements, build customer relationships, and understand the competitive landscape before requirements are locked."
          },
          {
            q: "A 'Sources Sought' notice on SAM.gov means:",
            options: [
              "The contract has been awarded",
              "The RFP is imminent and final",
              "The agency is conducting market research and hasn't finalized the acquisition structure",
              "The agency is only looking for small businesses"
            ],
            answer: 2,
            explanation: "Sources Sought is a market research tool. The agency is exploring capabilities and may still change the set-aside, scope, and structure based on responses."
          },
          {
            q: "What is the minimum dollar threshold requiring a federal opportunity to be posted on SAM.gov?",
            options: ["$10,000", "$25,000", "$50,000", "$150,000"],
            answer: 1,
            explanation: "Federal acquisitions over $25,000 must be posted publicly on SAM.gov (with some exceptions for classified and sole-source actions)."
          },
          {
            q: "Your company is considering bidding a $5M IT services contract. You have no past performance in the specific technology, no existing relationship with the contracting office, and an incumbent is deeply embedded. What is the BEST decision?",
            options: [
              "Bid — the revenue is worth it",
              "No-bid — P-WIN is too low to justify proposal investment",
              "Bid a subcontractor proposal only",
              "Protest the incumbent's position"
            ],
            answer: 1,
            explanation: "No existing relationship, no past performance differentiation, and an entrenched incumbent = sub-20% P-WIN. Use those proposal resources where you have an actual path to win."
          },
          {
            q: "Award notices on SAM.gov are valuable for capture professionals because they:",
            options: [
              "Show which contracts are still open for bid",
              "Reveal the incumbent vendor, award amount, and contract vehicle used",
              "Are required reading before submitting a proposal",
              "Show upcoming agency budget forecasts"
            ],
            answer: 1,
            explanation: "Award notices are competitive intelligence. They tell you who won, at what price, under what vehicle, and for how long — giving you a roadmap for the recompete."
          }
        ]
      }
    ]
  },
  {
    id: "201",
    code: "FSLED-201",
    title: "The Playbook",
    subtitle: "Capture Fundamentals",
    color: "#f59e0b",
    xpReward: 350,
    unlockXP: 300,
    icon: "📋",
    missions: [
      {
        id: "m1",
        title: "What is a Capture Plan?",
        type: "lesson",
        content: `A capture plan is the living strategic document that guides your pursuit of a specific opportunity from identification to award. It is not a proposal outline. It is intelligence-driven strategy.\n\nA real capture plan answers: Why will we win? Not just 'why are we qualified' — why will WE win against THESE competitors for THIS customer at THIS time?\n\nCore sections of a capture plan:\n1. Opportunity Profile — What is being bought, by whom, under what vehicle, and why now?\n2. Customer Analysis — Decision makers, technical influencers, pain points, evaluation criteria biases\n3. Competitive Assessment — Who else is pursuing, their strengths/weaknesses, incumbent status\n4. Win Strategy — Your differentiating position and the storyline you'll build the proposal around\n5. Teaming Strategy — Who do you need to strengthen your bid?\n6. Action Plan — Time-phased activities to execute the strategy`,
        keyPoints: [
          "Capture plan ≠ proposal outline. It's pre-proposal strategy.",
          "Win strategy must answer: why US over THEM for THIS customer?",
          "Capture plans are living documents — update as intelligence arrives",
          "Customer analysis > technical analysis in early capture",
          "Teaming decisions made early have more leverage"
        ]
      },
      {
        id: "m2",
        title: "The Competitive Landscape: SWOT & Ghosts",
        type: "lesson",
        content: `Capture professionals don't just understand their own company — they model their competitors' behavior. This is called ghost writing: writing your competitor's proposal so you can counter it.\n\nFor each major competitor, map:\n- Their likely win themes based on past proposals and contract history\n- Their incumbency advantage (past performance, embedded staff, customer trust)\n- Their teaming relationships and contract vehicle access\n- Their pricing posture (low-cost leader vs. technical differentiator)\n- Their weaknesses: transitions, staff turnover, customer complaints, performance issues\n\nThen design your proposal to amplify your strengths WHERE THEY DIRECTLY COUNTER competitor weaknesses.`,
        keyPoints: [
          "Ghost writing = modeling your competitor's proposal to counter it",
          "Incumbency is worth ~20-30% price premium in evaluations",
          "Research competitor past performance via CPARS, USASpending.gov",
          "Attack competitor weaknesses only where you have genuine alternatives",
          "Never underestimate the incumbent — but know how to unseat them"
        ]
      },
      {
        id: "m3",
        title: "Capability Statements: Your One-Page War Banner",
        type: "lesson",
        content: `The capability statement is often the first thing a contracting officer or program manager sees from your company. It must communicate who you are, what you do, and why you're different — in one page.\n\nA great capability statement has:\n1. Core Competencies — What you do (not every service, the 3-5 things you own)\n2. Past Performance — Real contracts with real outcomes (metrics matter)\n3. Differentiators — Why you specifically, not just any vendor in your category\n4. Company Data — UEI, CAGE, NAICS codes, set-aside status, contract vehicles\n5. Contact Information — Direct to BD lead, not a generic inbox\n\nCritical rule: Customize for the agency. A generic cap statement is a missed opportunity. An agency-specific cap statement signals you did your homework.`,
        keyPoints: [
          "One page — no exceptions in most federal contexts",
          "Metrics-driven past performance: 'Delivered X% under budget' beats 'provided excellent service'",
          "Lead with your #1 differentiator, not your company history",
          "NAICS codes must match the opportunity you're pursuing",
          "Customize per agency — show you know their mission"
        ]
      },
      {
        id: "q1",
        title: "Field Exercise: 201 Qualification",
        type: "quiz",
        questions: [
          {
            q: "A capture plan's primary purpose is to:",
            options: [
              "Outline the proposal structure",
              "Define the budget for proposal writing",
              "Document the strategic path to winning a specific opportunity",
              "Satisfy the contracting officer's documentation requirements"
            ],
            answer: 2,
            explanation: "A capture plan is pre-proposal strategy — intelligence-driven thinking about how to WIN, not just respond."
          },
          {
            q: "In competitive analysis, 'ghost writing' refers to:",
            options: [
              "Writing the proposal without attribution",
              "Modeling a competitor's likely proposal to develop counter-strategies",
              "Submitting proposals anonymously",
              "Using AI to write the proposal"
            ],
            answer: 1,
            explanation: "Ghost writing means putting yourself in your competitor's seat — predicting their approach so you can design your proposal to outmaneuver it at every evaluation criterion."
          },
          {
            q: "What is the approximate price premium an incumbent is typically worth in a government evaluation?",
            options: ["5-10%", "20-30%", "50%", "Incumbents have no pricing advantage"],
            answer: 1,
            explanation: "Incumbents hold 20-30% equivalent value in familiarity, transition risk reduction, and embedded relationships. Challengers must compete on differentiated value, not just price."
          },
          {
            q: "Which element of a capability statement is MOST impactful for a federal contracting officer reviewing it for the first time?",
            options: [
              "Company founding story",
              "Number of employees",
              "Metrics-driven past performance outcomes",
              "List of all NAICS codes"
            ],
            answer: 2,
            explanation: "COs need to know if you can perform. Quantified past performance ('delivered 15% under budget, zero defects') answers that question instantly."
          },
          {
            q: "You're pursuing a $10M IT services contract. Your company has strong cloud capabilities but the customer cares primarily about cybersecurity. The best capture move is:",
            options: [
              "Lead with your cloud capabilities since they're your strength",
              "Acquire a cybersecurity firm immediately",
              "Team with a cybersecurity-focused company and position them on that portion",
              "Withdraw from the pursuit"
            ],
            answer: 2,
            explanation: "Teaming fills gaps. Finding a complementary cybersecurity partner strengthens your bid exactly where the customer's evaluation will focus — without abandoning your core strength."
          }
        ]
      }
    ]
  },
  {
    id: "301",
    code: "FSLED-301",
    title: "Proposal Warfare",
    subtitle: "Winning on Paper",
    color: "#f87171",
    xpReward: 450,
    unlockXP: 600,
    icon: "⚔️",
    missions: [
      {
        id: "m1",
        title: "Deconstructing the RFP",
        type: "lesson",
        content: `When the RFP drops, most companies read it front to back. That's wrong. There's a hierarchy:\n\n1. Section L — Instructions to Offerors. Tells you exactly what to submit and in what format. Non-compliance = disqualification.\n2. Section M — Evaluation Criteria. Tells you exactly how you'll be scored. This is your proposal outline.\n3. Statement of Work (SOW) / Performance Work Statement (PWS) — What they're buying. Read M before L before SOW.\n4. Section H — Special Contract Requirements. Often contains critical constraints.\n5. Attachments — Data calls, wage determinations, past performance forms.\n\nBuild a compliance matrix immediately: every requirement in L/M mapped to your proposal section. Then a cross-reference matrix: every proposal claim mapped back to the RFP requirement it satisfies.`,
        keyPoints: [
          "Read Section M first — it's the scoring rubric",
          "Section L defines compliance — miss it and you're eliminated before evaluation",
          "PWS = what to deliver; SOW = how to deliver; SOO = outcome-based flexibility",
          "Compliance matrix prevents disqualification",
          "Every proposal claim needs an RFP requirement that justifies it"
        ]
      },
      {
        id: "m2",
        title: "Win Themes: The Story That Wins",
        type: "lesson",
        content: `A win theme is not a feature. It is a promise with proof.\n\nWeak: "We have extensive experience in cloud migration."\nStrong: "Our FedRAMP-authorized migration methodology, proven across 14 DoD agencies, reduces agency transition timelines by 40% — eliminating the #1 risk in cloud modernization programs."\n\nEvery great win theme has three components:\n- Customer Benefit — What does the agency actually gain?\n- Discriminator — Why only YOU, not your competitors?\n- Proof — Evidence (past performance, certifications, methodologies, metrics)\n\nLimit yourself to 3-5 win themes per proposal. Too many = none are memorable. Run every win theme through the evaluator's test: 'So what? Why you?'`,
        keyPoints: [
          "Win theme = customer benefit + differentiator + proof",
          "3-5 win themes maximum — quality over quantity",
          "Features are not benefits. Translate every technical claim to mission impact.",
          "Evaluators score proposals quickly — your themes must land in seconds",
          "Discriminators must be real. Claims without proof are just marketing."
        ]
      },
      {
        id: "m3",
        title: "Color Reviews: The Proposal Quality Gate",
        type: "lesson",
        content: `Color reviews are structured quality gates that evaluate the proposal before it's submitted. Each gate has a defined purpose:\n\nPink Team (early draft): Is our strategy sound? Are we responsive? Often happens at 30-40% complete.\nRed Team (near-final): Blind evaluation by people who haven't worked on the proposal. They score it as the government would. Typically at 80-90% complete.\nGold Team (final): Executive review. Pricing alignment. Risk check. Final approval to submit.\n\nCritical rule: Red Team members must be outsiders — not the authors. Authors cannot objectively evaluate their own work.\n\nThe Red Team's #1 job is to find: non-compliances, unsupported claims, unanswered 'so what?', competitor strengths you haven't countered, and evaluation criteria you've neglected.`,
        keyPoints: [
          "Pink = strategy check early; Red = blind evaluation near-final; Gold = final approval",
          "Red Team must be external to the proposal team",
          "Evaluate against Section M, not internal opinions",
          "Non-compliances found in Red Team are fixable. Found by the government = disqualification.",
          "Schedule reviews backwards from submission date — they always take longer than planned"
        ]
      },
      {
        id: "q1",
        title: "Field Exercise: 301 Qualification",
        type: "quiz",
        questions: [
          {
            q: "When you receive an RFP, what section should you read FIRST?",
            options: [
              "Section C (Statement of Work)",
              "Section L (Instructions to Offerors)",
              "Section M (Evaluation Criteria)",
              "Section A (Solicitation Cover Page)"
            ],
            answer: 2,
            explanation: "Section M tells you HOW you'll be scored. Once you know the scoring rubric, everything else — including how you write — flows from it."
          },
          {
            q: "Which statement is a strong win theme?",
            options: [
              "We are a leading provider of IT services",
              "Our team has over 50 years of combined experience",
              "Our zero-trust architecture, certified under NIST SP 800-207, has reduced security incidents by 73% across 6 federal agencies — protecting the mission while reducing operational burden",
              "We are committed to quality and customer satisfaction"
            ],
            answer: 2,
            explanation: "Strong win themes = specific benefit (73% incident reduction) + discriminator (NIST-certified ZTA) + proof (6 federal agencies). The others are generic claims any competitor could make."
          },
          {
            q: "A Red Team review is most effective when conducted by:",
            options: [
              "The proposal manager and volume leads",
              "The BD team that identified the opportunity",
              "People external to the proposal team who evaluate it as the government would",
              "The company's executive leadership"
            ],
            answer: 2,
            explanation: "Authors cannot objectively review their own work. External Red Teamers simulate the government evaluator's perspective — catching gaps the team is too close to see."
          },
          {
            q: "A compliance matrix maps:",
            options: [
              "Your past performance to current requirements",
              "Each RFP requirement to the corresponding proposal section that addresses it",
              "Competitor capabilities to your own",
              "Pricing to technical volume requirements"
            ],
            answer: 1,
            explanation: "The compliance matrix ensures every Section L requirement is addressed in the proposal. It prevents the most preventable failure mode: non-compliance leading to disqualification."
          },
          {
            q: "Your win theme states: 'We provide excellent cybersecurity services.' The evaluator's most likely response is:",
            options: [
              "This clearly differentiates you from competitors",
              "'So what? Why you?' — the claim is generic and unevidenced",
              "This meets the technical requirements",
              "This should be moved to the executive summary"
            ],
            answer: 1,
            explanation: "Generic claims with no differentiator and no proof don't create advantage. Every evaluator reading 10 proposals sees this statement from every vendor. Win themes must be specific, evidenced, and unique."
          }
        ]
      }
    ]
  },
  {
    id: "401",
    code: "FSLED-401",
    title: "Pricing to Win",
    subtitle: "Price-to-Win Methodology",
    color: "#a78bfa",
    xpReward: 500,
    unlockXP: 1000,
    icon: "💰",
    missions: [
      {
        id: "m1", title: "Price-to-Win vs. Cost-to-Perform",
        type: "lesson",
        content: `Price-to-Win (PTW) is a strategic exercise. Cost-to-Perform is an accounting exercise. They start from different questions.\n\nCost-to-Perform asks: What will it cost us to do this work?\nPrice-to-Win asks: What price must we submit to beat our specific competitors under this specific evaluation method?\n\nPTW methodology:\n1. Model each competitor's cost structure (labor rates, overhead, G&A, fringe, profit)\n2. Estimate their total price based on known rate cards, GSA schedules, and historical awards\n3. Position your price to beat the competitive midpoint while remaining profitable\n\nThe key insight: winning at a price that makes you unprofitable is not a win. PTW finds the intersection of competitive and profitable.`,
        keyPoints: [
          "PTW ≠ lowest price. It's the right price to win against these specific competitors.",
          "Model competitor rates using GSA schedules, USASpending.gov, and FPDS",
          "LPTA = Lowest Price Technically Acceptable. Here, every dollar over floor price is wasted.",
          "Best Value = technical quality matters. Premium pricing can win if differentiators justify it.",
          "Wrap rate = fringe + overhead + G&A + fee. Know yours cold.",
        ]
      },
      { id: "q1", title: "Field Exercise: 401 Qualification", type: "quiz",
        questions: [
          { q: "Price-to-Win methodology starts with:", options: ["Your internal cost structure", "The government's budget estimate", "Modeling competitor pricing to find the winning price range", "The lowest price on the GSA schedule"], answer: 2, explanation: "PTW is competitor-centric, not cost-centric. You model what competitors will price, then position relative to that competitive range." },
          { q: "On an LPTA solicitation, the best pricing strategy is:", options: ["Price at a premium to signal quality", "Price exactly at your cost", "Price at the lowest point that is profitable and still technically acceptable", "Price at the government estimate"], answer: 2, explanation: "LPTA awards to the lowest technically acceptable offeror. Every dollar above the minimum winning price is wasted. The goal is technical acceptability at minimum cost." },
          { q: "A 'wrap rate' in government contracting includes:", options: ["The prime contractor's profit only", "Fringe, overhead, G&A, and fee combined into a multiplier on direct labor", "The subcontractor's loaded rate", "GSA schedule pricing"], answer: 1, explanation: "Wrap rate = all indirect costs plus fee, expressed as a multiplier. A 1.65 wrap rate on a $50/hr direct labor cost means billing at $82.50/hr." },
          { q: "USASpending.gov is valuable for PTW because it reveals:", options: ["Upcoming solicitations", "Historical contract award amounts and incumbents", "Agency budget projections", "Small business set-aside determinations"], answer: 1, explanation: "USASpending.gov is the public database of federal awards — showing who won, at what price, for how long. This is competitive pricing intelligence." },
          { q: "You're bidding best-value against a larger prime with lower overhead. Your differentiator is superior past performance. You should:", options: ["Match their price exactly", "Price significantly lower despite lower margins", "Price at a moderate premium justified by quantified performance outcomes", "Withdraw — you can't compete on price"], answer: 2, explanation: "Best-value evaluations reward technical superiority. If your past performance is genuinely stronger, a justified premium can win — as long as you make the tradeoff visible to evaluators." }
        ]
      }
    ]
  },
  {
    id: "501",
    code: "FSLED-501",
    title: "Prime Power",
    subtitle: "Subcontracting & Joint Ventures",
    color: "#2dd4bf",
    xpReward: 600,
    unlockXP: 1500,
    icon: "🤝",
    missions: [
      {
        id: "m1", title: "Prime vs. Sub: Strategic Positioning",
        type: "lesson",
        content: `The decision to pursue an opportunity as a prime or subcontractor is strategic, not default. It depends on: your past performance, your relationship with the customer, your contract vehicle access, and the risk you're willing to accept.\n\nPrime advantages: Customer relationship ownership, full contract control, maximum revenue capture, proposal leadership.\nPrime risks: Full performance accountability, bonding/insurance requirements, cash flow management.\n\nSub advantages: Lower risk, revenue without BD investment, access to opportunities above your current threshold, relationship building with larger primes.\nSub risks: Limited visibility to customer, dependent on prime for scope/payment, workshare vulnerability.\n\nRule of thumb: Prime where you have customer relationships and past performance. Sub to build the past performance you need to prime later.`,
        keyPoints: [
          "Prime = control + risk + full revenue",
          "Sub = access + limited risk + partial revenue",
          "Use subcontracting strategically to build past performance for future primes",
          "Protect your workshare in teaming agreements — verbal commitments mean nothing",
          "Exclusive teaming = you can't bid with another prime on the same opp"
        ]
      },
      { id: "q1", title: "Field Exercise: 501 Qualification", type: "quiz",
        questions: [
          { q: "A teaming agreement is BEST described as:", options: ["A contract to deliver services", "A pre-proposal agreement defining roles, workshare, and exclusivity between companies pursuing a contract together", "A subcontract agreement", "A joint venture formation document"], answer: 1, explanation: "Teaming agreements are pre-award documents. They define who does what, how much workshare each partner gets, and whether the arrangement is exclusive for that pursuit." },
          { q: "The SBA's Mentor-Protégé program primarily benefits:", options: ["Large businesses seeking additional contract vehicles", "Small businesses gaining access to mentorship, resources, and joint venture opportunities with large primes", "Joint ventures with foreign partners", "8(a) companies in their exit phase"], answer: 1, explanation: "The SBA Mentor-Protégé program pairs experienced large businesses (mentors) with eligible small businesses (protégés) to support development, often enabling joint venture eligibility." },
          { q: "Workshare protection in a teaming agreement means:", options: ["Defining and legally committing to the percentage or specific tasks each partner will perform", "Sharing proposal writing responsibilities equally", "Splitting the contract award amount", "Ensuring both companies can bid independently"], answer: 0, explanation: "Workshare clauses specify exactly what each teaming partner is entitled to perform if the team wins. Without this, primes can reduce sub scope post-award — legally." },
          { q: "An 8(a) Joint Venture can compete as a small business if:", options: ["The 8(a) firm owns at least 51% and controls the JV", "The large business partner provides all management", "Revenue is split 50/50", "The JV is registered as a separate corporation"], answer: 0, explanation: "For an 8(a) JV to receive 8(a) set-aside contracts, the 8(a) firm must own at least 51% and must control the JV's management and daily operations." },
          { q: "You are a small business with strong technical capabilities but limited past performance at the contract scale required. The best strategic move is:", options: ["Bid as prime and cite smaller contracts as equivalent", "Partner as a sub with a large prime to build past performance at scale", "Protest the size requirement", "Wait until you have the right-sized past performance"], answer: 1, explanation: "Subcontracting to a large prime on a large contract builds the past performance record you need. Then you use that performance narrative when you're ready to prime similar work." }
        ]
      }
    ]
  },
  {
    id: "601",
    code: "FSLED-601",
    title: "Executive Capture",
    subtitle: "Portfolio & BD Strategy",
    color: "#fb923c",
    xpReward: 700,
    unlockXP: 2100,
    icon: "🏛️",
    missions: [
      {
        id: "m1", title: "Pipeline Management & BD ROI",
        type: "lesson",
        content: `At the executive level, capture is a portfolio decision, not an individual pursuit decision. You're managing dozens of simultaneous opportunities at different pipeline stages, allocating limited BD and proposal resources to maximize revenue and strategic position.\n\nPipeline metrics that matter:\nAward Rate — What percentage of proposals you submit result in wins. Industry average: 30-40%. Elite organizations: 60%+.\nPipeline Velocity — How fast opportunities move through your stages. Stalled pipelines hide BD inefficiency.\nBid-to-Win Ratio — Number of bids to produce one win. Lower is better. Target < 3:1 for mature BD organizations.\nRevenue at Risk — Total contract value of expiring incumbencies. If you lose these recompetes, what's the impact?\nBD Spend as % of Revenue — Typically 2-5% for established federal contractors. Track it as investment, not overhead.`,
        keyPoints: [
          "Pipeline is a portfolio — manage it with portfolio discipline",
          "Award rate below 30% signals broken capture or wrong pursuit selection",
          "Revenue at risk = your most important forward indicator",
          "BD spend tracked as investment ROI, not cost center",
          "GWAC/IDIQ vehicles create on-ramps to avoid full-and-open competition"
        ]
      },
      { id: "q1", title: "Field Exercise: 601 Qualification", type: "quiz",
        questions: [
          { q: "An organization with a 20% award rate most likely has:", options: ["Excellent capture discipline", "A problem with pursuit selection — bidding too many low-P-WIN opportunities", "An unusually competitive market", "Strong proposal quality but weak pricing"], answer: 1, explanation: "20% award rate means 4 out of 5 proposals fail. The root cause is almost always pursuing opportunities where you lack differentiated position — a capture/pursuit selection failure, not a proposal writing failure." },
          { q: "A GWAC (Governmentwide Acquisition Contract) provides value to a contractor because:", options: ["It guarantees contract awards", "It provides pre-competed access enabling task order awards without full-and-open competition", "It eliminates the need for technical proposals", "It is only available to large businesses"], answer: 1, explanation: "GWACs are pre-competed vehicles. Once on-contract, task orders are awarded to vehicle holders without full public competition, dramatically accelerating the acquisition cycle." },
          { q: "'Revenue at risk' in a BD pipeline refers to:", options: ["Contracts that may be terminated for cause", "The total value of incumbent contracts approaching recompete", "Revenue from high-risk LPTA contracts", "Revenue dependent on a single customer agency"], answer: 1, explanation: "Revenue at risk = your current incumbencies expiring within 12-24 months. Losing recompetes destroys existing revenue. Managing this is a core executive BD responsibility." },
          { q: "A mature federal contractor should target a BD spend as a percentage of revenue of approximately:", options: ["Less than 1%", "2-5%", "10-15%", "20%+"], answer: 1, explanation: "Established federal contractors typically invest 2-5% of revenue in BD and capture. This sustains pipeline health. Underspending starves growth; overspending without pipeline discipline wastes capital." },
          { q: "The most strategically valuable contract vehicles for a mid-tier federal contractor to hold are:", options: ["Individual agency IDIQ contracts", "GWACs with broad agency access and high ceiling values", "Sole-source contracts", "Simplified acquisition threshold contracts only"], answer: 1, explanation: "GWACs with high ceilings and broad agency access (e.g., GSA OASIS, CIO-SP3, SEWP) create platform advantages — letting you compete for task orders across the federal government without repeated full-and-open competition." }
        ]
      }
    ]
  },
  {
    id: "699",
    code: "FSLED-699",
    title: "Capstone Simulation",
    subtitle: "Full Capture Scenario",
    color: "#e879f9",
    xpReward: 1000,
    unlockXP: 2800,
    icon: "🏆",
    missions: [
      {
        id: "m1", title: "Operation IRONGATE: The Scenario",
        type: "lesson",
        content: `SITUATION REPORT:\nAgency: U.S. Dept. of Homeland Security, CISA\nRequirement: Zero Trust Architecture Implementation & Managed Security Operations\nEstimated Value: $45M over 5 years\nContract Type: IDIQ, Task Order Competition under CIO-SP3\nExpected RFP Release: 90 days\nCurrent Status: Sources Sought just closed. Three competitors responded.\nIncumbent: CyberGuard Federal, LLC — incumbent on predecessor contract for 3 years.\nSet-aside: Total Small Business\nEvaluation: Best Value, Technical/Management/Past Performance/Price\n\nYour company: Visionblox LLC, a service-disabled veteran-owned small business (SDVOSB) with cybersecurity and AI/ML capabilities. You hold CIO-SP3. You have moderate past performance in cybersecurity at the $5-8M level but not at $45M scale.\n\nYour orders: Develop your capture strategy.`,
        keyPoints: [
          "SDVOSB status is a differentiator — but the set-aside is total small business, not SDVOSB",
          "CIO-SP3 access is prerequisite — you have it, which qualifies you",
          "Scale gap: $45M vs. your $5-8M past performance history",
          "Incumbent CyberGuard has 3 years of relationship capital",
          "AI/ML capability could be a win theme if CISA's ZTA roadmap incorporates AI-driven SOC",
          "90 days to RFP = limited time, must move immediately"
        ]
      },
      {
        id: "m2", title: "Operation IRONGATE: Strategy Decisions",
        type: "lesson",
        content: `You have three strategic paths:\n\nPATH A — Prime Solo: Lead the proposal, rely on your existing past performance, price aggressively.\nRisk: Scale gap in past performance will be a vulnerability. Evaluators may question your ability to manage a $45M program.\n\nPATH B — Prime with Strategic Teaming: Bring in a larger cybersecurity firm as a key sub to address scale and add zero-trust depth. You prime and lead customer relationship.\nAdvantage: Fills past performance gap. Adds technical depth. You retain customer relationship.\nRisk: Workshare negotiation. Prime management complexity.\n\nPATH C — Sub to a Larger Prime: Partner with a major prime, contribute AI/ML SOC capabilities as a key sub.\nAdvantage: Low risk. Revenue. Past performance at scale for future bids.\nRisk: No customer ownership. Workshare vulnerability. Not building toward prime position on this vehicle.\n\nRecommended path for this scenario and why: B — Prime with teaming fills the scale gap while preserving your customer relationship and SDVOSB narrative.`,
        keyPoints: [
          "Teaming to fill a scale gap is a legitimate and common strategy",
          "Prime position = customer relationship ownership long-term",
          "SDVOSB narrative + AI/ML ZTA + strong sub for scale = a compelling story",
          "Identify the teaming partner NOW — 90 days is not much time",
          "Win themes: AI-driven SOC efficiency + SDVOSB mission alignment + proven zero-trust methodology"
        ]
      },
      {
        id: "q1", title: "CAPSTONE: Final Mission Board", type: "quiz",
        questions: [
          { q: "For Operation IRONGATE, your biggest vulnerability as prime is:", options: ["SDVOSB status", "CIO-SP3 access", "Past performance scale gap relative to $45M requirement", "AI/ML capability"], answer: 2, explanation: "Evaluators on a $45M program need confidence you can manage at that scale. Your $5-8M history creates a narrative gap that must be addressed through teaming or by elevating relevant sub-components of past performance." },
          { q: "To counter CyberGuard's 3 years of incumbency, your FIRST move should be:", options: ["Lower your price significantly", "Request an agency debrief from the Sources Sought notice", "File a protest against the incumbent", "Focus only on proposal writing"], answer: 1, explanation: "Sources Sought debriefs (or informal agency contact post-SS) let you learn what the agency valued, what CyberGuard's weaknesses may be, and whether requirements are shifting. Customer intelligence is the first weapon against incumbency." },
          { q: "Your win theme centered on AI-driven SOC automation is most effective when:", options: ["Stated as a general capability", "Quantified with specific efficiency metrics and linked to CISA's published ZTA and SOC modernization goals", "Kept vague to avoid competitor counter-strategies", "Mentioned in the executive summary only"], answer: 1, explanation: "Win themes must be specific, evidenced, and mission-linked. Connecting your AI/ML capability directly to CISA's documented modernization goals demonstrates customer alignment that a generic cyber firm cannot match." },
          { q: "If you structure a teaming agreement for Operation IRONGATE, the most critical clause to negotiate is:", options: ["The teaming agreement expiration date", "Exclusive teaming restriction", "Defined workshare guaranteeing your percentage and key roles post-award", "The sub's NAICS code registration"], answer: 2, explanation: "Without a defined workshare clause, primes can legally reduce your scope post-award. Protecting your role in the execution means protecting your revenue and your customer relationship." },
          { q: "You win Operation IRONGATE. The immediate post-award priority is:", options: ["Filing for a contract increase", "Transitioning from CyberGuard smoothly and establishing customer relationships at the program level", "Renegotiating the teaming agreement scope", "Beginning recompete capture planning immediately"], answer: 1, explanation: "Post-award, the #1 risk is transition failure. CyberGuard's embedded staff and institutional knowledge are real. A smooth transition protects your contract, builds customer trust, and is the foundation for recompete win." }
        ]
      }
    ]
  }
];

// ─── HELPERS ────────────────────────────────────────────────────────────────

function getRank(xp) {
  let rank = RANKS[0];
  for (const r of RANKS) { if (xp >= r.min) rank = r; }
  return rank;
}

function getNextRank(xp) {
  for (const r of RANKS) { if (xp < r.min) return r; }
  return null;
}

// ─── MAIN APP ───────────────────────────────────────────────────────────────

export default function FSLEDApp() {
  const [xp, setXp] = useState(0);
  const [completedMissions, setCompletedMissions] = useState({});
  const [screen, setScreen] = useState("home"); // home | course | mission | quiz
  const [activeCourse, setActiveCourse] = useState(null);
  const [activeMission, setActiveMission] = useState(null);
  const [quizState, setQuizState] = useState(null);
  const [notification, setNotification] = useState(null);

  // Load from storage
  useEffect(() => {
    async function load() {
      try {
        const xpRes = await window.storage.get("fsled_xp");
        if (xpRes) setXp(JSON.parse(xpRes.value));
        const cmRes = await window.storage.get("fsled_completed");
        if (cmRes) setCompletedMissions(JSON.parse(cmRes.value));
      } catch (e) {}
    }
    load();
  }, []);

  async function saveState(newXp, newCompleted) {
    try {
      await window.storage.set("fsled_xp", JSON.stringify(newXp));
      await window.storage.set("fsled_completed", JSON.stringify(newCompleted));
    } catch (e) {}
  }

  function notify(msg, type = "success") {
    setNotification({ msg, type });
    setTimeout(() => setNotification(null), 3000);
  }

  function openCourse(course) {
    if (xp < course.unlockXP) return;
    setActiveCourse(course);
    setScreen("course");
  }

  function openMission(mission) {
    if (mission.type === "lesson") {
      setActiveMission(mission);
      setScreen("mission");
    } else if (mission.type === "quiz") {
      setQuizState({ mission, current: 0, selected: null, answers: [], done: false, score: 0 });
      setScreen("quiz");
    }
  }

  function completeMission(courseId, missionId) {
    const key = `${courseId}:${missionId}`;
    if (completedMissions[key]) return;
    const newCompleted = { ...completedMissions, [key]: true };
    setCompletedMissions(newCompleted);
    saveState(xp, newCompleted);
  }

  function handleLessonComplete() {
    const key = `${activeCourse.id}:${activeMission.id}`;
    if (!completedMissions[key]) {
      const gain = 25;
      const newXp = xp + gain;
      const newCompleted = { ...completedMissions, [key]: true };
      setXp(newXp);
      setCompletedMissions(newCompleted);
      saveState(newXp, newCompleted);
      notify(`+${gain} XP — Mission Complete`);
    }
    setScreen("course");
  }

  function handleQuizSelect(idx) {
    if (quizState.selected !== null) return;
    const q = quizState.mission.questions[quizState.current];
    const correct = idx === q.answer;
    setQuizState(s => ({ ...s, selected: idx, answers: [...s.answers, { idx, correct }] }));
  }

  function handleQuizNext() {
    const qs = quizState;
    if (qs.current + 1 < qs.mission.questions.length) {
      setQuizState(s => ({ ...s, current: s.current + 1, selected: null }));
    } else {
      const score = qs.answers.filter(a => a.correct).length + (qs.selected === qs.mission.questions[qs.current].answer ? 1 : 0);
      const total = qs.mission.questions.length;
      const passed = score >= Math.ceil(total * 0.8);
      const key = `${activeCourse.id}:${qs.mission.id}`;

      if (passed && !completedMissions[key]) {
        const gain = Math.round(activeCourse.xpReward * 0.6);
        const newXp = xp + gain;
        const newCompleted = { ...completedMissions, [key]: true };

        // Check if all missions done = course complete bonus
        const allDone = activeCourse.missions.every(m => newCompleted[`${activeCourse.id}:${m.id}`]);
        const bonus = allDone && !completedMissions[`${activeCourse.id}:complete`] ? Math.round(activeCourse.xpReward * 0.4) : 0;
        const finalXp = newXp + bonus;
        const finalCompleted = bonus > 0 ? { ...newCompleted, [`${activeCourse.id}:complete`]: true } : newCompleted;

        setXp(finalXp);
        setCompletedMissions(finalCompleted);
        saveState(finalXp, finalCompleted);
        if (bonus > 0) notify(`🏆 Course Complete! +${gain + bonus} XP`, "gold");
        else notify(`✓ Passed! +${gain} XP`);
      } else if (!passed) {
        notify("Keep studying — you need 80% to pass.", "error");
      }

      const finalScore = qs.answers.filter(a => a.correct).length + (qs.selected === qs.mission.questions[qs.current].answer ? 1 : 0);
      setQuizState(s => ({ ...s, done: true, score: finalScore, selected: qs.selected }));
    }
  }

  const rank = getRank(xp);
  const nextRank = getNextRank(xp);
  const rankProgress = nextRank ? ((xp - rank.min) / (nextRank.min - rank.min)) * 100 : 100;

  // ─── SCREENS ───────────────────────────────────────────────────────────────

  const styles = {
    app: {
      minHeight: "100vh",
      background: "#0a0c10",
      color: "#e2e8f0",
      fontFamily: "'IBM Plex Mono', 'Courier New', monospace",
      position: "relative",
      overflow: "hidden",
    },
    grid: {
      position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
      backgroundImage: "linear-gradient(rgba(74,222,128,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(74,222,128,0.03) 1px, transparent 1px)",
      backgroundSize: "40px 40px",
      pointerEvents: "none", zIndex: 0,
    },
    content: { position: "relative", zIndex: 1, maxWidth: 900, margin: "0 auto", padding: "24px 16px" },
  };

  return (
    <div style={styles.app}>
      <div style={styles.grid} />
      {notification && (
        <div style={{
          position: "fixed", top: 20, right: 20, zIndex: 9999,
          background: notification.type === "error" ? "#7f1d1d" : notification.type === "gold" ? "#78350f" : "#14532d",
          border: `1px solid ${notification.type === "error" ? "#ef4444" : notification.type === "gold" ? "#f59e0b" : "#4ade80"}`,
          color: notification.type === "error" ? "#fca5a5" : notification.type === "gold" ? "#fcd34d" : "#86efac",
          padding: "12px 20px", borderRadius: 2, fontFamily: "'IBM Plex Mono', monospace",
          fontSize: 13, letterSpacing: "0.05em",
          animation: "fadeIn 0.2s ease",
        }}>{notification.msg}</div>
      )}
      <div style={styles.content}>
        {screen === "home" && <HomeScreen xp={xp} rank={rank} nextRank={nextRank} rankProgress={rankProgress} courses={COURSES} completedMissions={completedMissions} onCourse={openCourse} />}
        {screen === "course" && activeCourse && <CourseScreen course={activeCourse} completedMissions={completedMissions} onMission={openMission} onBack={() => setScreen("home")} xp={xp} />}
        {screen === "mission" && activeMission && <MissionScreen mission={activeMission} onComplete={handleLessonComplete} onBack={() => setScreen("course")} />}
        {screen === "quiz" && quizState && <QuizScreen qs={quizState} onSelect={handleQuizSelect} onNext={handleQuizNext} onBack={() => setScreen("course")} course={activeCourse} />}
      </div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500;600&family=Orbitron:wght@600;800&display=swap');
        @keyframes fadeIn { from { opacity:0; transform:translateY(-8px); } to { opacity:1; transform:translateY(0); } }
        @keyframes pulse { 0%,100% { opacity:1; } 50% { opacity:0.6; } }
        @keyframes scan { 0% { transform:translateY(-100%); } 100% { transform:translateY(100vh); } }
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-track { background:#0a0c10; } ::-webkit-scrollbar-thumb { background:#334155; }
      `}</style>
    </div>
  );
}

// ─── HOME SCREEN ─────────────────────────────────────────────────────────────

function HomeScreen({ xp, rank, nextRank, rankProgress, courses, completedMissions, onCourse }) {
  const totalCourseComplete = courses.filter(c => completedMissions[`${c.id}:complete`]).length;

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: 32, borderBottom: "1px solid #1e293b", paddingBottom: 24 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
          <span style={{ color: "#4ade80", fontFamily: "'Orbitron', monospace", fontSize: 10, letterSpacing: "0.3em" }}>SYSTEM ACTIVE</span>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80", display: "inline-block", animation: "pulse 2s infinite" }} />
        </div>
        <h1 style={{ fontFamily: "'Orbitron', monospace", fontSize: 28, fontWeight: 800, color: "#f1f5f9", margin: 0, letterSpacing: "0.05em" }}>
          FSLED ACADEMY
        </h1>
        <p style={{ color: "#64748b", margin: "6px 0 0", fontSize: 12, letterSpacing: "0.1em" }}>
          FEDERAL & SLED CAPTURE INTELLIGENCE SYSTEM — CLASSIFICATION: TRAINING
        </p>
      </div>

      {/* Rank Bar */}
      <div style={{ background: "#0f172a", border: "1px solid #1e293b", borderRadius: 4, padding: "20px 24px", marginBottom: 32, display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap" }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <span style={{ color: "#4ade80", fontFamily: "'Orbitron', monospace", fontSize: 13, fontWeight: 600 }}>
              {rank.badge} {rank.title.toUpperCase()}
            </span>
            <span style={{ color: "#94a3b8", fontSize: 12 }}>{xp.toLocaleString()} XP</span>
          </div>
          <div style={{ height: 4, background: "#1e293b", borderRadius: 2 }}>
            <div style={{ height: "100%", background: "linear-gradient(90deg, #4ade80, #22d3ee)", borderRadius: 2, width: `${rankProgress}%`, transition: "width 0.6s ease" }} />
          </div>
          {nextRank && <div style={{ color: "#475569", fontSize: 11, marginTop: 6 }}>
            {nextRank.min - xp} XP to {nextRank.title}
          </div>}
        </div>
        <div style={{ display: "flex", gap: 24 }}>
          <Stat label="Courses Complete" value={`${totalCourseComplete}/${courses.length}`} />
          <Stat label="Total XP" value={xp.toLocaleString()} />
        </div>
      </div>

      {/* Courses Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
        {courses.map(c => {
          const locked = xp < c.unlockXP;
          const complete = completedMissions[`${c.id}:complete`];
          const missions = c.missions;
          const doneMissions = missions.filter(m => completedMissions[`${c.id}:${m.id}`]).length;
          const pct = Math.round((doneMissions / missions.length) * 100);

          return (
            <div key={c.id}
              onClick={() => !locked && onCourse(c)}
              style={{
                background: locked ? "#0c111a" : "#0f172a",
                border: `1px solid ${complete ? c.color : locked ? "#0f172a" : "#1e293b"}`,
                borderRadius: 4, padding: 20, cursor: locked ? "not-allowed" : "pointer",
                opacity: locked ? 0.5 : 1,
                transition: "all 0.2s ease",
                position: "relative", overflow: "hidden",
              }}
              onMouseEnter={e => { if (!locked) e.currentTarget.style.borderColor = c.color; }}
              onMouseLeave={e => { if (!locked && !complete) e.currentTarget.style.borderColor = "#1e293b"; }}
            >
              {complete && (
                <div style={{ position: "absolute", top: 12, right: 12, color: c.color, fontSize: 16 }}>✓</div>
              )}
              <div style={{ fontSize: 28, marginBottom: 10 }}>{c.icon}</div>
              <div style={{ color: c.color, fontSize: 10, letterSpacing: "0.2em", marginBottom: 4 }}>{c.code}</div>
              <div style={{ fontFamily: "'Orbitron', monospace", fontSize: 14, fontWeight: 600, color: "#f1f5f9", marginBottom: 4 }}>{c.title}</div>
              <div style={{ color: "#64748b", fontSize: 11, marginBottom: 16 }}>{c.subtitle}</div>
              <div style={{ height: 2, background: "#1e293b", borderRadius: 1, marginBottom: 8 }}>
                <div style={{ height: "100%", background: c.color, borderRadius: 1, width: `${pct}%`, transition: "width 0.6s ease" }} />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "#475569" }}>
                <span>{doneMissions}/{missions.length} missions</span>
                <span>{locked ? `🔒 ${c.unlockXP} XP` : `+${c.xpReward} XP`}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ textAlign: "center", marginTop: 32, color: "#334155", fontSize: 11, letterSpacing: "0.1em" }}>
        FSLED ACADEMY v1.0 — CAPTURE INTELLIGENCE TRAINING SYSTEM
      </div>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontFamily: "'Orbitron', monospace", fontSize: 18, color: "#f1f5f9", fontWeight: 600 }}>{value}</div>
      <div style={{ color: "#475569", fontSize: 10, letterSpacing: "0.1em" }}>{label}</div>
    </div>
  );
}

// ─── COURSE SCREEN ────────────────────────────────────────────────────────────

function CourseScreen({ course, completedMissions, onMission, onBack, xp }) {
  return (
    <div>
      <button onClick={onBack} style={{ background: "none", border: "1px solid #1e293b", color: "#64748b", padding: "8px 16px", cursor: "pointer", fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, borderRadius: 2, marginBottom: 24, letterSpacing: "0.1em" }}>
        ← RETURN TO HQ
      </button>
      <div style={{ marginBottom: 28 }}>
        <div style={{ color: course.color, fontSize: 11, letterSpacing: "0.25em", marginBottom: 6 }}>{course.code} — MISSION BRIEFING</div>
        <h2 style={{ fontFamily: "'Orbitron', monospace", fontSize: 22, color: "#f1f5f9", margin: "0 0 6px", fontWeight: 800 }}>{course.title}</h2>
        <p style={{ color: "#64748b", margin: 0, fontSize: 12 }}>{course.subtitle}</p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {course.missions.map((m, i) => {
          const done = completedMissions[`${course.id}:${m.id}`];
          const isQuiz = m.type === "quiz";
          const prevDone = i === 0 || completedMissions[`${course.id}:${course.missions[i - 1].id}`];
          const locked = !prevDone && i > 0;

          return (
            <div key={m.id}
              onClick={() => !locked && onMission(m)}
              style={{
                background: done ? "#0f1f15" : "#0f172a",
                border: `1px solid ${done ? course.color : locked ? "#0c111a" : "#1e293b"}`,
                borderRadius: 4, padding: "18px 24px", cursor: locked ? "not-allowed" : "pointer",
                opacity: locked ? 0.4 : 1, display: "flex", alignItems: "center", gap: 16,
                transition: "all 0.2s ease",
              }}
              onMouseEnter={e => { if (!locked) e.currentTarget.style.borderColor = course.color; }}
              onMouseLeave={e => { if (!locked && !done) e.currentTarget.style.borderColor = "#1e293b"; }}
            >
              <div style={{
                width: 36, height: 36, borderRadius: "50%", flexShrink: 0,
                background: done ? course.color : "#1e293b",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: done ? "#0a0c10" : "#475569", fontSize: 14, fontWeight: 700,
                fontFamily: "'Orbitron', monospace",
              }}>
                {done ? "✓" : i + 1}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 12, color: isQuiz ? course.color : "#94a3b8", letterSpacing: "0.1em", marginBottom: 4 }}>
                  {isQuiz ? "⬡ FIELD EXERCISE" : "◈ MISSION BRIEF"}
                </div>
                <div style={{ fontFamily: "'Orbitron', monospace", fontSize: 13, color: "#f1f5f9", fontWeight: 600 }}>{m.title}</div>
              </div>
              {!locked && <div style={{ color: course.color, fontSize: 18 }}>→</div>}
              {locked && <div style={{ color: "#334155", fontSize: 14 }}>🔒</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── MISSION SCREEN ───────────────────────────────────────────────────────────

function MissionScreen({ mission, onComplete, onBack }) {
  return (
    <div>
      <button onClick={onBack} style={{ background: "none", border: "1px solid #1e293b", color: "#64748b", padding: "8px 16px", cursor: "pointer", fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, borderRadius: 2, marginBottom: 24, letterSpacing: "0.1em" }}>
        ← BACK
      </button>
      <div style={{ background: "#0f172a", border: "1px solid #1e293b", borderRadius: 4, padding: "28px 32px", marginBottom: 24 }}>
        <div style={{ color: "#64748b", fontSize: 10, letterSpacing: "0.25em", marginBottom: 8 }}>◈ MISSION BRIEF — INTEL CLASSIFIED</div>
        <h2 style={{ fontFamily: "'Orbitron', monospace", fontSize: 18, color: "#f1f5f9", margin: "0 0 24px", fontWeight: 600 }}>{mission.title}</h2>
        {mission.content.split("\n\n").map((para, i) => (
          <p key={i} style={{ color: "#94a3b8", lineHeight: 1.8, marginBottom: 16, fontSize: 13 }}>{para}</p>
        ))}
        {mission.keyPoints && (
          <div style={{ background: "#0a0c10", border: "1px solid #1e293b", borderRadius: 2, padding: 20, marginTop: 24 }}>
            <div style={{ color: "#4ade80", fontSize: 10, letterSpacing: "0.2em", marginBottom: 12 }}>⬡ KEY INTELLIGENCE</div>
            {mission.keyPoints.map((kp, i) => (
              <div key={i} style={{ display: "flex", gap: 12, marginBottom: 10, fontSize: 12 }}>
                <span style={{ color: "#4ade80", flexShrink: 0 }}>▸</span>
                <span style={{ color: "#cbd5e1" }}>{kp}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      <button
        onClick={onComplete}
        style={{
          width: "100%", padding: "16px", background: "transparent",
          border: "1px solid #4ade80", color: "#4ade80",
          fontFamily: "'Orbitron', monospace", fontSize: 13, fontWeight: 600,
          cursor: "pointer", borderRadius: 2, letterSpacing: "0.15em",
          transition: "all 0.2s ease",
        }}
        onMouseEnter={e => { e.target.style.background = "#4ade80"; e.target.style.color = "#0a0c10"; }}
        onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.color = "#4ade80"; }}
      >
        MISSION COMPLETE — ADVANCE ▸
      </button>
    </div>
  );
}

// ─── QUIZ SCREEN ──────────────────────────────────────────────────────────────

function QuizScreen({ qs, onSelect, onNext, onBack, course }) {
  if (qs.done) {
    const total = qs.mission.questions.length;
    const passed = qs.score >= Math.ceil(total * 0.8);
    return (
      <div>
        <div style={{ background: "#0f172a", border: `1px solid ${passed ? "#4ade80" : "#ef4444"}`, borderRadius: 4, padding: "40px 32px", textAlign: "center" }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>{passed ? "🏆" : "📋"}</div>
          <div style={{ fontFamily: "'Orbitron', monospace", fontSize: 22, color: passed ? "#4ade80" : "#ef4444", marginBottom: 12, fontWeight: 800 }}>
            {passed ? "QUALIFICATION PASSED" : "RECON REQUIRED"}
          </div>
          <div style={{ color: "#94a3b8", fontSize: 16, marginBottom: 8 }}>{qs.score}/{total} correct</div>
          <div style={{ color: "#475569", fontSize: 12 }}>{passed ? "XP awarded. Advance to next mission." : "Review the mission briefings and retry. 80% required to advance."}</div>
          <button onClick={onBack} style={{
            marginTop: 32, padding: "14px 32px", background: "transparent",
            border: `1px solid ${passed ? "#4ade80" : "#ef4444"}`,
            color: passed ? "#4ade80" : "#ef4444",
            fontFamily: "'Orbitron', monospace", fontSize: 12, cursor: "pointer",
            borderRadius: 2, letterSpacing: "0.15em",
          }}>
            {passed ? "← RETURN TO MISSIONS" : "← STUDY & RETRY"}
          </button>
        </div>
      </div>
    );
  }

  const q = qs.mission.questions[qs.current];
  const total = qs.mission.questions.length;
  const answered = qs.selected !== null;

  return (
    <div>
      <button onClick={onBack} style={{ background: "none", border: "1px solid #1e293b", color: "#64748b", padding: "8px 16px", cursor: "pointer", fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, borderRadius: 2, marginBottom: 24, letterSpacing: "0.1em" }}>
        ← ABORT EXERCISE
      </button>

      <div style={{ background: "#0f172a", border: "1px solid #1e293b", borderRadius: 4, padding: "28px 32px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
          <div style={{ color: course.color, fontSize: 10, letterSpacing: "0.2em" }}>⬡ FIELD EXERCISE — {course.code}</div>
          <div style={{ color: "#475569", fontSize: 12 }}>{qs.current + 1} / {total}</div>
        </div>

        {/* Progress */}
        <div style={{ height: 2, background: "#1e293b", borderRadius: 1, marginBottom: 28 }}>
          <div style={{ height: "100%", background: course.color, borderRadius: 1, width: `${((qs.current) / total) * 100}%`, transition: "width 0.4s ease" }} />
        </div>

        <h3 style={{ fontFamily: "'Orbitron', monospace", fontSize: 15, color: "#f1f5f9", marginBottom: 28, fontWeight: 600, lineHeight: 1.6 }}>{q.q}</h3>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {q.options.map((opt, i) => {
            let bg = "#0a0c10", border = "#1e293b", color = "#94a3b8";
            if (answered) {
              if (i === q.answer) { bg = "#0f2a1a"; border = "#4ade80"; color = "#4ade80"; }
              else if (i === qs.selected && i !== q.answer) { bg = "#2a0f0f"; border = "#ef4444"; color = "#ef4444"; }
            }
            return (
              <div key={i} onClick={() => onSelect(i)} style={{
                background: bg, border: `1px solid ${border}`, borderRadius: 2,
                padding: "14px 18px", cursor: answered ? "default" : "pointer",
                color, fontSize: 13, lineHeight: 1.5, transition: "all 0.2s ease",
                display: "flex", gap: 12, alignItems: "flex-start",
              }}
                onMouseEnter={e => { if (!answered) { e.currentTarget.style.borderColor = course.color; e.currentTarget.style.color = "#f1f5f9"; } }}
                onMouseLeave={e => { if (!answered) { e.currentTarget.style.borderColor = "#1e293b"; e.currentTarget.style.color = "#94a3b8"; } }}
              >
                <span style={{ fontFamily: "'Orbitron', monospace", fontSize: 11, flexShrink: 0, marginTop: 1 }}>
                  {String.fromCharCode(65 + i)}
                </span>
                <span>{opt}</span>
              </div>
            );
          })}
        </div>

        {answered && (
          <div style={{ background: "#0a0c10", border: "1px solid #1e293b", borderRadius: 2, padding: 16, marginTop: 20 }}>
            <div style={{ color: qs.selected === q.answer ? "#4ade80" : "#f87171", fontSize: 11, letterSpacing: "0.1em", marginBottom: 8 }}>
              {qs.selected === q.answer ? "✓ CORRECT" : "✗ INCORRECT"}
            </div>
            <div style={{ color: "#94a3b8", fontSize: 12, lineHeight: 1.7 }}>{q.explanation}</div>
          </div>
        )}

        {answered && (
          <button onClick={onNext} style={{
            marginTop: 20, width: "100%", padding: "14px",
            background: "transparent", border: `1px solid ${course.color}`,
            color: course.color, fontFamily: "'Orbitron', monospace", fontSize: 12,
            cursor: "pointer", borderRadius: 2, letterSpacing: "0.15em",
            transition: "all 0.2s ease",
          }}
            onMouseEnter={e => { e.target.style.background = course.color; e.target.style.color = "#0a0c10"; }}
            onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.color = course.color; }}
          >
            {qs.current + 1 < total ? "NEXT QUESTION ▸" : "COMPLETE EXERCISE ▸"}
          </button>
        )}
      </div>
    </div>
  );
}
