import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function Card({ item }) {
    const [expanded, setExpanded] = useState(false);
    const cardRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.2 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={cardRef}
            className={`card ${isVisible ? "visible" : ""}`}
        >
            <div className="card-title">
                <div className="card-circle-container">
                    <div className="card-circle"></div>
                    <div className="card-circle"></div>
                </div>
                <span>
                    {item.section === "projects"
                        ? `Project ${item.index}`
                        : item.section === "home"
                            ? "A small overview of myself"
                            : item.section === "journey"
                                ? `Chapter ${item.index}`
                                : ""}

                </span>
            </div>

            <div className="card-content">
                {item.image &&
                    <div className="card-image">
                        {item?.image?.map((img, index) => (
                            <img
                                key={index}
                                src={`/portfolio/assets/${img}`}
                                alt="card"
                                draggable="false"
                            />
                        ))}
                    </div>
                }

                <div className="card-description">
                    <h1>{item.title}</h1>
                    {item.subTitle &&
                        <p><b>{item.subTitle}</b></p>
                    }
                    {item.duration &&
                        <p><b>{item.duration}</b></p>
                    }
                    <p>
                        {item.description}
                    </p>
                </div>

                {
                    item.section === "home" ?
                        <div className="card-buttons">
                            <button className="button" onClick={() => navigate("/projects")} >
                                <pre>
                                    {`View My Projects   >>`}
                                </pre>
                            </button>
                            <button className="button" onClick={() => navigate("/myjourney")} >
                                <pre>
                                    {`View My Journey   >>`}
                                </pre>
                            </button>
                        </div>
                        :
                        <div className="card-buttons">
                            <button
                                className="button"
                                onClick={() => setExpanded(!expanded)}
                            >
                                {expanded ? "View Less <<" : "View More >>"}
                            </button>
                        </div>

                }
                {expanded && (
                    <div className="card-description card-description-expanded">
                        <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab corporis quam similique, animi molestias consequatur temporibus, voluptatum illo error recusandae praesentium minus eligendi tenetur tempore aperiam voluptas ullam? Pariatur debitis corrupti quos molestias deleniti repellat nam, sed architecto dolore ducimus nesciunt iste aliquid quaerat vitae distinctio harum minima nemo culpa blanditiis odio. Facere, qui magnam soluta explicabo natus, perspiciatis quis, nemo totam hic doloremque corrupti eligendi at dolore et itaque quam facilis dolores voluptatibus ut inventore ipsam! A voluptatum eveniet dicta laboriosam, facilis, nobis porro esse rem neque id amet cumque obcaecati suscipit ex magni architecto tempora, voluptatem nemo quas doloremque impedit? Cupiditate perferendis id autem quidem nam ipsa, quos cumque nesciunt at. Eius rerum accusantium ipsum iste cupiditate magnam libero a assumenda neque sequi aspernatur ullam, vitae tempora reprehenderit nemo temporibus fugiat, aliquid doloremque asperiores perferendis ut ratione. Aliquam fugit totam, omnis tempora, voluptates inventore aspernatur corporis dolorem aliquid aperiam soluta saepe voluptate amet. Iure et nemo reiciendis dolor error doloremque, dolore assumenda nisi odio necessitatibus vero dicta minima eius laborum ipsa voluptatem sint sed accusantium laboriosam distinctio ratione numquam fugiat! Illum dolores dolore, provident aliquid odit aut voluptates assumenda sunt. Dignissimos, nobis! Officiis sunt odit sed velit ratione.</span>
                    </div>
                )}
            </div>
        </div >
    );
}

export default Card;