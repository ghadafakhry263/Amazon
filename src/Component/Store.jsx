import React from 'react'
import item from "../data/item.json"
import { Col, Row } from 'react-bootstrap'
import Itemstor from './Itemstor'
const Store = () => {
  return (
    <>
<Row className='g-8 w-100'>
   {item.map((item)=>(
     <Col key={item.id}>
        <Itemstor {...item}/>
     </Col>
   )
)} 
</Row>
    </>
  )
}

export default Store