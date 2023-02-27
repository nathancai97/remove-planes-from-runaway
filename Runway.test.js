const Runway = require("./Runway");

describe("Runway class", () => {
  let runway;

  beforeEach(() => {
    runway = new Runway("JFK");
    Runway.planes = [];
  });

  test("initializing class and name should work", () => {
    expect(runway).toBeInstanceOf(Runway);
    expect(runway.name).toBe("JFK");
  });

  test("max num of planes allowed should be 100", () => {
    expect(Runway.MAX_PLANES_ALLOWED_ON_ALL_RUNWAYS).toBe(100);
  })

  test("adding method works", () => {
    runway.add("Plane 1");
    runway.add("Plane 2");
    expect(Runway.planes.length).toBe(2);
  });

  test("should throw error if adding plane to max capacity", () => {
    for (let i = 0; i <= 100; i++) {
      runway.add(`Plane ${i}`);
    }
    expect(() => runway.add("Plane 101")).toThrowError(
      "runways at full capacity!"
    );
  });

  test("removing method works as intended", () => {
    runway.add("Plane 1");
    runway.add("Plane 2");
    runway.remove("Plane 2");
    expect(Runway.planes.length).toBe(1);
  });

  test("trying to remove a plane from an empty runway should throw error", () => {
    expect(() => runway.remove("Plane 1")).toThrowError(
      "no planes currently on this runway!"
    );
  });
});
