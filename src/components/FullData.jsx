import React,{useContext} from 'react';
import { useParams } from 'react-router-dom';
import { Blogcontext } from '../App';

function FullData() {
  const { id } = useParams();
  const{dataList}=useContext(Blogcontext)
  console.log(dataList)

  return (
    <div>
      {
        dataList.map((data)=>{
          if(id==data.id){
            return(
              <div key={data.id}>
               <h1>{data.title} </h1>
            <h2>{data.body}</h2>
              </div>
            )
            
          }
        })
      }
    </div>
  );
}

export default FullData;
