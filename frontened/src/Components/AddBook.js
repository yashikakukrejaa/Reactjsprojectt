
import React from 'react'

const AddBook=()=> {
  const [bookname,setbookName]=React.useState('');
  const [description,setDescription]=React.useState('');
  const [authorname,setAuthorName]=React.useState('');
  const [price,setPrice]=React.useState('');
  // const [image,setimage]=React.useState('');
  const[error,seterror]=React.useState(false)

  const AddBookFunction= async () => { 

    console.warn(!bookname);
    if(!bookname||!description||!price||!authorname)
    {
      seterror(true)
      return false;
    }
  
   // console.warn(bookname,description,price,authorname,image);
    const userId=JSON.parse(localStorage.getItem('user'))._id;
     let result =  await fetch('http://localhost:3001/add-book',{
       method:'post',
      body: JSON.stringify({bookname,description,price,authorname}),
      headers:{
       "Content-Type":"application/json"
      }
    });
   result = await  result.json();
    console.log(result);
  }
 








 return (
    <div className='adb'>
       <h1 >AddBook </h1> 
       <label className='labelAddBook'>Bookname</label>
       <input type='text'className="inputBok" placeholder='Enter book name' value={bookname} onChange={(e)=>{setbookName(e.target.value)}}/><br/>
    { error && !bookname && <span className='invalid-input'> Enter valid bookname</span> } <br/>

       <label className='labelAddBook'>Description</label>
       <input type='text' className="inputBok" placeholder='Enter Description' value={description} onChange={(e)=>{setDescription(e.target.value)}}/><br/>
       { error && !description && <span className='invalid-input'> Enter valid description</span> } <br/>

       <label className='labelAddBook'>Authorname</label>
       <input type='text'className="inputBok" placeholder='Enter authorname' value={authorname} onChange={(e)=>{setAuthorName(e.target.value)}}/><br/>
       { error && !authorname && <span className='invalid-input'> Enter valid authorname</span> } <br/>

       <label className='labelAddBook'> Price</label>
       <input type='number'className="inputBok"  placeholder='Enter price'  value={price} onChange={(e)=>{setPrice(e.target.value)}}/><br/>
       { error && !price && <span className='invalid-input'> Enter valid price</span> } <br/>

        {/* <label className='labelAddBook'>Image</label>
       <input type='file' className="inputBok"accept='image/png,image/jpg' src='image' placeholder='image' value={image} onChange={(e)=>{setimage(e.target.file)}}/> } */}
      {/* // { //error && !image && <span className='invalid-input'> Enter valid image</span> } <br/>  */}


       <button  onClick={AddBookFunction}className="addbook">Add Book</button>
       
        </div>

  )
}

export default AddBook