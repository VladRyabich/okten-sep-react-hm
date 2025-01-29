import {useAddDispatch, useAppSelector} from "../../../redux/store.ts";
import {useEffect} from "react";
import {userAction} from "../../../slices/UserSlice.ts";
import {postAction} from "../../../slices/PostSlice.ts";
import {commentAction} from "../../../slices/CommentSlice.ts";

export const ComplexesComponent = () => {

    const dispatch = useAddDispatch();
    const complexes = useAppSelector(state => state);
    const {userStoreSlice: {users}, postStoreSlice: {posts}, commentStoreSlice: {comments}} = complexes;

    useEffect(() => {
        if (!users.length) {
            dispatch(userAction.loadUsers());
        }
        if (!posts.length) {
            dispatch(postAction.loadPosts());
        }
        if (!comments.length) {
            dispatch(commentAction.loadComments());
        }
    }, []);

    return (
        <>
            {complexes}
        </>
    );
};