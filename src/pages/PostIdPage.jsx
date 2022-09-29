import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UseFetching } from '../hooks/UseFetching';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [fetchPostById, isLoading] = UseFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
  });
  const [fetchComments, isCommentsLoading] = UseFetching(async (id) => {
    const response1 = await PostService.getCommentsByPostId(id);
    setComments(response1.data);
  });
  useEffect(() => {
    fetchPostById(params.id);
    fetchComments(params.id);
  }, []);

  if (!post) return <Loader />;
  return (
    <div>
      <h1>ВЫ ОТКРЫЛИ СТРАНИЦУ С ПОСТА ID {params.id}</h1>
      {isLoading
        ? <Loader />
        : <div>{post.id}. {post.title}
          <div>{post.body}
          </div>
        </div>
      }
      <h1>Коментарии</h1>
      {isCommentsLoading
        ? <Loader />
        : <div> {comments.map(comment =>
          <div key={comment.id} style={{ marginTop: 16 }}>
            <h5>{comment.email}</h5>
            <div>{comment.body}</div>
          </div>
        )}
        </div>
      }
    </div>
  );
};

export default PostIdPage;
