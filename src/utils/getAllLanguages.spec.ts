import getAllLanguages from "./getAllLanguages";

describe("Get All Languages", () => {
    
    test("Returns empty array when the repository list is empty", () => {
        // ARRANGE
        const repoList:Repository[] = []; // fake object / data

        // ACT
        const result  =getAllLanguages(repoList);

        // ASSERT
        expect(result).toEqual([])
    })

    test("Returns empty array when the repository list is empty", () => {
        // ARRANGE
        const repoList:Repository[] = [{
            id: "test",
            stargazers_count: 23,
            language: "Java"
        }]; // fake object / data

        // ACT
        const result  =getAllLanguages(repoList);

        // ASSERT
        expect(result).toEqual(["Java"])
    })

})