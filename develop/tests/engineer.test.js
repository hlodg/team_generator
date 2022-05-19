const Engineer = require ('../lib/Engineer');

test("get github", ()=>{
    const githubtest = new Engineer ("Anthony", "1", "email@gmail.com", "github")
    expect(githubtest.getGithub()).toBe("github")
})