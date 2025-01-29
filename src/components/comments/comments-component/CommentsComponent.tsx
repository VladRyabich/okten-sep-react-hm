import {useAddDispatch, useAppSelector} from "../../../redux/store.ts";
import {useEffect} from "react";
import {commentAction} from "../../../slices/CommentSlice.ts";
import {IComment} from "../../../models/IComment.ts";
import {CommentComponent} from "../comment-component/CommentComponent.tsx";

export const CommentsComponent = () => {
    const dispatch = useAddDispatch();
    const comments = useAppSelector(state => state.commentStoreSlice.comments);

    useEffect(() => {
        dispatch(commentAction.loadComments);
    }, []);

    return (
        <>
            {comments.map((comment: IComment) =>
                <CommentComponent key={comment.id} comment={comment}/>)}
        </>
    );
};