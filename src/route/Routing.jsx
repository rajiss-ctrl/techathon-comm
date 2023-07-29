import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Error from "../pages/error/Error";
import ProtectedRoute from "../protected-route/ProtectedRoute";
import Layout from "../layout/Layout";
import Admin from "../pages/admin/Admin";
import Courses from "../pages/courses/Courses";
import Graduands from "../pages/graduands/Graduands";

const Routing = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={"courses"} element={<Courses />} />
        <Route path={"graduands"} element={<Graduands />} />
        <Route element={<ProtectedRoute />}>
          <Route path={"admin"} element={<Admin />} />
          {/* <Route
              path={"adminpanel"}
              element={
                <AdminPanel
                  reduceList={reduceList}
                  handleSideBarToggle={handleSideBarToggle}
                />
              }
            /> */}
          {/* <Route path={"addteacher"} element={<AddTeacher />} /> */}
        </Route>

        {/*All*/}
        <Route path={"*"} element={<Error />} />
      </Route>
    </Routes>
  );
};

export default Routing;
