import React, { useState } from 'react';
import TweetForm from './Component/TweetForm/TweetForm';
import TweetList from './Component/TweetList/TweetList';
import './App.css';

const App = () => {
  const [tweets, setTweets] = useState([
    { id: 1, content: 'Tôi trước đây khá xinh gái, có tài lẻ và hiền. Hồi mới yêu, tôi đã cảm thấy không hợp nhưng tính không mạnh mẽ nên chẳng cương quyết chia tay. Sau gia đình anh giúp đỡ công việc cho tôi. Chúng tôi lấy nhau. Về mặt trách nhiệm với gia đình, lo toan cuộc sống, tôi không có gì để chê trách. Nhưng khoảng năm năm đầu sau cưới, ngày buồn nhiều hơn vui. ...', date: '2023-08-10' },
    { id: 2, content: 'Sau mấy năm điều trị, cuối cùng chồng tôi cũng nhận được kết quả khỏi bệnh. Tháng trước chúng tôi vừa mở tiệc ăn mừng vì anh đã chính thức quay lại công việc và cuộc sống thường ngày.', date: '2023-08-11' },
  
  ]);

  const [editingTweet, setEditingTweet] = useState(null);

  const handleAddTweet = (newTweet) => {
    if (editingTweet) {
      const updatedTweets = tweets.map((tweet) =>
        tweet.id === editingTweet.id ? { ...newTweet, date: tweet.date } : tweet
      );
      setTweets(updatedTweets);
      setEditingTweet(null);
    } else {
      setTweets([...tweets, { ...newTweet, date: getCurrentDate() }]);
    }
  };

  const handleDeleteTweet = (tweetId) => {
    const updatedTweets = tweets.filter((tweet) => tweet.id !== tweetId);
    setTweets(updatedTweets);
  };

  const handleEditTweet = (tweet) => {
    setEditingTweet(tweet);
  };

  // Function to get current date in the format 'YYYY-MM-DD'
  const getCurrentDate = () => {
    const currentDate = new Date();
    return currentDate.toISOString().split('T')[0];
  };

  return (
    <div className="app">
      <h1>Twitter Clone</h1>
      <TweetForm onAddTweet={handleAddTweet} editTweet={editingTweet} />
      <TweetList
        tweets={tweets}
        onDeleteTweet={handleDeleteTweet}
        onEditTweet={handleEditTweet}
      />
    </div>
  );
};

export default App;
