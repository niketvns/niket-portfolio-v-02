const Footer = () => {

    let year = new Date().getFullYear();

    return (
        <>
            <div className="footer">
                &copy; | {year} | All Right Reserved
            </div>
        </>
    );
}

export default Footer;