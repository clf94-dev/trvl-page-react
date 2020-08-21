import React from 'react'
import {Link} from 'react-router-dom'
import IMG9 from './image/img-9.jpg';
import IMG2 from './image/img-2.jpg';
import IMG3 from './image/img-3.jpg';
import IMG4 from './image/img-4.jpg';
import IMG5 from './image/img-5.jpg';
import IMG6 from './image/img-6.jpg';
import IMG7 from './image/img-7.jpg';
import IMG8 from './image/img-8.jpg';
import IMG1 from './image/img-1.jpg';

function CardItem(props) {
    const Images =[IMG9, IMG2, IMG3,IMG4,IMG8, IMG5, IMG6, IMG7];
    return ( <li className="cards__item">
        <Link className="cards__item__link">
            <figure className="cards__item__pic-wrap" data-category={props.label}>
                <img src={Images[props.index]} alt="Travel  Image" className="cards__item__img"/>
            </figure>
<div className="cards__item__info">
<h5 className="cards__item__text">{props.text}</h5>
</div>
        </Link>
    </li> 
    )
}

export default CardItem;