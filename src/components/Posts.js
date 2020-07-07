import React from 'react'
import Post from './Post'

const Posts = ({posts}) => {
    return (
        <div>
            {posts.map((recipe, index) => <Post recipe={recipe} key={index} />)}
        </div>
    )
}


export default Posts
