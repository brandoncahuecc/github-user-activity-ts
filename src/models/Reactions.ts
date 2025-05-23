export class Reactions {
  url: string;
  total_count: number;
  "+1": number;
  "-1": number;
  laugh: number;
  hooray: number;
  confused: number;
  heart: number;
  rocket: number;
  eyes: number;

  constructor(
    url: string,
    total_count: number,
    laugh: number,
    hooray: number,
    confused: number,
    heart: number,
    rocket: number,
    eyes: number
  ) {
    this.url = url;
    this.total_count = total_count;
    this.laugh = laugh;
    this.hooray = hooray;
    this.confused = confused;
    this.heart = heart;
    this.rocket = rocket;
    this.eyes = eyes;
  }
}
