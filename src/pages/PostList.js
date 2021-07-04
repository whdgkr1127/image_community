import React from 'react';
import Post from '../components/Post';
import Header from '../components/Header'
import { Button } from '../elements';
const PostList = (props) =>{

    return(
        <React.Fragment>
            <Post/>
            <Button is_float text="+"></Button>
        </React.Fragment>
    )
}

export default PostList