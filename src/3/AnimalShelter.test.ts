import AnimalShelter, { Animal } from "./AnimalShelter";

test("Push", () => {
  const shelter = new AnimalShelter();
  for (let i = 0; i < 10; i++) {
    let pet;
    if (i % 3 === 0) {
      pet = new Animal("Cat", `${i + 1}-cat`);
    } else {
      pet = new Animal("Dog", `${i + 1}-dog`);
    }
    shelter.enqueue(pet);
  }
});

test("Dequeing any", () => {
  const shelter = new AnimalShelter();
  for (let i = 0; i < 10; i++) {
    let pet;
    if (i % 3 === 0) {
      pet = new Animal("Cat", `cat-${i + 1}`);
    } else {
      pet = new Animal("Dog", `dog-${i + 1}`);
    }
    shelter.enqueue(pet);
  }
  const result = shelter.dequeueAny();
  expect(result.name).toBe("cat-1");
});

test("Dequeing Dog", () => {
  const shelter = new AnimalShelter();
  for (let i = 0; i < 10; i++) {
    let pet;
    if (i % 3 === 0) {
      pet = new Animal("Cat", `cat-${i + 1}`);
    } else {
      pet = new Animal("Dog", `dog-${i + 1}`);
    }
    shelter.enqueue(pet);
  }
  const result = shelter.dequeueDog();
  if (result) expect(result.name).toBe("dog-2");
});

test("Dequeing multiple", () => {
  const shelter = new AnimalShelter();
  for (let i = 0; i < 10; i++) {
    let pet;
    if (i % 3 === 0) {
      pet = new Animal("Cat", `cat-${i + 1}`);
    } else {
      pet = new Animal("Dog", `dog-${i + 1}`);
    }
    shelter.enqueue(pet);
  }
  shelter.dequeueCat();
  shelter.dequeueDog();
  const result = shelter.dequeueCat();
  if (result) expect(result.name).toBe("cat-4");
});
