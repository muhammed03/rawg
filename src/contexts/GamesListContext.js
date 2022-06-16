import { createContext, useState, useEffect } from 'react';
import { getGamesList } from '../services/rawg-service';

const GamesListContext = createContext({});

const GameListProvider = ({ children }) => {
  const [order, setOrderParam] = useState('-rating');
  const [searchTerm, setSearchTerm] = useState('');
  const [platform, setPlatformParam] = useState('');
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [miniLoading, setMiniLoading] = useState(false);
  const [pageSize, setPageSizeParam] = useState(15);

  const setOrder = (param) => {
    setOrderParam(param);
    setLoading(true);
  };

  const setSearch = (param) => {
    setSearchTerm(param);
    setLoading(true);
  };

  const setPlatform = (param) => {
    setPlatformParam(param);
    setLoading(true);
  };

  const setPageSize = () => {
    setPageSizeParam(pageSize + 6);
    setMiniLoading(true);
  };

  useEffect(() => {
    (async () => {
      const filterParam = {
        page_size: pageSize,
        ordering: order,
        search: searchTerm,
        parent_platforms: platform,
      };
      const data = await getGamesList(filterParam);
      setList(data);
      setLoading(false);
      setMiniLoading(false);
    })();
  }, [order, searchTerm, platform, pageSize]);

  return (
    <GamesListContext.Provider
      value={{ setOrder, setSearch, setPlatform, setPageSize, list, loading, miniLoading }}
    >
      {children}
    </GamesListContext.Provider>
  );
};

export { GameListProvider };

export default GamesListContext;
