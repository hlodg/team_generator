const Engineer = require ('../lib/Intern');

test("get school", ()=>{
    const githubtest = new Intern ("Anthony", "1", "email@gmail.com", "UofM")
    expect(githubtest.getSchool()).toBe("UofM")
})