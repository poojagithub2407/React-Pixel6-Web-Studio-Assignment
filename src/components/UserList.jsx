import { useCallback, useEffect, useRef, useState } from "react";
import useUsers from "./useUsers";
import UserTable from "./UserTable";
import FilterUser from "./FilterUser";

const UserList = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [limit] = useState(30);
  const { loading, error, user, hasMore } = useUsers(limit, pageNumber);
  const [users, setUsers] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: 'id', direction: 'asc' });

  // Filter states
  const [genderFilter, setGenderFilter] = useState('');
  const [stateFilter, setStateFilter] = useState('');

  const observer = useRef();

  const lastUserElementRef = useCallback(node => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPageNumber(prevPageNumber => prevPageNumber + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, [loading, hasMore]);

  useEffect(() => {
    setUsers(user);
  }, [user]);

  useEffect(() => {
    let filteredUsers = [...user];
    
    if (genderFilter) {
      filteredUsers = filteredUsers.filter(user => user.gender === genderFilter);
    }
    
    if (stateFilter) {
      filteredUsers = filteredUsers.filter(user => user.address.state.toLowerCase().includes(stateFilter.toLowerCase()));
    }

    setUsers(filteredUsers);
  }, [user, genderFilter, stateFilter]);

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedUsers = [...users].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  const handleApplyFilters = () => {
    setPageNumber(1); // Reset to the first page for new filters
  };

  const handleResetFilters = () => {
    setGenderFilter('');
    setStateFilter('');
    setPageNumber(1); // Reset to the first page
  };

  return (
    <div className="main-container card">
      <FilterUser
        genderFilter={genderFilter}
        setGenderFilter={setGenderFilter}
        stateFilter={stateFilter}
        setStateFilter={setStateFilter}
        onApplyFilters={handleApplyFilters}
        onResetFilters={handleResetFilters}
      />
      <UserTable
        users={sortedUsers}
        lastUserElementRef={lastUserElementRef}
        sortConfig={sortConfig}
        handleSort={handleSort}
      />
    </div>
  );
};

export default UserList;
