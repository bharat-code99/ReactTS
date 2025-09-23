import { useUserContext } from "./context"

export function Sidebar(){

    const user = useUserContext();

    return(
        <div>
            <div>User Name: {user.name}</div>
            <div>Is Subscribed: {user.isSubscribed ? "Yes" : "No"}</div>
        </div>
    )
}

export function Profile(){

    const user = useUserContext();

    return(
        <div>User Name: {user.name}</div>
    )
}