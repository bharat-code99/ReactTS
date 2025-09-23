import { useReducer } from "react"

interface State{
    count: number;
    errro: string | null;
}

export default function Index(){

    const [state, dispatch] = useReducer();

    return(
        <div>
            <div>Count: </div>
        </div>
    )
}   