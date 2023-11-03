import React, { useState , useEffect } from 'react'
import Blooog from './Blooog'

function Home() {
    // const [blogs, setBlogs] = useState([
    //   { id: 1, auteur: "rida", age: 21 },
    //   { id: 2, auteur: "fatima", age: 42 },
    //   { id: 3, auteur: "walid", age: 16 }
    // ])

    const[blogs,setBlogs] = useState(null)


    useEffect(()=>{
      fetch('http://localhost:8000/blogs')
        .then()
    },[])

 
    const deleteBlog = (id) => {
      const newBlogs = blogs.filter(blog => blog.id !== id);
      setBlogs(newBlogs);
    }

    const [name,setName] = useState("Rida");


    // useEffect(()=>{
    //   console.log(blogs)
    //   console.log(name);
    // }

    // ,[name]);



    const changeName = ()=>{
      setName("Mihi")
    }

    return (
      <div>
        <Blooog blogs={blogs} deleteBlog={deleteBlog}/>

        <button onClick={changeName}>Changer</button>

        <h2>{name}</h2>
      </div>
    )
}

export default Home

