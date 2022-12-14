import { useMemo } from 'react';

export const useSortedpost = (posts, sort) => {
  const sortedPost = useMemo(() => {
    // console.log('ОТРАБОТАЛА ФУНКЦИЯ СОРТЕД ПОСТС');
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return posts;
  }, [sort, posts]);
  return sortedPost;
};

export const usePosts = (posts, sort, query) => {
  const sortedPost = useSortedpost(posts, sort);
  const sortedAndSearchPosts = useMemo(() => {
    return sortedPost.filter(post => post.title.toLowerCase().includes(query.toLowerCase()));
  }, [query, sortedPost]);
  return sortedAndSearchPosts;
};
