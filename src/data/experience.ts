export interface Role {
  company: string;
  title: string;
  period: string;
  visible: string;
  bullets?: string[];
}

export const experience: Role[] = [
  {
    company: "tEQuitable",
    title: "Engineering Lead",
    period: "2020–Present",
    visible:
      "Led all engineering at a YC-backed workplace equity startup serving ~50 enterprise clients and ~200,000 employees. Three-person team. Owned the architecture, roadmap, deployments, and hiring.",
    bullets: [
      "Built and maintained a React + Node.js + PostgreSQL platform on GCP and Heroku",
      "Automated a 6-8 hour manual report generation process down to under 2 hours, freeing the customer success team to focus on research and new remediation content",
      "Built a phone survey tool using Twilio and Google Cloud Functions that captured employee testimonials used as evidence of service impact in client reports",
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
