import React from 'react'

function Blooog({blogs,deleteBlog}) {
  return (
    <div>
      {
        blogs.map((blog)=> (
            <div key={blog.id}>
                    <h1>{blog.auteur}</h1>
                    <h2>{blog.age}</h2>
                 <button onClick={()=>(deleteBlog(blog.id))}>Delete</button>
            </div>
        ))
      }

      
    </div>
  )
}

export default Blooog

