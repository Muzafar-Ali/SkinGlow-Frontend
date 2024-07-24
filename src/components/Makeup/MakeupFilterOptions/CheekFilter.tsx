import { useState } from 'react'
import { AiFillCaretDown } from 'react-icons/ai';
import { CategoryType } from '@/utils/types';

type CheekFilterProps = {
  cheekCategories: CategoryType[] 
  cheekFilters: string[];
  handleMakeupFiltersChange: (filetrTyp: string, value: string) => void;
}

const CheekFilter = ({ cheekCategories, cheekFilters, handleMakeupFiltersChange }: CheekFilterProps) => {
  
  const [isDropDown, setIsDropDown] = useState(true)
  
  return (
    <div className='border-b border-neutral-200 p-4 bg-white'>
      <div className='inline-flex justify-between items-center w-full cursor-pointer bg-white '
        onClick={() => setIsDropDown((prev) => !prev)}
      >
        <h2 className="w-full text-pink-800 text-base font-bold capitalize leading-snug">cheek</h2>
        <div className={`${isDropDown ? 'rotate-0':'rotate-180'} flex justify-center items-center text-pink-800 transition-transform duration-500 ease-in-out`}>
          <AiFillCaretDown className={`w-4 h-4`}/>
        </div>
      </div>

      <div className={`${isDropDown ? 'visible-container' :'hidden-container'} flex flex-col gap-y-2 mt-2 bg-white`}>
        { cheekCategories?.map((item, index) => (
          <div 
            className='inline-flex items-center gap-x-2 bg-white' 
            key={index}
          >
            <div 
              className={`${cheekFilters?.includes((item?._id.toLowerCase()).split(' ').join('-')) ? "bg-neutral-950 ring-2 ring-white ring-inset":"bg-white"} w-4 h-4 border-2 hover:scale-125 border-neutral-950 rounded-sm cursor-pointer`}
              onClick={() => handleMakeupFiltersChange('cheek', (item?._id.toLowerCase()).split(' ').join('-'))}
            />
            <div className="text-neutral-950 text-sm font-normal capitalize leading-[25.20px] bg-white">{ item.name }</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CheekFilter