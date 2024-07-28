import { GoArrowUp, GoArrowDown } from "react-icons/go";

const UserTable = ({users,lastUserElementRef,handleSort,sortConfig}) => {
     return (
          <table className='table'>
            <thead>
              <tr>
                <th onClick={() => handleSort('id')}>
                  <div className="d-flex align-items-center">
                    <span className="me-2">ID</span>
                    <div className="d-flex flex-row ms-2">
                      <GoArrowUp className={`cursor-pointer ${sortConfig.key === 'id' && sortConfig.direction === 'asc' ? 'text-danger' : ''}`} />
                      <GoArrowDown className={`cursor-pointer ${sortConfig.key === 'id' && sortConfig.direction === 'desc' ? 'text-danger' : ''}`} />
                    </div>
                  </div>
                </th>
                <th>Image</th>
                <th onClick={() => handleSort('firstName')}>
                  <div className="d-flex align-items-center">
                    <span className="me-2">Full Name</span>
                    <div className="d-flex flex-row ms-2">
                      <GoArrowUp className={`cursor-pointer ${sortConfig.key === 'firstName' && sortConfig.direction === 'asc' ? 'text-danger' : ''}`} />
                      <GoArrowDown className={`cursor-pointer ${sortConfig.key === 'firstName' && sortConfig.direction === 'desc' ? 'text-danger' : ''}`} />
                    </div>
                  </div>
                </th>
                <th onClick={() => handleSort('age')}>
                  <div className="d-flex align-items-center">
                    <span className="me-2">Demography</span>
                    <div className="d-flex flex-row ms-2">
                      <GoArrowUp className={`cursor-pointer ${sortConfig.key === 'age' && sortConfig.direction === 'asc' ? 'text-danger' : ''}`} />
                      <GoArrowDown className={`cursor-pointer ${sortConfig.key === 'age' && sortConfig.direction === 'desc' ? 'text-danger' : ''}`} />
                    </div>
                  </div>
                </th>
                <th>Designation</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => {
                // Destructure properties from user object
                const { id, image, firstName, lastName, gender, age, company, address } = user;
                const { title } = company;
                const { state, country } = address;
      
                return (
                  <tr key={`${id}-${index}`} ref={index === users.length - 1 ? lastUserElementRef : null}>
                    <td>{id}</td>
                    <td>
                      <img width={30} src={image} alt={`${firstName} ${lastName}`} />
                    </td>
                    <td>{firstName} {lastName}</td>
                    <td>{gender.charAt(0).toUpperCase()} / {age}</td>
                    <td>{title}</td>
                    <td>{state}, {country}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        );
}

export default UserTable