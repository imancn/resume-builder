export interface WorkExperienceModel {
  icon: string;
  title: string;
  company: string;
  start: YearMonth;
  end?: YearMonth;
  desc: string;
}

export interface YearMonth {
	month: string;
	year: string
}