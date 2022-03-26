import React,{useEffect,useState} from 'react'
import"./Productcss/Message.css"
import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import db from '../firebase'

function Message() {
  const[data,setData]=useState([])
  const [info,setInfo]=useState(1);
  useEffect(() => {
    async function getData(){
      try{
        db.collection('queries').onSnapshot((snapshot)=>
        setData(snapshot.docs.map((doc)=> ({id: doc.id, data:doc.data()}))))
      }catch(err){
        console.log(err)
      }
    }
    getData()
  
     }
  , [])
  console.log(data)
  return (
    <div class="container">
    <h2>
      Customer queries
    </h2>
  {data && data.map((mess) =>(
     <ul class="responsive-table">
     <li class="table-header">
       <div class="col col-2">Name</div>
       <div class="col col-3">Message</div>
       <div class="col col-4">Action</div>
     </li>
     <li class="table-row">
       <div class="col col-2" data-label="Customer Name">
       {mess.data.fname}{" "}{mess.data.lname}
       </div>
       <div class="col col-3" data-label="Message">
        {mess.data.message}
       </div>
       <div class="col col-4" data-label="Action">
       <IconButton aria-label="delete">
         <DeleteIcon onClick={(e)=>
          db.collection("queries").doc(mess.id).delete()
        }/>
       </IconButton>
       </div>
     </li>
   </ul>
  ))}
   
  </div>
  )
}

export default Message