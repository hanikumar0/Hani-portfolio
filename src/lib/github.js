/**
 * Utility to fetch GitHub data using the Personal Access Token.
 * 
 * IMPORTANT: In a production environment, this should be handled through 
 * a secure backend proxy to avoid exposing your PAT in the browser.
 */

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export const fetchGitHubRepo = async (owner, repo) => {
    try {
        const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
            headers: {
                Authorization: `Bearer ${GITHUB_TOKEN}`,
                Accept: 'application/vnd.github.v3+json',
            },
        });

        if (!response.ok) throw new Error('Failed to fetch repository data');

        return await response.json();
    } catch (error) {
        console.error('GitHub API Error:', error);
        return null;
    }
};

export const fetchUserStats = async (username) => {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`, {
            headers: {
                Authorization: `Bearer ${GITHUB_TOKEN}`,
                Accept: 'application/vnd.github.v3+json',
            },
        });

        if (!response.ok) throw new Error('Failed to fetch user data');

        return await response.json();
    } catch (error) {
        console.error('GitHub User API Error:', error);
        return null;
    }
};

export const fetchUserEvents = async (username) => {
    try {
        const response = await fetch(`https://api.github.com/users/${username}/events/public`, {
            headers: {
                Authorization: `Bearer ${GITHUB_TOKEN}`,
                Accept: 'application/vnd.github.v3+json',
            },
        });

        if (!response.ok) throw new Error('Failed to fetch user events');

        const events = await response.json();
        // Calculate basic activity (e.g., pushes in the last week)
        const pushEvents = events.filter(e => e.type === 'PushEvent');
        return {
            recentActivity: events.length,
            recentPushes: pushEvents.length,
            latestRepo: pushEvents[0]?.repo?.name?.split('/')[1] || 'None',
        };
    } catch (error) {
        console.error('GitHub Events API Error:', error);
        return null;
    }
};
