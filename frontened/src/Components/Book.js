import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

const  Book=()=> {
    const [books,setBooks]=useState([]);
    useEffect(()=>{
    getBooks();
    },[])
    const getBooks= async()=>{

        let result=  await fetch("http://localhost:3001/books");
        result= await result.json();
        setBooks(result);
    }
    const deletebook=async(id)=>{
        let result=  await fetch(`http://localhost:3001/book/${id}`,{
            method:"Delete"
        });
        result= await result.json()
        if(result)
        {
            getBooks();
        }
    }
  return (
    <div className='booklist'>
        <h3>BookList</h3>
        <ul>
            <li>S.No</li>
            <li>Bookname</li>
            <li>Description</li>
            <li>Authorname</li>
            <li>Price</li>
          {/* <li>Image</li>  */}
            <li>Operation</li>
        </ul>
        
        {
            books.map((item,index)=>
            <ul key={item._id}>
            <li>{index+1}</li>
            <li>{item.bookname}</li>
            <li>{item.description}</li>
            <li>{item.authorname}</li>
             <li>${item.price}</li> 
            {/* <li>{item.image}</li> */}
            <li><button onClick={()=>deletebook(item._id)}>Delete</button>
            <Link to={"/update/10"+item._id}>Update</Link>
            


            

            </li>
            
        </ul>

            )
        }
    </div>
    
  )
}

export default Book

