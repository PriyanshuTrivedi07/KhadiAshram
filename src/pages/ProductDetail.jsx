import React from 'react'
import { useParams } from 'react-router-dom'

function ProductDetail() {
  const {slug}  = useParams()
  return (
    <div>Product's Detail page : {slug}</div>
  )
}

export default ProductDetail