import React,{useState,useEffect} from 'react'
import db from '../firebase'
import "./Productcss/Prefabhouse.css"
import DeleteIcon from '@mui/icons-material/Delete';
function Prefabhous() {
    const[data,setData]=useState([])
    const [info,setInfo]=useState(1);
    useEffect(() => {
      async function getData(){
        try{
          db.collection('PREFAB HOUSE').onSnapshot((snapshot)=>
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
    <div className="container">
    <ul className="responsive-table">
      <h1>PREFAB HOUSE</h1>
      <li className="table-header">
          <div className="col col-1">Name</div>
          <div className="col col-2">Phone</div>    
          <div className="col col-3">Address</div>
          <div className="col col-4">Email</div>
          <div className="col col-5">Action</div>
        </li>
      </ul>
    {data && data.map((n)=>(
      <div>
        <h2>{n.data.title}</h2>
      <ul className="responsive-table">
      
        <li className="table-row">
          <div className="col col-1" data-label="Job Id">{n.data.Cname}</div>
          <div className="col col-2" data-label="Customer Name">{n.data.Cphone}</div>
          <div className="col col-3" data-label="Amount"> {n.data.Caddress}</div>
          <div className="col col-4" data-label="Payment Status">{n.data.Cemail}</div>
          <div className="col col-5" data-label="Payment Status"> 
          <DeleteIcon onClick={(Event) =>
                        db.collection("PREFAB HOUSE").doc(n.id).delete()
                      }
                    fontSize="large"/></div>
        </li>
        </ul>
        </div> ))}
      
      
  
</div>
  )
}

export default Prefabhous