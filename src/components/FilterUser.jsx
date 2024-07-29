

import { MdFilterAlt } from "react-icons/md";

const Employee = ({ genderFilter, setGenderFilter, stateFilter, setStateFilter, onResetFilters }) => {
     return (
          <div className=''>
               <div className='flex justify-between'>
                    <h3 className='font-bold'>Employee</h3>
                    <div className='flex justify-end items-end space-x-8'>
                         <div className='text-red-700 text-3xl font-bold'>
                              <MdFilterAlt
                                   onClick={onResetFilters}
                                   className='mt-3' />
                         </div>
                         <div className='w-36'>
                              <input
                                   className="border rounded py-2 px-4 w-full"
                                   type="text"
                                   value={stateFilter}
                                   onChange={(e) => setStateFilter(e.target.value)}
                                   placeholder="Country"
                              />
                         </div>
                         <div className='w-36'> 
                              <select
                                   value={genderFilter}
                                   onChange={(e) => setGenderFilter(e.target.value)}
                                   className="border rounded w-full py-2 px-6"
                              >
                                   <option value="">Gender</option> 
                                   <option value="female">Female</option>
                                   <option value="male">Male</option>
                              </select>
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default Employee;
