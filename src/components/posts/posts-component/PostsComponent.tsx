import {useAddDispatch, useAppSelector} from "../../../redux/store.ts";
import {useEffect} from "react";
import {postAction} from "../../../slices/PostSlice.ts";
import {PostComponent} from "../post-component/PostComponent.tsx";
import {IPost} from "../../../models/IPost.ts";

export const PostsComponent = () => {
    const dispatch = useAddDispatch();
    const posts = useAppSelector(state => state.postStoreSlice.posts);

    useEffect(() => {
        dispatch(postAction.loadPosts());
    }, []);

    return (
        <>
            {posts.map((post:IPost) => <PostComponent key={post.id} post={post}/>)}
        </>
    );
};