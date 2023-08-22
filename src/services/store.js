// import { configureStore } from "@reduxjs/toolkit";
// import { articleApi } from "./article";

// export const store = configureStore({ //Store is a global state which stores entire information of our application
//     reducer : { // but we don't need the entire state but we reduce it or slice it to a particular state
//         [articleApi.reducerPath]:articleApi.reducer
//     }, // reduce something to get only what we want 
//     middleware : (getDefaultMiddleware) => { // middle ware is used before we grab something to perform some operations on it. 
//         getDefaultMiddleware().concat(articleApi.middleware)  //This make reducer works. 
//     }

//     // middleware: (getDefaultMiddleware) => [
//     //     ...getDefaultMiddleware(),
//     //     ...articleApi.middleware
//     // ]
// })
import { configureStore } from "@reduxjs/toolkit";

import { articleApi } from "./article";

export const store = configureStore({
    reducer: {
        [articleApi.reducerPath]: articleApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware)
})
// import { configureStore } from "@reduxjs/toolkit";
// import { articleApi } from "./article";

// export const store = configureStore({
//     reducer: {
//         [articleApi.reducerPath]: articleApi.reducer
//     },
//     middleware: (getDefaultMiddleware) => [
//         ...getDefaultMiddleware(),
//         ...(Array.isArray(articleApi.middleware) ? articleApi.middleware : [])
//     ]
// });
