
import { Offcanvas } from 'react-bootstrap'
import { useShoppingCard } from './Context/ShoppingCard'
import Cartitem from './Cartitem'

const ShopCart = ({isOpen }) => {
 
 const {cartItems,handlClose}=useShoppingCard()
  return (
    <div>
<Offcanvas show={isOpen}  onHide={handlClose} placement="end">
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            {/* هنا ممكن تضيف محتوى السلة */}
           {cartItems.map((item)=>(
<Cartitem key={item.id} {...item} />
           ))}
        </Offcanvas.Body>
</Offcanvas>



    </div>
  )
}

export default ShopCart