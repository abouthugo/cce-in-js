type PetType = "Cat" | "Dog";

export class Animal {
  pet_type: PetType;
  name: string;

  constructor(petType: PetType, name: string) {
    this.pet_type = petType;
    this.name = name;
  }
}

class ShelterNode {
  animal: Animal;
  next: ShelterNode | null;

  constructor(animal: Animal, next = null) {
    this.animal = animal;
    this.next = next;
  }
}

export default class AnimalShelter {
  private first: ShelterNode | null;
  private last: ShelterNode | null;

  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(a: Animal): void {
    const newAnimal = new ShelterNode(a);
    if (this.last !== null) {
      // tie it to the first node and subsequent additions
      this.last.next = newAnimal;
    }
    this.last = newAnimal;
    if (this.first === null) this.first = this.last;
  }

  dequeueAny(): Animal {
    if (this.first === null) throw new Error("The shelter has no more pets");
    const d = this.first.animal;
    this.updateNextNode();
    return d;
  }

  dequeueDog(): Animal | undefined {
    if (this.first === null) throw new Error("The shelter has no more pets");
    if (this.first.animal.pet_type === "Dog") {
      const d = this.first.animal;
      this.updateNextNode();
      return d;
    } else {
      let curr = this.first;
      while (curr && curr.next) {
        if (curr.next.animal.pet_type === "Dog") {
          const d = curr.next.animal;
          curr.next = curr.next.next;
          return d;
        }
        curr = curr.next;
      }
      throw new Error("No more dogs in the shelter");
    }
  }

  dequeueCat(): Animal {
    if (this.first === null) throw new Error("The shelter has no more pets");
    if (this.first.animal.pet_type === "Cat") {
      // the next runner up is a cat
      const d = this.first.animal;
      this.updateNextNode();
      return d;
    } else {
      // have to go through the queue and revise the change
      let curr = this.first;
      while (curr && curr.next) {
        if (curr.next.animal.pet_type === "Cat") {
          const d = curr.next.animal;
          if (curr.next === this.last) {
            this.last = curr;
          }
          curr.next = curr.next.next;
          return d;
        }
        curr = curr.next;
      }
      throw new Error("No more dogs in the shelter");
    }
  }

  toString(): string {
    let curr = this.first;
    let str = "";
    while (curr) {
      str += `${curr.animal.name}\n`;
      curr = curr.next;
    }
    return str;
  }

  private updateNextNode(): void {
    if (this.first === null) throw new Error("No more nodes left");
    this.first = this.first.next;
    if (this.first === null) this.last = null;
  }
}
