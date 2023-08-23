import { from } from 'rxjs';
import { single } from 'rxjs/operators';

// https://www.learnrxjs.io/learn-rxjs/operators/filtering/single
// Example 1: Emit first number passing predicate

//emit (1,2,3,4,5)
const srcList$ = from([1, 2, 3, 4, 5]);
//emit one item that matches predicate
const example = srcList$.pipe(single((val) => val === 4));
//output: 4
const subscribe = example.subscribe((val) => console.log(val));
