// import React, { useState } from 'react'

// const DisplayFormDataInTable = () => {
//     const [tableData, setTableData] = useState([])
//     const [formInputData, setFormInputData] =useState(
//         {
//             name: '',
//             email: '',
//             salary: ''
//         }
//     )

//     const handleChange=(event)=>{
//         const newInput = (data)=>
//             ({...data, [event.target.name]:event.target.value})
        
//         setFormInputData(newInput)
//     }

//     const handleSubmit = (event) =>{
//         event.preventDefault();
//         const checkEmptyInput =
//         !Object.values(formInputData).every(res => res === "")
//         // console.log(Object.values(formInputData));

//         if(checkEmptyInput)
//         {
//             const newData = (data) =>
//                 ([...data, formInputData])
            
//             setTableData(newData)
//             const emptyInput = 
//             {
//             name:'',
//             email:'',
//             salary:''
//             }
//             setFormInputData(emptyInput)
//         }
//     }



//     return (
//         <div>
//         <input type="text" onChange={handleChange} value={formInputData.fullName} name="fullName" className="form-control"  placeholder="Full Name" />
     
      
//      <input type="email" onChange={handleChange} value={formInputData.emailAddress} name="emailAddress" className="form-control" placeholder="Email Address" />
 
  
//      <input type="text" onChange={handleChange} value={formInputData.salary} name="salary" className="form-control" placeholder="Salary" />
   
  
//      <input type="submit" onClick={handleSubmit} className="btn btn-primary" />

//      <table className="table">
//     <thead>
//         <tr>
//             <th>S.N</th>
//             <th>Full Name</th>
//             <th>Email Address</th>
//             <th>Salary</th>
//         </tr>
//     </thead>
//     <tbody>
//     {
//         tableData.map((data, index)=>{
//             return(
//                 <tr key={index}>
//                     <td>{index+1}</td>
//                     <td>{data.fullName}</td>
//                     <td>{data.emailAddress}</td>
//                     <td>{data.salary}</td>
//                 </tr>
//             )
//         })
//     }
//     </tbody>
// </table>
// </div>
//     )
// }

// export default DisplayFormDataInTable
// ================================================================================================================================================
// working of useRef
// import React, { useRef } from 'react'

// const DisplayFormDataInTable = () => {
//     const colorRef = useRef(0)

//     const handleSubmit=() =>{
//         colorRef.current.style.backgroundColor = "blue";
//     }

//     return (
//         <div>
//             <div ref={colorRef} style={{ width: "300px", height: "300px", backgroundColor: "red" }}>I am working on useRef </div>
//             <button onClick={handleSubmit}>Change Color</button>
//         </div>
//     )
// }

// export default DisplayFormDataInTable
// ===========================================================================================================================
// working of UseCallback
// import React, { useState, useCallback } from 'react'
// import FormInput from './FormInput'

// const DisplayFormDataInTable = () => {
//     const [count, setCount] =useState(0)
//     const [state , setState]= useState([])

//     const increment = ()=>{
//         setCount(count+1)
//     }

//     const setCounting = 
//        useCallback(()=>{
        
//             setState((prev)=>[...prev, 'new Entry'])
       
//        },[state])
       
    

//     return (
//         <div>
//             <FormInput state={state} setCounting={setCounting}/>
//            <div>
//            Count: {count}
//             <button onClick={increment}>+</button> 
//            </div>
                   
//         </div>
//     )
// }

// export default DisplayFormDataInTable


// ====================================================================================================================================
// CRUD OPERATION
// import React ,{useState, useEffect} from 'react'
// import Table from './Table'

// const getDatafromLS=()=>{
//     const data = localStorage.getItem('books')
//     if(data){
//         return JSON.parse(data)
//     }
//     else
//     {
//         return []
//     }
// }

// const DisplayFormDataInTable = () => {
    
//     // main Array
//     const [books, setBooks] =useState([])
//     const [bookNumber, setbookNumber] =useState('');
//     const [bookName, setbookName] =useState('');
//     const [authorName, setauthorName] =useState('')
//     const [bookTitle, setBookTitle] = useState('')

//     // form submit event
//     const handleAddBookSubmit =(e)=>{
//         e.preventDefault()
//         // create object

