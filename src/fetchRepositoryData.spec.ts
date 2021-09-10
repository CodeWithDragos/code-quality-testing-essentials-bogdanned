import fetchRepositoryData from "./fetchRepositoryData";
import nock from "nock";


// Stub of the buildRepoUrl file 
jest.mock('./utils/buildRepoUrl.ts', () => {
    return {
        __esModule: true,
        default:jest.fn(() => 'http://test_url.com'),
    };
});


describe("Can fetch repositories correctly", () => {
    // ARRANGE
    test("Returns the right repo arrays", async () => {
        // ARRANGE
        // Fake / Dummy Object
        const username = "test_username";

        // Mock: a repository list for testing
        const testRepositoryList = [{
            id: "34",
            stargazers_count: 30,
            language: "Java"
        }]

        // Stub for the fetch request
        nock('http://test_url.com')
            .get('/')
            .reply(200, testRepositoryList, {
                'Content-Type': 'application/json',
            });


        // ACT
        const result = await fetchRepositoryData(username)
        
        // ASSERT
        expect(result).toEqual(testRepositoryList)
    })

    test("Returns empty if there was an error in the fetch", async () => {
        // ARRANGE
        // Fake / Dummy Object
        const username = "test_username";

        // Stub for the fetch request
        nock('http://test_url.com')
            .get('/')
            .reply(500);


        // ACT
        const result = await fetchRepositoryData(username)
        
        // ASSERT
        expect(result).toEqual([])
    })
})