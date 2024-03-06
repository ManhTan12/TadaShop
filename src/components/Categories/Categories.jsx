// import React from 'react'

import CategoryItem from "../CategoryItem/CategoryItem";
import "./Categories.scss"
const Categories = () => {

    const data =[
        {
            id:'1',
            img:"https://images.pexels.com/photos/7083930/pexels-photo-7083930.jpeg?auto=compress&cs=tinysrgb&w=600",
            title:"WOMEN",
            cat:"women"
        },
        {
            id:'2',
            img:"https://images.pexels.com/photos/7578752/pexels-photo-7578752.jpeg?auto=compress&cs=tinysrgb&w=600",
            title:"MAN",
            cat:"man"
        },
        {
            id:'3',
            img:"https://images.pexels.com/photos/7578679/pexels-photo-7578679.jpeg?auto=compress&cs=tinysrgb&w=600",
            title:"FOOTBALL",
            cat:"football"
        },
        // {
        //     id:'4',
        //     img:"https://images.pexels.com/photos/8685526/pexels-photo-8685526.jpeg?auto=compress&cs=tinysrgb&w=600",
        //     title:"NEW DRESSES"
        // },
        // {
        //     id:'5',
        //     img:"https://images.pexels.com/photos/4691100/pexels-photo-4691100.jpeg?auto=compress&cs=tinysrgb&w=600",
        //     title:"THE PERFECT JEANS"
        // },
    ]

  return (
    <div className='categories'>
        {
            data.map((item) =>(
                <>
                    <CategoryItem item={item} key={item.id} />
                </>
            ))
        }
    </div>
  )
}

export default Categories