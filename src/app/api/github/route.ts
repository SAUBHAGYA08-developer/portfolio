import { NextResponse } from "next/server";
import { GITHUB_CONFIG } from "@/config/portfolio.config";

export interface GithubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  fork: boolean;
  updated_at: string;
}

export async function GET() {
  if (!GITHUB_CONFIG.enabled) {
    return NextResponse.json({ error: "GitHub integration is disabled" }, { status: 404 });
  }

  try {
    const { username, reposToShow, excludeForks } = GITHUB_CONFIG;

    const res = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=20&type=public`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          ...(process.env.GITHUB_TOKEN
            ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
            : {}),
        },
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: `GitHub API error: ${res.status}` },
        { status: res.status }
      );
    }

    const repos: GithubRepo[] = await res.json();

    const filtered = repos
      .filter((r) => !excludeForks || !r.fork)
      .filter((r) => r.description) // Only repos with descriptions
      .slice(0, reposToShow);

    return NextResponse.json(filtered);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch GitHub repos" },
      { status: 500 }
    );
  }
}
