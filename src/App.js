import './App.css';
import FAQ from './Components/FAQ';
import Home from './Components/Home';
import MiddleSection from './Components/MiddleSection';

function App() {
  return (
    <div className="App">
      <Home />
      <MiddleSection />

      <MiddleSection
        direction="flex-row-reverse"
        title="Download your shows to watch offline"
        subtitle="Save your favorites easily and always have something to watch."
        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
      />

      <MiddleSection
        title="Watch everywhere"
        subtitle="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
      />

      <MiddleSection
        direction="flex-row-reverse"
        title="Create profiles for kids"
        subtitle="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
        src="https://occ-0-38-768.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png?r=f55"
      />

      <FAQ />
    </div>
  );
}

export default App;
