import React, { Component } from "react";
import Post from "./post"

class Comment extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return React.createElement(
            "div",
            { className: "boxComment" },
            React.createElement(
                "p",
                null,
                this.props.user,
            )
        );
    }
}

class CreateComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: ""
        };
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleUserChange(event) {
        const val = event.target.value;
        this.setState(() => ({
            user: val
        }));
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onCommentSubmit({
            user: this.state.user.trim(),
        });

        this.setState(() => ({
            user: ""
        }));
    }
    render() {
        return React.createElement(
            "form",
            {
                onSubmit: this.handleSubmit
            },
            React.createElement("input", {
                type: "text",
                placeholder: "Post your coment",
                value: this.state.user,
                className: "inputConfig",
                onChange: this.handleUserChange
            }),
            React.createElement("input", {
                type: "submit",
                value: "Post"
            })
        );
    }
}
class CommentBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: this.props.comments
        };
        this.handleCommitSubmit = this.handleCommitSubmit.bind(this);
    }
    handleCommitSubmit(comment) {
        const comments = this.state.comments;
        const newComments = comments.concat([comment]);
        this.setState({
            comments: newComments
        });
    }
    render() {
        return React.createElement(
            "div",
            null,
            React.createElement(Post, {
                id: this.props.post.id,
                user: this.props.post.user
            }),
            this.state.comments.map(function (comment) {
                return React.createElement(Comment, {
                    key: comment.id,
                    id: comment.id,
                    user: comment.user
                });
            }),
            React.createElement(CreateComment, {
                onCommentSubmit: this.handleCommitSubmit
            })
        );
    }
}

export default CommentBox;