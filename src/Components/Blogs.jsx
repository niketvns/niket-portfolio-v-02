import BlogCard from "./BlogCard";
import BlogData from "./BlogData";

const Blogs = () => {
    return (
        <>
            <div className="main-blogs">
                <div className="heading">
                    <h1>Blogs</h1>
                </div>
                <div className="blog-card-all">
                    {
                        BlogData.map((val, ind) =>
                            <BlogCard
                                id={ind}
                                title={val.Title}
                                img={val.Image}
                                link={val.Link}
                                date={val.Date}
                                duration={val.Duration}
                                tags={val.Tags}
                            />
                        )
                    }
                </div>
            </div>
        </>
    );
}

export default Blogs;