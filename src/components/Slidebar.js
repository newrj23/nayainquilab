//import { MdKeyboardDoubleArrowLeft } from "react-icons/md"; 
//import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import "./navbar.css";
import { Carousel, Card, } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';

function Slidebar() {
  const [find, setFind] = useState([])

  let news = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyCi_V3ACbuPu0W7oFtxC3p9j-gJvy5O-aY&channelId=UCYCmRaI-rRqOLSlYsAbanMA&part=snippet,id&order=date&maxResults=15&type=video";

  const fetchNews = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      const result = data.items.map(doc => ({
        ...doc,
        videoLink: "https://www.youtube.com/embed/" + doc.id.videoId
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

  const reduceFind =(acc, cur, index)=>{
    const groupIndex = Math.floor(index / 3);
    if (!acc[groupIndex]) acc[groupIndex] =[];
    acc[groupIndex].push(cur);
    console.log(acc);
    return acc;
  };

  return (
    <>
      <section className="wrapper" >
        <h2 className="text-warning">Naya Inquilab Latest News</h2>

      {/* <>
     <section className="pt-5 pb-5">
        <div className="container">
          <div className="row"> 
           <div className="col-6">
              <h3 className="mb-3"> Naya Inquilab Latest News </h3>
            </div>
            <div className="col-6 text-right">
              <a className="btn btn-primary mb-3 mr-1" href="#carouselExampleAutoplaying" role="button" data-bs-slide="prev">
                <MdKeyboardDoubleArrowLeft />
              </a>
              <a className="btn btn-primary mb-3 " href="#carouselExampleAutoplaying" role="button" data-bs-slide="next">
                <MdOutlineKeyboardDoubleArrowRight />
              </a>
            </div>*/}


<Carousel data-bs-theme="dark">

          {
            find.reduce(reduceFind, []).map((ito,index) => {
              return (

                <Carousel.Item key={index}>
                  <div className="cards-wrap">        

                    {ito.map((ito,index) => {
                      return (
                    <Card key={index} className="cardnew1" style={{ width: '28rem' }}  >
                      <Card.Img variant="top" src={ito.snippet.thumbnails.medium.url} />
                      <Card.Body>
                        <Card.Title> {ito.snippet.title}</Card.Title>
                        <Card.Text>
                          {ito.snippet.description}
                        </Card.Text>
                        <a href={ito.videoLink} className="btn btn-primary">Go to Video</a>
                      </Card.Body>
                    </Card>
              );
                    })} 

                    {/*<Card className="card" style={{ width: '28rem' }} >
                      <Card.Img variant="top" src={val.snippet.thumbnails.medium.url} />
                      <Card.Body>
                        <Card.Title> {val.snippet.title}</Card.Title>
                        <Card.Text>
                          {val.snippet.description}
                        </Card.Text>
                        <a href={val.videoLink} className="btn btn-primary">Go to Video</a>
                      </Card.Body>
                    </Card> */}
                </div>
                  </Carousel.Item>

              );
            })
          }

          </Carousel>
          
      </section>
    </>
  );
}

export default Slidebar; 