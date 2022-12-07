import './Flyer.css';
import Flyerbanner from '../images/FlyerBanner.jpg'
import Menu from '../images/Menu.jpg'
import Meat from '../images/Meat.jpg'
import Raspberries from '../images/Raspberries.jpg'
import Points from '../images/Points.jpg'
import Cereal from '../images/Cerial.jpg'
import Bacon from '../images/Bacon.jpg'
import Raspberries2 from '../images/Raspberries2.jpg'
import Points2 from '../images/Points2.jpg'

function Flyer(){
  return (
    <>
    <div className="border">
      <div className="navContainer">
        <img className="flyerB" src={Flyerbanner} alt="flyer" />
        <img className="menu" src={Menu} alt="menu" />
      </div>
     
      <div className="gridSection">
       
      <img className="meat" src={Meat} alt="meat" />
      <img className="raspberries" src={Raspberries} alt="raspberries" />
      <img className="points" src={Points} alt="" />
     
    
      <img className="cereal" src={Cereal} alt="" />
      <img className="bacon" src={Bacon} alt="" />
      <img className="raspberries2" src={Raspberries2} alt="raspberries" />
      <img className="points2" src={Points2} alt="" />
      
</div>
     </div>
    </>
  )
}


export default Flyer;