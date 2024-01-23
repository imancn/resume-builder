import TapsellLogo from '@/assets/tapsell.png';
import Mastermind from '@/assets/mastermind-logo.png';
import Huma from '@/assets/humaforhealth_logo.jpeg';
import Klassroom from '@/assets/klassroom.jpeg';
import type { WorkExperienceModel } from '@/models/experience';

// When I joined Huma, the frontend team was remote and disconnected. I brought the team together, established coding standards, implemented code review processes, and automated workflows. We managed to refactor the project and proactively improved the code style making it more consistent.
// "When I joined Huma, I unified the previously remote and disconnected frontend team by establishing cohesive coding standards, implementing robust code review processes, and automating workflows. This resulted in a successful project refactoring and proactive improvement of code style consistency.

export const WORK_EXPERIENCES: WorkExperienceModel[] = [
  {
    icon: Huma,
    company: 'Huma',
    country: 'England',
    type: 'full-time',
    positions: [
      {
        title: 'Lead Frontend Engineer',
        start: { month: '11', year: '2022' },
        desc: `
<ul>
<li>Unified the remote and disconnected frontend teams and Lead a team of 15-20 frontend engineers</li>
<li>Established full CI/CD and tooling for code listing, integrated testing, QA, visual testing, and deployment using GitHub actions, ESLint, Stylelint, SonarCube, Jest, Storybook, and Chromatic.</li>
<li>Created coding guidelines, team documentation, and personalized growth roadmap for team members</li>
<li>Managed multiple frontend React and Angular projects, including internal NPM packages.</li>
</ul>`,
      },
    ],
  },
  {
    icon: TapsellLogo,
    company: 'Tapsell',
    country: 'iran',
    type: 'full-time',
    positions: [
      {
        title: 'Director of Technical Operations',
        start: { month: '3', year: '2022' },
        end: { month: '9', year: '2022' },
        // <p>After working at Tapsell for approximately 5 years, I leveraged my experience to establish and streamline processes, document tacit knowledge, develop developer handbooks, and implement a unified internal chat platform for the entire enterprise, spanning all products and teams across all Tapsell offices.</p>
        desc: `
<ul>
<li>Facilitate technical operations and procedures like onboarding, knowledge sharing, code quality, etc.</li>
<li>Assist tech teams in workflow, communication, and documentation.</li>
<li>Increase developers' performance by studying and providing DevOps tools and enhancing their experience.</li>
<li>Develop CLI tools and chat bots with Node.js and implement CI/CD pipelines.</li>
</ul>`,
      },
      {
        title: 'Frontend Chapter Lead',
        start: { month: '7', year: '2019' },
        end: { month: '3', year: '2022' },
        // <p>I joined Tapsell as a junior front-end developer and as the company was growing I managed to gain trust and create a front-end chapter (we were only 2 front-end developers at the time) later by growing my team I had a huge impact on the quality of work in front-end teams of Tapsell.</p>
        desc: `
<ul>
<li>Led a team of 15+ frontend developers in multiple products</li>
<li>Conducted interviews for future candidates</li>
<li>Maintained multiple monorepo frontend (React, Angular & VanillaJS) projects</li>
<li>Spearheaded the development of a full-featured Angular library for Tapsell design system</li>
</ul>
`,
        // <p>Our front-end developers were working in separate teams without any interactions. By conducting weekly knowledge-sharing meetings and cross-team code review sessions, I was able to create a connected and targeted team. Besides, by creating a shared mono-repo library not only did we skip a lot of repeated work, but also we had more interactions as we were all working on the same project.</p
      },
      {
        title: 'Senior Frontend Engineer',
        start: { month: '10', year: '2017' },
        end: { month: '12', year: '2019' },
        // <p>I worked in 3 different teams, designed UIs, implemented front-end projects from scratch, and hired developers</p>
        desc: `
<ul>
<li>Designed the UI and Developed several analytical Angular and React dashboards</li>
<li>Developed SSG documentation platforms with React and Gatsby</li>
<li>Mentored front-end interns</li>
<li>Developed ad serving SDK project using Webpack + Svelte</li>
<li>Set up full CI/CD and tooling for code listing and deployment using GitLab CI, ESLint, and Stylelint.</li>
</ul>`,
      },
    ],
  },
  {
    icon: Mastermind,
    company: 'Teetap',
    country: 'Canada',
    type: 'part-time freelance',
    hideInResume: true,
    positions: [
      {
        title: 'Flutter Developer',
        start: { month: '2', year: '2020' },
        desc: `
        <p>A small team of friends working on two Flutter mobile games:</p>
`,
        // <ul>
        // <li>Mastermind Pro: a game based on the classic Mastermind</li>
        // <li>Abalone: an Abalone game for Android and iOS</li>
        // </ul>
      },
    ],
  },
  {
    icon: Klassroom,
    company: 'Klassroom',
    country: 'Canada',
    type: 'contract remote',
    hideInResume: true,
    positions: [
      {
        title: 'Senior Frontend Engineer',
        start: { month: '6', year: '2020' },
        end: { month: '12', year: '2020' },
        desc: `<ul><li>Developed two LMS panels with Angular with custom internal design system</li></ul>`,
      },
    ],
  },
];
