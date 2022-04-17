import ItemCount from './ItemCount'
import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'

function ItemDetail({ beerDetail }) {

    const [quantity, setQuantity] = useState(1)
    const [checkout, setCheckout] = useState(false)

    const { addItem, isInCart } = useContext(CartContext)

    const onAdd = () => {

        setCheckout(true)
        addItem(beerDetail, quantity)
        isInCart(beerDetail.id)
    }

    return (
        <>
            <div className='detailSection row col-xl-8 mx-auto my-5 py-3'>
                <div className='col-xl-6'>
                    <img src={beerDetail.pictureURL} alt={beerDetail.name} ></img>
                </div>
                <div className='col-xl-6 mt-5'>
                    <h3> {beerDetail.name} {beerDetail.size} </h3>
                    <h5>{beerDetail.type} | {beerDetail.origin} </h5>
                    <h5>ABV: {beerDetail.abv} </h5>
                    <h3 className='mt-4'>$ {beerDetail.price} </h3>
                    {(beerDetail.description)
                        ? <p className='mt-4'> {beerDetail.description} </p>
                        : console.log("No hay descripción")}

                    <ItemCount stock={beerDetail.stock} quantity={quantity} setQuantity={setQuantity} onAdd={onAdd} checkout={checkout} />
                </div>
            </div>
        </>
    )
}

export default ItemDetail