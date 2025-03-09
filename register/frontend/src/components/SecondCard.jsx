import React from 'react'
import cardImg from '../assets/card-img.png'

const SecondCard = () => {
  return (
    <div>

<div class="flex flex-col bg-white shadow-sm border border-blue-950 rounded-4xl my-6 w-80">
  <div class="m-2.5 overflow-hidden rounded-md h-52 flex justify-center items-center">
    <img class="w-full h-full object-cover" src={cardImg} alt="profile-picture" />
  </div>
  <div class="p-6 text-center">
    <h4 class="mb-1 text-xl font-semibold text-blue-950">
      Natalie Paisley
    </h4>
    <p class="text-base text-lime-400 mt-1 font-light ">
        The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to Naviglio where you can enjoy the main night life in Barcelona.
    </p>
  </div>
 
</div>





    </div>
  )
}

export default SecondCard