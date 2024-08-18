import Logo from './_components/Logo.jsx';
import Description from './_components/Description.jsx';
import Content from './_components/Content.jsx';
import GitHub from './_components/GitHub.jsx';
import Lessoninfo from './_components/Lessoninfo.jsx';

function Default() {
    return (
      <div className="App">
        <header className="App-header">
          <Logo />
          <Description />
          <Content />
          <GitHub />
          <Lessoninfo lesoninf="1: Introducción a react y estructura de proyecto" />
          <Lessoninfo lesoninf="2:Context API para la gestión del estado global en aplicaciones react" />
        </header>
      </div>
    );
}

  export default Default;