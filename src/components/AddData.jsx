import React, { useContext } from 'react'
import Form from 'react-bootstrap/Form';
import { FloatingLabel,Button } from 'react-bootstrap';
import { Blogcontext } from '../App';
import { Link } from 'react-router-dom';

function AddData() {
  const{dataList,setDataList} = useContext(Blogcontext)
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const formdata=new FormData(event.target)
    const formjson=Object.fromEntries(formdata.entries())
    // console.log(formjson)
    formjson.id= Date.now()
    setDataList([...dataList,formjson])
    console.log(dataList);

  };

  return (
    <>
  
    
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Title"
          name='title'
          
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Body</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Enter Body"
          name='body'
         
        />
      </Form.Group>
      <Button type="submit">Add Data</Button>
    </Form>
    {dataList.map((data)=>{
      return <Link to={`/view/${data.id}`} key={data.id}><h1 >{data.title}</h1></Link>
      
    })}

    
    </>
  )
}
export default AddData;
