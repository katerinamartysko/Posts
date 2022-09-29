import React from 'react';
import MyInput from './UI/Input/myInput';
import MySelect from './UI/Select/MySelect';

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        value={filter.query}
        onChange={event => setFilter({...filter, query: event.target.value})}
        placeholder="Поиск..."
      />

      <MySelect
        value={filter.sort}
        onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
        defaultValue="Сортировка по:"
        options={[
          { id: '0.', value: 'title', name: 'По названию ' },
          { id: '1.', value: 'body', name: 'По описанию ' }
        ]}
      />
    </div>
  );
};

export default PostFilter;
