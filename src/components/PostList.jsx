import React from "react";
import Post from "./Post";

const PostList = ({ posts }) => {
    if (!posts) {
        return (
            <h1 style={{ textAlign: 'center' }}> сделайте запрос</h1>
        )
    }
}
export default PostList;