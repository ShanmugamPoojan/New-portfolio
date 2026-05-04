function Card({ item }) {
    return (
        <div className="item">
            <div className="card-content">
                <h2 className="card-title">{item.icon} {item.title}</h2>
                <p className="card-description">{item.description}</p>
                <div className="card-tags">
                    {item.tags && item.tags.map((tag, idx) => (
                        <span key={idx} className="tag">{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Card;