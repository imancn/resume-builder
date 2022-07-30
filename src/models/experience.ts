export interface WorkExperienceModel {
  icon: string;
  title: string;
  company: string;
  start: YearMonth;
  end?: YearMonth;
  desc: string;
  country: string;
  type: 'contract' | 'full time' | 'freelance';
}

export interface YearMonth {
  month: string;
  year: string;
}
