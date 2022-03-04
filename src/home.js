
import { Link } from "react-router-dom";
import './App.css';
import AboutME from "./AboutMe.js";
import ImgBlog from "./ImgBlog";
import CommentBox from "./CommentBox"


const description = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita beatae aperiam rerum voluptate temporibus optio esse est consectetur architecto, impedit voluptatem ratione quis id tempora deleniti at qui vel placeat?',
    name: 'Hi, I am Joana'
};

const data = {
    post: {
        id: 1,
        content:
            "Comments"
    },
    comments: []
};

function Home() {
    return (
        <div>
            <nav className="navigationBar">
                <section>
                    <div><Link to="/error">Blogs</Link></div>

                    <div><a href="#">Work</a></div>
                    <div><Link to="/social">Social</Link></div>

                </section>
                <section>
                    <input placeholder="Search" />
                </section>
            </nav>
            <section className="bodyOrganizer gridrow">
                <section className="mainSection col-d-8">
                    <section className="titleOrganizer">
                        <div className="titleStyles">
                            <div>7 days ago - 5min read</div>
                            <div>Blog post title</div>
                            <div className="subTitle">Subtitle quote</div>
                        </div>
                        <div className="titleIconOrganizer">
                            <div>icon</div>
                            <div>icon</div>
                        </div>
                    </section>
                    <section>
                        <div><ImgBlog /></div>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus aperiam hic aliquid. Consequuntur,
                            reprehenderit.
                            Natus aspernatur deserunt vel quasi officiis eum.
                            Repellendus voluptatum, maiores nobis, quis odio ullam quos non!
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus aperiam hic aliquid. Consequuntur,
                            reprehenderit.
                            Natus aspernatur deserunt vel quasi officiis eum.
                            Repellendus voluptatum, maiores nobis, quis odio ullam quos non!
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus aperiam hic aliquid. Consequuntur,
                            reprehenderit.
                            Natus aspernatur deserunt vel quasi officiis eum.
                                Repellendus voluptatum, maiores nobis, quis odio ullam quos non!</p>
                        </div>
                    </section>
                    <section>
                    <CommentBox comments={data.comments} post={data.post} />
                </section>
                </section>
                
                <aside className="col-d-4">

                    <section id="aboutMe" class="asideOrganizer">
                        <AboutME text={description.text}
                            name={description.name} />
                    </section>
                </aside>
            </section>
        </div>
    )
}

export default Home