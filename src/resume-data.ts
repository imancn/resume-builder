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
<li>Augmented 'Campaign Management' APIs and Data Stream pipelines for the Search Ads project (an OpenRTB DSP integration with CafeBazaar).
<li>Forged the CafeBazaar Gateway to funnel event streams from 60M+ users into Kafka topics.
<li>Orchestrated the RTB EventStash system to distill 700M+ daily events, synthesize signals, and archive analytics.
<li>Devised and deployed an ETL pipeline that ingested raw advertising data, transformed it into structured analytics, and loaded it into a time-series database—enabling real-time performance tracking and trend analysis for 30K+ advertisers and publishers through interactive Kibana dashboards.
<li>Automated daily financial margin reports across six ad network types through scheduled email delivery.
<li>Chaired weekly sync-ups with the CafeBazaar engineering team to align cross-org tech initiatives.
<li>Pioneered a browser extension surfacing live ad zone stats across 18K+ websites.
<li>Remediated bugs, data anomalies, and operational issues across nine services.
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
<li>Published and maintained 40+ APIs in the 'User Service' to support user management across a distributed SOA ecosystem.
<li>Optimized API performance, cutting response times by up to 99%, and validated improvements with Apache JMeter load testing.
<li>Authored comprehensive test suites, achieving 87% branch and 95% condition coverage pre-development.
<li>Documented all APIs thoroughly, ensuring clarity and ease of integration for internal teams.
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
