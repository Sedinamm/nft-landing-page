import { Download, Features, SectionWrapper } from "./components";
import assets from './assets';

const App = () => {
  return (
    <>
      <SectionWrapper
      title ="Your own store of Cool NFTs.
      Start Sellings & Growning."
      description = "Buy, Store, collect NFTs, exchange and earn crypto.Join 20+ Million people using ProNef Marketplace"

      ShowBtn
      mockupImg={assets.homeHero}
      banner="banner"
      />
    </>
  );
};

export default App;
