import TapsellLogo from '@/assets/tapsell.png';
import TitLogo from '@/assets/tit-logo.png';
import Langujet from '@/assets/langujet-logo.webp';
import Digikala from '@/assets/digikala-logo.jpg';
import EscapingMoon from '@/assets/escaping-moon-logo.webp';
import type { WorkExperienceModel } from '@/models/experience';

// When I joined Huma, the frontend team was remote and disconnected. I brought the team together, established coding standards, implemented code review processes, and automated workflows. We managed to refactor the project and proactively improved the code style making it more consistent.
// "When I joined Huma, I unified the previously remote and disconnected frontend team by establishing cohesive coding standards, implementing robust code review processes, and automating workflows. This resulted in a successful project refactoring and proactive improvement of code style consistency.

export const WORK_EXPERIENCES: WorkExperienceModel[] = [
  {
    icon: Digikala,
    company: 'Digikala',
    country: 'Tehran, Iran',
    type: 'full-time',
    positions: [
      {
        title: 'Senior Software Engineer',
        start: { month: '7', year: '2023' },
        desc: `
<ul>
<li>Architected and spearheaded a Spring Boot service to quantify performance of 6,000+ warehouse staff, infer bottlenecks, and dispatch alerts across ops channels.
<li>Engineered a real-time tracker overseeing 340K+ daily product items awaiting shelf allocation.
<li>Curated Metabase dashboards to illuminate flow states across 100+ fulfillment centers.
<li>Eradicated +10 critical bugs root causes, slashing SQA tickets by 24%.
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
        title: 'Senior Software Engineer',
        start: { month: '4', year: '2021' },
        end: { month: '7', year: '2023' },
        // <p>After working at Tapsell for approximately 5 years, I leveraged my experience to establish and streamline processes, document tacit knowledge, develop developer handbooks, and implement a unified internal chat platform for the entire enterprise, spanning all products and teams across all Tapsell offices.</p>
        desc: `
<ul>
<li>Implemented and maintained minor features for the 'Campaign Management' APIs and Data Stream pipelines within the Search Ads project(an OpenRTB integration with CafeBazaar, serving as a Demand-Side Platform (DSP)).
<li>developed the CafeBazaar Gateway service to publish +60 Millon users events from the CafeBazzar services to a Kafka topic.
<li>built the CafeBazaar RTB EventStash to process +700 Million Events Per Day, synthesize new events, store statistical reports.
<li>Designed and implement an ETL (Extract, Transform, Load) pipeline that aggregates and delivers statistics of +30,000 advertisers and publishers the BI team via a Kibana Dashboard. 
<li>Created a scheduled email that provides a report on the financial margins of 6 types of ad networks types every 24 hours.
<li>Conducted weekly technical coordination meetings with the team from CafeBazaar company.
<li>Innovated a browser extension that provides statistics of Tapsell advertising zones on +18,000 websites.
<li>Did technical support, fix reported bugs, and data corruption for 9 Services.
</ul>`,
      },
    ],
  },
  {
    icon: TitLogo,
    company: 'Tourism Bank',
    country: 'Iran',
    type: 'full-time',
    positions: [
      {
        title: 'Junior Backend Developer',
        start: { month: '1', year: '2020' },
        end: { month: '4', year: '2021' },
        // <p>After working at Tapsell for approximately 5 years, I leveraged my experience to establish and streamline processes, document tacit knowledge, develop developer handbooks, and implement a unified internal chat platform for the entire enterprise, spanning all products and teams across all Tapsell offices.</p>
        desc: `
<ul>
<li>Published +40 APIs within the 'User Service' to handle users across entire projects in an SOA system as a team member.
<li>Improved APIs performance, reduced response time to 1% and provided Apache JMeter load test results for each API.
<li>Wrote tests by 87% branch coverage and 95% condition coverage for each API before developing them.
<li>Wrote API documents for each APIs.
</ul>`,
      },
    ],
  },
  {
    icon: Langujet,
    company: 'Langujet',
    country: 'France',
    type: 'part-time remote',
    hideInResume: true,
    positions: [
      {
        title: 'Co Founder',
        start: { month: '1', year: '2023' },
        desc: `<p>Developing a platform name Lngujet to improving users language skills.</p>`,
      },
    ],
  },
  {
    icon: EscapingMoon,
    company: 'Escaping Moon Game',
    country: 'Tehran, Iran',
    type: 'self employed',
    hideInResume: true,
    positions: [
      {
        title: 'Software Engineer',
        start: { month: '6', year: '2019' },
        end: { month: '12', year: '2019' },
        desc: `<ul><li>Developed a story based mini game.</li></ul>`,
      },
    ],
  },
];
