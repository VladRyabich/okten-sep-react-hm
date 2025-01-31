import {IComment} from "../models/IComment.ts";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getAll} from "../services/api.service.ts";

type CommentSliceType = {
    comments: IComment[];
}
const initCommentSliceState: CommentSliceType = {comments:[]};

const loadComments =
    createAsyncThunk('loadComments', async (_, thunkAPI) => {
        try {
            const comments = await getAll<IComment[]>('/comments').then(value => value);
            return thunkAPI.fulfillWithValue(comments);
        }catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
});

export const commentSlice = createSlice({
    name: 'commentSlice',
    initialState: initCommentSliceState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(loadComments.fulfilled, (state, action: PayloadAction<IComment[]>) => {
            state.comments = action.payload;
        })
});

export const commentAction = {...commentSlice.actions, loadComments};