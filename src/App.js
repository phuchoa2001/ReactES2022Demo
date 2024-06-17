import React from 'react';

class Counter {
  #count = 0; // Private field

  increment() {
    this.#count++;
    return this.#count;
  }
}

const App = () => {
  const counter = new Counter();
  const array = [1, 2, 3, 4, 5];
  console.log(array.at(2));  // Output: 3
  console.log(array.at(-1)); // Output: 5
  const matchObj = /(a+)(b+)/d.exec('aaaabb');
  console.log(matchObj.indices); // Output: [ [0, 4], [4, 6] ]
  const obj = { a: 1 };
  console.log(Object.hasOwn(obj, 'a')); // Output: true
  
  return (
    <div>
      <h1>Hello, React with ES2022!</h1>
      <p>Counter: {counter.increment()}</p>
    </div>
  );
};

export default App;