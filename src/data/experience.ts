export interface Role {
  company: string;
  title: string;
  period: string;
  visible: string;
  bullets?: string[];
}

export const experience: Role[] = [
  {
    company: "Eudo",
    title: "Founding Engineer",
    period: "2026–Present",
    visible:
      "Building Eudo, an AI notetaker that learns your work and the people in it — capturing every meeting locally (no meeting bot) and using LLMs to track what matters across meetings over time. Owned real-time audio and transcription, backend reliability and security, AI features, and product. 59 PRs and 184 commits in the first five months.",
    bullets: [
      "Cut streaming audio bandwidth to a third by resampling 48 kHz → 16 kHz with anti-alias filtering before downsampling, with client-declared sample rates and a side-by-side test harness",
      "Improved transcription accuracy by passing participant, company, and email-domain names to AssemblyAI as key terms; built a safety watchdog so runaway audio capture stops cleanly on its own",
      "Made meetings resume recording automatically when a participant rejoins, reconnects in Zoom, or restarts the call app — tracking every app using the microphone and ignoring unrelated audio like Spotify",
      "Found and fixed two production memory leaks in the FastAPI server (orphaned streaming sessions; an Anthropic client created per call, ~858 KB each); closed authentication gaps in participant endpoints and the transcription WebSocket",
      "Made Google Calendar sync incremental via change tokens (syncToken) with a failure mode that never misses a change; automated Alembic migrations on Render pre-deploy; modeled the meeting lifecycle as three state machines",
      "Built Relationship Arcs: an LLM feature tracking how themes and open loops with each contact evolve across meetings — append-only history, Python-side model constraints, and row-level DB locks",
      "Upgraded chat and prep to Claude Sonnet with visible thinking summaries, an animated thinking indicator, stop button, and auto-scroll; built proof-of-concept MCP servers (meeting-history search via browser OAuth; a Slack MCP server running scans without a human in the loop)",
      "Shipped public share links (128-bit tokens; Recap/Notes/Transcript/Live tabs; partial unique index preventing duplicate live links), meeting alerts with auto-recording on click, accent-insensitive search incl. emails, and contacts via the Google People API",
      "Replaced in-house analytics with PostHog using an event allowlist so user content can't leak into tracking; blocked in-app text from LogRocket; wrote a 6-month synthetic meeting generator for demos; released v0.0.31–v0.0.46",
    ],
  },
  {
    company: "tEQuitable",
    title: "Engineering Lead",
    period: "2020–2025",
    visible:
      "Led all engineering at a YC-backed workplace equity startup serving ~50 enterprise clients and ~200,000 employees. Three-person team. Owned the architecture, roadmap, deployments, and hiring.",
    bullets: [
      "Built and maintained a React + Node.js + PostgreSQL platform on GCP and Heroku",
      "Built the customer admin dashboard (teq-admin-dev) from scratch — Auth0 login, Chart.js analytics, a super-admin view, and a self-serve onboarding flow letting customers configure their own instance with auto-generated engagement emails; shipped with Cypress tests on CircleCI",
      "Automated a 6–8 hour manual daily report pipeline down to under 2 hours, freeing the customer success team to focus on research and new remediation content",
      "Owned authentication and security: pre-authenticated engagement links, SMS and verification-code login, an Auth0 custom domain, maintenance mode, cross-origin failover for blocked third-party scripts, admin-key hardening, audit logging, a WAF cutover, and GDPR privacy updates including a legal review for an enterprise customer",
      "Moved learning content out of hard-coded lists and into the database, wiring in a headless WordPress CMS (webhooks) so content staff could publish modules without engineering",
      "Integrated HubSpot, Box API, SAP SuccessFactors, and a phone survey tool (Twilio + Google Cloud Functions) capturing employee testimonials used as evidence of service impact in client reports",
      "Integrated OpenAI embeddings to surface relevant content to employees, helping users find solutions to workplace issues without needing human intervention",
      "Hired, onboarded, and mentored 2 junior engineers; ran daily standups and quarterly roadmap planning",
      "Maintained 70% customer retention across a 3-person engineering org",
    ],
  },
  {
    company: "CodeWalker Institute",
    title: "Founder & CEO",
    period: "2015–2019",
    visible:
      "Founded a software apprenticeship program to increase representation of Black and Latinx engineers in the industry. Placed engineers at companies including Redfin, npm, Microsoft, and Mozilla.",
    bullets: [
      "Managed ~20 client engagements over 4 years including MoveOn.org and various nonprofits and agencies, generating ~$260k in revenue",
      "Recruited, mentored, and placed 30+ engineers from non-traditional backgrounds into professional roles",
      "Worked hands-on alongside apprentices through pair programming — technical leadership, not just management",
      "Oversaw all business operations: sales, recruiting, account management, and finance",
      "Maintained company infrastructure on AWS (EC2, S3, Lambda)",
    ],
  },
  {
    company: "Don't Get Mad Get Paid",
    title: "Senior Engineer",
    period: "2019–2020",
    visible:
      "Joined a mostly-functional child support collection app and delivered the final features needed for v1 launch, including an internal agent management tool.",
  },
  {
    company: "Webroot",
    title: "Senior Software Engineer",
    period: "2015–2016",
    visible:
      "Led a platform migration from an end-of-life PHP stack to Node.js. Containerized services with Docker and deployed to AWS via Elastic Beanstalk, reducing infrastructure cost and extending platform longevity.",
  },
  {
    company: "Maptiv8",
    title: "Co-Founder & Sole Developer",
    period: "2012–2015",
    visible:
      "Co-founded a social visualization platform, starting as an alumni fundraising tool for Haas School of Business before expanding to events and community engagement.",
    bullets: [
      "Architected and built the entire platform in Scala, PHP, MySQL, MongoDB, and Redis",
      "Integrated Lucene for search and Redis for caching at scale",
      "Designed and implemented the build and deployment pipeline",
      "Recruited and managed a small team of contractors for front-end work",
      "Pitched the platform to investors and secured $100k in initial funding",
      "Wore every technical hat: product decisions, infrastructure, security, performance",
    ],
  },
];

export const earlierRoles = [
  {
    company: "City Car Share",
    period: "2013–2014",
    title: "Contract Engineer",
    description:
      "Modernized a 10-year-old Java/Tomcat system, migrating full-page interactions to AJAX with Angular.",
  },
  {
    company: "Loyal3",
    period: "2012–2013",
    title: "Software Engineer",
    description:
      "Contributed to a Scala-based stock trading platform. Reduced IPO processing time from 12 hours to 3 through performance optimization.",
  },
  {
    company: "Marin Software",
    period: "2009–2012",
    title: "Tech Lead",
    description:
      "Built customer-facing features on an enterprise paid search platform in PHP and Java. Contributed to a 15% increase in enterprise sales.",
  },
];
