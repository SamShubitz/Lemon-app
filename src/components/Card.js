export default function Card({title, price, description, image}) {
    return (
        <div className="card">
            <img className="card-image" src={image} alt={title} />
            <div className="card-text">
                <div className="card-header">
                <h4 className="card-title">{title}</h4>
                <p className="price">{price}</p>
                </div>
                <p className="card-description">{description}</p>
                <b>Order a delivery</b>
            </div>
        </div>
    );
}