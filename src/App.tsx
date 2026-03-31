import { useState } from "react";
import UserList from "./components/UserList/UserList";
import RegistrationForm from "./components/Registration/RegistrationForm";
export default function App() {
  const GeregistreerdePersonen = ["Karel", "Els", "Piet"]; //lijst met geregistreerde gebruikers
  const [totalUsers, setTotalUsers] = useState(["Karel"]) //lijst met totale gebruikers

  function onReg(name : string){ //functie die een gebruiker toevoegt met de naam (name)
    setTotalUsers([...totalUsers, name])
  }

  return <>
    <div>
      <h1>Gebruikersregestratie</h1>
      <RegistrationForm onRegister={onReg}/> {/*uitvoeren van het componenet regestratieform*/}
      <hr />
      <h1>Geregistreerde gebruikers</h1>
      <UserList users={totalUsers} registeredUsers={GeregistreerdePersonen}/> {/*uitvoeren van het componenet userList*/}
    </div >
  </>;
}
