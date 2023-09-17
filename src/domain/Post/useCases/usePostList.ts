import {useEffect, useState} from 'react';

import {postService} from '../postService';
import {Post} from '../postType';

export function usePostList() {
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<boolean | null>(null);
  const [postList, setPostList] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);

  async function fetchInitialData() {
    try {
      setErrorMessage(null);
      setLoading(true);
      const {data, meta} = await postService.getList(1);
      setPostList(data);
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
      const {data, meta} = await postService.getList(page);
      setPostList(prev => [...prev, ...data]);
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
  }, []);

  return {
    postList,
    errorMessage,
    loading,
    refresh: fetchInitialData,
    fetchNextPage,
  };
}
