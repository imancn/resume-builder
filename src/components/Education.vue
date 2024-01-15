<script setup lang="ts">
import UtLogo from '@/assets/university-of-tehran.jpeg';
// function getWholeDateRangeLength() {
//   const endPosition = props.work.positions[0];
//   const startPosition = props.work.positions[props.work.positions.length - 1];
//   if (!startPosition || !endPosition) throw new Error('No positions found');
//   return getDateRangeLengthBetweenPositions(startPosition, endPosition);
// }
function getPositionDateRangeLength(position: WorkPositionModel) {
  return getDateRangeLengthBetweenPositions(position, position);
}
function getDateRangeLengthBetweenPositions(
  startPosition: WorkPositionModel,
  endPosition: WorkPositionModel,
) {
  const endPositionEnd = endPosition.end;
  const endYear = endPositionEnd && parseInt(endPositionEnd.year, 10);
  const endMonth = endPositionEnd && parseInt(endPositionEnd.month, 10);

  const startPositionStart = startPosition.start;
  const startYear = parseInt(startPositionStart.year, 10);
  const startMonth = parseInt(startPositionStart.month, 10);
  const nowDate = new Date();

  const years: number = endYear ? endYear - startYear : nowDate.getFullYear() - startYear;
  const months = endMonth ? endMonth - startMonth : nowDate.getMonth() + 1 - startMonth;
  const totalMonths = years * 12 + months;

  return totalMonths <= 1
    ? '1 month'
    : totalMonths < 12
    ? `${totalMonths} months`
    : totalMonths % 12 === 0
    ? `${totalMonths / 12}+ years`
    : `${Math.floor(totalMonths / 12)}${totalMonths % 12 >= 6 ? '.5' : ''}+ years`;
}
function getMonthName(monthNumber: string) {
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];
  return monthNames[parseInt(monthNumber) - 1];
}
</script>

<template>
  <div class="company-work-exp">
    <div class="education">
      <div class="company-icon">
        <img :src="UtLogo" alt="University of Tehran" width="40" height="40" />
      </div>

      <h3 class="title">University of Tehran</h3>
      <div class="company">
        <span class="company-name">Bachelor's degree, Computer Software Engineering</span>
      </div>

      <div class="time">
        <span class="position-date-range">2015 - 2019</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.education {
  display: grid;
  grid-template-areas: 'icon title time' 'icon company time' 'empty desc desc';
  grid-template-rows: auto auto 1fr;
  grid-template-columns: 3.5rem 1fr auto;
  margin-bottom: 0.75rem;
  &:last-child {
    @media not print {
      margin-bottom: 1.5rem;
    }
  }
  @media print {
    break-inside: avoid;
  }
}
.company-icon {
  grid-area: icon;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-inline-end: 0.75rem;
  > img {
    max-width: 100%;
  }
}
.nested-position-company-placeholder {
  grid-area: icon;
  place-self: center;
  margin-inline-end: 0.75rem;
}
.nested-position-bullet {
  aspect-ratio: 1/1;
  width: 10px;
  background: #ddd;
  border-radius: 10px;
  display: inline-block;
  box-shadow: 0 0 0 2px #fff, 0 0 0 3px #ddd;
}
.time {
  grid-area: time;
  display: flex;
  align-items: center;
  text-transform: capitalize;
}
.position-date-range {
  color: var(--text-3);
}
.company {
  grid-area: company;
  text-transform: capitalize;
  font-weight: bold;
  color: var(--text-2);
}
.company-name {
  //font-weight: bold;
  //color: var(--text-3);
}
.job-type {
  color: var(--text-3);
  font-weight: normal;
}
.position-time {
  margin-inline-start: 0.75rem;
  font-weight: normal;
  font-style: italic;
  color: var(--text-3);
}
.job-title {
  grid-area: title;
  line-height: 22px;
}
.education {
  &:not(:last-child) {
    .job-desc {
      &:before {
        content: '';
        position: absolute;
        inset-inline-start: -2.1rem;
        height: calc(100% - 1rem);
        width: 1px;
        background: #ddd;
        top: 0.75rem;
      }
    }
  }
}
.job-desc {
  grid-area: desc;
  margin-top: 0.25rem;
  position: relative;
}
</style>
<style lang="scss">
.job-desc {
  > p:not(:last-child) {
    margin-block-end: 0.75rem;
  }
  > ul {
    margin-block-end: 0.75rem;
    padding-inline-start: 1.5rem;
  }
  > li {
  }
}
</style>
