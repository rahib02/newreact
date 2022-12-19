import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const App = () => {
  const [arr, setarr] = useState([]);
  const [obj, setobj] = useState();
  const sumbit = () => {
    console.log(obj);
    if (obj) {
      const newdata = {
        id: uuidv4().substring(0, 4),
        name: obj.name,
        usename: obj.usename,
        age: obj.age,
      };
      const updateData = [...arr, newdata];
      setarr(updateData);
    } else {
      alert("salam");
    }
    console.log(arr);
  };
  const namevalue = (e) => {
    e.preventDefault();
    setobj({
      name: e.target.previousElementSibling.previousElementSibling
        .previousElementSibling.value,
      usename: e.target.previousElementSibling.previousElementSibling.value,
      age: e.target.previousElementSibling.value,
    });

    if (obj) {
      sumbit();
    }
  };

  return (
    <div className="App">
      <div class="forms">
        <div class="form">
          <form>
            <h1>1defe elave click edennen sonra ise dusur</h1>
            <input placeholder="Name" type="text" />
            <input placeholder="Use Name" type="text" />
            <input placeholder="Age" type="number" />
            <button onClick={namevalue}>Creat</button>
          </form>
        </div>
      </div>
      <div class="tables">
        <table class="table">
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Use Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {arr.map((x) => {
              return (
                <tr>
                  <td>{x.id}</td>
                  <td>{x.name}</td>
                  <td>{x.usename}</td>
                  <td>{x.age}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
