import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WatchLaterIcon from '@mui/icons-material/WatchLater';

const BlogCard = (props) => {
    return (
        <>
            <div className="blog-individual">
                <img src={props.img} alt="" />
                <div className="details">
                    <a href={props.link} target='_blank'>Read More</a>
                </div>
                <div className="title-desc">
                    <div className="tags">
                        <p>{props.tags}</p>
                    </div>
                    <p>{props.title}</p>
                    <div className='blog-date-time'>
                        <p className='blog-date'><CalendarMonthIcon />{props.date}</p>
                        <p className="blog-time"><WatchLaterIcon />{props.duration}</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default BlogCard;