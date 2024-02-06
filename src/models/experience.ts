export interface WorkExperienceModel {
  icon: any;
  company: string;
  country: string;
  type: 'contract' | 'full-time' | 'part-time freelance' | 'freelance' | 'contract remote' | string;
  positions: WorkPositionModel[];
  hideInResume?: boolean;
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
