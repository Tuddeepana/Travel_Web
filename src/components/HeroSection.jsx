import './HeroSection.css';
import Background from '/Background.png';

const HeroSection = () => {
  return (
      <div className="w-screen h-screen bg-cover bg-[#ffffff]"
      style={{backgroundImage: `url(${Background})`}}>

      </div>
  );
};

export default HeroSection;
