import styles from '../styles/Details.module.css'
import Image from 'next/image'

const Details = ( { handleCart, handleSelectedSize, selectedSize, error } ) => {
  return (
    <div className={styles.twoLayout}>
      <div className={styles.item}>
        <Image 
          layout="fixed"
          src="/classic-tee.jpg"
          width="384px"
          height="576px"
        />         
      </div> 
      <div className={styles.details}>
        <h3 className={styles.header}> Classic tee </h3>           
        <strong className={styles.header}> $75 </strong>  
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        <p className={styles.description}> SIZE<span className={styles.star}>*</span> { selectedSize } </p>
        <div className={styles.buttonSizes}>
          <input type="button" className={styles.button} value="S" onClick={() => handleSelectedSize('S')} />
          <input type="button" className={styles.button} value="M" onClick={() => handleSelectedSize('M')}/>
          <input type="button" className={styles.button} value="L" onClick={() => handleSelectedSize('L')}/>
        </div>

        { error && <p className={styles.error}> {error} </p> }
        <button className={styles.primaryButton} onClick={() => handleCart()}> Add to cart </button>
      </div>
    </div>
  )
} 

export default Details
