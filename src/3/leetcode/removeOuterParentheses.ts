export function removeOuterParentheses(S: string): string {
  const stack = [];
  let depth = 0;
  for (const s of S) {
    if (s === ")") depth--;

    if (depth >= 1) {
      stack.push(s);
    }

    if (s === "(") depth++;
  }

  return stack.join("");
}
