import "./UserList.css"

interface props{ //interface maken met daarin de users (array van strings) en registeredUsers (array van strings)
    users : string[]
    registeredUsers : string[]
}

export default function UserList({ users, registeredUsers }: props) {
    return <>
        <ul>
            {users.map((user) => { //door alle totale users gaan
                if(registeredUsers.some((RegUser) => user.toLowerCase() == RegUser.toLowerCase())){ //kijkt of de user van totale users bestaat in registered users
                    return <li className="reg">{user} (bekende gebruiker)</li> //zo ja return een regsitered user list item
                }
                else{
                    return <li className="unreg">{user} (onbekende gebruiker)</li> //zo neen return een onregistered user list item
                }
                
                })
            }
        </ul>
    </>
}