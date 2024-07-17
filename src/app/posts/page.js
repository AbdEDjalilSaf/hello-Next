
import React from 'react';
import comments from "./data";
// import AddPostForm from "./addPostForm";

// export const comments = [
//   {
//       id: 1,
//       text: "this is first",
//   },
//   {
//       id: 2,
//       text: "this is second",
//   },
//   {
//       id: 3,
//       text: "this is third",
//   },
//   {
//       id: 4,
//       text: "this is forth",
//   }
// ]



async function Posts() {

  console.log(comments);

  return (
    <div>
    <h1>This is the posts</h1>
     {comments.map((post)=>{
      <div>
        <h1 id={post.id}
        >{post.text}</h1>
      </div>
     })}
     <h1>This is the end of posts</h1>
    </div>
  );
}

export default Posts;
