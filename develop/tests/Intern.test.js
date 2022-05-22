const Intern = require ('../lib/Intern');

test("get school", ()=>{
    const data = new Intern ("Anthony", "1", "email@gmail.com", "UofM")
    expect(data.getSchool()).toBe("UofM")
})