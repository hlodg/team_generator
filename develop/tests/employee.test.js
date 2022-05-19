const Employee = require ('../lib/Employee');

test("set name employee", ()=>{
    const  newemployee = new Employee("Anthony")
    expect(newemployee.name).toBe("Anthony")
})

test("get email returns email", ()=>{
    const emailtest = new Employee ("Anthony","1", "email@gmail.com" )
    expect(emailtest.getEmail()).toBe("email@gmail.com")
})

test("get id returns id", ()=>{
    const idtest = new Employee ("Anthony","1", "email@gmail.com" )
    expect(idtest.getId()).toBe("1")
})