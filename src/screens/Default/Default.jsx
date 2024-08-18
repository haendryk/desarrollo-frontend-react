import Logo from './_components/Logo.jsx';
import Description from './_components/Description.jsx';
import Content from './_components/Content.jsx';
import Openlink from './_components/Openlink.jsx';
import Lessoninfo from './_components/Lessoninfo.jsx';

function Default() {
    return (
      <div className="App">
        <header className="App-header">
          <Logo />
          <Description />
          <Content />
          <Openlink url="https://github.com/haendryk/desarrollo-frontend-react.git" title="Learn React" />
          <Lessoninfo lesoninf="1: Introducción a react y estructura de proyecto" />
          <Lessoninfo lesoninf="2:Context API para la gestión del estado global en aplicaciones react" />
        </header>
      </div>
    );
}

  export default Default;