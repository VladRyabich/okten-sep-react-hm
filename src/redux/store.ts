import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "../slices/UserSlice.ts";
import {postSlice} from "../slices/PostSlice.ts";
import {commentSlice} from "../slices/CommentSlice.ts";
import {useDispatch, useSelector} from "react-redux";

export const store = configureStore({
    reducer: {
        userStoreSlice: userSlice.reducer,
        postStoreSlice: postSlice.reducer,
        commentStoreSlice: commentSlice.reducer,
    }
});

export const useAddDispatch = useDispatch
    .withTypes<typeof store.dispatch>();
export const useAppSelector = useSelector
    .withTypes<ReturnType<typeof store.getState>>();