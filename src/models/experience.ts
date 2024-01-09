export interface WorkExperienceModel {
  icon: string;
  company: string;
  country: string;
  type: 'contract' | 'full time' | 'freelance';
  positions: WorkPositionModel[];
}

export interface WorkPositionModel {
  title: string;
  start: YearMonth;
  end?: YearMonth;
  desc: string;
}

export interface YearMonth {
  month: string;
  year: string;
}
