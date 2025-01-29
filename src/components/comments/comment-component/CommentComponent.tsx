import {IComment} from "../../../models/IComment.ts";

type CommentComponentProps = {
    comment: IComment
}

export const CommentComponent = ({comment}: CommentComponentProps) => {
    return (
        <div>
            {comment.name}
        </div>
    );
};