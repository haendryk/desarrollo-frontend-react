import Logo from './Default/_components/Logo';
import Description from "./Default/_components/Description";
import OpenLinks from '../components/OpenLinks';
import Contador from "./Default/_components/Contador";

const Default = () => {
    return (
        <>
            <header className="App-header">
                <Contador />
                <Logo />
                <Description />
                <OpenLinks
                    title="Learn React"
                    url="https://react.dev/"
                />
                <OpenLinks
                    title="Mi proyecto react (Github)"
                    url="https://github.com/haendryk/desarrollo-frontend-react"
                />
            </header>
        </>
    );
};

export default Default;