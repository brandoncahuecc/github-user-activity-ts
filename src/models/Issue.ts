import { Label } from "./Label";
import { Reactions } from "./Reactions";
import { SubIssuesSummary } from "./SubIssuesSummary";
import { User } from "./User";

export class Issue {
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  id: number;
  node_id: string;
  number: number;
  title: string;
  user: User;
  labels: Label[];
  state: string;
  locked: boolean;
  assignee: object;
  assignees: object[];
  milestone: object;
  comments: number;
  created_at: Date;
  updated_at: Date;
  closed_at: Date;
  author_association: string;
  active_lock_reason: object;
  sub_issues_summary: SubIssuesSummary;
  body: string;
  reactions: Reactions;
  timeline_url: string;
  state_reason: string;

  constructor(
    url: string,
    repository_url: string,
    labels_url: string,
    comments_url: string,
    events_url: string,
    html_url: string,
    id: number,
    node_id: string,
    number: number,
    title: string,
    user: User,
    labels: Label[],
    state: string,
    locked: boolean,
    assignee: object,
    assignees: object[],
    milestone: object,
    comments: number,
    created_at: Date,
    updated_at: Date,
    closed_at: Date,
    author_association: string,
    active_lock_reason: object,
    sub_issues_summary: SubIssuesSummary,
    body: string,
    reactions: Reactions,
    timeline_url: string,
    state_reason: string
  ) {
    this.url = url;
    this.repository_url = repository_url;
    this.labels_url = labels_url;
    this.comments_url = comments_url;
    this.events_url = events_url;
    this.html_url = html_url;
    this.id = id;
    this.node_id = node_id;
    this.number = number;
    this.title = title;
    this.user = user;
    this.labels = labels;
    this.state = state;
    this.locked = locked;
    this.assignee = assignee;
    this.assignees = assignees;
    this.milestone = milestone;
    this.comments = comments;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.closed_at = closed_at;
    this.author_association = author_association;
    this.active_lock_reason = active_lock_reason;
    this.sub_issues_summary = sub_issues_summary;
    this.body = body;
    this.reactions = reactions;
    this.timeline_url = timeline_url;
    this.state_reason = state_reason;
  }
}
