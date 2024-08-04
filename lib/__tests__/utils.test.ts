import { getIn } from "../utils";

describe("getIn", () => {
  const object = {
    user: {
      jack: {
        name: "jack ngo",
        age: 25,
        gender: "male",
      },
      "jack.gender": "female",
    },
    "user.jack": {
      name: "john ngo",
    },
    "user.jack.age": 30,
  };

  it.each`
    key                   | result
    ${"user.jack.name"}   | ${"jack ngo"}
    ${"user.jack.age"}    | ${30}
    ${"user.jack"}        | ${""}
    ${"user.jack.gender"} | ${"male"}
  `("should return correct value with $key", ({ key, result }) => {
    expect(getIn(object, key)).toBe(result);
  });
});
