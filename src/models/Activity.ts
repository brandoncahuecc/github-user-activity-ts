import { Actor } from "./Actor";
import { Payload } from "./Payload";
import { Repo } from "./Repo";

export class Activity {
  id: string;
  type: string;
  actor: Actor;
  repo: Repo;
  payload: Payload;
  public: boolean;
  created_at: Date;

  constructor(
    id: string,
    type: string,
    actor: Actor,
    repo: Repo,
    payload: Payload,
    is_public: boolean,
    created_at: Date
  ) {
    this.id = id;
    this.type = type;
    this.actor = actor;
    this.repo = repo;
    this.payload = payload;
    this.public = is_public;
    this.created_at = created_at;
  }
}
