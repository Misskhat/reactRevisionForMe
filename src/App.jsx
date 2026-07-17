import "./App.css";

//create a variable and render it

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

// react es6
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

function App() {
  return <div>{myElement}</div>;
}

export default App;
