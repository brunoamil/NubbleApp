import {useEffect, useState} from 'react';

import {Page} from '@types';

export function usePaginatedList<Data>(
  getList: (page: number) => Promise<Page<Data>>,
) {
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<boolean | null>(null);
  const [list, setList] = useState<Data[]>([]);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);

  async function fetchInitialData() {
    try {
      setErrorMessage(null);
      setLoading(true);
      const {data, meta} = await getList(1);
      setList(data);
      if (meta.hasNextPage) {
        setPage(2);
        setHasNextPage(true);
      } else {
        setHasNextPage(false);
      }
    } catch (error) {
      setErrorMessage(true);
    } finally {
      setLoading(false);
    }
  }

  async function fetchNextPage() {
    if (loading || !hasNextPage) {
      return;
    }

    try {
      setLoading(true);
      const {data, meta} = await getList(page);
      setList(prev => [...prev, ...data]);
      if (meta.hasNextPage) {
        setPage(prev => prev + 1);
      } else {
        setHasNextPage(false);
      }
    } catch (er) {
      setErrorMessage(true);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchInitialData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    list,
    errorMessage,
    loading,
    refresh: fetchInitialData,
    fetchNextPage,
    hasNextPage,
  };
}