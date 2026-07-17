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

function App() {
  return <div>{myElement}</div>;
}

export default App;
