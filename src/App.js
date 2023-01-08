import { Download, Features, SectionWrapper } from "./components";
import assets from './assets';

import styles from "./styles/Global";

const App = () => {
  return (
    <>
            <SectionWrapper 
        title="Your own personal store of amazing NFTs. Start Selling, Buying & Growing"
        description="Buy, store, collect NFTS, exchange & earn crypto. Join 50+ million people using NFTbiz Marketplace."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
 <SectionWrapper 
        title="Exceptional User Interface Marketplace"
        description="Experience a beautiful and creative UI of NFTbiz Marketplace. Smooth constant colors of a beautiful UI design."
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />

      <SectionWrapper 
        title="Deployment"
        description="NFTbiz was built using Expo Go which runs natively on both android and ios devices"
        mockupImg={assets.feature}
        reverse
      />
 <SectionWrapper 
        title="Creative Way to Showcase Your Own NFT Store"
        description="The app contains two screens. The first screen lists all NFTs while the second one shows the details of a specific NFT"
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>Made by {" "}
        <span className="bold">Sedinam</span>
        </p>
      </div>
    </>
  );
};

export default App;
