import { GithubApi } from "../api/GithubApi";
import { Activity } from "../models/Activity";
import { Commit } from "../models/Commit";
import { Label } from "../models/Label";
import {
  CommentResponse,
  CommitResponse,
  IssuesResponse,
  ResponseActivity,
} from "../models/ResponseActivity";

export class GithubService {
  private readonly githubApi: GithubApi;

  constructor() {
    this.githubApi = new GithubApi("https://api.github.com");
  }

  async getUserActivity(userName: string): Promise<ResponseActivity[]> {
    const activities: Activity[] = await this.githubApi.getUserActivity(
      userName
    );

    const response: ResponseActivity[] = activities.map(
      (activity: Activity) => {
        const { actor, repo, payload, public: is_public } = activity;

        const commitResp: CommitResponse[] = payload.commits?.map(
          (commit: Commit) => {
            return new CommitResponse(commit.author.name, commit.message);
          }
        );

        const labelsResp: string[] = payload.issue?.labels?.map(
          (item: Label) => {
            return item.name;
          }
        );

        let issueResp: IssuesResponse | null = null;
        if (payload.issue) {
          issueResp = new IssuesResponse(
            payload.issue?.title,
            payload.issue?.user.login,
            labelsResp,
            payload.issue?.state,
            payload.issue?.locked,
            payload.issue?.body
          );
        }

        let commentResp: CommentResponse | null = null;
        if (payload.comment) {
          commentResp = new CommentResponse(
            payload.comment?.user.login,
            payload.comment?.body
          );
        }

        const resp: ResponseActivity = new ResponseActivity(
          actor.login,
          repo.name,
          is_public,
          commitResp,
          issueResp,
          commentResp
        );
        return resp;
      }
    );

    return response;
  }
}
