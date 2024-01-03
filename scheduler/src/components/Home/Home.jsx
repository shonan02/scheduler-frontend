import "./Home.css";

const Home = () => {
    return (
        <div className="home-wrapper">
            <TextComponent />
        </div>
    )
}

export default Home;

const TextComponent = () => {
    return (
        <div className="home-title">
            <p>effortless</p>
            <p>social media engagement</p>
        </div>
    )
}