class RevisedSet<T> extends Set {
  constructor() {
    super();
  }
  // this method returns the union of two given sets
  public union(otherSet: Set<T>): Set<T> {
    return new Set([...Array.from(this), ...Array.from(otherSet)]);
  }

  // this method returns the intersection of two given sets
  public intersection(otherSet: Set<T>): Set<T> {
    let intersectionSet = new Set<T>();
    this.forEach((item) => {
      if (otherSet.has(item)) {
        intersectionSet.add(item);
      }
    });
    return intersectionSet;
  }

  // this method returns the difference of two given sets
  public difference(otherSet: Set<T>): Set<T> {
    let differenceSet = new Set<T>();
    this.forEach((item) => {
      if (!otherSet.has(item)) {
        differenceSet.add(item);
      }
    });
    return differenceSet;
  }

  // this method will test is a set is asubset of another
  public subset(otherSet: Set<T>): boolean {
    return Array.from(this).every((item) => otherSet.has(item));
  }
}

export default function setExample() {
  const setA = new RevisedSet<number>();
  const setB = new RevisedSet<number>();

  setA.add(1);
  setA.add(2);
  setB.add(2);

  console.log(`Is Set A subset of Set B - ${setA.subset(setB)}`);

  console.log(`Union between Set A and Set B - ${setA.union(setB)}`);

  console.log(`Difference between Set A and Set B - ${setA.difference(setB)}`);

  console.log(`Intersection between Set A and Set B - ${setA.intersection(setB)}`);
}
