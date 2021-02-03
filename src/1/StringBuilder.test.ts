import StringBuilder from "./StringBuilder";

const stringBuilder = new StringBuilder("", 100);

test("Appending'", () => {
  stringBuilder.append("hi");
  const result = stringBuilder.length();

  expect(result).toBe(2);
});

test("Deleting", () => {
  stringBuilder.append("hugo");
  stringBuilder.delete(2, 6);
  const result = stringBuilder.toString();

  expect(result).toBe("hi");
});

test("Searching index of a non-existent pattern", () => {
  stringBuilder.append("red");
  stringBuilder.append("green");
  stringBuilder.append("blue");
  const result = stringBuilder.indexOf("word3");
  expect(result).toBe(-1);
});

test("Searching the index of an existent pattern", () => {
  const result = stringBuilder.indexOf("red");
  expect(result).toBe(2);
});

test("Getting the character at the specified index", () => {
  const result = stringBuilder.charAt(3);
  expect(result).toBe("e");
});

test("Getting the capacity", () => {
  expect(stringBuilder.capacity()).toBe(100);
});

test("String representation of the String Builder", () => {
  expect(stringBuilder.toString()).toBe("hiredgreenblue");
});
