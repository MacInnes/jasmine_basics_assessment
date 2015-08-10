var code = require("../grader.js")

describe("letter grade function", function(){
  it("returns a letter grade for a given value between 0-100", function(){
    expect(code.letterGrader(95)).toEqual("A");
    expect(code.letterGrader(85)).toEqual("B");
    expect(code.letterGrader(75)).toEqual("C");
  });
  it("returns a + or - score for an appropriate letter grade", function(){
    expect(code.letterGrader(99)).toEqual("A+");
    expect(code.letterGrader(81)).toEqual("B-");
    expect(code.letterGrader(79)).toEqual("C+");
  });
  it("returns invalid input if the grade given is outside the range 0-100", function(){
    expect(code.letterGrader(-5)).toEqual("Invalid grade");
    expect(code.letterGrader(230)).toEqual("Invalid grade");
  })
});

describe("Average function", function(){
  it("returns the average value of a given array", function(){
    expect(code.average([1,2,3,4,5])).toEqual(3);
    expect(code.average([1,-1,2,-2,3,-3])).toEqual(0);
  })
});

describe("Median function", function(){
  it("returns the median value of an array", function(){
    expect(code.median([0,5,10])).toEqual(5);
    expect(code.median([1,2,3,4,5])).toEqual(3);
  });
  it("returns the average of the two median values in an even numbered array", function(){
    expect(code.median([0,4,6,10])).toEqual(5);
    expect(code.median([1,2,3,4,5,6])).toEqual(3.5);
  });
});

describe("Mode function", function(){
  it("returns the mode value of a given array", function(){
    expect(code.mode([1,2,3,2,3,2])).toEqual(2);
    expect(code.mode([2,2,4,4,4,3])).toEqual(4);
    expect(code.mode([1,1,1,1,1,2,3,4,5,6,7,8,9,0,0,0,0,1,1,3,3,4,5,12,12,12])).toEqual(1);
  })
})