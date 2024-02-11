
import Navbar from './components/Navbar';
import Slidebar from './components/Slidebar';
import Footer from './components/Footer';
//import animat from './Images/anim1.mp4'

function Home() {
  return (
    <>
      <Navbar />
      <Slidebar />
      {/* <div className='home'></div> */}
      {/* <div>
        <video width="210" height="90" autoPlay loop muted>
          <source src={animat}/>
        </video>
      </div>  */}
      <Footer />
    </>
  );
}

export default Home;  