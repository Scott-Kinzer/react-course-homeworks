import React, { useEffect, useState } from 'react';

import apiIntance from '../../../api/api';
import {Post} from '../index';

const PostsList = ({chosenUserPost, setPostId}) => {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        apiIntance.fetchUserPosts(chosenUserPost).then((posts) => {
            setPosts(posts)
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [chosenUserPost]);


    useEffect(() => {
        if (setPostId) {
            if (posts.length) {
                setPostId(posts[0].id);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [posts]);


    if (setPostId) {

     

        return (
            <div>
                <h2>POSTS</h2>
                {posts.map((post) => <Post setPostId={setPostId} key={post.id} post={post} />)}
            </div>
        );
    }

    return (
        <div>                
            <h2>POSTS</h2>
            {posts.map((post) => <Post key={post.id} post={post} />)}
        </div>
    );


};

export {PostsList};