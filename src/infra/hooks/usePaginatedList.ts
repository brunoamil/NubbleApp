import {useEffect, useState} from 'react';

import {useInfiniteQuery} from '@tanstack/react-query';
import {Page} from '@types';

export interface UsePaginatedListResult<TData> {
  list: TData[];
  isError: boolean | null;
  isLoading: boolean;
  refresh: () => void;
  fetchNextPage: () => void;
  hasNextPage: boolean;
}

//WITH REACT HOOKS

export function usePaginatedList<Data>(
  queryKey: readonly unknown[],
  getList: (page: number) => Promise<Page<Data>>,
): UsePaginatedListResult<Data> {
  const [list, setList] = useState<Data[]>([]);

  const query = useInfiniteQuery({
    queryKey,
    queryFn: ({pageParam = 1}) => getList(pageParam),
    getNextPageParam: ({meta}) =>
      meta.hasNextPage ? meta.currentPage + 1 : null,
  });

  useEffect(() => {
    if (query.data) {
      const newList = query.data.pages.reduce<Data[]>((prev, curr) => {
        return [...prev, ...curr.data];
      }, []);

      setList(newList);
    }
  }, [query.data]);

  return {
    list,
    isError: query.isError,
    isLoading: query.isLoading,
    refresh: query.refetch,
    fetchNextPage: query.fetchNextPage,
    hasNextPage: !!query.hasNextPage,
  };
}

// WITHOUT REACT HOOKS
// export function usePaginatedList<Data>(
//   getList: (page: number) => Promise<Page<Data>>,
// ) {
//   const [loading, setLoading] = useState(true);
//   const [errorMessage, setErrorMessage] = useState<boolean | null>(null);
//   const [list, setList] = useState<Data[]>([]);
//   const [page, setPage] = useState(1);
//   const [hasNextPage, setHasNextPage] = useState(true);

//   async function fetchInitialData() {
//     try {
//       setErrorMessage(null);
//       setLoading(true);
//       const {data, meta} = await getList(1);
//       setList(data);
//       if (meta.hasNextPage) {
//         setPage(2);
//         setHasNextPage(true);
//       } else {
//         setHasNextPage(false);
//       }
//     } catch (error) {
//       setErrorMessage(true);
//     } finally {
//       setLoading(false);
//     }
//   }

//   async function fetchNextPage() {
//     if (loading || !hasNextPage) {
//       return;
//     }

//     try {
//       setLoading(true);
//       const {data, meta} = await getList(page);
//       setList(prev => [...prev, ...data]);
//       if (meta.hasNextPage) {
//         setPage(prev => prev + 1);
//       } else {
//         setHasNextPage(false);
//       }
//     } catch (er) {
//       setErrorMessage(true);
//     } finally {
//       setLoading(false);
//     }
//   }
//   useEffect(() => {
//     fetchInitialData();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return {
//     list,
//     errorMessage,
//     loading,
//     refresh: fetchInitialData,
//     fetchNextPage,
//     hasNextPage,
//   };
// }
