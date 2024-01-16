
import Navbar from './components/Navbar';
import Slidebar from './components/Slidebar';
import Footer from './components/Footer';
import animat from './Images/anim1.mp4'

function Home() {
  return (
    <>
      <Navbar />
      <Slidebar />
      {/* <div className='home'></div> */}
      <div>
        <video width="410" height="180" autoPlay loop muted>
          <source src={animat}/>
        </video>
      </div> 
      <Footer />
    </>
  );
}

export default Home;  