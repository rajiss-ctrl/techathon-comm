// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import {
//   collection,
//   getDocs,
//   onSnapshot,
//   query,
//   where,
// } from "firebase/firestore";
// import { db, useAuth } from "../../firebase/firebase";

// export const fetchAsyncSchemes = createAsyncThunk(
//   "schemes/fetchAsyncSchemes",
//   async () => {
//     const querySnapshot = await getDocs(collection(db, "scheme"));
//     const items = querySnapshot.docs.map((doc) => doc.data());
//     return items;

//     // const currentUser = useAuth();
//     // const querySnapshot = await getDocs(collection(db, "scheme"));
//     // const items = query(
//     //   querySnapshot,
//     //   where("user_id", "==", currentUser?.uid)
//     // );
//     // const data = onSnapshot({ ...items.data(), id: items.id });
//     // return data;
//   }
// );

// const initialState = {
//   schemes: [],
//   status: "idle",
//   error: null,
// };

// export const curriculumSlice = createSlice({
//   name: "schemes",
//   initialState,
//   reducers: {
//     addSchemes: (state, { payload }) => {
//       state.schemes = payload;
//     },
//   },
//   extraReducers: (builder) => {
//     // [fetchAsyncUsers.pending]: () => {
//     builder.addCase(fetchAsyncSchemes.pending, (state) => {
//       state.status = "Loading.....";
//       // console.log("pending");
//     });
//     builder.addCase(fetchAsyncSchemes.fulfilled, (state, action) => {
//       state.status = "Successful";
//       // console.log("fetch successfully!");
//       state.schemes = action.payload;
//       // return { ...state, users: payload };
//     });

//     builder.addCase(fetchAsyncSchemes.rejected, (state, action) => {
//       // console.log("Rejected!");
//       state.status = "Failed";
//       state.error = action.error.message;
//     });
//   },
// });

// export const { addSchemes } = curriculumSlice.actions;
// export default curriculumSlice.reducer;
