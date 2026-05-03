/**
 * @typedef {Object} Project
 * @property {string} title - Project title
 * @property {boolean} [featured] - Whether the project is featured
 * @property {string} type - Project category/type
 * @property {string} oneLiner - Catchy one-sentence description
 * @property {string} origin - Brief story behind the project
 * @property {string} techCallout - Key technical achievement or feature
 * @property {string} description - Detailed project description
 * @property {string[]} stack - List of technologies used
 * @property {string} live - Live demo URL
 * @property {string} github - GitHub repository URL
 * @property {string} screenshot - Path to screenshot asset
 * @property {string} bgColor - Background color for thumbnail container
 * @property {number} rotation - Initial card rotation angle
 */

/** @type {Project[]} */
export const projects = [
  {
    title: 'OfferVerify',
    featured: true,
    type: 'PERSONAL PROJECT',
    oneLiner: 'AI-Powered Protection Against Fake Job Offers.',
    origin: 'Built after I got scammed. No free tool existed.',
    techCallout: 'Dual AI Pipeline',
    description:
      'Scans job postings using two AI models in sequence to detect red flags, fake recruiter patterns, and fraudulent offers before you apply.',
    stack: ['React', 'Node.js', 'Exa AI', 'Groq'],
    live: 'https://offer-verify.vercel.app/',
    github: 'https://github.com/Ankush23056/OfferVerify.git',
    screenshot: '/assets/offerverify.png',
    bgColor: '#060813',
    rotation: -1,
  },
  {
    title: 'Architex',
    featured: true,
    type: 'REAL-TIME / COLLABORATIVE',
    oneLiner: 'Real-Time Collaborative Diagramming for Engineering Teams.',
    origin: 'What if Figma met system design, in real-time?',
    techCallout: 'WebSocket + Redis',
    description:
      'A shared infinite canvas where engineering teams can sketch system diagrams, drop components, and collaborate live — with zero lag.',
    stack: ['React', 'Node.js', 'Socket.io', 'Redis', 'Canvas API'],
    live: 'https://architex-whiteboard.vercel.app/',
    github: 'https://github.com/Ankush23056/Architex.git',
    screenshot: '/assets/architex.png',
    bgColor: '#050505',
    rotation: 1,
  },
  {
    title: 'FairShare',
    featured: true,
    type: 'FULL-STACK',
    oneLiner: 'Smart Expense Sharing with Optimized Settlements.',
    origin: 'Splitting bills fairly is a math problem. I solved it properly.',
    techCallout: 'Greedy Debt Settlement Algorithm',
    description:
      'Group expense tracker that minimises the number of transactions needed to settle debts — no more "who owes who" confusion.',
    stack: ['React', 'Node.js', 'Express', 'MySQL', 'Tailwind CSS'],
    live: 'https://fairsharre.netlify.app/',
    github: 'https://github.com/Ankush23056/FairShare_Smart-split.git',
    screenshot: '/assets/fairshare.png',
    bgColor: '#f3f4f6',
    rotation: -1,
  },
  {
    title: 'Crisis-AI',
    type: 'MAJOR COLLEGE PROJECT',
    oneLiner: 'Predictive Emergency Intelligence for Real-Time Disaster Response.',
    origin: 'Emergency systems react. This one predicts.',
    techCallout: 'Predictive ML + Live Feed Parsing',
    description:
      'Ingests real-time disaster feeds and runs predictive models to surface actionable insights for emergency responders before situations escalate.',
    stack: ['React', 'Python', 'FastAPI', 'TensorFlow', 'Tailwind CSS'],
    live: 'https://crisis-ai.netlify.app/',
    github: 'https://github.com/Ankush23056/Crisis_Ai.git',
    screenshot: '/assets/crisisai.jpeg',
    bgColor: '#ffffff',
    rotation: 1,
  },
  {
    title: 'BasePoint',
    type: 'PERSONAL PROJECT',
    oneLiner: 'Personal Finance Coach That Guards Against Overspending.',
    origin: 'Built it because I needed it. 5 others did too.',
    techCallout: 'PWA — Works Offline',
    description:
      'Budget tracker with category-level spend limits, trend charts, and offline support — so your finances are visible even without a connection.',
    stack: ['React', 'Zustand', 'IndexedDB', 'Recharts', 'PWA'],
    live: 'https://base-point.vercel.app/',
    github: 'https://github.com/Ankush23056/BasePoint.git',
    screenshot: '/assets/basepoint.png',
    bgColor: '#f8f9fa',
    rotation: -1,
  },
  {
    title: 'TaskWarrior',
    type: 'PERSONAL PROJECT',
    oneLiner: 'Gamified Task Manager That Makes Productivity Addictive.',
    origin: 'To-do lists are boring. XP and streaks are not.',
    techCallout: 'XP & Streak Engine',
    description:
      'Earn XP, build streaks, and unlock levels by completing tasks. Deadline tracking and persistent local storage keep you accountable.',
    stack: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript', 'LocalStorage'],
    live: 'https://taskwarrior.netlify.app/',
    github: 'https://github.com/Ankush23056/taskwarrior.git',
    screenshot: '/assets/taskwarrior.png',
    bgColor: '#0b141a',
    rotation: 1,
  },
];
