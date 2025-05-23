import { Commentary } from "./Commentary";
import { Commit } from "./Commit";
import { Issue } from "./Issue";

export class Payload {
  repository_id: number;
  push_id: number;
  size: number;
  distinct_size: number;
  ref: string;
  head: string;
  before: string;
  commits: Commit[];
  action: string;
  issue: Issue;
  comment: Commentary;

  constructor(
    repository_id: number,
    push_id: number,
    size: number,
    distinct_size: number,
    ref: string,
    head: string,
    before: string,
    commits: Commit[],
    action: string,
    issue: Issue,
    comment: Commentary
  ) {
    this.repository_id = repository_id;
    this.push_id = push_id;
    this.size = size;
    this.distinct_size = distinct_size;
    this.ref = ref;
    this.head = head;
    this.before = before;
    this.commits = commits;
    this.action = action;
    this.issue = issue;
    this.comment = comment;
  }
}
