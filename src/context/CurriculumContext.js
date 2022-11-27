import { collection, getDocs } from "firebase/firestore";
import { createContext,  useEffect,  useState } from "react";
import { db } from "../firebase/firebase";
import { useUserAuth } from "./AuthContext";

const CurriculumInitState = JSON.parse(sessionStorage.getItem('curriculum')) || null



export const CurriculumContext = createContext();
export const CurriculumContextProvider = ({children}) => {
    const [curriculum, setCurriculum] = useState(CurriculumInitState);
    const { user } = useUserAuth();



    //feching from usercollections
useEffect(()=>{
 const fetchData = async ()=>{
  let list = []
  try {
    //  user id as collection name and fetch it it
  const querySnapshot = await getDocs(collection(db,user.uid));
  querySnapshot.forEach((doc)=>{
    console.log(doc)
    list.push({id:doc.id,...doc.data()})
  });
  setCurriculum(list)
  } catch (error) {
    console.log(error)
  }

 }
 fetchData()
},[])

    useEffect(()=>{
        sessionStorage.setItem('curri',JSON.stringify(curriculum))
    },[curriculum]);

    return(
        <CurriculumContext.Provider value={{curriculum}}>
            {children}
        </CurriculumContext.Provider>
    )
}

// export function useUserDetails() {
//       return useContext(UserDetailsContext);
// }