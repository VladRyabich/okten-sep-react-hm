import {useAddDispatch, useAppSelector} from "../../../redux/store.ts";
import {useEffect} from "react";
import {userAction} from "../../../slices/UserSlice.ts";
import {postAction} from "../../../slices/PostSlice.ts";
import {commentAction} from "../../../slices/CommentSlice.ts";
import {UserComponent} from "../../users/user-component/UserComponent.tsx";
import {PostComponent} from "../../posts/post-component/PostComponent.tsx";
import {CommentComponent} from "../../comments/comment-component/CommentComponent.tsx";

export const ComplexComponent = () => {

    const dispatch = useAddDispatch();
    const complex = useAppSelector(state => state);
    const {userStoreSlice: {users}, postStoreSlice: {posts}, commentStoreSlice: {comments}} = complex;

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
        <div>
                {users && users.map(user => <UserComponent key={user.id} user={user}/>)}
                <hr/>
                {posts && posts.map(post => <PostComponent key={post.id} post={post}/>)}
                <hr/>
                {comments && comments.map(comment => <CommentComponent key={comment.id} comment={comment}/>)}
        </div>
    );
};