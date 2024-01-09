import TapsellLogo from '@/assets/tapsell.png';
import logo from '@/assets/logo.svg';
import MetrixLogo from '@/assets/metrix.png';
import type { WorkExperienceModel } from '@/models/experience';

export const WORK_EXPERIENCES: WorkExperienceModel[] = [
  {
    icon: logo,
    company: 'Huma',
    country: 'England',
    type: 'full time',
    positions: [
      {
        title: 'Lead Frontend Engineer',
        start: { month: '11', year: '2022' },
        desc: `
    <p>When I joined Huma, the frontend team was remote and disconnected. I brought the team together, established coding standards, implemented code review processes, and automated workflows. We managed to refactor the project and proactively improved the code style making it more consistent.</p>
<span>Some of my responsibilities:</span>
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
    type: 'full time',
    positions: [
      {
        title: 'Director of Technical Operations',
        start: { month: '3', year: '2022' },
        end: { month: '9', year: '2022' },
        desc: `<ul>
<li>Facilitate technical operations and procedures like onboarding, knowledge sharing, code quality, etc.</li>
<li>Assist tech teams in workflow, communication, and documentation.</li>
<li>Increase developers' performance by studying and providing DevOps tools and enhancing their experience.</li>
<li>Directly work with the VP of Engineering to help manage engineering teams and provide solutions for processes.</li>
<li>Develop CLI tools with NodeJS and implement CI/CD pipelines.</li>
</ul>`,
      },
      {
        title: 'Frontend Chapter Lead',
        start: { month: '7', year: '2019' },
        end: { month: '3', year: '2022' },
        desc: `<p>I joined Tapsell as a junior front-end developer and as the company was growing I managed to gain trust and create a front-end chapter (we were only 2 front-end developers at the time) later by growing my team I had a huge impact on the quality of work in front-end teams of Tapsell.</p>
<span>My main responsibilities:</span>
<ul>
<li>Lead a team of 15+ frontend developers in multiple products</li>
<li>Do interviews for future candidates</li>
<li>Maintain multiple monorepo frontend (React, Angular & VanillaJS) projects</li>
<li>Main developer of a full-featured Angular library for Tapsell design system</li>
</ul>
<p>Our front-end developers were working in separate teams without any interactions. By conducting weekly knowledge-sharing meetings and cross-team code review sessions, I was able to create a connected and targeted team. Besides, by creating a shared mono-repo library not only did we skip a lot of repeated work, but also we had more interactions as we were all working on the same project.</p`,
      },
      {
        title: 'Frontend Engineer',
        start: { month: '10', year: '2017' },
        end: { month: '7', year: '2019' },
        desc: `
<ul>
<li>Maintain and develop two Angular Material complex panels</li>
<li>Maintain and develop a React panel with a custom UI Kit</li>
<li>Develop multiple ad widget projects using Webpack + Svelte</li>
<li>Develop WordPress blogs and landing pages using React + Gatsby</li>
</ul>`,
      },
    ],
  },
  {
    icon: logo,
    company: 'Teetap',
    country: 'Canada',
    type: 'freelance',
    positions: [
      {
        title: 'Flutter Developer',
        start: { month: '2', year: '2020' },
        end: { month: '9', year: '2021' },
        desc: 'Teetap is a small remote team of flutter game developers.',
      },
    ],
  },
  {
    icon: logo,
    company: 'Klassroom',
    country: 'Canada',
    type: 'contract',
    positions: [
      {
        title: 'Frontend Team Lead',
        start: { month: '6', year: '2020' },
        end: { month: '12', year: '2020' },
        desc: 'Teetap is a small remote team of flutter game developers.',
      },
    ],
  },
  {
    icon: MetrixLogo,
    company: 'Metrix',
    country: 'Iran',
    type: 'contract',
    positions: [
      {
        title: 'Senior Frontend Engineer',
        start: { month: '6', year: '2018' },
        end: { month: '12', year: '2019' },
        desc: `<ul>
        <li>Design UI and Develop two advanced analytical Angular panels single-handedly</li>
<li>Develop an SSG documentation platform with Jekyll + Gulp</li>
<li>Mentor two front-end interns</li>
</ul>
`,
      },
    ],
  },
];
