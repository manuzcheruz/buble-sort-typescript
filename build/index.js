"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
const numbersCollection = new NumbersCollection_1.NumbersCollection([1, 4, 0, 5]);
numbersCollection.sort();
console.log(numbersCollection.data);
const stringsCollection = new CharactersCollection_1.CharactersCollection('acdjgjtiiddnrjks');
stringsCollection.sort();
console.log(stringsCollection.data);
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(-200);
linkedList.add(-10);
linkedList.add(46);
linkedList.add(3);
linkedList.sort();
linkedList.print();
