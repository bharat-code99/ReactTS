import { useState } from "react";
import Dashboard from "./Dashboard";
import { DashboardContext } from "./context";

export interface User{
  isSubscribed: boolean;
  name: string;
}

export default function App(){
  const [user] = useState<User>({
    isSubscribed: true,
    name: 'Bharat',
  });

  return(
    <DashboardContext.Provider value={user}>
      <Dashboard />
    </DashboardContext.Provider>
  )
}