import React, { useState } from 'react'
import { useGetCharacters } from '../../api/CharacterApi'
import Pagination from '../Pagination';
import SearchandFilterBar from '../SearchandFilterBar';
import CharacterTableRow from './CharacterTableRow';
import Loading from '../Loading'
import CharacterTableHead from './CharacterTableHead';
import useFilterStore from '../../store/FilterStore';

const CharacterDataTable = () => {

  const filters=useFilterStore((state)=>state.filters)

  console.log(filters)

  const {characters,isLoading:charactersLoading}=useGetCharacters(filters);

  return (
      
        <div className='flex flex-col'>

          <SearchandFilterBar placeholder={"Search by Name..."} />

          <CharacterTableHead />

          {!charactersLoading ?(
          <>
            <div className='flex flex-col gap-4'>

            {characters?.results.map((character,i)=>(

              <CharacterTableRow key={character.id} character={character}/>
            ))}
            </div>

            <Pagination dataLength={characters?.info.count} currentPage={filters.page} pageSize={filters.pageSize} /> 

          </>

          ):(
            <Loading/>
          )}

          

        </div>
        
      
      
  )
}

export default CharacterDataTable
