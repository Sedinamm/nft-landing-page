import { Download, Features, SectionWrapper } from "./components";
import assets from './assets';

import styles from "./styles/Global";

const App = () => {
  return (
    <>
            <SectionWrapper 
        title="You own store of Nifty NFTs. Start Selling & Growing"
        description="Buy, store, collect NFTS, exchange & earn crypto. Join 25+ million people using ProNef Marketplace."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
 <SectionWrapper 
        title="Exceptional User Interface Marketplace"
        description="Experience a buttery UI of ProNef NFT Marketplace. Smooth constant colors of a fluent UI design."
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />

      <SectionWrapper 
        title="Deployment"
        description="Pronef was built using expo which runs natively on all mobile devices"
        mockupImg={assets.feature}
        reverse
      />
 <SectionWrapper 
        title="Creative way to showcase your store"
        description="The app contains two screens. The first screen lists all NFTs while the second one shows the details of a specific NFT"
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>Made by {" "}
        <span className="bold">Gabriel Sedinam</span>
        </p>
      </div>
    </>
  );
};

export default App;
