/**
 * Utility to fetch GitHub data using the Personal Access Token.
 * 
 * IMPORTANT: In a production environment, this should be handled through 
 * a secure backend proxy to avoid exposing your PAT in the browser.
 */

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

/**
 * Helper to get headers based on token availability
 */
const getHeaders = () => {
    const headers = {
        'Accept': 'application/vnd.github.v3+json',
    };
    
    // Only add Authorization if token looks valid and isn't a placeholder
    if (GITHUB_TOKEN && (GITHUB_TOKEN.startsWith('ghp_') || GITHUB_TOKEN.startsWith('github_pat_'))) {
        headers['Authorization'] = `Bearer ${GITHUB_TOKEN}`;
    }
    
    return headers;
};

/**
 * Robust fetch wrapper with fallback for 401/403
 */
const githubFetch = async (url) => {
    const headers = getHeaders();
    
    try {
        let response = await fetch(url, { headers });
        
        // If 401 (Unauthorized) and we were using a token, try one last time without the token
        if (response.status === 401 && headers.Authorization) {
            console.warn(`GitHub API 401: Token invalid, retrying without auth for ${url}`);
            const { Authorization, ...publicHeaders } = headers;
            response = await fetch(url, { headers: publicHeaders });
        }
        
        if (!response.ok) {
            if (response.status === 403) {
                console.warn('GitHub API 403: Rate limit reached. Using fallback data.');
            }
            return null;
        }

        return await response.json();
    } catch (error) {
        console.error(`GitHub API Error for ${url}:`, error);
        return null;
    }
};

export const fetchGitHubRepo = async (owner, repo) => {
    return await githubFetch(`https://api.github.com/repos/${owner}/${repo}`);
};

export const fetchUserStats = async (username) => {
    return await githubFetch(`https://api.github.com/users/${username}`);
};

export const fetchUserEvents = async (username) => {
    const events = await githubFetch(`https://api.github.com/users/${username}/events/public`);
    
    if (!events || !Array.isArray(events)) return null;

    // Calculate basic activity (e.g., pushes in the last week)
    const pushEvents = events.filter(e => e.type === 'PushEvent');
    return {
        recentActivity: events.length,
        recentPushes: pushEvents.length,
        latestRepo: pushEvents[0]?.repo?.name?.split('/')[1] || 'None',
    };
};
