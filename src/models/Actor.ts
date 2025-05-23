export class Actor {
  id: number;
  login: string;
  display_login: string;
  gravatar_id: string;
  url: string;
  avatar_url: string;

  constructor(
    id: number,
    login: string,
    display_login: string,
    gravatar_id: string,
    url: string,
    avatar_url: string
  ) {
    this.id = id;
    this.login = login;
    this.display_login = display_login;
    this.gravatar_id = gravatar_id;
    this.url = url;
    this.avatar_url = avatar_url;
  }
}
