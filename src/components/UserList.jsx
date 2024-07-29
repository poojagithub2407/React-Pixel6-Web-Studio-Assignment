import { useCallback, useEffect, useRef, useState } from "react";
import useUsers from "./useUsers";
import UserTable from "./UserTable";
import FilterUser from "./FilterUser";

const UserList = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [limit] = useState(30);
  const { loading, user, hasMore } = useUsers(limit, pageNumber);
  const [users, setUsers] = useState([]);
  const [sorting, setSorting] = useState({ key: 'id', direction: 'asc' });

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
      filteredUsers = filteredUsers.filter(user => user.address.state
        .toLowerCase().includes(stateFilter.toLowerCase()));
    }

    setUsers(filteredUsers);
  }, [user, genderFilter, stateFilter]);

  const handleSort = (key) => {
    let direction = 'asc';
    if (sorting.key === key && sorting.direction === 'asc') {
      direction = 'desc';
    }
    setSorting({ key, direction });
  };

  const sortedUsers = [...users].sort((a, b) => {
    if (a[sorting.key] < b[sorting.key]) {
      return sorting.direction === 'asc' ? -1 : 1;
    }
    if (a[sorting.key] > b[sorting.key]) {
      return sorting.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  const handleApplyFilters = () => {
    setPageNumber(1);
  };

  const handleResetFilters = () => {
    setGenderFilter('');
    setStateFilter('');

  };

  return (
    <div className="main-container mb-5 ">
      <FilterUser
        genderFilter={genderFilter}
        setGenderFilter={setGenderFilter}
        stateFilter={stateFilter}
        setStateFilter={setStateFilter}
        onApplyFilters={handleApplyFilters}
        onResetFilters={handleResetFilters}
      />
      <div className="table-container">
        <UserTable
          users={sortedUsers}
          lastUserElementRef={lastUserElementRef}
          sort={sorting}
          handleSort={handleSort}
        />
      </div>

    </div>
  );
};

export default UserList;
