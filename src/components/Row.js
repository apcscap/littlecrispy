const Row = (props) => {
    const {children} = props;
    return (
        <>
            <div className="row">
                {children}
                <div style={{"clear": "both",}}></div>
            </div>
            
        </>
    )
}

export default Row