import React from 'react'

const Card = (props) => {
  return (
    <div>
        <a href={props.elem.url} target='_blank'>
            <div className='h-40 w-44 overflow-hidden  rounded-xl'>
                <img className='h-full w-full object-cover' src ={props.elem.download_url} alt="" /> 
                {/* ye download url kaha sae aayi ye humney jab console.log karke response.data nikala tha n tab humey uss mae mili thi */}
            </div>
            <h2 className='font-bold text-lg'>{props.elem.author}</h2>
        </a>
    </div>
  )
}

export default Card