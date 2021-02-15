export function backspaceCompare(S: string, T: string): boolean {
  const stack_S = stringCompare(S);
  const stack_T = stringCompare(T);

  return stack_S === stack_T;

  function stringCompare(A: string) {
    const stack = [];
    for (const a of A) {
      if (a === "#") {
        stack.pop();
      } else {
        stack.push(a);
      }
    }

    return stack.join("");
  }
}
