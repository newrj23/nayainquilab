import React, { useEffect, useState } from 'react';

function Api() {
  const [find, setFind] = useState([])

  let news = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyCi_V3ACbuPu0W7oFtxC3p9j-gJvy5O-aY&channelId=UCYCmRaI-rRqOLSlYsAbanMA&part=snippet,id&order=date&maxResults=40";

  const fetchNews = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      const result= data.items.map(doc=>({
        ...doc,
        videoLink:"https://www.youtube.com/embed/"+doc.id.videoId
      }));
      
      setFind(result)
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNews(news);
  }, [news])

  return (
    <>
      <div className='container my-5'>
        <div className='row text-center'>
          {
            find.map((val) => {
              return (
                <div className='col my-3'>

                  <div className="card" style={{ width: "22rem" }}>
                    <img src={val.snippet.thumbnails.medium.url} width="300px" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{val.snippet.title}</h5>
                      <p className="card-text">{val.snippet.description}</p>
                      <a href={val.videoLink} className="btn btn-primary">Go In Video</a>
                    </div>
                  </div>

                </div>
              );
            })
          }
        </div>
      </div>
    </>
  );
}

export default Api;  