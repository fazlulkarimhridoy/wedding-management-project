import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Gallery from "../../components/Gallery/Gallery";
import HomeCards from "../../components/HomeCards/HomeCards";
import WeddingTools from "../../components/WeddingTools/WeddingTools";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeCards></HomeCards>
            <WeddingTools></WeddingTools>
            <Gallery></Gallery>
            <Footer></Footer>
        </div>
    );
};

export default Home;