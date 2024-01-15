import TapsellLogo from '@/assets/tapsell.png';
import logo from '@/assets/logo.svg';
import Mastermind from '@/assets/mastermind-logo.png';
import Huma from '@/assets/humaforhealth_logo.jpeg';
import Klassroom from '@/assets/klassroom.jpeg';
import type { WorkExperienceModel } from '@/models/experience';

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
    <p>When I joined Huma, the frontend team was remote and disconnected. I brought the team together, established coding standards, implemented code review processes, and automated workflows. We managed to refactor the project and proactively improved the code style making it more consistent.</p>
<ul>
<li>Lead a team of 15-20 Angular frontend developers</li>
<li>Set up full CI/CD and tooling for code listing, integrated testing, QA, visual testing, and deployment using GitHub actions, ESLint, Stylelint, SonarCube, Jest, Storybook, and Chromatic.</li>
<li>Establish coding guidelines, team documentation, and personal growth roadmap for team members</li>
<li>Do interviews for future candidates</li>
<li>Maintain multiple frontend Angular projects including multiple internal NPM packages.</li>
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
        desc: `<p>After working at Tapsell for approximately 5 years, I leveraged my experience to establish and streamline processes, document tacit knowledge, develop developer handbooks, and implement a unified internal chat platform for the entire enterprise, spanning all products and teams across all Tapsell offices.</p>
<ul>
<li>Facilitate technical operations and procedures like onboarding, knowledge sharing, code quality, etc.</li>
<li>Assist tech teams in workflow, communication, and documentation.</li>
<li>Increase developers' performance by studying and providing DevOps tools and enhancing their experience.</li>
<li>Directly work with the VP of Engineering to help manage engineering teams and provide solutions for processes.</li>
<li>Develop CLI tools and chat bots with Node.js and implement CI/CD pipelines.</li>
</ul>`,
      },
      {
        title: 'Frontend Chapter Lead',
        start: { month: '7', year: '2019' },
        end: { month: '3', year: '2022' },
        desc: `<p>I joined Tapsell as a junior front-end developer and as the company was growing I managed to gain trust and create a front-end chapter (we were only 2 front-end developers at the time) later by growing my team I had a huge impact on the quality of work in front-end teams of Tapsell.</p>
<ul>
<li>Lead a team of 15+ frontend developers in multiple products</li>
<li>Do interviews for future candidates</li>
<li>Maintain multiple monorepo frontend (React, Angular & VanillaJS) projects</li>
<li>Main developer of a full-featured Angular library for Tapsell design system</li>
</ul>
<p>Our front-end developers were working in separate teams without any interactions. By conducting weekly knowledge-sharing meetings and cross-team code review sessions, I was able to create a connected and targeted team. Besides, by creating a shared mono-repo library not only did we skip a lot of repeated work, but also we had more interactions as we were all working on the same project.</p`,
      },
      {
        title: 'Senior Frontend Engineer',
        start: { month: '6', year: '2018' },
        end: { month: '12', year: '2019' },
        desc: `
<p>I worked in 3 different teams, designed UIs, implemented front-end projects from scratch, and hired developers</p>
<ul>
        <li>Design UI and Develop three advanced analytical Angular panels single-handedly</li>
<li>Develop an SSG documentation platform with Jekyll + Gulp</li>
<li>Mentor two front-end interns</li>
</ul>
`,
      },
      {
        title: 'Frontend Engineer',
        start: { month: '10', year: '2017' },
        end: { month: '6', year: '2018' },
        desc: `
<ul>
<li>Maintain and develop two Angular Material complex panels</li>
<li>Maintain and develop a React panel with a custom UI Kit</li>
<li>Develop multiple ad widget projects using Webpack + Svelte</li>
<li>Develop WordPress blogs and landing pages using React + Gatsby</li>
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
    positions: [
      {
        title: 'Flutter Developer',
        start: { month: '2', year: '2020' },
        desc: `
        <p>A small team of friends working on Flutter mobile games:</p>
        <ul>
<li>Mastermind Pro: a game based on the classic Mastermind</li>
<li>Abalone: an Abalone game for Android and iOS</li>
</ul>
`,
      },
    ],
  },
  {
    icon: Klassroom,
    company: 'Klassroom',
    country: 'Canada',
    type: 'contract remote',
    positions: [
      {
        title: 'Senior Frontend Engineer',
        start: { month: '6', year: '2020' },
        end: { month: '12', year: '2020' },
        desc: `<ul><li>Develop two LMS panels with Angular with custom internal design system</li></ul>`,
      },
    ],
  },
];
