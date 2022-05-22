const Manager = require ('../lib/Manager');

test("get manager office", ()=>{
    const data = new Manager ("Anthony", "1", "email@gmail.com", "12")
    expect(data.getOfficeNumber()).toBe("12")
})