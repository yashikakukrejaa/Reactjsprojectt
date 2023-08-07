
import React, { useEffect } from 'react';
import {useParams,useNavigate} from 'react-router-dom';
//import axios from 'axios';


const UpdateBook=()=> {
  const [bookname,setbookName]=React.useState('');
  const [description,setDescription]=React.useState('');
  const [authorname,setAuthorName]=React.useState('');
  const [price,setPrice]=React.useState('');
 // const [image,setimage]=React.useState('');
  const params= useParams();
  const navigate=useNavigate();


  useEffect(()=>{
    console.log(params);
    getbookDetails();
 

  })

  const getbookDetails = async ()=>{
     console.log(params)
  //  // let result= await fetch(`http://localhost:3001/book`);
  //   result =  await result.json();
    
  //   setbookName(result.bookname);
  //   setDescription(result.description);
  //   setAuthorName(result.authorname);
    //setPrice(result.price);
    
  }



  const UpdateBookFunction= async() => { 
   console.warn(bookname,description,price,authorname);
   
     let result =  await fetch(`http://localhost:3001/book/${params.id}`,{
       method:'Put',
      body: JSON.stringify({bookname,description,price,authorname}),
      headers:{
       "Content-Type":"application/json"
      }
    });
   result = await  result.json();
    console.log(result);
  navigate('/');
    
 }

    return (
    <div className='adb'>
       <h1 >AddBook </h1> 
       <label className='labelAddBook'>Bookname</label>
       <input type='text'className="inputBok" placeholder='Enter book name' value={bookname} onChange={(e)=>{setbookName(e.target.value)}}/><br/>

       <label className='labelAddBook'>Description</label>
       <input type='text' className="inputBok" placeholder='Enter Description' value={description} onChange={(e)=>{setDescription(e.target.value)}}/><br/>
       

       <label className='labelAddBook'>Authorname</label>
       <input type='text'className="inputBok" placeholder='Enter authorname' value={authorname} onChange={(e)=>{setAuthorName(e.target.value)}}/><br/>
       

       <label className='labelAddBook'> Price</label>
       <input type='number'className="inputBok"  placeholder='Enter price'  value={price} onChange={(e)=>{setPrice(e.target.value)}}/><br/>

       {/* <label className='labelAddBook'>Image</label>
       <input type='file' className="inputBok"accept='image/png,image/jpg' src='image' placeholder='image' value={image} onChange={(e)=>{setimage(e.target.file)}}/> */}
      {/* // { //error && !image && <span className='invalid-input'> Enter valid image</span> } <br/>  */}


       <button  onClick={UpdateBookFunction}className="addbook">UpdateBook</button>
       
        </div>

  )
}

export default UpdateBook