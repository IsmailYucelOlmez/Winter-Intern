import React from 'react'
import Image from '../Image'
import { Link } from 'react-router-dom';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

const CharacterTableRow = ({character}) => {
  return (
    <div className='flex justify-between items-center my-2'>
      <Image src={character.image} className={"w-28 h-28 rounded-xl"} />
      <div className='flex flex-col justify-between gap-4 flex-1 '>
        <div className='grid grid-cols-4 gap-2 w-full text-center h-24'>
          <p>{character.name}</p>
          <p>{character.status}</p>
          <p>{character.species}</p>
          <p>{character.gender}</p>
        
          <Link to={character?.origin?.url || ''}  className=" flex justify-center items-center gap-1 px-1 text-sm" >
            
            Origin: '
            {character?.origin?.name}'
            {character?.origin?.url && (
              <OpenInNewOutlinedIcon sx={{ fontSize:{ xs:15, sm:15, md:15} }}/>
            )}
          </Link>
          <div className="grid grid-cols-subgrid gap-4 col-span-3">
          <Link to={character?.location?.url || ''} className="col-start-2  flex justify-center items-center gap-1 px-1 text-sm" >
            
            Location: ' 
            { character?.location?.name}'
            {character?.location?.url && (
              <OpenInNewOutlinedIcon sx={{ fontSize:{ xs:15, sm:15, md:15} }}/>
            )}
                    
          </Link>
          </div>
        </div>
      </div>
      <Link to={`/character/${character.id}`} className='flex justify-center items-center'>
        <ArrowForwardIosRoundedIcon sx={{ fontSize:{ xs:15, sm:20, md:25} }}/>
      </Link>
    </div>
  )
}

export default CharacterTableRow
