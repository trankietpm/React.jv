import React, { useState, useEffect } from 'react';
import './TweetForm.css';

const TweetForm = ({ onAddTweet, editTweet }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    if (editTweet) {
      setContent(editTweet.content);
    }
  }, [editTweet]);

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (content.trim() === '') {
      return;
    }

    if (editTweet) {
      onAddTweet({ id: editTweet.id, content });
    } else {
      onAddTweet({ content });
    }

    setContent('');
  };

  return (
    <div className="tweet-form">
      <h2>{editTweet ? 'Chỉnh sửa bài viết' : 'Tạo bài viết mới'}</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={handleContentChange}
          placeholder="Nhập nội dung bài viết..."
        />
        <button type="submit">{editTweet ? 'Lưu chỉnh sửa' : 'Đăng bài'}</button>
      </form>
    </div>
  );
};

export default TweetForm;
