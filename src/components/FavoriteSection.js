import React from 'react';
import styles from '../CSS/styles.module.css';

const FavoriteSection = (props) => {
    return ( 
    <div className={styles.containerFavoriteSection}>
        <label htmlFor="Favorite">Ver mis contactos favoritos</label>
        <input
        type="checkbox"
        checked= {props.isChecked}
        onChange= {e => props.callback(e.target.checked)}
        />
    </div> );
}
 
export default FavoriteSection;