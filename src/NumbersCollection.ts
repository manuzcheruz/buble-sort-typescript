import { Sorter } from "./Sorter";

export class NumbersCollection extends Sorter{
    constructor(public data: number[]) {
        super();
    }

    /*
    * returns the length of the array
    */
    get length(): number {
        return this.data.length;
    }

    /*
    * returns true when value of leftIndex is greater than the value of the rightIndex
    */
    compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex] > this.data[rightIndex];
    }

    /*
    * swaps the values of leftIndex and that of the rightIndex
    */
    swap(leftIndex: number, rightIndex: number): void {
        const leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    }
}