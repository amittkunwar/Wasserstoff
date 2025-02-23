import React from 'react'

function TopButtons({setQuery}) {

  // const handleClick = ({e}) => {
  //   setQuery({q: city.name})
  // }

  const cities =[
    {
      id:1,
      title:'Delhi'
    },
    {
      id:2,
      title:'Mumbai'
    },
    {
      id:3,
      title:'Kolkata'
    },
    {
      id:4,
      title:'Chennai'
    },
    {
      id:5,
      title:'Bangalore'
    },

  ]
  return <div className="flex items-center justify-around my-6">
    {cities.map((city) =>(
      <button key={city.id} 
      onClick={() => setQuery({q: city.title})}
      className="text-white text-lg font-medium hover:translate-y-[-4px] duration-200 ease-in-out hover:underline">{city.title}</button>

    ))}
  </div>
}

export default TopButtons
