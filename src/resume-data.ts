import TapsellLogo from '@/assets/tapsell.png';
import TitLogo from '@/assets/tit-logo.png';
import Langujet from '@/assets/langujet-logo.webp';
import Digikala from '@/assets/digikala-logo.jpg';
import Invex from '@/assets/invex-logo.webp';
import EscapingMoon from '@/assets/escaping-moon-logo.webp';
import type { WorkExperienceModel } from '@/models/experience';

export const WORK_EXPERIENCES: WorkExperienceModel[] = [
  {
    icon: Invex,
    company: 'Invex',
    country: 'Tehran, Iran',
    type: 'full-time',
    positions: [
      {
        title: 'Data Engineer',
        start: { month: '4', year: '2025' },
        desc: `
<ul>
<li>Built and open-sourced production Data Warehouse Stack for real-time CDC from PostgreSQL to ClickHouse, enabling unified analytics across SOA microservices.
</ul>`,
      },
    ],
  },{
    icon: Digikala,
    company: 'Digikala',
    country: 'Tehran, Iran',
    type: 'full-time',
    positions: [
      {
        title: 'Software Engineer',
        start: { month: '7', year: '2023' },
        end: { month: '4', year: '2025' },
        desc: `
<ul>
<li>Led a team of 3 to architect and deliver a Spring Boot service ahead of deadline, quantifying performance for 6,000+ warehouse staff, identifying bottlenecks, and triggering alerts across operational channels.
<li>Implemented a real-time tracker overseeing 340K+ daily product items awaiting shelf allocation.
<li>Created Metabase dashboards to illuminate flow states across 3 fulfillment centers and +50 hub.
<li>Fixed +10 critical bugs root causes, caused SQA tickets reduces by 24%.
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
        title: 'Software Engineer',
        start: { month: '4', year: '2021' },
        end: { month: '7', year: '2023' },
        desc: `
<ul>
<li>Developed the CafeBazaar Discovery Ad OpenRTB DSP integration services such as Gateway, EventStash to funnel event streams from 60M+ users into Kafka topics and to distill 700M+ daily events, synthesize signals, and archive analytics.
<li>Devised and deployed an ETL pipeline that ingested advertising data, transformed it into structured analytics, and loaded it into a time-series database enabling tracking and trend analysis for 30K+ advertisers and publishers via interactive Kibana dashboards.
<li>Automated daily financial margin reports across 6 Ad Network types through scheduled email delivery.
<li>Chaired weekly sync-ups with the CafeBazaar engineering team to align cross-org tech initiatives.
<li>Maitained 'Campaign Management' APIs and Data Stream pipelines for the CafeBazaar Search Ads project
<li>Pioneered a browser extension surfacing live ad zone stats across 18K+ websites.
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
        title: 'Backend Developer',
        start: { month: '1', year: '2020' },
        end: { month: '4', year: '2021' },
        desc: `
<ul>
<li>Published and maintained 16 APIs in the 'User Service' to support user management in a distributed SOA ecosystem, with thorough documentation to ensure seamless internal integration.
<li>Boosted API performance with up to 99% faster response times, validated via Apache JMeter load testing; developed comprehensive test suites achieving 87% branch and 95% condition coverage pre-development.
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
        desc: `<p>As Co-Founder of Langujet, I spearheaded the development of an AI-powered platform that democratizes access to high-quality language exam preparation. Recognizing the barriers posed by expensive and often subpar mock tests, we launched Langujet to offer free, expertly evaluated simulations for exams like IELTS, TOEFL, Duolingo, GRE, and PTE. Our platform combines advanced artificial intelligence with human expertise to provide accurate score estimations and personalized feedback, making language learning more accessible and effective for students worldwide.</p>`,
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
        desc: `<ul><li>As the solo developer and creator of Escaping Moon, I designed, built, and published a 2D arcade game using Unity and C#. The game challenges players to guide the moon through a chaotic asteroid field, combining fast-paced mechanics with minimalist space-themed visuals. Released in early 2020 on CafeBazaar, it has earned a 4.6-star rating from user reviews and over 100 downloads. I managed the full development cycle—from gameplay design and coding to graphic integration and publishing—gaining hands-on experience with Unity, object-oriented programming, Git, and mobile game deployment.</li></ul>`,
      },
    ],
  },
];
