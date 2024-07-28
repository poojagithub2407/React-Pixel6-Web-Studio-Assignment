import { MdFilterAlt } from "react-icons/md";

const Employee = ({ genderFilter, setGenderFilter, stateFilter, setStateFilter, onApplyFilters, onResetFilters }) => {
     return (
          <div className='pt-36 m-10'>
               <div className='flex justify-between'>
                    <h3 className='font-bold'>Employee</h3>
                    <div className='flex justify-end items-end space-x-8'>
                         <div className='text-red-700 text-3xl font-bold'>
                              <MdFilterAlt
                              onClick={onApplyFilters}
                               className='mt-3' />
                         </div>
                         <div>
                              <input className="  border rounded  py-2 px-4 w-15 "
                                   type="text" 
                                   value={stateFilter}
                                   onChange={(e) => setStateFilter(e.target.value)}
                                   placeholder="country" />
                         </div>
                         <div>
                              <select value={genderFilter}
                                   onChange={(e) => setGenderFilter(e.target.value)}
                                   className=" border rounded  w-15 py-2 px-4 mx-3 ">
                                   <option defaultValue='Gender'>Gender</option>
                                   <option value="female">Femake</option>
                                   <option value="male">Male</option>

                              </select>
                         </div>
                    </div>
               </div>

          </div>
     )
}

export default Employee