type GitHubRepo = {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  description: string | null;
};

export type RepoCard = {
  name: string;
  fullName: string;
  url: string;
  stars: number;
  forks: number;
  updatedAt: string;
  description: string;
};

export async function getFeaturedGitHubRepos(repoNames: string[]): Promise<RepoCard[]> {
  const token = process.env.GITHUB_TOKEN;
  const headers: HeadersInit = token ? { Authorization: `Bearer ${token}` } : {};

  const requests = repoNames.map(async (fullName) => {
    try {
      const response = await fetch(`https://api.github.com/repos/${fullName}`, {
        headers,
        next: { revalidate: 3600 }
      });

      if (!response.ok) {
        return null;
      }

      const repo = (await response.json()) as GitHubRepo;
      return {
        name: repo.name,
        fullName: repo.full_name,
        url: repo.html_url,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        updatedAt: repo.updated_at,
        description: repo.description ?? "No description provided."
      } satisfies RepoCard;
    } catch {
      return null;
    }
  });

  const repos = await Promise.all(requests);
  return repos.filter((repo): repo is RepoCard => repo !== null);
}

export type VideoCard = {
  id: string;
  title: string;
  embedUrl: string;
  thumbnailUrl: string;
};

export function getFeaturedVideos(videos: { id: string; title: string }[]): VideoCard[] {
  return videos.map((video) => ({
    id: video.id,
    title: video.title,
    embedUrl: `https://www.youtube.com/embed/${video.id}`,
    thumbnailUrl: `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`
  }));
}
