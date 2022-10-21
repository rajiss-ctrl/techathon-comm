import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import {HashRouter, Route, Routes} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import SignupSlice from './feature/slices/SignupSlice';
import AssignmentSlice from './feature/slices/AssignmentSlice';
import { UserAuthContextProvider } from './context/AuthContext';
import { UserDetailsContextProvider } from './context/UserDetailsContext';

// const store = configureStore({
//   reducer : {
//     setUser:SignupSlice,
//     setAssigment: AssignmentSlice,
//   } 
// })
//  console.log(store.getState())
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <HashRouter hashType="hashbang">
        {/* <Provider store={store}> */}
        <UserAuthContextProvider>
          <UserDetailsContextProvider>
            <Routes>
              <Route path={"/*"} element={<App /> }/>
            </Routes>
          </UserDetailsContextProvider>
        </UserAuthContextProvider>
        {/* </Provider> */}
      </HashRouter>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
