import React from 'react';

const FavoriteSection = (props) => {
    return ( <div>
        <label for="Favorite">Mis contactos favoritos</label>
        <input
        type="checkbox"
        checked= {props.isChecked}
        onChange= {e => props.callback(e.target.checked)}
        ></input>
    </div> );
}
 
export default FavoriteSection;