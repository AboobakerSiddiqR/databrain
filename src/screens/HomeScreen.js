import React, { useEffect, useState } from "react";
import axios from "axios";

function HomeScreen() {
  const [news, setNews] = useState();

  const getTechNews = () => {
    axios
      .get(
        "https://newsapi.org/v1/articles?source=the-verge&sortBy=top&apiKey=cf3e1f2bb2bf4f939f6130dcdb8ba834"
      )
      .then((res) => {
        setNews(res.data);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getTechNews();
  }, []);
  console.log(news);
  return (
    <React.Fragment>
      <section>
        <h2 style={{ textAlign: "center" }}>Technology News</h2>
        <div className="news">
          {news?.articles.map((x) => {
            return (
              <div className="post" key={x.title}>
                <img alt="" src={x.urlToImage} />
                <h2>{x.title}</h2>
                <p>{x.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </React.Fragment>
  );
}

export default HomeScreen;
