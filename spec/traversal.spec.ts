import { createNodes, processNodes } from "../src/traversal";

describe("createNodes", () => {
  test("should create the correct data structure from the given array", () => {
    const testData = ["x => ", "y => z", "z => "];

    const expected = {
      x: { dependency: "" },
      y: { dependency: "z" },
      z: { dependency: "" }
    };

    const actual = createNodes(testData);

    expect(actual).toEqual(expected);
  });
});

describe("processNodes", () => {
  it("should return a single item", () => {
    const expected = ["x"];

    const actual = processNodes(["x"], { x: { dependency: "" } });

    expect(actual).toEqual(expected);
  });

  it("should return an array with the correct depencency order", () => {
    const expected = ["x", "z", "y"];

    const actual = processNodes(["x", "y", "z"], {
      x: { dependency: "" },
      y: { dependency: "z" },
      z: { dependency: "" }
    });

    expect(actual).toEqual(expected);
  });

  it("should throw a circular dependency error", () => {
    const actual = () =>
      processNodes(["x", "y"], {
        x: { dependency: "y" },
        y: { dependency: "x" }
      });

    expect(actual).toThrowError("Circular dependency has been detected!");
  });
});
