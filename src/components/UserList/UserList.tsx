import "./UserList.css"

interface props{
    users : string[]
    registeredUsers : string[]
}

export default function UserList({ users, registeredUsers }: props) {
    return <>
        <ul>
            {users.map((user) => {
                if(registeredUsers.some((RegUser) => user.tolo === RegUser)){
                    return <li className="reg">{user} (bekende gebruiker)</li>
                }
                else{
                    return <li className="unreg">{user} (onbekende gebruiker)</li>
                }
                
                })
            }
        </ul>
    </>
}