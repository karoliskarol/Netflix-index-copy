import GetStarted from "./GetStarted";
import Header from "./Header";


const Home = () => {
    return (
        <div className="home">
            <div className="dark-bg"></div>

            <Header />
            <div className="container">
                <div className="row text-center home-row">
                    <div className="col-12">
                        <h1 className="home-title mb-2">Unlimited movies, TV shows, and more</h1>
                        <h2 className="home-title-2">Watch anywhere. Cancel anytime.</h2>
                        
                        <GetStarted />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;