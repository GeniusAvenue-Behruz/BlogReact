import React from 'react';
import '../styles/News.css';
import newsItems from '../news.json'; // Update this path to the correct one

const News = () => {
  return (
    <section className="news container">
      <h1>Hot News</h1>
      <div className="news__grid-container">
        {newsItems.map((item) => (
          <div className="grid-item" key={item.id}>
            <img src={require(`../${item.img}`)} alt="News" />
            <div>
              {item.relatedSubjects.map((subject, index) => (
                <span key={index} className="light-blue">{subject}</span>
              ))}
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p className="profile">
              <img src={require(`../${item.profileImg}`)} alt="Profile" />
              <span className="name">{item.author}</span>
              <span className="date">{item.date}</span>
            </p>
          </div>
        ))}
      </div>
      <div className="button">
        <button>Load More</button>
      </div>
    </section>
  );
};

export default News;
