import React , {useContext} from 'react'
import { FaRegHeart, FaShare, FaStar } from 'react-icons/fa'
import { FaRegStarHalfStroke } from 'react-icons/fa6'
import { TiShoppingCart } from 'react-icons/ti'
import { CartContext } from '../../components/context/CartContext'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function ProductInfo({ product }) {

 const { cartItems, addToCart , addToFavorites, favorites , removeFromFavorites } = useContext(CartContext)

  const navigate = useNavigate()

  const isInCart = cartItems.some(i => i.id === product.id);
 
   const handleAddToCart = () => {
    addToCart(product)

    
    toast.success(
      <div className='toast-wrapper'>
        <img src={product.images[0]} alt="" className='toast-img'/>

        <div className="toast-content">
          <strong>{product.title}</strong>
          added to Cart
          <div>
            <button className='btn' onClick={() => navigate('/cart')}> View Cart</button>
          </div>
        </div>
      </div>
      ,{duration : 3500}
    )
}
  // favorites
  const isInFav = favorites.some(i => i.id === product.id);

  const handleAddToFav = () => {
    if (isInFav) {
        removeFromFavorites(product.id)
        toast.error(`${product.title} Removed from favorites`)
    } else {
      addToFavorites(product)
      toast.success(`${product.title} added To favorites`)
    }

  }


    
    return (
        <div className="details_item">
            <h1 className='name'>{product.title}</h1>
            <div className='stars'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStarHalfStroke />
            </div>
            <p className='price'>$ {product.price}</p>
            <h5>Availability:  <span>{product.availabilityStatus}</span></h5>
            <h5>Brand:  <span>{product.brand}</span></h5>
            <p className='desc'>{product.description}</p>
            <h5 className='stock'> <span> Herry Up! Only <span>{product.stock}</span> products left in Stock:</span> </h5>
           
           
            <button onClick={handleAddToCart} className= {`btn ${isInCart ? 'in-cart' : ''}`}>
                {isInCart ? "item in cart" : "Add to cart"}        <TiShoppingCart />
            </button>

            <div className="icons">
                <span className={`${isInFav ? "in-fav" : ""}`} onClick={handleAddToFav} ><FaRegHeart /></span>
               
            </div>

        </div>

    )
}

export default ProductInfo