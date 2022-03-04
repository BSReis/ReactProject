import React, { Component } from "react";

class Post extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return React.createElement(
            "div", null,
            React.createElement(
                "p", { id: this.props.id },
                this.props.user, React.createElement("span", null, this.props.content), this.props.children)
        );
    }
}

export default Post;