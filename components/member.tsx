import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  id: string
  name: string
  socialId: string
  link: string
}

const Member: React.FC<Props> = ({ id, name, socialId, link }) => {
  return <div>
    <Image src={`/assets/team/vtificial_faces_${id}.png`} alt={name} width={1366} height={1555} style={{borderRadius:'15px'}}/>
    <div className='text-2xl xl:text-3xl'>{name}</div>
    <div className='text-xl'>
      <Link href={link}>
        <a>{socialId}</a>
      </Link>
    </div>
  </div>
}

export default Member