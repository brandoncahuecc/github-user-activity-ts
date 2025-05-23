import { Author } from "./Author";

export class Commit {
  sha: string;
  author: Author;
  message: string;
  distinct: boolean;
  url: string;

  constructor(
    sha: string,
    author: Author,
    message: string,
    distinct: boolean,
    url: string
  ) {
    this.sha = sha;
    this.author = author;
    this.message = message;
    this.distinct = distinct;
    this.url = url;
  }
}
