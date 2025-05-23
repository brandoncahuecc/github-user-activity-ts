export class SubIssuesSummary {
  total: number;
  completed: number;
  percent_completed: number;

  constructor(total: number, completed: number, percent_completed: number) {
    this.total = total;
    this.completed = completed;
    this.percent_completed = percent_completed;
  }
}
