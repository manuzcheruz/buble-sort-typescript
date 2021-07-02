import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([1, 4, 0, 5]);
numbersCollection.sort();
console.log(numbersCollection.data);

const stringsCollection = new CharactersCollection('acdjgjtiiddnrjks');
stringsCollection.sort();
console.log(stringsCollection.data);

const linkedList = new LinkedList();
linkedList.add(-200);
linkedList.add(-10);
linkedList.add(46);
linkedList.add(3);

linkedList.sort();
linkedList.print();
