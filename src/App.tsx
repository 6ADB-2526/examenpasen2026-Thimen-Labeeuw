import { useState } from "react";
import UserList from "./components/UserList/UserList";
import RegistrationForm from "./components/Registration/RegistrationForm";
export default function App() {
  const GeregistreerdePersonen = ["Karel", "Els", "Piet"];
  const [totalUsers, setTotalUsers] = useState(["Karel"])

  function onReg(name : string){
    setTotalUsers([...totalUsers, name])
  }

  return <>
    <div>
      <RegistrationForm onRegister={onReg}/>
      <hr />
      <UserList users={totalUsers} registeredUsers={GeregistreerdePersonen}/>
    </div >
  </>;
}
