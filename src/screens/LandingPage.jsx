import Header from '../screens/LandingPage/_components/Header'
import Topics from './LandingPage/_components/Topics';
import Welcome from './LandingPage/_components/Welcome';
import Resources from './LandingPage/_components/Resources';
import Footer from './LandingPage/_components/Footer';
const LandingPage = () => {
    return (
        <>
            <Header />
            <Welcome />
            <Topics />
            <Resources />
            <Footer />
        </>
    );
};

export default LandingPage;