import buildRepoUrl from "./buildRepoUrl";

describe("Can build the correct url", () => {
    
    test("Returns empty string when the username is length is 0", () => {
        // ARRANGE
        const username = ""; // fake object / data

        // ACT
        const result  = buildRepoUrl(username);

        // ASSERT
        expect(result).toBeNull()
    })

    test("Returns correct url when username is not null", () => {
        // ARRANGE
        const username = "bogdan"; // fake object / data
        
        // ACT
        const result  = buildRepoUrl(username);

        // ASSERT
        expect(result).toEqual("https://api.github.com/users/bogdan/repos")
    })
})