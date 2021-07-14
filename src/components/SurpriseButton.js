const SurpriseButton = (props) => {
    const {children} = props;

    return (
        <button className="breeze button">{children}</button>
    )
}

export default SurpriseButton;