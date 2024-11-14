import Container from "../Container/container";
import About from '../About/about';
import Posts from '../PostsProfile/posts';
import Header from '../ContentHeader/header';
import Right from "../RightSide/right";
import './home.css'

const Home = () => {
    return (
        <div className="home">
            <Header />
            <div className="middleHome">
                <About />
                <Posts />
                   <Right />
            </div>
        </div>
    );
};
export default Home;