import { Link } from 'react-router-dom';
import Template from './Template';

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
                <b className="card-bottom-text">Order a delivery</b>
                <Link className="delivery-icon-link" to="/order-online" element={<Template />}>
                    <svg className="delivery-icon" width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.6629 1.72713C14.6629 0.8993 13.9074 0.221985 12.984 0.221985H10.4658V1.72713H12.984V3.72145L10.0628 6.99513H7.10806V3.23227H3.75035C1.89521 3.23227 0.392639 4.57938 0.392639 6.24256V8.50028H2.07149C2.07149 9.74955 3.19633 10.758 4.58978 10.758C5.98322 10.758 7.10806 9.74955 7.10806 8.50028H10.8687L14.6629 4.24825V1.72713ZM4.58978 9.25285C4.12809 9.25285 3.75035 8.91419 3.75035 8.50028H5.4292C5.4292 8.91419 5.05146 9.25285 4.58978 9.25285Z" fill="black"/>
                        <path d="M7.10805 0.974548H2.91092V2.47968H7.10805V0.974548Z" fill="black"/>
                        <path d="M14.6629 6.24255C13.2695 6.24255 12.1446 7.251 12.1446 8.50026C12.1446 9.74952 13.2695 10.758 14.6629 10.758C16.0564 10.758 17.1812 9.74952 17.1812 8.50026C17.1812 7.251 16.0564 6.24255 14.6629 6.24255ZM14.6629 9.25283C14.2012 9.25283 13.8235 8.91417 13.8235 8.50026C13.8235 8.08635 14.2012 7.74769 14.6629 7.74769C15.1246 7.74769 15.5023 8.08635 15.5023 8.50026C15.5023 8.91417 15.1246 9.25283 14.6629 9.25283Z" fill="black"/>
                    </svg>
                </Link>
            </div>
        </div>
    );
}