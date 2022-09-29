import React from 'react';
import MyButton from './UI/Button/myButton';
import { useNavigate } from 'react-router-dom';

export const PostItem = ({ post, remove }) => {
  const navigate = useNavigate();
  return (
    <div className="root">
      <div className="content">
        <strong>{post.id} {post.title}</strong>
        <div>
          {post.body}
        </div>
      </div>
      <div className="postButton">
        <MyButton onClick={() => navigate(`/posts/${post.id}`)}>
          ОТКРЫТЬ
        </MyButton>
        <MyButton onClick={() => remove(post)}>
          УДАЛИТЬ
        </MyButton>
      </div>
    </div>
  );
};
