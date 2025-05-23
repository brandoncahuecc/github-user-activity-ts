export class ResponseActivity {
  user: string;
  repo_name: string;
  public: boolean;
  commits: CommitResponse[];
  issue: IssuesResponse | null;
  comment: CommentResponse | null;

  constructor(
    user: string,
    repo_name: string,
    is_public: boolean,
    commits: CommitResponse[],
    issue: IssuesResponse | null,
    comment: CommentResponse | null
  ) {
    this.user = user;
    this.repo_name = repo_name;
    this.public = is_public;
    this.commits = commits;
    this.issue = issue;
    this.comment = comment;
  }
}

export class CommitResponse {
  author: string;
  message: string;

  constructor(author: string, message: string) {
    this.author = author;
    this.message = message;
  }
}

export class IssuesResponse {
  title: string;
  user: string;
  labels: string[];
  state: string;
  locked: boolean;
  body: string;

  constructor(
    title: string,
    user: string,
    labels: string[],
    state: string,
    locked: boolean,
    body: string
  ) {
    this.title = title;
    this.user = user;
    this.labels = labels;
    this.state = state;
    this.locked = locked;
    this.body = body;
  }
}

export class CommentResponse {
  user: string;
  body: string;

  constructor(user: string, body: string) {
    this.user = user;
    this.body = body;
  }
}
