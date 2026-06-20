import { useState } from "react";
import Bg from "../assets/samp.gif";

function Card({ item }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="card">
            <div className="card-content">
                <div className="card-title">
                    <div className="card-circle-container">
                        <div className="card-circle"></div>
                        <div className="card-circle"></div>
                    </div>
                    <span>A quick overview of myself</span>
                </div>

                <div className="card-image">
                    <img src={Bg} alt="card-image" />
                </div>
                <div className="card-description">
                    <h1>About Me</h1>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae voluptatibus corporis delectus a libero eligendi iure, explicabo atque alias? Ducimus itaque maiores ratione deserunt fuga architecto, eveniet corrupti perspiciatis enim similique facilis rerum voluptatibus illum quis officiis laboriosam reiciendis praesentium doloribus. Tempore deleniti ipsam rerum ullam maxime, aut enim dicta alias quia quisquam illum, facilis sapiente
                    </span>
                </div>
                {expanded && (
                    <div className="card-description card-description-expanded">
                        <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab corporis quam similique, animi molestias consequatur temporibus, voluptatum illo error recusandae praesentium minus eligendi tenetur tempore aperiam voluptas ullam? Pariatur debitis corrupti quos molestias deleniti repellat nam, sed architecto dolore ducimus nesciunt iste aliquid quaerat vitae distinctio harum minima nemo culpa blanditiis odio. Facere, qui magnam soluta explicabo natus, perspiciatis quis, nemo totam hic doloremque corrupti eligendi at dolore et itaque quam facilis dolores voluptatibus ut inventore ipsam! A voluptatum eveniet dicta laboriosam, facilis, nobis porro esse rem neque id amet cumque obcaecati suscipit ex magni architecto tempora, voluptatem nemo quas doloremque impedit? Cupiditate perferendis id autem quidem nam ipsa, quos cumque nesciunt at. Eius rerum accusantium ipsum iste cupiditate magnam libero a assumenda neque sequi aspernatur ullam, vitae tempora reprehenderit nemo temporibus fugiat, aliquid doloremque asperiores perferendis ut ratione. Aliquam fugit totam, omnis tempora, voluptates inventore aspernatur corporis dolorem aliquid aperiam soluta saepe voluptate amet. Iure et nemo reiciendis dolor error doloremque, dolore assumenda nisi odio necessitatibus vero dicta minima eius laborum ipsa voluptatem sint sed accusantium laboriosam distinctio ratione numquam fugiat! Illum dolores dolore, provident aliquid odit aut voluptates assumenda sunt. Dignissimos, nobis! Officiis sunt odit sed velit ratione.</span>
                    </div>
                )}
            </div>

            <div className="card-buttons">
                {!expanded ? (
                    <button
                        className="button view-more"
                        onClick={() => setExpanded(true)}
                    >
                        View More
                    </button>
                ) : (
                    <button
                        className="button view-less"
                        onClick={() => setExpanded(false)}
                    >
                        View Less
                    </button>
                )}
            </div>
        </div>
    );
}

export default Card;