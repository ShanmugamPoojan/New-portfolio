import { useState, useEffect, useRef } from "react";

function Pokemon() {
  // const [imageIndex, setImageIndex] = useState(0);

  const [expanded, setExpanded] = useState(false);
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const item = {
    "index": 1,
    "title": "Pikachu",
    "description": "Thunder"
  }

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

  // const handleNext = (e) => {
  //     e.stopPropagation();
  //     setImageIndex((prev) => (prev + 1) % images.length);
  // };

  // const handlePrev = (e) => {
  //     e.stopPropagation();
  //     setImageIndex((prev) => (prev - 1 + images.length) % images.length);
  // };

  return (
    <div className="pokemon-page main-page">
      <div className="pokemon-header main-page-header">
        <h1>Pokemon</h1>
        <p className="subtitle">From beginner to developer</p>
      </div>
      <div className="scatter-pattern">
        <div className="container">
          <div
            ref={cardRef}
            className={`card ${isVisible ? "visible" : ""}`}
          >
            <div className="card-title">
              <div className="card-circle-container">
                <div className="card-circle"></div>
                <div className="card-circle"></div>
              </div>
              <span>{`Project `}</span>
            </div>

            <div className="card-content gallery-content">
              <div className="card-description">
                <h1>{item.title}</h1>
                <span>
                  {item.description}
                </span>
                <div className="card-buttons">
                  {!expanded ? (
                    <button
                      className="button view-more"
                      onClick={() => setExpanded(true)}
                    >
                      <pre>{`View More   >>`}</pre>
                    </button>
                  ) : (
                    <button
                      className="button view-less"
                      onClick={() => setExpanded(false)}
                    >
                      <pre>{`View Less   <<`}</pre>
                    </button>
                  )}
                </div>
              </div>

              <div className="gallery">
                <div className="gallery-main">
                  <img
                    // src={`/portfolio/assets/${images[imageIndex]}`}
                    src={`/portfolio/assets/${item.image}`}
                    alt="gallery"
                    className="gallery-image"
                  />
                </div>
                <div className="gallery-buttons">
                  <button
                    className="gallery-button-left"
                  // onClick={handlePrev}
                  >
                    {"<<"}
                  </button>

                  <button
                    className="gallery-button-right"
                  // onClick={handleNext}
                  >
                    {">>"}
                  </button>
                </div>
              </div>

            </div>

            {expanded && (
              <div className="card-description card-description-expanded">
                <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab corporis quam similique, animi molestias consequatur temporibus, voluptatum illo error recusandae praesentium minus eligendi tenetur tempore aperiam voluptas ullam? Pariatur debitis corrupti quos molestias deleniti repellat nam, sed architecto dolore ducimus nesciunt iste aliquid quaerat vitae distinctio harum minima nemo culpa blanditiis odio. Facere, qui magnam soluta explicabo natus, perspiciatis quis, nemo totam hic doloremque corrupti eligendi at dolore et itaque quam facilis dolores voluptatibus ut inventore ipsam! A voluptatum eveniet dicta laboriosam, facilis, nobis porro esse rem neque id amet cumque obcaecati suscipit ex magni architecto tempora, voluptatem nemo quas doloremque impedit? Cupiditate perferendis id autem quidem nam ipsa, quos cumque nesciunt at. Eius rerum accusantium ipsum iste cupiditate magnam libero a assumenda neque sequi aspernatur ullam, vitae tempora reprehenderit nemo temporibus fugiat, aliquid doloremque asperiores perferendis ut ratione. Aliquam fugit totam, omnis tempora, voluptates inventore aspernatur corporis dolorem aliquid aperiam soluta saepe voluptate amet. Iure et nemo reiciendis dolor error doloremque, dolore assumenda nisi odio necessitatibus vero dicta minima eius laborum ipsa voluptatem sint sed accusantium laboriosam distinctio ratione numquam fugiat! Illum dolores dolore, provident aliquid odit aut voluptates assumenda sunt. Dignissimos, nobis! Officiis sunt odit sed velit ratione.</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>

  );
}

export default Pokemon;
