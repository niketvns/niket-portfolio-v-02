import PythonImg from '../Images/python.svg';
import CssImg from '../Images/css.svg';
import JavascriptImg from '../Images/javascript.svg';
import HtmlImg from '../Images/html.svg';
import ReactjsImg from '../Images/reactjs.svg';
import NetlifyImg from '../Images/netlify.png';
import SqlImg from '../Images/sql.png';
import cppImg from '../Images/cpp.png';
import gitImg from '../Images/git.svg';
import GitHubIcon from '@mui/icons-material/GitHub';
import { NavLink } from 'react-router-dom';
import ReactTypingEffect from "react-typing-effect";


const Home = () => {

    return (
        <>
            <div className="main-home">
                <div className="heading">
                    <h1>Welcome to my Portfolio</h1>
                </div>
                <div className="details-animated">
                    <h1>Hii, I am Niket</h1>

                    <div className="wrapper">
                        <div className="fixed-text">
                            I'm a <ReactTypingEffect
                                text={["Coder...", "Web Developer...", "UI/UX Designer..."]}
                                speed={100}
                                eraseDelay={500}
                                typingDelay={100}
                                eraseSpeed={50}
                                className='moving-text'
                            />
                        </div>
                    </div>
                </div>
                <div className="technology">
                    <h2><span>Technology</span></h2>
                    <div className="skills">
                        <div className="skill html">
                            <img src={HtmlImg} alt="" />
                            <p>HTML</p>
                        </div>
                        <div className="skill css">
                            <img src={CssImg} alt="" />
                            <p>CSS</p>
                        </div>
                        <div className="skill javascript">
                            <img src={JavascriptImg} alt="" />
                            <p>JavaScript</p>
                        </div>
                        <div className="skill react">
                            <img src={ReactjsImg} alt="" />
                            <p>React</p>
                        </div>
                        <div className="skill react">
                            <img src={ReactjsImg} alt="" />
                            <p>TypeScript</p>
                        </div>
                        <div className="skill react">
                            <img src={ReactjsImg} alt="" />
                            <p>Next.js</p>
                        </div>
                        <div className="skill react">
                            <img src={ReactjsImg} alt="" />
                            <p>Tailwind CSS</p>
                        </div>
                        <div className="skill github">
                            <GitHubIcon className='img' />
                            <p>GitHub</p>
                        </div>
                        <div className="skill git">
                            <img src={gitImg} alt="" />
                            <p>Git</p>
                        </div>
                        <div className="skill netlify">
                            <img src={NetlifyImg} alt="" />
                            <p>Netlify</p>
                        </div>
                        <div className="skill python">
                            <img src={PythonImg} alt="" />
                            <p>Python</p>
                        </div>
                        <div className="skill cpp">
                            <img src={cppImg} alt="" />
                            <p>C++</p>
                        </div>
                        <div className="skill sql">
                            <img src={SqlImg} alt="" />
                            <p>SQL</p>
                        </div>
                    </div>
                </div>
                <div className="projects">
                    <h2><span>Projects</span></h2>
                    <div className="content">
                        I like to showcase my work and thus, you can see my projects hosted online
                    </div>
                    <NavLink to='/projects'><button>See Projects</button></NavLink>
                </div>
                <div className="blogs">
                    <h2><span>Blogs</span></h2>
                    <div className="content">
                        I am writing Blogs to showcase my Idea, You can read my Blogs
                    </div>
                    <NavLink to='/blogs'><button>See Blogs</button></NavLink>
                </div>
            </div>
        </>
    );
}

export default Home;