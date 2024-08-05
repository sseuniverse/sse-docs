import axios from "axios";

interface NpmDownloadsResponse {
  downloads: number;
}

interface GithubRelease {
  id: number;
  name: string;
  tag_name: string;
}

export async function getNpmDownloads(packageName: string): Promise<number> {
  const response = await axios.get(
    `https://api.npmjs.org/downloads/point/last-month/${packageName}`
  );
  const data: NpmDownloadsResponse = response.data;
  return data.downloads;
}

export async function getVersion(packageName: string): Promise<number> {
  const response = await axios.get(`https://registry.npmjs.org/${packageName}/latest`)
  const data = response.data;
  return data.version;
}

export default getNpmDownloads;
