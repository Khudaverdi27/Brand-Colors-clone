import CopyToClipboard from "react-copy-to-clipboard";
import { useMainContext } from "../context/MainContext";
import getContrastYIQ from "../helper";
export default function Brand({ b }) {
  const { selectedBrands, setSelectedBrands, setCopied } = useMainContext();
  const toggleSelected = () => {
    if (selectedBrands.includes(b.slug)) {
      setSelectedBrands(selectedBrands.filter((brand) => brand !== b.slug));
    } else {
      setSelectedBrands([...selectedBrands, b.slug]);
    }
  };

  const setColor = (color) => {
    setCopied(color);
  };

  return (
    <div
      onClick={toggleSelected}
      className={`brand ${selectedBrands.includes(b.slug) ? "active" : ""}`}
    >
      <h5>{b.title}</h5>
      <div className="brand-colors">
        {b.colors.map((color, i) => (
          <CopyToClipboard
            onCopy={() => setColor(color)}
            text={`#${color}`}
            key={i}
            className="colors"
            style={{
              "--bgColor": `#${color}`,
              "--textColor": getContrastYIQ(color),
            }}
          >
            <span>{color}</span>
          </CopyToClipboard>
        ))}
      </div>
    </div>
  );
}
