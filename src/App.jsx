import "./App.css";

//CREATE A VARIABLE AND RENDER INSIDE JSX
const myElement = (
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>Mishkat</td>
    </tr>
    <tr>
      <td>Sumayia</td>
    </tr>
  </table>
);

// REACT ES6 MOST IMPORT FOR LEARNING REACT
/**
 * class
 * Arrow function
 * Variable (let, const)
 * Array method => most important (map, forEach, filter, find, reduce)
 * Destructuring
 * Modules
 * Ternary operator
 * Spread operator
 */

class Car {
  constructor(name, year) {
    this.brandName = name;
    this.launchYear = year;
  }

  about() {
    return `I have ${this.brandName} car and it is launch ${this.launchYear}`;
  }
}

const myCar = new Car("BMW", 2027);

function App() {
  return (
    <div>
      {/* RENDER VARIABLE */}
      <div>{myElement}</div>

      {/* RENDER NEW CLASS INSIDE METHOD */}
      <div>{myCar.about()}</div>
    </div>
  );
}

export default App;
