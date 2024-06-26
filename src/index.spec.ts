import { diamond, buildRow, print, computeTopHalfEquivalentIndex } from ".";

describe("Test of buildRow", () => {
  test("Dimension 1, middle line", () => {
    expect(buildRow(1)(0)).toEqual(["*"]);
  });

  test("Dimension 3, middle line", () => {
    expect(buildRow(3)(1)).toEqual(["*", "*", "*"]);
  });

  test("[Triangulation] Dimension 5, middle line", () => {
    expect(buildRow(5)(2)).toEqual(["*", "*", "*", "*", "*"]);
  });

  test("Dimension 3, intermediary line", () => {
    expect(buildRow(3)(0)).toEqual([" ", "*", " "]);
  });

  test("[Triangulation] Dimension 5, intermediary line", () => {
    expect(buildRow(5)(1)).toEqual([" ", "*", "*", "*", " "]);
  });

  test("Dimension 5, first line", () => {
    expect(buildRow(5)(0)).toEqual([" ", " ", "*", " ", " "]);
  });
});

describe("Test of computeTopHalfEquivalentIndex", () => {
  test("Top half: should return the index provided as parameter", () => {
    expect(computeTopHalfEquivalentIndex(5)(0)).toEqual(0);
  });

  test("Top half: should return the index provided as parameter", () => {
    expect(computeTopHalfEquivalentIndex(5)(1)).toEqual(1);
  });

  test("On the intermediary line, should return the index provided as parameter", () => {
    expect(computeTopHalfEquivalentIndex(5)(2)).toEqual(2);
  });

  test("Under the intermediary line, should return the equivalent index", () => {
    expect(computeTopHalfEquivalentIndex(5)(4)).toEqual(0);
  });

  test("Under the intermediary line, should return the equivalent index", () => {
    expect(computeTopHalfEquivalentIndex(5)(3)).toEqual(1);
  });
});

describe("Test of diamond", () => {
  test("Dimension 1", () => {
    expect(diamond(1)).toEqual([["*"]]);
  });

  test("Dimension 3", () => {
    expect(diamond(3)).toEqual([
      [" ", "*", " "],
      ["*", "*", "*"],
      [" ", "*", " "],
    ]);
  });

  test("[Triangulation] Dimension 5", () => {
    expect(diamond(5)).toEqual([
      [" ", " ", "*", " ", " "],
      [" ", "*", "*", "*", " "],
      ["*", "*", "*", "*", "*"],
      [" ", "*", "*", "*", " "],
      [" ", " ", "*", " ", " "],
    ]);
  });
});

describe("Test of print", () => {
  test("Dimension 1", () => {
    const diamond1 = diamond(1);
    expect(print(diamond1)).toEqual("*");
  });

  test("Dimension 3", () => {
    const diamond3 = diamond(3);
    expect(print(diamond3)).toEqual(` * 
***
 * `);
  });

  test("[Control] Dimension 5", () => {
    const diamond5 = diamond(5);
    expect(print(diamond5)).toEqual(`  *  
 *** 
*****
 *** 
  *  `);
  });
});
