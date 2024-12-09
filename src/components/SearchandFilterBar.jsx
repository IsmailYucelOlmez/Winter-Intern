import React, { useEffect, useId, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useLocation } from 'react-router-dom';
import {statuOptions,genderOptions,speciesOptions, sizeOptions} from '../assets/SelectOptions'
import Select from 'react-select';

const SearchandFilterBar = ({placeholder,setFilters}) => {

  const [pageLength,setPageLength]=useState(sizeOptions[0]);
  const [status,setStatus]=useState();
  const [species,setSpecies]=useState();
  const [gender,setGender]=useState();
  const [name,setName]=useState();
    
  const location=useLocation();

  
  const resetPageValue=()=>{

    setFilters(prev=>({...prev,page:1}))
  }

  const changeName=()=>{

    setFilters(prev=>({...prev,name:name}))
  }

  const resetName=()=>{

    setName("");
    setFilters(prev=>({...prev,name:""}))
  }

  const handleNameInput=(e)=>{

    if(e.key=="Enter" && name){
      changeName();
      e.target.blur()
    }
  }

  const changeLength=(selectedItem)=>{

    setPageLength(selectedItem)
    setFilters(prev=>({...prev,pageSize:selectedItem.value}))

    resetPageValue();
  }

  const changeStatus= (selectedItem)=>{

    setStatus(selectedItem)
    setFilters(prev=>({...prev,status:[]}))

    setFilters(prev=>({...prev,status:[...prev.status,selectedItem.value]}))

    resetPageValue();
    
  }

  const changeSpecies=(selectedItem)=>{
   
    setSpecies(selectedItem)
    setFilters(prev=>({...prev,species:[]}))   

    setFilters(prev=>({...prev,species:[...prev.species,selectedItem.value]}))

    resetPageValue();
  }

  const changeGenders=(selectedItem)=>{
    
    setGender(selectedItem)
    setFilters(prev=>({...prev,gender:[]}))

    setFilters(prev=>({...prev,gender:[...prev.gender,selectedItem.value]}))

    resetPageValue();
  }


  return (
    <div className='flex justify-between items-center mb-6 gap-4'>
      <div className='flex justify-center items-center w-1/4 gap-2'>
        <div className='flex justify-center items-center gap-1 w-full '>
          <input value={name} onKeyDown={(e)=>handleNameInput(e)} onChange={(e)=>setName(e.target.value)} type="text" name="" id="searchInput" className='w-full outline-none border border-black rounded-xl px-2 py-1 ' placeholder={placeholder} />
          <button onClick={()=>changeName()} className='flex justify-center items-center'><SearchIcon sx={{ fontSize:{ xs:15, sm:20, md:25} }}/></button>
        </div>
        <button onClick={()=>resetName()} className=''>Clear</button>
      </div>
      <div className='flex gap-4 flex-1 justify-end items-center'>
          <Select
            defaultValue={sizeOptions[0]}         
            value={pageLength}
            onChange={changeLength}
            name="length"
            options={sizeOptions}
            className="p-0 text-xs"
            
          />  
        {location.pathname=="/characters" && (
          <>
            <Select
              defaultValue={[]}
              
              value={status}
              onChange={changeStatus}
              name="status"
              options={statuOptions}
              className="p-0 text-xs"
              placeholder="Statu"
              
            />   
            <Select
              defaultValue={[]}
              
              value={species}
              onChange={changeSpecies}
              name="species"
              options={speciesOptions}
              className="p-0 text-xs"
              placeholder="Species"
            />  
            <Select
              defaultValue={[]}
              
              value={gender}
              onChange={changeGenders}
              name="genders"
              options={genderOptions}
              className="p-0 text-xs"
              placeholder="Gender"
            />  
          </>
          
        )}
        
      </div>
    </div>
  )
}

export default SearchandFilterBar
