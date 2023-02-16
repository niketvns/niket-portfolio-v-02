import react from '../Images/react.pdf'

const About = () => {
    return (
        <>
            <div style={{ width: '100%', height: '91.5vh' }}>
                <iframe src={react}
                    width="100%"
                    height="100%" />
            </div>
        </>
    );
}

export default About;