import { useEffect, useState } from "react";
import { useMainContext } from "../context/MainContext";
import { IoLinkOutline } from "react-icons/io5";
import { LuDownload } from "react-icons/lu";
import { MdClose } from "react-icons/md";

function Download() {
  const { selectedBrands, setSelectedBrands, brand } = useMainContext();
  const [downloadUrl, setDownloadUrl] = useState();
  const [cssMethod, setCssMethod] = useState("css");

  let output = "";
  const brandToUrl = (symbol) => {
    selectedBrands.map((slug) => {
      let brands = brand.find((b) => b.slug === slug);

      brands.colors.map((color, key) => {
        output += `${symbol}${slug}-${key}: #${color};\n`;
      });
    });
  };

  useEffect(() => {
    if (selectedBrands.length > 0) {
      switch (cssMethod) {
        case "css":
          output += `:root {\n`;
          brandToUrl("--");
          output += "}";
          break;

        case "scss":
          brandToUrl("$");
          break;
        case "less":
          brandToUrl("@");

          break;
      }

      const blob = new Blob([output]);

      const url = URL.createObjectURL(blob);
      setDownloadUrl(url);
      return () => {
        URL.revokeObjectURL(url);
        setDownloadUrl("");
      };
    }
  }, [selectedBrands, cssMethod]);

  const getLink = () => {
    const defaultValue = `http://localhost:5173/brands/${selectedBrands.join(
      ","
    )}`;
    prompt("Bir değer girin:", defaultValue);
  };
  return (
    <div className="download">
      <div className="actions">
        <select onChange={(e) => setCssMethod(e.target.value)}>
          <option value="css">Css</option>
          <option value="scss">SCSS</option>
          <option value="less">LESS</option>
        </select>
        <a download={`brands.${cssMethod}`} href={downloadUrl}>
          <LuDownload />
        </a>

        <button onClick={getLink}>
          <IoLinkOutline />
        </button>
      </div>
      <div className="selected">
        <button onClick={() => setSelectedBrands([])}>
          <MdClose />
        </button>
        {selectedBrands.length} brands collected
      </div>
    </div>
  );
}

export default Download;
