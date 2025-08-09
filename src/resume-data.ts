import TapsellLogo from '@/assets/tapsell.png';
import Mastermind from '@/assets/mastermind-logo.png';
import Huma from '@/assets/humaforhealth_logo.jpeg';
import Klassroom from '@/assets/klassroom.jpeg';
import type { WorkExperienceModel } from '@/models/experience';

export const WORK_EXPERIENCES: WorkExperienceModel[] = [
  {
    icon: Huma,
    company: 'Huma',
    country: 'London, UK',
    type: 'full-time',
    positions: [
      {
        title: 'Lead Frontend Engineer',
        start: { month: '11', year: '2022' },
        desc: `
<ul>
<li>Unified the remote and disconnected frontend teams and Led a team of 15-20 frontend engineers</li>
<li>Established CI/CD, code linting and integrated testing using ESLint, Stylelint, SonarCube, Jest, Storybook, and Chromatic. Reduced staging bugs by 60%, and CI time by 86%</li>
<li>Achieved a 20% decrease in bundle size by removing 10 dependencies, optimising configurations and optimising assets</li>
<li>Crafted 10+ pages of coding guidelines and process docs and established personalised growth roadmaps</li>
<li>Managed 3+ frontend React and Angular Typescript mono-repository projects, including internal NPM packages</li>
<li>Engineered an automated workflow, reducing task completion time by 50%, handling development, QA, and deployment</li>
</ul>`,
      },
    ],
  },
  {
    icon: TapsellLogo,
    company: 'Tapsell',
    country: 'Iran',
    type: 'full-time',
    positions: [
      {
        title: 'Director of Technical Operations',
        start: { month: '3', year: '2022' },
        end: { month: '9', year: '2022' },
        desc: `
<ul>
<li>Facilitated technical operations including onboarding, communication, knowledge sharing, code quality, and handover</li>
<li>Directed tech teams in workflow, communication, and documentation automating 10+ complex internal processes</li>
<li>Created CLI tools and chat bots with Node.js and implemented CI/CD pipelines</li>
</ul>`,
      },
      {
        title: 'Frontend Chapter Lead',
        start: { month: '7', year: '2019' },
        end: { month: '2', year: '2022' },
        desc: `
<ul>
<li>Led the frontend chapter of 20+ Angular, React, and Vue web developers in more than 5 products working as agile teams</li>
<li>Conducted interviews and hired 10+ frontend engineers and coached 10+ interns</li>
<li>Maintained 10+ frontend (React, Angular, Vue 3 and Typescript) SSR, PWA, and complex analytical dashboards</li>
<li>Spearheaded the development of a full-featured Angular library for internal design system including an SSO platform</li>
</ul>
`,
      },
      {
        title: 'Senior Frontend Engineer',
        start: { month: '10', year: '2017' },
        end: { month: '12', year: '2019' },
        desc: `
<ul>
<li>Designed the UI and implemented 6 analytical Angular and React data visualisation panels</li>
<li>Developed 3 SSG documentation platforms with React + Gatsby and 2 ad-serving SDKs using Webpack + Svelte</li>
<li>Drafted testing projects, Interviewed and mentored 5 front-end interns in React and Angular</li>
<li>Set up full CI and tooling for linting and deployment using GitLab CI, ESLint, and Stylelint for 10+ frontend projects</li>
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
