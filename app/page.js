import dynamic from "next/dynamic";
import Json from "./components/json";
import Property from "./components/property";
import Toolbar from "./components/toolbar";
const Designer = dynamic(() => import("./components/designer"), {ssr: false});

export default function Home() {
  return (
    <main className="flexMain">
        <div className="toolContainer">
          <Toolbar />
        </div>
        <div className="designerContainer">
          <Designer />
          <div className="jsonContainer">
             <Json />
          </div>
        </div>
        <div className="propertyMain">
          <Property />
        </div>
        <div className="mobJson">
             <Json />
        </div>
    </main>
  );
}
