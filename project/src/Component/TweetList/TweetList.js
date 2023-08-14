import React from 'react';
import './TweetList.css';

const TweetList = ({ tweets, onDeleteTweet, onEditTweet }) => {
  return (
    <div className="tweet-list">
      <h2>Danh sách Bài viết</h2>
      {tweets.map((tweet) => (
        <div className="tweet" key={tweet.id}>
          <div className="tweet-content">
            <p>{tweet.content}</p>
            <div className="tweet-buttons">
              <button onClick={() => onEditTweet(tweet)}>Chỉnh sửa</button>
              <button onClick={() => onDeleteTweet(tweet.id)}>Xóa</button>
            </div>
          </div>
          <p className="tweet-date">Ngày đăng: {tweet.date}</p>
        </div>
      ))}
    </div>
  );
};

export default TweetList;
