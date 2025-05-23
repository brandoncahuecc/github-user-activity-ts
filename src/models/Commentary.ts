import { Reactions } from "./Reactions";
import { User } from "./User";

export class Commentary {
  url: string;
  html_url: string;
  issue_url: string;
  id: object;
  node_id: string;
  user: User;
  created_at: Date;
  updated_at: Date;
  author_association: string;
  body: string;
  reactions: Reactions;

  constructor(
    url: string,
    html_url: string,
    issue_url: string,
    id: object,
    node_id: string,
    user: User,
    created_at: Date,
    updated_at: Date,
    author_association: string,
    body: string,
    reactions: Reactions
  ) {
    this.url = url;
    this.html_url = html_url;
    this.issue_url = issue_url;
    this.id = id;
    this.node_id = node_id;
    this.user = user;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.author_association = author_association;
    this.body = body;
    this.reactions = reactions;
  }
}
