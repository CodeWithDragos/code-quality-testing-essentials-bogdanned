function buildRepoUrl(username: string): string{
    //Brach
    if(username.length === 0) {
        return null
    }
    // Branch
    return `https://api.github.com/users/${username}/repos`
}

export default buildRepoUrl;
