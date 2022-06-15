/* import React from 'react'
import ProductReviewCard from "./ProductReviewCard.js"
import "../styles/ProductReviews.css"

const ProductReviews = ({props}) => {
    return (
        <div className="ProductReviews">
           
        {props.map((item,index)=>(

<ProductReviewCard price={item.price} name={item.name} image={item.image} review={item.review} index={index} key={item.image} />


        ))}
             
        </div>
    )
}

export default ProductReviews */