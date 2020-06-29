import React from "react"
import Post from './FeedPosts'

const PostData = [
  {
    title: "test title",
    body: "test body"
  },
  {
    title: "test title 2",
    body: "test body 2"
  },
  {
    title: "test title 3",
    body: "test body 3"
  },
  {
    title: "test title 4",
    body: "test body 4"
  },
]
function Feed(){
  return(
    <React.Fragment>
      <div class='feed'>
        { PostData.map((post, index) =>
          <Post
            title={post.title}
            body={post.body}
            key={index}/>
        )}
      </div>
    </React.Fragment>
  );
}
export default Feed;