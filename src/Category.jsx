import React from 'react'

const Category = ({ category, filterItems }) => {
  return (
    <button className="btn" onClick={() => filterItems(category)}>{category}
      
    </button>
  )
}

export default Category
