import { SECURITY_TOKEN } from "../api-config";

export default class FilesApi {

    static async getFilesPerProject(projectId, path, recursive = false, domain = "gitlab.com", branch = "master") {
        try {
            const response = await fetch(new Request(`https://${domain}/api/v4/projects/${projectId}/repository/` +
                `tree?ref=${branch}&recursive=${recursive}&path=${path}`, {
                method: 'GET',
                headers: new Headers({
                    "PRIVATE-TOKEN": SECURITY_TOKEN
                })
            }));
            return response.json();
        }
        catch (err) {
            return err;
        }
    }

    static async getFileData(domain = "gitlab.com", projectId = "12395599", path = "/", branch = "master") {
        try {
            const url = `https://${domain}/api/v4/projects/${projectId}/repository/files/${path}?ref=${branch}`;
            const response = await fetch(new Request(url, {
                method: 'GET',
                headers: new Headers({
                    "PRIVATE-TOKEN": SECURITY_TOKEN
                })
            }));
            return response.json();
        }
        catch (err) {
            return err;
        }
    }
}