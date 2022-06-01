import { useState } from 'react'
import styles from '../styles/Container.module.css'
import Details from '../components/Details'

const Home = () =>  {
  
  const [cartCount, setCartCount] = useState(0)
  const [selectedSize, setSelectedSize] = useState('')
  const [cart, setCart] = useState({})
  const [error, setError] = useState('')

  const handleCartCount = () => {
    setCartCount(cartCount + 1)
  }
  
  const handleSelectedSize = (size) => {
    setSelectedSize(size)
  }

  const handleCart = () => {
    if (selectedSize === '') {
      setError('Please select a size.')
    }

    if (selectedSize !== '') {
      const addToCart = cart[selectedSize] 
        ? { size: selectedSize, quantity: cart[selectedSize].quantity + 1 } 
        : { size: selectedSize, quantity: 1} 
      setCart({...cart, [selectedSize]: addToCart})
      setSelectedSize('')
      handleCartCount()
      setError('')
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.cart}> My Cart ({cartCount}) </p>
      </div>
      <Details 
        handleCart={handleCart} 
        handleSelectedSize={handleSelectedSize} 
        selectedSize={selectedSize} 
        error={error} 
      />
    </div>
  )
}

export default Home
