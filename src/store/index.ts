import { configureStore } from '@reduxjs/toolkit'
import { serverAPI } from './services/ServerApi'

export const store = configureStore({
  reducer: {
    [serverAPI.reducerPath]: serverAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(serverAPI.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
