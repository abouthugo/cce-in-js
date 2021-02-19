import { removeOuterParentheses } from "./removeOuterParentheses";

test("Case 1", () => {
  const input = "(()())(())";
  const output = "()()()";
  const result = removeOuterParentheses(input);
  expect(result).toBe(output);
});

test("Case 2", () => {
  const input = "(()())(())(()(()))";
  const output = "()()()()(())";
  const result = removeOuterParentheses(input);
  expect(result).toBe(output);
});

test("Case 3", () => {
  const input = "()()";
  const output = "";
  const result = removeOuterParentheses(input);
  expect(result).toBe(output);
});
