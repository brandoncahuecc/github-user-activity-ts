import { Activity } from "../models/Activity";

export class GithubApi {
  private readonly baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async getUserActivity(userName: string): Promise<Activity[]> {
    const url = `${this.baseUrl}/users/${userName}/events`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching user activity: ${response.statusText}`);
    }
    const activities: Activity[] = await response.json();
    return activities;
  }
}
