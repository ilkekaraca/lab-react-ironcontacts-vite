// src/App.js
import { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";

function App() {
  const [contactsArr, setContactsArr] = useState(contacts.slice(0, 5));
  const randomContact = () => {
    const remainingContacts = contacts.filter(
      (ct) => !contactsArr.includes(ct)
    );
    const randomElement =
      remainingContacts[Math.floor(Math.random() * remainingContacts.length)];
    setContactsArr([...contactsArr, randomElement]);
  };

  return (
    <div className="App">
      <table className="contact-table">
        <tr>
          <th>picture</th>
          <th>name</th>
          <th>popularity</th>
          <th>Won Oscar</th>

          <th>Won Emmy</th>
        </tr>
        {contactsArr.map((ct) => {
          return (
            <tr>
              <td>
                <img src={ct.pictureUrl} />
              </td>
              <td>{ct.name}</td>
              <td>{ct.popularity.toFixed(2)}</td>
              <td>{ct.wonOscar ? "🏆" : ""}</td>
              <td>{ct.wonEmmy ? "🏆" : ""}</td>
            </tr>
          );
        })}
      </table>
      <button onClick={randomContact}>Add Random Contact</button>
    </div>
  );
}
export default App;
