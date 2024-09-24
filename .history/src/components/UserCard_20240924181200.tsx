import Image from 'next/image'
import React from 'react'

const UserCard = ({type}:{type:string}) => {
  return (
    <div className='rounded-2xl odd:bg-dexPurple even:bg-dexYellow p-4 flex-1 min-w-[200px]'>
        <div>
            <span>09/2024</span>
            <Image src="/more.png" alt='more' width={20} height={20} />
        </div>
        <h1>1,234</h1>
        <h2>{type}</h2>
    </div>
  )
}

export default UserCard