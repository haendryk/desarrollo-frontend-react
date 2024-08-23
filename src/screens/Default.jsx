import Logo from './Default/_components/Logo';
import Description from "./Default/_components/Description";
import OpenLink from '../components/Openlink';
import Contador from "./Default/_components/Contador";

const Default = () => {
    return (
        <>
            <header className="App-header">
                <Contador />
                <Logo />
                <Description />
                <OpenLink
                    title="Learn React"
                    url="https://react.dev/"
                />
                <OpenLink
                    title="Mi proyecto react (Github)"
                    url="https://github.com/haendryk/desarrollo-frontend-react"
                />
            </header>
        </>
    );
};

export default Default;