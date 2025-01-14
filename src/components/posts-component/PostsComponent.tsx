import {useEffect, useState} from "react";
import {IPost} from "../../models/IPost.ts";
import {getAll} from "../../services/general.api.service.ts";
import {IBaseResponseModel} from "../../models/IBaseResponseModel.ts";
import {PostComponent} from "../post-component/PostComponent.tsx";

export const PostsComponent = () => {

    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        getAll<IBaseResponseModel & { posts: IPost[]; }>('/posts')
            .then(({posts}) => setPosts(posts))
    }, []);

    return (
        <ul>
            {
                posts.map((post:IPost) => <PostComponent key={post.id} post={post}/>)
            }
        </ul>
    );
};