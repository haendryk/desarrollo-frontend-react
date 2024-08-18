const Lessoninfo = ({lesoninf}) => {
    const newLocal = <li>{lesoninf}</li>;
    return (
        <div>
            <ul>
                {newLocal}
            </ul>
        </div>
    );
}

export default Lessoninfo;