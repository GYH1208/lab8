// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// isPhone number function
test('Is this a valid phone number?', () =>{

    expect(functions.isPhoneNumber("425-393-1752")).toBe(true);
});

test('Is this a valid phone number?', () =>{

    expect(functions.isPhoneNumber("425-219-7352")).toBe(true);
  
});

test('Is this a valid phone number?', () =>{

    expect(functions.isPhoneNumber("25252352353225235")).toBe(false);
});

test('Is this a valid phone number?', () =>{

    expect(functions.isPhoneNumber("fgsyufbsb")).toBe(false);
});

//check email
test('Is this a valid email?', () =>{

    //expect("geyuheng1208@gmail.com").toBe(true);
   expect(functions.isEmail("geyuheng1208@gmail.com")).toBe(true);
});

test('Is this a valid email?', () =>{
    expect(functions.isEmail("y5ge@ucsd.edu")).toBe(true);
   
});

test('Is this a valid email?', () =>{

    expect(functions.isEmail("42gdgsdgsdg")).toBe(false);
});

test('Is this a valid email?', () =>{
    expect(functions.isEmail("gg")).toBe(false);
});


//check strong password
test('Is this a strong password?', () =>{
    expect(functions.isStrongPassword("g12323")).toBe(true);

});

test('Is this a strong password?', () =>{

    expect(functions.isStrongPassword("g543221")).toBe(true);
});

test('Is this a strong password?', () =>{

    expect(functions.isStrongPassword("*)(*(&)^&(^*^")).toBe(false);
});

test('Is this a strong password?', () =>{

    expect(functions.isStrongPassword("12313313123213123213")).toBe(false);
});

//check date
test('Is this a valid date?', () =>{
   expect(functions.isDate("12/08/2000")).toBe(true);
    //expect("12/08/2000").toBe(true);
});

test('Is this a valid date?', () =>{

    expect(functions.isDate("12/9/2000")).toBe(true);
});

test('Is this a valid date?', () =>{

    expect(functions.isDate("12/08/2000898")).toBe(false);
});

test('Is this a valid date?', () =>{

    expect(functions.isDate("12132/0338/2000898")).toBe(false);
});

//check color 
test('Is this a valid color?', () =>{
     expect(functions.isHexColor("#ffffff")).toBe(true);
    
});

test('Is this a valid color?', () =>{

    expect(functions.isHexColor("#aaaaaa")).toBe(true);
});

test('Is this a valid color?', () =>{

    expect(functions.isHexColor("252aaaaaa")).toBe(false);
});

test('Is this a valid color?', () =>{

    expect(functions.isHexColor("nothing")).toBe(false);
});