//         let book={
//             bookNumber,
//             bookName,
//             authorName,
//             bookTitle
//         }
//         setBooks([...books,book])
//        setbookNumber('')
//         setbookName('')
//         setauthorName('')
//         setBookTitle('')
//     }
//      // delete book from LS
//   const deleteBook=(bookNumber)=>{
//     const filteredBooks=books.filter((element)=>{
//       return element.bookNumber !== bookNumber
//     })
//     setBooks(filteredBooks);
//   }
//     // saving data to localStorage

//     useEffect(() => {
//         localStorage.setItem('books',JSON.stringify(books))
//     }, [books])

//   return (
//     <>
//     <div>
//       <form style={{width:'50%', height:"200px",backgroundColor:'grey', display:'flex',gap:'5px', justifyContent:"center" , flexDirection:'column', padding:'10px'}} onSubmit={handleAddBookSubmit}>
//       <div style={{width:'100%',display:'flex', alignItems:"center", justifyContent:"center" }}>
//             <label style={{width:'30%', padding:'5px 20px', display:'flex' ,justifyContent:'flex-start'}}>Enter Book Number</label>

//             <input type="text" placeholder="Enter Book Number" value={bookNumber} onChange={event => setbookNumber(event.target.value)} style={{width:'50%',padding:'5px 20px'}}/>
//         </div>

//         <div style={{width:'100%',display:'flex', alignItems:"center", justifyContent:"center" }}>
//             <label style={{width:'30%', padding:'5px 20px', display:'flex' ,justifyContent:'flex-start'}}>Enter Book Name</label>

//             <input type="text" placeholder="Enter Book name" value={bookName} onChange={event => setbookName(event.target.value)} style={{width:'50%',padding:'5px 20px'}}/>
//         </div>

//         <div style={{width:'100%',display:'flex', alignItems:"center", justifyContent:"center"}}>
//             <label style={{width:'30%', padding:'5px 20px', display:'flex' ,justifyContent:'flex-start'}}>Enter Author Name</label>

//             <input type="text" placeholder="Enter author name" value={authorName} onChange={event => setauthorName(event.target.value)} style={{width:'50%',padding:'5px 20px'}}/>
//         </div>

//         <div style={{width:'100%',display:'flex', alignItems:"center", justifyContent:"center"}}>
//             <label style={{width:'30%', padding:'5px 20px', display:'flex' ,justifyContent:'flex-start'}}>Enter Book Title Name</label>

//             <input type="text" placeholder='Enter Title Name' value={bookTitle} onChange={event => setBookTitle(event.target.value)} style={{width:'50%',padding:'5px 20px'}}/>
//         </div>
//         <div>
//             <button style={{padding:'5px 20px', marginTop:'10px', cursor:'pointer'}}>ADD</button>
//         </div>
//       </form>
//     </div>
//     <div>
//         {books.length > 0 &&
//         <div>
//             <table>
//             <thead>
//                 <tr>
//                     <th>Book Name</th>
//                     <th>Book Title</th>
//                     <th>Book Author</th>
//                 </tr>
//             </thead>

//             <tbody>
//                 <Table books={books} deleteBook={deleteBook}/>
//             </tbody>
//         </table>
//         </div>
//         }
//         {
//         books.length < 1 && 
//         <div>No Books are added</div>
//         }
//     </div>
//     </>
//   )
// }

// export default DisplayFormDataInTable

// ==============================================================================================================================
// using useRef video play and pause

// import react, { useState, useRef } from "react";

// export default function App() {
//     const [videoplay, setvideoplay]= useState(false)
//     const ref =useRef(null)

//     const handleChange = ()=>{
//         const nextvideoplay = ! videoplay;
//         setvideoplay(nextvideoplay)

//         if (nextvideoplay) {
//             ref.current.play();
//           } else {
//             ref.current.pause();
//           }
//     }
//   return (
//     <div>
//         <button onClick={handleChange} >{videoplay? 'pause' : 'play'}</button>
//         <video width='250' ref={ref} onPlay={()=>setvideoplay(true)} onPause={()=>{setvideoplay(false)}}> 
//             <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4"/>
//         </video>
//     </div>
//   );
// }


