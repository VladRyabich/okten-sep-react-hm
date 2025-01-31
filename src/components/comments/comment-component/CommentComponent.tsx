import {IComment} from "../../../models/IComment.ts";

type CommentComponentProps = {
    comment: IComment;
}

export const CommentComponent = ({comment}: CommentComponentProps) => {
    return (
        <div>
            <h3>Comment ID: {comment.id}. {comment.name}</h3>
            <p>Email: {comment.email}</p>
            <p>{comment.body}</p>
        </div>
    );
};