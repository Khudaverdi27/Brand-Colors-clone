import getContrastYIQ from "../helper";

export default function Brand({ b }) {
    return (
        <div className="brand">
            <h5>{b.title}</h5>
            <div className="brand-colors">
                {b.colors.map(color =>
                    <span className="colors" style={{ '--bgColor': `#${color}`, '--textColor': getContrastYIQ(color) }}>{color}</span>
                )}
            </div>
        </div>
    )
}
