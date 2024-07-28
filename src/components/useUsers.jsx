import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useUsers(limit, pageNumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [user, setUser] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setUser([]);
  }, [limit]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;

    const skip = (pageNumber - 1) * limit;

    axios({
      method: 'GET',
      url: 'https://dummyjson.com/users',
      params: { limit, skip },
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setUser(prevUser => [
        ...prevUser,
        ...res.data.users 
      ]);
      setHasMore(res.data.users.length > 0); 
      setLoading(false);
    }).catch(e => {
      if (axios.isCancel(e)) return;
      setError(true);
    });

    return () => cancel();
  }, [limit, pageNumber]); 

  return { loading, error, user, hasMore };
}
