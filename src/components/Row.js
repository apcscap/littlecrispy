const Row = (props) => {
    const {name, children} = props;
    return <div className="row">
        {children}
    </div>
}

export default Row