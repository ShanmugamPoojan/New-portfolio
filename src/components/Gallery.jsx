import { useState } from 'react';

function Gallery({ item }) {
    const [imageIndex, setImageIndex] = useState(0);
    
    const images = [
        `https://via.placeholder.com/400x300/a0e7e5/ffffff?text=${item.title}+1`,
        `https://via.placeholder.com/400x300/f8b4d8/ffffff?text=${item.title}+2`,
    ];

    const handleNext = (e) => {
        e.stopPropagation();
        setImageIndex((prev) => (prev + 1) % images.length);
    };

    const handlePrev = (e) => {
        e.stopPropagation();
        setImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="item gallery">
            <div className="gallery-main">
                <img src={images[imageIndex]} alt={`${item.title} preview ${imageIndex + 1}`} />
            </div>
            <div className="gallery-sub">
                <button className="gallery-btn" onClick={handlePrev}>←</button>
                <span className="image-counter">{imageIndex + 1}/{images.length}</span>
                <button className="gallery-btn" onClick={handleNext}>→</button>
            </div>
        </div>
    )
}

export default Gallery;