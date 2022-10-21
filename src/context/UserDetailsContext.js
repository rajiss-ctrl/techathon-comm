import { collection, getDocs } from "firebase/firestore";
import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { db } from "../firebase/firebase";
import UserDetailsReducer from "./UserDetailsReducer";



export const UserDetailsContext = createContext();
export const UserDetailsContextProvider = ({children}) => {
    const [userDataDetails, setUserDataDetails] = useState(null);
    

    // useEffect(()=>{
    //     localStorage.setItem('userdetail',JSON.stringify(state.userDataDetails))
    // },[state.userDataDetails]);

    //feching from usercollections
useEffect(()=>{
 const fetchData = async ()=>{
  let list = []
  try {
  const querySnapshot = await getDocs(collection(db,"user"));
  querySnapshot.forEach((doc)=>{
    console.log(doc)
    list.push({id:doc.id,...doc.data()})
  });
  setUserDataDetails(list)
  } catch (error) {
    console.log(error)
  }

 }
 fetchData()
},[])
// console.log(userDataDetails)

    return(
        <UserDetailsContext.Provider value={{ userDataDetails}}>
            {children}
        </UserDetailsContext.Provider>
    )
}

// export function useUserDetails() {
//       return useContext(UserDetailsContext);
// }