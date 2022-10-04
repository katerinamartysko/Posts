import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PostService from '../API/PostService';
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import PostFilter from '../components/PostFilter';
import MyModal from '../components/UI/MyModal/MyModal';
import MyButton from '../components/UI/Button/myButton';
import Loader from '../components/UI/Loader/Loader';
import Pagination from '../components/UI/Pagination/Pagination';
import { UseFetching } from '../hooks/UseFetching';
import { usePosts } from '../hooks/usePost';
import { getPageCount } from '../utils/pajes';
import { useObserver } from '../hooks/useObserver';
import { changePage, createPost, deletePost, getPosts } from '../store/posts/actions';

function Posts() {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.posts);
  const page = useSelector(state => state.posts.page)

  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit] = useState(10);
  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query);

  const [fetchPost, isPostsLoading, postError] = UseFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page);
    dispatch(getPosts(response.data));
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  });

  //useEffect эта функция также как и  useMemo принимает в себя 2 параметра  callback u deps (массив зависимостей)
  // если в deps массив пуст [], то наш callback отработает единожды в момент монтирования компонента
  //если callback возвращает какую-то функцию, то она будет вызвана в момент демонтирования ее из компонента

  // в useMemo передаем первым парасетром callback (резулттат каких-то вычеслений), а втором параметром массив зависимостей
  //callback будет вызыан только если одна из зависимостей в массиве ( deps) поменяет свое значение

  useEffect(() => {
    fetchPost(limit, page);
  }, [page]);

  const newCreate = (newPost) => {
    dispatch(createPost(newPost));
    setModal(false);
  };

  const removePost = (post) => {
    dispatch(deletePost(post));
  };

  const changePage1 = (page) => {
    dispatch(changePage(page));
    // setPage(page);
  };

  return (
    <div className="App">
      <MyButton onClick={fetchPost}>GET POSTS</MyButton>
      <MyButton style={{ marginTop: 32, marginLeft: 8 }} onClick={() => setModal(true)}>
        Создать пользователя
      </MyButton>
      <Link className="linkAboutUs" to="/about">О САЙТЕ</Link>

      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={newCreate} />
      </MyModal>
      <hr style={{ margin: '16px 0' }} />
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />

      {postError && <h1>Произошла ошибка {postError}</h1>}
      <PostList remove={removePost} posts={sortedAndSearchPosts} title="Посты про JS" />
      {isPostsLoading &&
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 56 }}><Loader /></div>
      }

      <Pagination
        page={page}
        changePage={changePage1}
        totalPages={totalPages}
      />
    </div>
  );
}

export default Posts;
