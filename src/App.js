import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeatureOne from './components/FeatureOne';
import DailyStats from './components/DailyStats';
import { Card } from './components/Card';
import insurance1 from "./assets/insurance1.svg";
import wallet1 from "./assets/wallet1.svg";
import profit1 from "./assets/profit1.svg";
import DevSection from './components/DevSection';
import { BlogSection } from './components/BlogSection';
import Footer from './components/Footer';

function App() {
  const features = [
    {
      src: wallet1,
      title: "Value",
      description:
        "Trade straight from your wallet. Become your own bank without centralized bridges.",
    },
    {
      src: profit1,
      title: "Yield",
      description:
        "Earn yield on your native assets while providing liquidity, with protection against impermanent loss.",
    },
    {
      src: insurance1,
      title: "Insurance",
      description: "Receive protection from impermanent loss for your liquidity pools.",
    },
    {
      src: wallet1,
      title: "Staking",
      description:
        "Gain yield on your native assets while being safeguarded against impermanent loss.",
    },
  ];
  return (
    <div className="home">
      <Header />
      <HeroSection />
      <DailyStats />
      <FeatureOne />
      <div className='features-list-container'>
        {
          features.map((feature, index) => {
            return (
              <Card key={index} title={feature.title} imgUrl={feature.src}>{<p>{feature.description}</p>}</Card>
            )
          })
        }
      </div>
      <DevSection />
      <BlogSection />
      <Footer />
    </div>
  );
}

export default App;
