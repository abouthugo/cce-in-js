import HashTable from "./HashTable";

const limit = 4;
const ht = new HashTable(limit);

ht.put("apples", 3);
ht.put("bananas", 45);
ht.put("grapes", 100);
ht.put("watermelons", 1);

test("Contains a key that is in the table", () => {
  const contains = ht.contains("apples");
  const result = contains >= 0 && contains < 4;
  expect(result).toBe(true);
});

test("Contains a key not in the table", () => {
  const result = ht.contains("wine");
  expect(result).toBe(false);
});

test("Getting a value whose key is in the table", () => {
  const result = ht.get("watermelons");
  expect(result).toBe(1);
});

test("Getting a value whose key is not in the table", () => {
  const result = ht.get("beer");
  expect(result).toBeUndefined();
});

console.log(ht.toString());
