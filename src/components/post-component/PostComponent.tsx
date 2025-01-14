import {IPost} from "../../models/IPost.ts";
import './postComponent.css';

interface PostComponentProps {
    post: IPost
}

export const PostComponent = ({post}: PostComponentProps) => {
    return (
        <li className={'posts-item'}>
            <h2 className={'id'}><span className={'id-title'}>id:</span>{post.id}</h2>
            <h3 className={'title'}><span className={'post-title'}>Title:</span>{post.title}</h3>
            <p>{post.body}</p>
            <ul className={'reaction-list'}>
                <li className={'likes'}><span className={'likes-title'}>Likes:</span>{post.reactions.likes}</li>
                <li className={'viwes'}><span className={'viwes-title'}>Viwes:</span>{post.views}</li>
            </ul>
        </li>
    );
};