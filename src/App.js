import React, { useState } from 'react';
import {Routes,Route} from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import Courses from './pages/courses/Courses';
import Assignment from './pages/dashboard/components/Assignment';
import ProfileUpdate from './pages/dashboard/components/ProfileUpdate';
import TeacherDashboard from './pages/dashboard/TeacherDashboard';
import GetStarted from './pages/GetStarted';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/register/Signup';
import Error from './protected-route/Error';
import ProtectedRoute from './protected-route/ProtectedRoute';

function App() {
  //for navbar
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  //for sidebar
  const [reduceList, setReduceList] = useState(true);
  const handleSideBarToggle = () =>{
    setReduceList(!reduceList)
  }


  return (
    <>
      <Routes>
        <Route path={'/'} element={<Layout/>}>
          <Route index element={<Home isOpen={isOpen} toggle={toggle}/>}/>
          <Route path={'getstarted'} element={<GetStarted isOpen={isOpen} toggle={toggle}/>}/>
          <Route path={'courses'} element={<Courses isOpen={isOpen} toggle={toggle}/>}/>
        <Route element={<ProtectedRoute/>}>
          <Route path={'teacherdasboard'} element={<TeacherDashboard reduceList={reduceList} handleSideBarToggle={handleSideBarToggle}/>}>
            <Route path={'profileupdate'} element={<ProfileUpdate/>}/>
            <Route path={'assignment'} element={<Assignment/>}/>
          </Route>
        </Route>
                  {/*All*/}
        <Route path={'*'} element={<Error/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
